import { useContext } from "react"
import ComponentA from "../components/functional-components/context/componentA"
import Header from "../components/functional-components/navBar/header"
import { UserDetails } from "../navigation/navigation"
import UseEffect5 from "../components/functional-components/hooks/useEffect/useEffectEX5"
import useCounter from "../components/functional-components/hooks/customHook/useCounter"




const AboutScreen =()=>{
      let globalInfo=useContext(UserDetails)

      const[count,handleCount]=useCounter()

      console.log(globalInfo)

      const changeName=()=>{
        globalInfo.changeName()

      }

    return(
        <>
         <Header/>
        {/* <h2>About screen</h2>
        <h3>i am from navigation.js , global info {globalInfo.username}</h3> */}
        <h4>{count}</h4>
        <button onClick={()=>handleCount(2)} >Increment</button>

        
        </>
    )
}
export default AboutScreen