import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Foot } from '../Footer'

import { Container } from './order.style'



export const Order = ()=>{

    const [state,setState] = useState([])

    useEffect(()=>{

        const token = sessionStorage.getItem('token')

        axios({
            method: 'get',
            url: `https://webby-project.herokuapp.com/getOrder/${token}`,
        })
        .then(vals=>{
            setState(vals.data)
        })
        .catch(e=> alert(e.message))

 
    
    }, [])

    const deleteOrder = (id)=>{

        axios({
            method:'get',
            url: `https://webby-project.herokuapp.com/deleteOrder/${id}`
        })
        .then(val=> alert(val.data))
        .catch(e=> alert(e.message))

    }

    return (
        <>

            <Container>


             

                {

                    state.map(val=> {
                        return <div className='box'>
                            <div className='address'>
                                <h1>Address: { val.address }</h1>
                                <h1>Zip Code: { val.zip_code }</h1>
                            </div>
                            <div className='credential'>
                                <h1>Payment Type: { val.payment_method } </h1>
                                <h1>Product: {val.title}</h1>
                                
                                <h1>Quantity: { val.quantity }</h1>
                                <h1>Price: {val.price}</h1>
                            </div>
                            <div className='buttons'>
                                 <button onClick={()=> deleteOrder(val._id) }>Delete</button>
                            </div>
                        </div>
                    })

                }

              


            



            </Container>

            <Foot />
        </>
    )
}