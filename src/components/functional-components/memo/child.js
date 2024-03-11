

import React from 'react'

function Child() {
    console.log("child rendering")
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)

// HOC : Higher order component 
// a component is passed as a argument to the other component which gives the enhanced component 
// functual reusability 

// ex: React.memo()