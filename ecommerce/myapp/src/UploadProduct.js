import { useEffect, useState } from "react"
import { storage } from "./Components/Firebase/config"
import { ref,uploadBytes,listAll,getDownloadURL } from 'firebase/storage'


export const UploadProduct = ()=>{


    const uploadImage = async ()=>{
        console.log('image upload is running')




    }




    const [files,setFile] = useState([])
    const [imageUrl,setImageUrl] = useState([])
    const onChange = (e)=>{
        setFile(prev=>([...prev,...e.target.files]))
    }

    useEffect(()=> {

        for(let file in files) {
            const imageRef = ref(storage, `picture/${ files[file].name  }`)
            uploadBytes(imageRef, files[file]).then(()=>console.log('Image uploaded'))
        }


    },[files])

    const fileCallback = (file)=>{
        console.log(file)
    }

    useEffect(()=>{
        const imageListRef = ref(storage, `picture/`)


            listAll(imageListRef)
            .then(res=> {
                res.items.forEach((item)=>{
                    getDownloadURL(item).then(url=>{    fileCallback(url)   })
            })
        })



    },[])

    // useEffect(()=>{

    //     console.log(imageUrl.length)

    // },[imageUrl])


    return (

        <>
        
            <div>
                <input type='file' onChange={onChange} multiple />
            </div>
        


        </>


    )


}