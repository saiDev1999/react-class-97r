import { Component } from "react";
import axios from "axios";
import Spinner from "../../../functional-components/spinner/spinner";






class Mounting extends Component{

    constructor(){
        console.log("construtor")
        super()
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        console.log("component did mount ")
          axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                this.setState({
                    products:response.data
                })

            }else{
                alert("something went wrong")
            }
           
        })
        .catch(err=>console.log(err))
    }

    render(){
        console.log(this.state.products,"renderMetho")
        return(
            <>
      
            <h1>Product list</h1>

            {
                this.state.products.length>0 ?
                this.state.products.map(eachObject=><h2 key={eachObject.id} >{eachObject.title}</h2>)
                :
            <Spinner/>
            }
            </>
        )
    }
}
export default Mounting

// 1. http req 

// Tasks:
// 1. Repeat the class 
// 2. Complete the pending tasks  
// 3. Circle task 
// 4. today's class , beautify the content along with the proper loaders 
