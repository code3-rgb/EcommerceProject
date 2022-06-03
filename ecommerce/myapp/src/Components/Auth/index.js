import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { useRef } from "react"

import { Modal } from "./model.style"

import { storage } from "../../Components/Firebase/config"
import { ref,uploadBytes,getDownloadURL,listAll } from 'firebase/storage'

import { Container,Form } from "./index.style"

import { GoHome } from 'react-icons/go'



export const Auth = ()=>{
 
 
// Navigate to another page
const navigate = useNavigate()







// Scroll Function
const [state,setState] = useState(true)
const left = (e)=>{
    e.preventDefault()
    setState(false)
}
const right = (e)=>{
    e.preventDefault()
    setState(true)
}
 
// Modal password is done over here
const [hide,setHide] = useState(false)

const hideRef = useRef()

let storeEmail = {}

const setChange = (e)=>{
    const { name,value } = e.target
    storeEmail[name] = value
}
const emailRef = useRef(null)
const setClick = ()=>{

    const response = axios({
        method: 'post',
        data: storeEmail,
        url: 'https://webby-project.herokuapp.com/forgotPassword'
    })
    response.then(res=>alert(res.data))
    .catch(e=>{
        alert(e.message)
    })
    emailRef.current.value = ""
    hideRef.current.style.display = 'none'
    setHide(!hide)
}



const Login = ()=>{



    let stateLogin = {}
    const setLogin = ()=>{
        const response = axios({
            method: 'post',
            url: 'https://webby-project.herokuapp.com/login',
            data: stateLogin,
        })
        response.then(res=>{
            if(res.data === 'no-user') {
                alert('User does not exist! Or password/email incorrect')
                return 
            }
            else if(res.data === 'incorrect')     {
                alert('Password Incorrect')
                navigate('/auth')
                return
            }
            else {
                stateLogin = {}

                sessionStorage.clear()
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('username',res.data.name)
                sessionStorage.setItem('image',res.data.url)
                sessionStorage.setItem('isAdmin', res.data.isAdmin)
                navigate('/')
                return
            }
            
        }).catch(e=>{
            console.log(e.message)
        })


    }
    const onChange = (e)=>{
        const { name,value } = e.target
        stateLogin[name] = value
    }

    return (

        <div className="form">
        <label for="email">Email</label>
        <input placeholder="email" name="email" type="email" onChange={onChange} required />
        <label for="password">Password</label>
        <input placeholder="password" name="password" type="password"   onChange={onChange} required  />
        <div className="buttons"> 
                <button onClick={setLogin}>Login</button>
                <button onClick={right}>Register Instead</button>  
                <h4 onClick={()=> setHide(!hide)}>Dog ate password?!</h4>  
        </div>    

        </div>

    )
}



// Firebase Upload 
// Login avatar will be saved from this function
let imageUpload
const setImageUpload = (file)=>{
    imageUpload = file
}


const uploadImage = async (token)=>{
        console.log('image upload is running')
        if(imageUpload === null)    return
        console.log(imageUpload)

       const imageRef = ref(storage, `avatar/${ token }/${ imageUpload.name  }`)
       await uploadBytes(imageRef, imageUpload).then(()=>alert('Image uploaded'))

       const imageListRef = ref(storage, `avatar/${ token }`)
        const url = new Promise((resolve,reject)=>{
            listAll(imageListRef)
            .then(res=> {
              res.items.forEach(item=>{
                 getDownloadURL(item).then(url=>{
                     resolve(url)
                 })
              })
           })
           
        })

        return await url

    }
// Registration funda going on 

const Register =  ()=>{

let stateRegister = {}


const setRegister = async ()=>{

    try {
        // stateRegister['url'] = await uploadImage()
        // console.log(stateRegister['url'])

        const response = await axios({
            method: 'post',
            url: 'https://webby-project.herokuapp.com/register',
            data: stateRegister,
        })   
        if(response.data === 'no-user') {
            alert('User does not exist! Register Please')
            return 
        }
        

        const { name,token,id,isAdmin } = response.data
        console.log(`name: ${name} token: ${token} url: ${id}`)


        const image = uploadImage(token)
        image.then(url=>{
         
            sessionStorage.clear()
            sessionStorage.setItem('image',url)
            sessionStorage.setItem("token",token) 
            sessionStorage.setItem('username',name)
            sessionStorage.setItem('isAdmin',isAdmin)

            stateRegister = {}

            const link = {}
            link['url'] = url
            link['id']  = id

            const response = axios({
                method: 'post',
                url: 'https://webby-project.herokuapp.com/setImageUrl',
                data: link
            })
            response.then(res=>{
                console.log(res.data)
                navigate('/')
            })
            .catch(e=>{
                console.log(e.message)
            })

        })


    } catch(e) {
        console.log(e.message)
        return
    }


}


const onChange = (e)=>{
    const { name,value } = e.target
    stateRegister[name] = value
}


return (
    <div className="register form">
    <label for="username">Username</label>
    <input placeholder="NickName 4-6 character" name="name" type="text" onChange={onChange}/>
    <label for="email">Email</label>
    <input placeholder="Email" name="email" type="email"  onChange={onChange}/>
    <label for="password">Password</label>
    <input placeholder="Password" name="password" type="password" onChange={onChange}/>
    <input type="file" val='' onChange={e=>{ setImageUpload(e.target.files[0]); } } />
    
    <div className="buttons">
        <button onClick={setRegister}>Submit</button>
        <button onClick={left}>Login Instead</button>
    </div>
    </div>


    )
}


 

    return (
    
    <Container >


    


    <div className="bg">
        <div className="shape"></div>
    <div className="form-box">
        

    <Modal ref={hideRef}  style={ hide ? {display: 'block'} : {display: 'none'} }>
            <input placeholder="Email" name="email" ref={emailRef} onChange={setChange} required/>
            <button onClick={setClick}>Submit</button>
    </Modal>

    <Form trans = {state ? '0': '-100%'}>
        <GoHome style={{ position: 'fixed',cursor: 'pointer' }} className='home' onClick={()=>navigate('/')} />
        {/* register */}
        <Register />
        {/* login */}
        <Login />



    </Form>
    </div>
    </div>






    </Container>
        
    )
}