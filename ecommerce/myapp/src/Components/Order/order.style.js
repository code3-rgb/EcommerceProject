import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    display: grid;
    justify-content: center;
    gap: 1rem;

    @media(min-width: 1000px) {
        grid-template-columns: repeat(2,400px);
        gap: 2rem;
        padding: 2rem;
    }
    @media(min-width: 1500px) {
        grid-template-columns: repeat(3,400px);
    }



    .box {
        width: 400px;
        height: 400px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

        .order_info {
            padding: 1rem;
        }
        .product_info {
            .product_desc {
                padding: 1rem;
            }
            .product_img {
                width: 100%:
                img {
                    background-size: cover;
                }
            }
        }

    }

    .buttons {
        width: 100%;
        padding: 1rem;
        display: grid;
        justify-content: center;

        button {
            color: white;
            border: none;
            background: green;
            font-size: 2rem;
            border-radius: 5px;
            padding: 0.3rem;
            cursor: pointer;


        }
    }

`