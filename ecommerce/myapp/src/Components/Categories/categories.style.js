import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(2, 150px);
    padding-top: 2rem; 
    padding-bottom: 2rem; 
    justify-content: center;

    p {
        display: flex;
        height: 100px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border: 2px solid green;

    }

    @media(min-width: 650px) {
        grid-template-columns: repeat(3, 200px);
        gap: 2.5rem;

    }


`