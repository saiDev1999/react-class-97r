import { useContext } from "react"
import ComponentA from "../components/functional-components/context/componentA"
import Header from "../components/functional-components/navBar/header"
import { UserDetails } from "../navigation/navigation"




const AboutScreen =()=>{
      let globalInfo=useContext(UserDetails)
      console.log(globalInfo)

      const changeName=()=>{
        globalInfo.changeName()

      }

    return(
        <>
         <Header/>
        <h2>About screen</h2>
        <h3>i am from navigation.js , global info {globalInfo.username}</h3>
        <button  onClick={changeName} >Change name</button>
        <ComponentA/>
        
        </>
    )
}
export default AboutScreen