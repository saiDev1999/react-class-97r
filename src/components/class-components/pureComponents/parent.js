import { Component } from "react";
import Child from "./child";

class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        console.log("parent render")
        return(
            <>
            <h3>Parent component</h3>  
            <h3>State change {this.state.count}</h3>
            <button  onClick={this.handleCount} >Click to change state</button>
            <Child  data={this.state.count} />  
            </>
        )
    }
}
export default ParentComponent