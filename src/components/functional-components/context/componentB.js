




import React from 'react'
import ComponentC from './componentC.js'


function ComponentB({name}) {
  return (
    <div>
        <ComponentC  name={name} />
    </div>
  )
}

export default ComponentB