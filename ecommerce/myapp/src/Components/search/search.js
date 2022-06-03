import axios from "axios"
import { useRef, useState } from "react"

export const FilePick = ()=>{
    const picRef = useRef('')
    const [fileData,setFileData] = useState()

    const fileChangeHandler = (e)=>{
        setFileData(e.target.files[0])
    }

    const onSubmit = (e)=>{
        e.preventDefault()


        const data = new FormData()
        data.append('image',fileData)

        console.log(e.target)
        axios.post('http://localhost:2000/filePick', data)
        .then(res=>console.log(res))
        .catch(e=>console.log(e.message))

}

    return (

        <form onSubmit={onSubmit} encType='multipart/form-data'>
            <input type="file" accept="image/*" name="imageUpload" ref={picRef} onChange={fileChangeHandler}/>
            <button>Submit</button>
        </form>

    )
}