import styled from "styled-components"
import { BiArrowToTop } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"

const Footer = styled.div`


    background: #111111;
    h2 {
        color: #ffffff;
        text-decoration: underline 2px solid black;
        text-align: center;
    }
    ul {
        font-size: 1.2rem;
        list-style: none;
        cursor: pointer;
        display: flex;
        justify-content: center;




        li {
            color: #ffffff;
            padding: 2rem;

            &:hover {
                transition: 0.3s ease-in;
                background: #ffffff;
                color: #111111;
                border-radius: 10px;

            }
        }

        @media(min-width: 1000px) {
            & {
                font-size: 2rem;

                li {
                    margin: 2rem;
                }
            }

        }

    }

    button {
        width: 100%;
        border: none;
        background: #f5f5f5;
        color: #111111;
        padding: 1rem;
        font-size: 3rem;
        cursor: pointer;


        .top-icon {
            animation: float 2s infinite;
        }

        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(0px);
            }
        }

    }

`





export const Foot = ()=>{

  
    const navigate = useNavigate() 

    const goAdmin = ()=>{
        const token = sessionStorage.getItem('token')

        if(token !== null) {
            navigate('/master')
        } else {
            alert('You need to Sign-In or Sign-Up! To be An Admin!')
        }

    }

    return (

        <Footer>
            {/* Top Scroll */}
            <button onClick={
                ()=> {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })

                }

            }>
                <BiArrowToTop className="top-icon"/>
            </button>

            <h2>
                National Institute of Electronics & It
            </h2>
            <h2>
                Project Ecommerce 2022 
            </h2>
        

            <ul>
                <li onClick={()=>navigate('/about')}>About</li>
                <li onClick={goAdmin}> Admin Privelege </li>

            </ul>


        </Footer>

    )

}