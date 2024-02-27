import { Component } from "react";

class CirclTask extends Component{
    state={
    circles:[]
    }

    addCircles=()=>{

        this.setState(
            {
                circles:[...this.state.circles,false]
            }
        )

    }

    changecolor=(index)=>{
        console.log(index,this.state.circles)

    }
    render(){
        return(
            <>
               <button onClick={this.addCircles} >Click to add circles</button>
               <h2>Total Circles -- {this.state.circles.length}</h2>
      
             {
                this.state.circles.map((element,index)=><Circle  isHighlight={element} changecolor={this.changecolor} index={index} />)
             }
          
            </>
           
        )
    }
}
export default CirclTask

class Circle extends Component{
    render(){
        console.log(this.props.isHighlight)
        return(
            <div style={{width:100,height:100,borderRadius:"50%",border:"2px solid black",backgroundColor:this.props.isHighlight?"black":null}}
            
            onClick={()=>this.props.changecolor(this.props.index)}
            >

            </div>

            // tasks :
            // 1. Repeat the class
            // 2. Complete the todays pending part of add circles 
            // 3. make a document for life cycle methods ,what is render and re-render , when re-render will cause 
            // 4. difference between functional and class components 
            // 5. difference between axios and fetch

        )
    }
}