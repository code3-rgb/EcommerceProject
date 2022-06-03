import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Container,Logo } from './admin.style'

import { v4 } from 'uuid'




export const Admin = ()=> {

    let navigate = useNavigate()

    const [state,setState] = useState([])

    useEffect(()=>{
        const response =  axios({
            method: 'get',
            url: 'https://webby-project.herokuapp.com/getAllUser'
        })

        response.then(val=> val.data.map(vals=> setState(prev=>[...prev,vals])))


    },[])

    const [admin,setAdmin] = useState(false)

    const adminSet = (id,bools)=> {
        const Obj = {
            id: id,
            bools: bools
        }  


        const response = axios({
            method: 'post',
            url: 'https://webby-project.herokuapp.com/setAdmin',
            data: Obj
        })
        response.then(res=>{
            console.log(res.data)
        })
        .catch(e=>console.log(e.message))
        setAdmin(!admin)
    }


    const SelectBox = (props)=>{

        return (

            <div className="buttons">
            <button onClick={ ()=>adminSet(props.id,true) }>Yes</button>
            <button onClick={()=>adminSet(props.id,false) } >No</button>
            </div>

        )
    }



    const displayUser = ()=>{

        return state.map(val=><div className="box">

        <Logo url={ val.url } />
        <ul>

            <li key={ v4() } > Name:{ val.name }</li>
            <li key={ v4() }> { val.email } </li>
            <li key={ v4() }> Since: { val.createdAt.substr(0,9) }  </li>

            <li key={ v4() }> isAdmin: { val.isAdmin.toString() } </li>

            <li key={ v4() }>Admin: <SelectBox id={val._id} /> </li>


        </ul>


    </div>

    )
}





    return (



     <>
     

     
   <h1 style={{ fontSize: '3rem',color: 'lightgreen', textAlign: 'center', padding: '2rem', background: 'grey' }} > Admin Maker </h1>
   <Container>



            {
                displayUser()
            }









        </Container>


     
     
     </>




    )

}