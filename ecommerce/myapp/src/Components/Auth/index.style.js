import styled from "styled-components";

import doge1 from '../Images/doge1.png'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    font-size: 1.7rem;
    display: grid;
    place-items: center;
    place-content: center;

    .bg {
        position: relative;
        .shape {
            border-radius: 50%;
            position: absolute;
            height: 130px;
            width: 130px;
            background: url(${doge1});
            background-size: cover;
            opacity: 0.9;
            bottom: 30px;
            left: 80px;
        }


    }

    .form-box {
        width: 300px;
        border-radius: 10px;
        overflow: hidden; 

    }

    }


`

export const Form = styled.div`

    .home {
        left: 70%;
        top: 10px;
        z-index: 1;
        color: white;
        font-size: 3rem;
    }

    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,100%);
    transition: 0.3s ease-in;
    -webkit-transform: translate(${ props=>props.trans });
    position: relative;
    .form {


        background-color: rgba(255,255,255,0.13);
        border-radius: 10px;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255,255,255,0.1);
        box-shadow: 0 0 40px rgba(8,7,16,0.6);
        padding: 40px 30px;
        color: #ffffff;
        letter-spacing: 0.5px;
        outline: none;
        border: none;

        label{
            margin-top: 30px;
            font-size: 16px;
        }
        input {
            width: 90%;
            color: rgb(180, 180, 180);
            padding: 1rem 0 1rem 0.3rem;
            background-color: rgba(255,255,255,0.07);
            border: none;
            border-radius: 3px;
            margin-top: 8px;
            font-size: 14px;
            &::placeholder {
                color: rgb(240, 240, 240);
            }
        }


        button{
            margin-top: 1.3em;
            width: 90%;
            background-color:rgb(240, 240, 240);
            color: rgb(60, 60, 60);
            padding: 1rem 0;
            font-size: 1rem;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            &:hover {
                transition: 0.3s ease-in;
                color: grey;
            }
        }

        h4 {
            width: 90%;
            color: rgb(240, 240, 240);
            text-align: center;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 3rem;
            padding: 0.3rem 0 0.3rem 0;
            text-decoration: 2px solid white underline;


            &:hover {
                transition: 0.3s ease-in-out;
                color: rgb(210, 210, 210);
                background-color: rgba(255,255,255,0.07);
            }
        }
    }

`