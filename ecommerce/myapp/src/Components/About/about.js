import styled from "styled-components"
import logo from '../Images/jstme.jpg'


const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: whitesmoke;


    .about_me {



        display: flex;
        justify-content: center;
        border: 2px solid black;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;

        width: 400px;
        height: 500px;

        .image {
            border: 2px solid black;
            padding: 0;
            border-radius: 50%;
            


            img {
                background-size: cover;
                width: 200px;
                padding: 0;
                border-radius: 50%;

                margin: 0;
            }
        }


    }

`

export const About = ()=>{

    return (

        <Container>

            <div className="about_me">

                <span className="image">

                    <img src={logo}></img>

                </span>
                <div className="desc">

                    <h1>NIELIT</h1>
                    <h2>Project Guide: Miss.Nindevita</h2>
                    <h2>Author: Mhontsen Shitiri</h2>
                    <h2>BCA Final Semester 2022</h2>

                </div>


            </div>

        </Container>

    )

}
