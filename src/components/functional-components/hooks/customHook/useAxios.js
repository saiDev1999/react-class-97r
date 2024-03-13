import axios from "axios"
import { useState,useEffect } from "react"


const useAxios = (url) => {
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    useEffect(()=>{

        try{
        axios.get(url)
        .then(response=>{
            if(response.status===200){
                setData(response.data)
            }
        })
        .catch(err=>console.log(err))
    }catch(err){
        console.log(err)
        setError(err)
    }
    },[])

    return [data]
}

export default useAxios