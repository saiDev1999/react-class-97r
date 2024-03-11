import { useCallback, useMemo, useState } from "react"





const UseMemoExample =()=>{
    const [counter1,setCounter1]=useState(1)
    const [counter2,setCounter2]=useState(1)

    const handleIncrementCounter1=()=>{
        setCounter1(counter1+1)
    }

    const handleIncrementCounter2=()=>{
        setCounter2(counter2+1)
    }
 
    const evenChecker = useMemo(()=>{
        console.log("even checker calling")

        return counter1%2===0 ? "EVEN":"ODD"
    },[counter1])

    return(
        <>
        <h4>{counter1} Counter 1</h4>
        <h4>{counter2} Counter 2</h4>
        <h3>{evenChecker}</h3>



        <button onClick={handleIncrementCounter1} >Click to increment counter 1</button>
        <button onClick={handleIncrementCounter2} >Click to increment counter 2</button>
        
        </>
    )
}

export default UseMemoExample



// Tasks:
// 1. Repeat the class
// 2. 5 examples for each hook (useMemo, useCallback, react.memo, etc)
// 3. card animation (flip, zoom) using react library 

