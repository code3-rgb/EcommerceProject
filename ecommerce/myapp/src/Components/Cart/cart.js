import axios from "axios"
import { useEffect, useRef } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Foot } from '../Footer'


const Container = styled.div`

    width: 100%;
    height: auto;
    display: grid;
    justify-content:center;
    

    .products {
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 500px;
        margin: 2rem;

        button {
            border: none;
            font-size: 2rem;
            padding: 1.5rem;
            cursor: pointer;
            background: white;
            
        }
        .buttons {
            border-top: 2px solid black;
            display: flex;
            justify-content: center;


        }

        .quantity{
            display: flex;
            h1 {
                padding: 1rem;
                font-size: 2rem;
            }

    
        }





        .productImg {

            img {
                background-repeat: no-repeat;
                height: 280px;

            }
        }


    }


`


export const Cart = ()=>{

    const [state,setState] = useState([])

    const helper = (id) => {

        return new Promise(resolve=> {

            axios({
                method:"GET",
                url: `https://webby-project.herokuapp.com/getOneProduct/${id}`
            })
            .then(res=> resolve(...res.data))
            .catch(e=> console.log(e.message))

        })


    }

     useEffect(()=>{

        const SessionData = sessionStorage.getItem("productIds")

        if(SessionData === null ) {
            setState(<h1>Session storage is empty</h1>)
            return
        }
        const sessionData = SessionData.split(",")

        for(let id of sessionData) {

            helper(id).then(data=>  setState(prev=> [...prev, data]))

        }

    

    },[])


    // Quantity state
    const totalRef = useRef(null)
    const [quantity,setQuantity] = useState(0)
    const SetQuantity = (total,operator)=>{
        const ref = parseInt(totalRef.current.innerHTML)

        if(operator === '+' || ref <= total)  setQuantity(ref+1)
        if(operator === '-' && ref !==0 )  setQuantity(ref-1)

    }

    //  Delete a Cart
    const deleteCart = (cartId)=>{
        const SessionData = sessionStorage.getItem("productIds")
        const sessionData = SessionData.split(",")

        const len = sessionData.indexOf(cartId)
        sessionData.splice(len,1)
        sessionStorage.setItem("productIds", sessionData)

    }

    const navigate = useNavigate()

    // Place Order
    const placeOrder = (productId,title,price)=>{
            if(quantity === 0) return
            navigate(`/buy/${productId}/${quantity}/${title}/${price}`)
    }


    return (

        <>
        <Container>

            <h1 style={{ textAlign: 'center' }}>This is the Cart page</h1>
            {
               state == []? <h1>Cart is empty</h1> : state.map(val=> {
                    return <div className="products">

                        <div className="productDescription">
                        <h1>Product:{val.title}</h1>
                        <h1>Quantity:{val.quantity}</h1>
                        <h1>Price:{val.price}</h1>

                        </div>

                        <div className="productImg">
                            <img src={ val.url[0] } alt="some Image"></img>
                        </div>

                        <div className="buttons">

                            <button className="btn" onClick={()=> placeOrder(val._id,val.title,val.price)}>Buy</button>
                            <button onClick={()=>deleteCart(val._id)} className="btn">Delete</button>
                            <div className="quantity">
                                <button onClick={()=> SetQuantity(val.total,'+')} >+</button>
                                <h1 ref={totalRef}>{ quantity }</h1>
                                <button onClick={()=> SetQuantity(val.total,'-')}>-</button>
                            </div>

                        </div>

                    </div>
                }) 

            }


        </Container>
        <Foot />
        </>


    )

}