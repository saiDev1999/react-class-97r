import { Component } from "react";





class DomManipulation extends Component{

    state={
        counter:10,
        favoritecolor:"red"
    }

    increment=(value)=>{
        this.setState({
            counter:this.state.counter+value
        })
    }
    componentDidMount(){
        document.title=this.state.counter

    }

    componentDidUpdate(){
        document.title=this.state.counter
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favColor };
      }

    render(){
        return(
            <>
            <h3>Dom manipulate</h3>
            <h4>{this.state.favoritecolor}</h4>
            <h4>{this.state.counter}</h4>
            <button  onClick={()=>this.increment(10)} >Increment</button>
            </>
        )
    }
}

export default DomManipulation