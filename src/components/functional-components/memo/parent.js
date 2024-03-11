

import React, { useState } from 'react'
import Child from './child'

function ParentMemo() {
    const [counter,setCounter]=useState(0)
  return (
    <div>

        <h3>{counter}</h3>
        <button onClick={()=>setCounter(counter+1)} >Count increment</button>
        <Child/>
    </div>
  )
}

export default ParentMemo