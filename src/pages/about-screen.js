import { useContext } from "react"
import ComponentA from "../components/functional-components/context/componentA"
import Header from "../components/functional-components/navBar/header"
import { UserDetails } from "../navigation/navigation"
import UseEffect5 from "../components/functional-components/hooks/useEffect/useEffectEX5"
import useCounter from "../components/functional-components/hooks/customHook/useCounter"
import useAxios from "../components/functional-components/hooks/customHook/useAxios"
import Spinner from "../components/functional-components/spinner/spinner"
import { BASE_PROD_URL, endPoints } from "../endpoints/endPoints"




const AboutScreen =()=>{
      let globalInfo=useContext(UserDetails)
      const[data]=useAxios(`${BASE_PROD_URL}${endPoints.categories}`)
      console.log(data)

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
        {
          data.length>0 
          ?
          data.map(ele=><h2>{ele}</h2>)
          :
          <Spinner/>
        }

        
        </>
    )
}
export default AboutScreen