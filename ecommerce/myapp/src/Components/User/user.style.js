import styled from "styled-components";



export const Container = styled.div`
    background-repeat: none;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;

    .user-box {
        background: white;
        -webkit-transform: translateY(120px);
        margin: auto;
        display: flex;
        border-radius: 10px;
        flex-direction: column-reverse;
        margin-bottom: 100px;
        max-width: 700px;
        
        button {
            cursor: pointer;
            border: none;
            width: 100%;
            font-size: 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;


        }

        h1 {
            border-radius: 10px;
            text-align: center;
            padding: 1rem;
        }
    }

    .logo {
        min-width: 300px;
        min-height: 300px;
        border-radius: 10px;
    }
     
    @media(min-width: 800px) {
        .user-box {
            flex-direction: row-reverse;
        }
    }

`