import { useRef } from "react"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`


`


export const ChangePassword = ()=>{

    const passwordRef = useRef(null)
    const [password,setPassword] = useState('')

    const passwordSet = (e)=>{
        setPassword(e.target.value)
    }
    const submit = ()=>{
        console.log(password)
        passwordRef.current.value = ""
    }


    return (

        <Container>
            <h3>Change Your Password!</h3>
            <div>

                <input onChange={passwordSet} ref={passwordRef} />
                <button onClick={submit}>Submit</button>

            </div>


        </Container>

    )


}