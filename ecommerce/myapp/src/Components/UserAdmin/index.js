import {useEffect, useState} from 'react'
import axios from "axios"
import { Container,Form } from './index.style'

import { useNavigate } from 'react-router-dom'




import { storage } from "../Firebase/config"
import { ref,uploadBytes,listAll,getDownloadURL } from 'firebase/storage'







export const UserAdmin = ()=> {



    const [files,setFile] = useState([])
    const [state,setState] = useState({})

    const navigate = useNavigate()

    // File Upload
    const fileCallback = (file,_id)=>{
        const id = _id
        const url = {}
        url['url'] = file
        axios({
            method: 'put',
            url: `https://webby-project.herokuapp.com/productUrl/:${id}`,
            data: url
        })
        .then(res=>alert(res.data))
    }

    const onFileChange = (e)=>{
        setFile(prev=>([...prev,...e.target.files]))
    }

    const onChange = (e)=>{
        const { name,value } = e.target
        setState(prev=> ({...prev,[name]: value }))
        // Get the token and send it to server , token is the sellerId
        const sellerId = sessionStorage.getItem('token')
        setState(prev=>({ ...prev,['sellerId']:sellerId }))

    }
    const onClick = (e)=> {
        
        if(state['title'] === undefined || state['price'] === undefined || state['desc'] === undefined || state['quantity'] === undefined) {
            alert('Empty values not allowed!')
            return
        }

        
        const response = axios({
            method: 'post',
            data: state,
            url: 'https://webby-project.herokuapp.com/product'
        })
        response.then(async res=> {

            for(let file in files) {
                const imageRef = ref(storage, `products/${ res.data }/${ files[file].name  }`)
                await uploadBytes(imageRef, files[file]).then(()=>console.log("Product image being uploaded!"))
            }

            // Product Id
            const id  = res.data 

            const imageListRef = ref(storage, `products/${id}`)
            await listAll(imageListRef)
            .then(res=> {
                res.items.forEach((item)=>{
                    getDownloadURL(item).then(url=>{    fileCallback(url,id)   })
            })
        })

        })
    }
    const [trans,setTrans] = useState('0%')

    const [products,setProducts] = useState([])
    // Set axios to get all the Products
    useEffect(()=>{

        const token = sessionStorage.getItem('token')
        console.log(token)

        axios({
            method: 'get',
            url: `https://webby-project.herokuapp.com/getProducts/${sessionStorage.getItem('token')}`
        })
        .then(res=> {
            setProducts(res.data)
        })
        .catch(e=> console.log(e.message))
    },[])
    
    useEffect(()=> {
        console.log(products)
    }, [products])



    const [refresh,setRefresh] = useState(true)
    useEffect(()=>{console.log('refreshed')}, [refresh])
    // Delete a product
    const deleteProduct = async (id)=>{

       await axios({
            method:'get',
            url: `https://webby-project.herokuapp.com/deleteProduct/${ id }`
        })
        .then(res=> alert(res.data))
        .catch(e=> alert(e.message))
    

        setRefresh(!refresh)
    }

       return (


        <Container prop={ trans } >

            <div className='nav'>
                    <li onClick={()=>setTrans('-0%')} >Upload</li>
                    <li onClick={()=>setTrans('-100%')}>Orders</li>
                    <li onClick={()=>setTrans('-200%')}>Profile</li>
                    <li onClick={()=>setTrans('-300%')}>Inventories</li>
            </div>
            {/* Carousel */}
            <div className='carousel'>

                <Form className='box'>

                    <input placeholder='Title'  name='title' required onChange={onChange}/>
                    <input placeholder='Price' name='price' onChange={onChange}/>
                    <input placeholder='Description' name='desc' onChange={onChange}/>
                    <input placeholder='Quantity' name='quantity' onChange={onChange}/>
                    <select id="cars" name="category"  onChange={onChange}>
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                    <option value="furniture">furniture</option>
                    <option value="baby">baby</option>
                    <option value="groceries">groceries</option>
                    <option value="toys">toys</option>
                    <option value="beauty">beauty</option>
                    <option value="book">book</option>
                    <option value="sports">sports</option>
                    <option value="men_clothing">men clothing</option>
                    <option value="female_clothing">female clothing</option>
                    </select>
                    <input type='file' onChange={onFileChange} multiple />

                    <button onClick={ onClick }>Submit</button>

                </Form>

                <div className='orders box'>

                    

                </div>

                {/* Delete Box */}
                <div className='delete box'>
                    <h1>Delete</h1>
                </div>

                {/* Misc Box */}
                <div className='misc box'>

                    {

                        products.map(val=> <div className='product'>
                            
                            <div className='product-desc'>

                            <h1>Title: { val.title }</h1>
                            <h1>Category: { val.category }</h1>
                            <h1>Quantity: { val.quantity }</h1>
                            <h1>Price: { val.price }</h1>
                            <h1>Description: { val.description }</h1>

                            </div>

                            <div className='productImg' >
                                <img src={ val.url[0] }></img>
                            </div>
                            <button onClick={()=>deleteProduct(val._id)} className='deleteProduct'>Delete</button>
                        </div> )

                    }

                </div>


            </div>


        </Container>



    )


}