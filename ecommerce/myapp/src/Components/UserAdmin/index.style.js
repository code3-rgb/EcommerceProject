import styled from "styled-components";
import shibaInu3 from '../Images/shiba_inu3.gif'



export const Container = styled.div`
    width: 100%;
    height: auto;
    .nav {
        display: flex;
        justify-content: center;
        list-style: none;
        font-weight: bold;
        font-size: 0.9rem;
        margin-bottom: 1.2rem;
    }
    li {
        margin: 0.2em;
        cursor: pointer;
        position: relative;
        padding: 1rem;
        padding-bottom: 0.3rem;
        transition: 0.2s ease-in;


        &:hover {
            color: grey;
        }

        &::before {
            content: '';
            position: absolute;
            width: 0%;
            height:2px;
            background: grey;
            bottom: 0px;
            border-radius: 5px;
            transition: 0.3s ease-in;
        }
        &:hover:before {
            width: 70%;
        }
    }

    .carousel {
        background: url(${shibaInu3});
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(4, 100vw);
        position: absolute;
        overflow: hidden;

        .box {
            transition: 0.3s ease-in;
            -webkit-transform: translate(${ props=>props.prop });
            -moz-transform: translate(${ props=>props.prop });
            -ms-transform: translate(${ props=>props.prop });
        }

        .misc {

        }

        // Inventories
        .product {

            margin: 0.3rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 1rem;

            .product-desc {
                background: white;
                border-radius: 10px;

            }
            button {
                height: 200px;

            }

            .productImg{
                width: 390px;
                height: 300px;
                border-radius: 10px;
                border: 2px solid white;

                img {
                    width: 100%;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }

            }
            .deleteProduct {
                border: none;
                background: black;
                color: white;
                font-size: 2rem;
                padding: 2rem;
                cursor: pointer;
        }

            @media(min-width: 500px) {
                & {
                    flex-direction: row;
                    gap: 3em;

                    button {
                        align-self: center;
                        margin-left: auto;
                        margin-right: 100px;
                    }
                    .productImg {
                        margin-left: auto;
                    }
                    
                }
            }

        }




    
    }

    @media(min-width: 500px){

        .nav {
            gap: 3rem;
        }

        li {
            font-size: 1.4rem;
        }

    }



`

export const Form = styled.div`

    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding-bottom: 2rem;

    input {
        padding: 2rem;
        cursor: pointer;
    }
    select {
        cursor: pointer;

    }
    button {
        border: none;
        background: grey;
        border-radius: 10px;
        padding: 1rem 2rem 1rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        color: white;
    }    

    @media(min-width: 500px) {



        input {
            padding: 2rem 3rem 2rem 3rem;
            font-size: 1.2rem;
        }
        select {
            cursor: pointer;
            padding: 1rem 2rem 1rem 2rem;
        }
        button {
            padding: 1rem 2rem 1rem 2rem;
            font-size: 1.3rem;
            cursor: pointer;
        }  


`
