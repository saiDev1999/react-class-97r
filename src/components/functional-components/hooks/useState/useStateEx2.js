import { useState } from "react"


const UseStateExample2 =()=>{

  const[timer,setTimer]=useState(0)


//    timing events :
//    1. setInterval --> 
//    2. setTimeout 

const handleTimer =()=>{


    // setTimer(timer+1)

    setInterval(()=>{
        setTimer(timer=>timer+1)
   
    },1000)

}

  

    return(
        <>
        <h2>Current timer {timer}</h2>
        <button onClick={handleTimer} >click to start timer</button>
        
        
        </>
    )
}

export default UseStateExample2