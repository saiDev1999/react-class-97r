

import React from 'react'

function CustomButtom({children,onClick}) {
    console.log(children)
  return (
    <button  onClick={onClick}   >{children}</button>
  )
}

export default React.memo(CustomButtom)