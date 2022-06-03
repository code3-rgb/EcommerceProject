
import styled from "styled-components"


export const Modal = styled.div`
    background: brown;
    position: absolute;
    max-width: 230px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: 40%;
    left: 3px;
    z-index: 10;
    padding: 2rem;
    input {
        width: 90%;
        border: none;
        border-radius: 5px;
        padding: 1em 1rem 1em 1em;

        &::placeholder {
            color: rgb(60, 60, 60);
        }
    }
    button {
        width: 200px;
        border: none;
        background: orange;
        color: rgb(60, 60, 60);
        padding: 0.5rem 0 0.5rem 0;
        border-radius: 5px;
        margin-left: 18px;
        margin-top: 1rem;
        font-size: 1.2rem;
        background: rgb(210, 210, 210);
        cursor: pointer;

        &:hover {
            transition: 0.3s ease-in;
            color: rgb(240, 240, 240);
            background: rgb(210, 210, 210);

        }
    }
`