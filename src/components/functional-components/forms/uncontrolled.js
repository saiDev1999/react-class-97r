import { useRef } from "react"




const Uncontrolled =()=>{
   const usernameRef= useRef(null)
   const passwordRef=useRef(null)

   const handleSubmit=(event)=>{
    event.preventDefault()
    const username=usernameRef.current.value
    const password=passwordRef.current.value

    if(username.length>5){
        alert("enter less than 5 charcters")
    }
   }

    return(
        <>
        <h1>Uncontrolled component example</h1>

        <form  onSubmit={handleSubmit}   >
            <input  type="text" name="username"  ref={usernameRef}  />
            <input  type="password" name="username"  ref={passwordRef}  />
            <input type="submit"    />
            {/* <button onClick={handleFocus} >Focus on input</button> */}
        </form>
        </>
    )
}
export default Uncontrolled