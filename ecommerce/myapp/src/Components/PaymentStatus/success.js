import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import cat from '../Images/cat.gif'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background: url(${ cat });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        font-size: 3rem;
        color: white;
    }


    .box {
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;



        button {
            margin: 1rem;
            padding: 1.3rem;
            font-size: 1.3rem;
            color: white;
            background: green;
            border: none;
             &:hover {
                 transition: 0.3s ease-in;
                 border-radius: 20px;
                 cursor: pointer;
             }
        }

    } 
`

export const Success = ()=>{

    let navigate = useNavigate()
    return(
        <Container>

            <div className="box">
                <h1>Order Placed!</h1>
                <button onClick={()=> navigate('/order')}>Go To Order</button>
            </div>


        </Container>
    )

}