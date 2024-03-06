



import React, { useState } from 'react'
import ComponentB from './componentB'

function ComponentA() {
const[name,setName]=useState("Jagadheesh")
  return (
    <div>

        <ComponentB  name={name}   />
    </div>
  )
}

export default ComponentA

// context api :
// context is used to communicate the data globally with out the prop drilling 
 

// steps :

// 1. identify the data to be forwarded , for wrapping 
// 2. create a context using createContext method 
// 3. wrap the context for which data to be forwarded 
// 4. select the targeted component for data consumption 
// 5. consume the data using useContext hook 


