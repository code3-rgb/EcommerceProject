import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

import { FaRegCreditCard } from 'react-icons/fa'
import { FiCreditCard } from 'react-icons/fi'
import { useState } from "react"


const Container = styled.div`

    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: repeat(2,100vw);
    overflow: hidden;

    .carousel {
        transition: 0.3s ease-in;
        -webkit-transform: translate(${ props=>props.prop });
        -moz-transform: translate(${ props=>props.prop });
        -ms-transform: translate(${ props=>props.prop });
    }

    .address {
        display: grid;
        justify-content: center;
    }

    .address-space {
        align-items: center;
        .address-input {
            display: flex;
            flex-direction: column;
            input {
                padding: 1rem;
                border-radius: 10px;
                outline: none;
                border: 2px solid black;
                cursor: pointer;
            }
            label {
                font-size: 1.5rem;
                padding: 0.7rem;
            }
        }
    }

    .payment-space {
        width: 100%;
        height: 100vh; 
        display: grid;
        justify-content: center;
    }


    .payment-form {
        background: whitesmoke;
        border-radius: 10px;
        border-radius: 10px;

        
        width: 410px;
        border: 2px solid black;
        @media(min-width: 800px) {
            width: 800px;
            padding: 2rem;
        }

        .payment-method {
            margin: 3rem;


            input {
                cursor: pointer;
            }

            .box {
                display: flex;
                label {
                    padding: 1rem;
                    display:flex;
                    gap:1rem;
                    font-size: 2rem;
                }
            }
        }
    }

    .credentials {

        display: grid;
        grid-template-columns: repeat(1,300px);
        justify-content: center;

        .credential-input {
            display: flex;
            flex-direction: column;
            input {
                padding: 1rem;
                border-radius: 10px;
                outline: none;
                border: 2px solid black;
                cursor: pointer;
            }
            label {
                font-size: 1.5rem;
                padding: 0.7rem;
            }
        }

        @media(min-width: 800px) {
              grid-template-columns: repeat(2,350px);
              gap: 2rem;
        }


    }

    .checkout {
        border-top: 1px solid grey;
        padding: 1rem;
        display: grid;
        justify-content: center;
        button {
            padding: 1rem;
            font-size: 1.3rem;
            margin-bottom: 1rem;
            width: 200px;
            color: white;
            background: #18bd5b;
            border: none;
            border-radius: 5px;
            cursor: pointer;


        }
    }
    

    @media(min-width: 800px) {
        align-items: center;
    }


`

let Order = []

export const Buy = ()=>{

    let navigate = useNavigate()

    const { id,total,title,price } = useParams()
    console.log(title)
    const [trans,setTrans] = useState(0)

    let order = {}
    const onChange = (e)=>{
        const { name,value } = e.target
        if(value === '')    return 
        order[name] = value
    }

    const setOrder = ()=>{
        Order.push(order)
        console.log(Order)
    }


     const checkout = async ()=>{

        const sessionData = sessionStorage.getItem('productIds')
        const session = sessionData.split(',')
        session.splice(session.indexOf(id),1)
        sessionStorage.setItem('productIds', session)

        // Set the id and the total
        const userId = sessionStorage.getItem('token')

        order['productId'] = id
        order['quantity'] = total
        order['user_id'] = userId
        order['title'] = title
        order['price'] = price

        setOrder()
        await axios({
            method:'POST',
            url: 'https://webby-project.herokuapp.com/setOrder',
            data: Order
        })
        .then(val=> alert(val.data))
        .catch(e=> alert(e.message))

        const data = {
            productId: id,
            quantity: total
        }

        await axios({
            method:'POST',
            url: 'https://webby-project.herokuapp.com/payment',
            data: data
        })
        .then(val=> navigate('/success'))

    }




    return (

        <>

            <Container prop={ trans }>

                {/* Actual Address Space */}

                <div className=" carousel address">

                    <div className="address-space payment-form">


                        <div className="credentials">

                        <div className="address-input">
                            <input  onChange={onChange} name="address" maxLength="10" placeholder="address"/>
                            <label>Address</label>
                        </div>
                        <div className="address-input">
                            <input  onChange={onChange} name="zip_code" maxlength="6" placeholder="zip-code"/>
                            <label>Zip-Code</label>
                        </div>
                        <div className="address-input">
                            <input  onChange={onChange} name="phone_no" maxlength="10" placeholder="phone-no" />
                            <label>Phone-No</label>
                        </div>

                        </div>



                        <div className="checkout">
                          <button onClick={()=> {setTrans('-100%'); setOrder(); }}>Go To Payment</button>
                        </div>

                    </div>

                </div>

                {/* Actual Payment Space */}

                <div className="payment-space carousel">

                <div className="payment-form">
                    
                    <div className="payment-method">
                        <h2>Payment Methods</h2>
                        <div className="box">
                        <input name="payment_method" onChange={onChange} type="checkbox" value="debit" />
                        <label><div><FiCreditCard /></div>Debit</label>
                        </div>

                        <div className="box">
                        <input name="payment_method" onChange={onChange} type="checkbox" value="credit" /> 
                        <label><div><FaRegCreditCard/></div>Credit</label>
                        </div>

                    </div>

                    <div className="credentials">

                        <div className="credential-input">
                        <input name="firstname" onChange={onChange} placeholder="" />
                        <label>FirstName</label>
                        </div> 

                        <div className="credential-input">
                        <input name="lastname" onChange={onChange} placeholder="" />
                        <label>LastName</label>
                        </div>

                        <div className="credential-input">
                        <input name="card_no" onChange={onChange}  type="number"   maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />
                        <label>Card No</label>
                        </div>

                        <div className="credential-input">
                        <input name="cvc" onChange={onChange} placeholder="xxx" maxlength="3" />
                        <label>CVC</label>
                        </div>

                        <div className="credential-input">
                        <input name="card_expiration" onChange={onChange} placeholder="MM/YY" />
                        <label>Card Expiration</label>
                        </div>


                    </div>

                    <div className="checkout">
                         <button onClick={ checkout }>Checkout</button>
                         <button onClick={ ()=> setTrans(0) } > Back</button>
                    </div>

                </div>
                </div>


            </Container>
        
        </>

    )

}