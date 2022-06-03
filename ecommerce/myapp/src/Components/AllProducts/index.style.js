
import styled from "styled-components"



export const Products = styled.div`


    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 400px);
    gap: 5rem;
    padding: 3rem;


    .product {
        display: grid;
        grid-template-columns: repeat(1, 400);
        height: 450px;
        cursor: pointer;



    }

    .cart-btn {
        border: none;
        cursor: pointer;
        background: black;
        color :white;
        font-size: 2rem;
        border-radius: 10px;
    }



    .productImg {

        border: 2px solid black;

        img {
            width: 100%;
            height: 300px;


        }

    }
    .productInfo {
        display: flex;
        flex-direction: column;
        h3 {
            padding: 0.3rem;
        }
    }



    @media(min-width: 800px) {
        grid-template-columns: repeat(2, 350px);
    }
    @media(min-width: 1250px) {
        grid-template-columns: repeat(3, 380px);
    }
    @media(min-width: 1500px) {
        grid-template-columns: repeat(4, 380px);
    }

`