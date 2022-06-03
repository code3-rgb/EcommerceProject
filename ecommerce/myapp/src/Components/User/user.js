import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from './user.style'

import shibaInu1 from '../Images/shiba.gif'


export const User = ()=>{

    const navigate = useNavigate()


    const [state,setState] = useState('')

    useEffect(()=>{

        const token = sessionStorage.getItem('token')

        axios({
            method: 'get',
            url: `https://webby-project.herokuapp.com/getUser/${token}`,
        })
        .then(res=> {
            setState([res.data])
            if(sessionStorage.getItem('isAdmin') !== res.data.isAdmin) {
                sessionStorage.setItem('isAdmin', res.data.isAdmin)
            }
        })

    }, [])




    


    return (

        <Container style={{ background: `url(${shibaInu1})` }}>


                {
                    state === '' ? <h1>pls wait </h1> : state.map(val=> <div className="user-box">

                        <div className="user-details" >
                            <h1>{ val.name }</h1>
                            <h1>{ val.email }</h1>
                            <h1>Since: { val.createdAt.substr(0,9) }</h1>
                            <h1>Admin: { val.isAdmin.toString() }</h1>
                            <button onClick={()=>{

                                const admin = sessionStorage.getItem('isAdmin')
                                console.log(admin)

                                if(admin === 'true')   {
                                    navigate('/userAdmin')
                                }
                                else {
                                    alert('You are not an admin')
                                }

                            }} > Go To Admin </button>

                        </div>
                        <div className="logo"  style={
                            {   

                                background: `url(${val.url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '65%',
                                backgroundPosition: 'center'

                            }
                        }>
                        </div>    

                    </div> )
                }





        </Container>


    )
}