import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Products } from "./index.style"

import { FiShoppingCart } from 'react-icons/fi'
import { Foot } from '../Footer'


export const AllProducts = () => {


    const [products,setProducts] = useState([])



    useEffect(()=>{
        
        axios({
            method: 'get',
            url: 'https://webby-project.herokuapp.com/getAllProducts'
        })
        .then(res=> {
            setProducts(res.data)
        })
        .catch(e=>{
            console.log(e.message)
        })

    }, [])

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
        <Products>


            {
                products.map(val=> <div className="product">

                    <div className="productImg" >
                        <img src={ val.url } alt="product-image"></img>
                    </div>
                    <div className="productInfo">
                        <h3> Description:{ val.description }</h3>
                        <h3>Price: { val.price }</h3>
                        <h3>Product: { val.title }</h3>
                        <button onClick={()=>addToCart(val._id)} className="cart-btn"><FiShoppingCart /></button>
                    </div>


                </div>)
            }



        </Products>
        <Foot />
        </>
    )

}