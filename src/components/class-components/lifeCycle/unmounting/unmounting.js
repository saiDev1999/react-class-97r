import { Component } from "react";




class Unmounting extends Component{
    state={
        isChildVisible:false
    }

    childHandler=()=>{
        this.setState(
            {
                isChildVisible:!this.state.isChildVisible
            }
        )
    }


    render(){
        return(
            <>
            <h2>Unmounting component</h2>
            <button onClick={this.childHandler} >Control the child</button>
            {
                this.state.isChildVisible
                ?
                <Child/>
                :
                <h3>No child found</h3>
            }
            
            
            </>
        )
    }
}

export default Unmounting


class Child extends Component{
    componentWillUnmount(){
        alert("i am removed from dom")
    }
    render(){
        return(
            <>
            <h1>i am child visible</h1>
            </>
        )
    }
}


// unmounting :
// component will mount : it prevents memory leaks in the component while leaving 