import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/functional-components/spinner/spinner"

const ProductDetail =()=>{

    const routeInformation = useParams()
    console.log(routeInformation,"routeInformation")
    const[product,setProduct]=useState({})

    useEffect(()=>{
        //fetch the data related to the product
        fetchData()
       
    },[routeInformation.id])

    const fetchData =()=>{
        axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
        .then(response=>{
            if(response.status===200){
                setProduct(response.data)
            }
        })

    }
    
    return(
        <>

        {
            Object.keys(product).length>0
            ?
          <>
          <h1>{product.title}</h1>
    
          <img src={product.image} width={200} height={200} />
          <h4 style={{color:"red"}} >₹{product.price}</h4>
          <h2>{product.description}</h2>
          </>
            :
            <Spinner/>
        }

        </>
    )
}
export default ProductDetail


// useParams is a react router dom hook which collect the id from the url / end point 

