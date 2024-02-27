import { Component } from "react";




class UpdatingPhase extends Component{

    state={
        count:0
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


    componentDidMount(){
        document.title=this.state.count

    }

    componentDidUpdate(){
        document.title=this.state.count
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    static getDerivedStateFromProps(props, state) {
      console.log("getDerivedStateFromProps")
      }

      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState,"previous state")

      }



    render(){
        console.log("render")
        console.log("render")
        return(
            <>
            <h2>hello</h2>
            <button  onClick={this.increment} >Increment {this.state.count}</button>
            </>
        )
    }
}
export default UpdatingPhase
