import { useState } from "react"

const UseStateExample = () =>{

    const [currentCount,setCurrentCount]=useState(0)


    const handleIncrement=(value)=>{
    setCurrentCount(sai=>sai+1)
    // setCurrentCount(sai=>sai+1)
    // setCurrentCount(sai=>sai+1)
    // setCurrentCount(currentCount+value)
    // setCurrentCount(currentCount+value)
    }

    const handleDecrement =(value)=>{
        setCurrentCount(currentCount-value)
    }

    const handleReset=()=>{
        setCurrentCount(0)
    }

    return(
        <>
       <h2>{currentCount}</h2>
       <button onClick={()=>handleIncrement(1)} >Increment</button>
       <button onClick={()=>handleDecrement(1)} >Decrement</button>
       <button onClick={handleReset} >Reset</button>
        
        </>
    )

}

export default UseStateExample


// State : object holds component info 

// useState : it is hook which manages the state in the functional based components ,and  also capable of manipulating 
// the state 


// create a state and update the state using useState hook 

// syntax : useState hook will accept 1 argument 
// 1. initialState

// useState hook will return the array 
// array contains two elements ---  current state , function to update current state 


// const [currentState,updaterFunction]=useState(0)

// currentState = 0
// updaterFunction is used to update the current state


