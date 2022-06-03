import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import axios from "axios"


export const Login = ()=>{



    const values = {}
    const onChange = (e)=>{
        const { name,value } = e.target
        values[name] = value
    }
    const onClick = ()=>{
        axios({
            method: 'post',
            url: 'https://webby-project.herokuapp.com/random',
            data: values
        }).then(res=> {
            console.log(res.data)
        }).catch(e=>{
            console.log(e.message)
        })
    }



    const Form = ()=>{
        return (
            <div>
                <input type="text"  name="firstname" onChange={onChange} />

                <button onClick={onClick}>Submit</button>
            </div>
        )
    }
   
    return (
        <Form />
    )
    
}