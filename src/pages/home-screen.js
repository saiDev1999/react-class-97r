import { useEffect, useState } from "react"
import Header from "../components/functional-components/navBar/header"
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Spinner from "../components/functional-components/spinner/spinner";



const HomeScreen =()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                setData(response.data)
            }
        })
        .catch(err=>console.log(err))
    },[])
    return(
        <>
         <Header/>
    
         {

            data.length>0
            ?
            data.map((eachObject)=>{
                return(
                    <>
                    <CustomCard data={eachObject}   />
                    </>
                )
            })
            :
            <Spinner/>
         }
        
        </>
    )
}
export default HomeScreen





function CustomCard(props) {
    const {data:{image,category,price,description,title,id}}=props
    const handleClick=()=>{

    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{width:100}} height={100}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>

        <button>
        <Link  to={`/${category}/${id}`}  >
            Navigate
            </Link>

        </button>

          
            
           

      </Card.Body>
    </Card>
  );
}



// Tasks:
// 1. Repeat the class (dynamic routing)
// 2. complete all the pending work 
// 3. ui for login , home screen ,  product 







