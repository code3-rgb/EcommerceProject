import styled from "styled-components"

import { useNavigate } from "react-router-dom"

import { Foot } from '../Footer'

import {FaMale,FaFemale} from 'react-icons/fa'


const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;


    div {
        width: 150px;
        width: 150px;
        border: 2px solid black;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 8rem;

    }

    @media(min-width: 600px){
        div {
            width: 300px;
            height: 300px;
            font-size: 9em;
            margin: 2rem;


        }
    }

`

export const Apparel = ()=>{
    const navigate = useNavigate()

    return (

        <>
        
        <Container >

        <div onClick={()=> navigate('/MenCloth')} >
            <FaMale className="icon"/>
        </div>
        <div onClick={()=> navigate('/FemaleCloth')} >
            <FaFemale className="icon" />
        </div>

        </Container>

        <Foot />

        </>

    )

}