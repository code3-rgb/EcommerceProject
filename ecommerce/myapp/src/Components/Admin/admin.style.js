import styled from "styled-components"


export const Container = styled.div`

    padding: 1em;
    width: 100%;
    height: auto;
    display: grid;
    gap: 1em;
    place-content: center;
    grid-template-columns: repeat(1, 300px);

    .box {
        // background: lightgreen;
        border: 3px solid lightgreen;
        border-radius: 10px;
        height: 170px;
        z-index: 10;

        display: flex;

        ul {
            background: whitesmoke;
            padding: 0.4rem;
            margin: 0;
            width: 50%;
            font-size: 15px;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
        }

        li {
            list-style: none;
            font-weight: bold;
            display: flex;
            color: black;
            margin: 0.3rem 0 0.4rem 0;
            
            .buttons {
                margin-left: 10px;
                button {
                    border: none;
                    background: grey;
                    border-radius: 5px;
                    color: whitesmoke;
                    &:hover {
                        transition: 0.3s ease-in;
                        cursor: pointer;
                        background: rgb(0,0,0,.3);
                    }
                }
                button:nth-child(even) {
                    margin-left: 3px;
                }
            }
        }


    }

    @media(min-width: 730px) {
        &{
         grid-template-columns: repeat(2, 300px);
        }
   }

   @media(min-width: 1000px) {
    &{
     grid-template-columns: repeat(3, 300px);
    }
}

`

export const Logo = styled.div`
    width: 50%;
    height: 100%;
    background: url(${props=>props.url});
    background-repeat: no-repeat;
    background-postion: center;
    background-size: 90%;



`