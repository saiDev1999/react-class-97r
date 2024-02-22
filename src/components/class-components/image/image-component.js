




// steps 
// 1. we will use class keyword to create a component in react 
// 2. Every class should inheritent from parent component using extends keyword 
// 3. Every component shoul have render method which is used to insert the jsx in the dom 

import { Component } from "react";



class ImageComponent extends Component{
    constructor(){
        super()
        this.state={
            name:"rajeshr",
            salary:10000

        }
    }
    handleIncrementSalary=()=>{
        // alert("clicked")
        this.setState(
            {
                salary:this.state.salary+1000
            },
            ()=>{
                console.log(this.state.salary)
            }
        )
        console.log(this.state.salary,"outside")

    }

render(){
    return(
        <div>
            <h3>hello world   {this.state.name} {this.state.salary} </h3>
            <button onClick={this.handleIncrementSalary}  >Update salary by 1000</button>
        </div>
    )
}
}

// CRUD : Create , Read , Update , Delete 

export default ImageComponent

// state and props ---> container layer will be formed 
// state : State is an object which holds the component information 
// state is private 

// ways to create a state in class based components 
// 1. constructor way 
// 2. object way 


// constructor : constructor is predefined method in class , which is used to initialize the state 


// To update the state in class based components 
// we can update the state using setState method in class based components 

// setState method will accept 2 args 
// 1. Object ----> we will update the state 
// 2. Callback function ----> we can retrieve and read the updated state 

// setState --> will cause Component to re-render

