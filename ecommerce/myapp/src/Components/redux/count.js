import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { actions } from '../../store/index'


const Container = styled.div`
    max-width: 300px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin: 2px;
    h2 {
        color: orange;
        text-align: center;
        text-decoration: 2px solid black underline;
    }

    form {
        width: 95%;
        align-self: center;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        input {
            border-top: none;
            border-left: none;
            border-right: none;
            color: purple;
            border-bottom: 2px solid grey;
        }
        button {
            max-width: 100px;
            align-self: center;
            border: none;
            font-size: .8rem;
            background: grey;
            border-radius: 2px;
            color: white;
            margin: 2px 0 2px 0;
        }
    }
`


export const Count = ()=>{
    const nameRef = useRef('')
    const dispatch = useDispatch()
    const {firstName,lastName,age} = useSelector((state)=> state)

    const onSubmit = (e)=>{
        e.preventDefault()

        dispatch(actions.addName({ firstName: e.target[0].value ,lastName: e.target[1].value ,age: e.target[2].value }))
        
        for(let i =0; i<e.target.length-1; i++) e.target.value = ''

    }


    return (
        <Container>
            <h2>  { `${firstName} last name is ${lastName} , age: ${age}!` } </h2>

            <form onSubmit={onSubmit}>
                <input placeholder="firstName" ref={nameRef}/>
                <input placeholder="lastName" ref={nameRef}/>
                <input placeholder="age" ref={nameRef}/>
                <button>Add your name</button>
            </form>
        </Container>
    )
}

