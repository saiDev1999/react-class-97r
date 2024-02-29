import React,{ useState } from "react"






const UseStateExample3 =()=>{
    const[fruits,setFruits]=useState(["apple","banana","grapes","kiwi"])

    const handleAdd=()=>{
        let newState=[...fruits,"new fruit"]
        setFruits(newState)

    }
    const handleDelete=(index)=>{
        console.log(index,fruits)

    }
    return(
        <>
        <h2>Todo list</h2>
        <button onClick={handleAdd} > Add fruit</button>
        <ol>

  
        {
    fruits.map((eachElement,index)=>
    <React.Fragment key={index} >
  
    <li>{eachElement}</li>
    <button onClick={()=>handleDelete(index)} > delete fruit</button>


    </React.Fragment>
    )

        }
              </ol>

        </>
    )
}

export default UseStateExample3


// Tasks:
// 1. Repeat the class 
// 2. take array of employees and show in ui using useState , perform addition of employees and deletion of employees
// 3. install and research about the some npm packages like react-spinners , circular-Bars, animated cards 

