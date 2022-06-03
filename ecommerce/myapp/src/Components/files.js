import { useState } from "react"
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height: 100vh;

    .boxes {
        position: relative;
        width: 200px;
        height: 200px;
        border: 2px solid black;
        margin: auto;
        transform: translateY(200px);
        display: grid;
        grid-template-columns: repeat(2,100%);
        overflow: hidden;
    }

    button {
        position: absolute;
        background: transparent;
        top: 40%;

        &:nth-child(2) {
            left: 80%;
        }
    }
   
    }

`
const Box = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,100%);
    translate: ${props=>props.trans};
    transition: 0.3s ease-in;

    .box {
        color: white;
        background: red;
        display: grid;
        place-items: center;
        font-size: 2rem;
    }
    .second {
        background: green;
    }
`

export const SendPic = ()=> {
    const [state,setState] = useState(true)


    const leftClick = ()=>{
        setState(false)
    }
    const rightClick = ()=>{
        setState(true)
    }
    return (

        <Container>

            <div className="boxes">

                <Box trans = {state ? '0': '-100%'} >
                     <div className="box">first box</div>
                     <div className="box second">second box</div>
                </Box>

                <button onClick={leftClick}>left</button>
                <button onClick={rightClick}>right</button>


            </div>


        </Container>

    )



}