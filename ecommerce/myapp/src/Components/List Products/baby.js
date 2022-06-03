import { Container } from "./Container.style"

import { Foot } from '../Footer'
import { useEffect,useState } from "react"
import axios from "axios"

import { FiShoppingCart } from 'react-icons/fi'



export const Baby = ()=>{




const [state,setState] = useState([])

    useEffect(()=> {

    axios({

        method: 'get',
        url: 'https://webby-project.herokuapp.com/getCategory/baby'

    })
    .then(val=> setState(val.data))
    .catch(e=> alert(e.message))


    },[])


      // Add To Cart

      const addToCart = (id)=>{

        const token = sessionStorage.getItem("token")
        if(token === null) {
            alert("Sign In Required To use Cart!")
            return
        }
        const productIds = sessionStorage.getItem("productIds")

        if(productIds !== null) {
            
            const products = productIds.split(",")

            if(productIds.indexOf(id) < 0) {

                sessionStorage.setItem("productIds", [products,id])

            }   else {
                alert("You can't insert Duplicate items")
            }


        }   
        if(productIds === null) {
             sessionStorage.setItem("productIds", [id])

            }

    }

    return (

        <>
        
        <Container>

            {

                state.map(val=> {
                    return<div className="product">
 
                    <div className="productImg" >
                        <img src={ val.url } alt="product-image"></img>
                    </div>
                    <div className="productInfo">
                        <h3> Description:{ val.description }</h3>
                        <h3>Price: { val.price }</h3>
                        <h3>Product: { val.title }</h3>
                        <button onClick={()=>addToCart(val._id)} className="cart-btn"><FiShoppingCart /></button>
                    </div>


                    </div>
                })

            }


        </Container>
        <Foot />

        </>

    )

}