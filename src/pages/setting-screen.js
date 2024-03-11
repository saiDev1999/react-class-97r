import { useContext } from "react"
import Header from "../components/functional-components/navBar/header"
import { UserDetails } from "../navigation/navigation"
import ParentMemo from "../components/functional-components/memo/parent"
import useCounter from "../components/functional-components/hooks/customHook/useCounter"




const SettingScreen =()=>{
    const userInfo=useContext(UserDetails)
    const [c,setC]=useCounter(10)
    
    return(
        <>
        <Header/>
        <h2>Setting screen {userInfo.username}</h2>
        <h1>{c}</h1>
        <button onClick={()=>setC(20)} >Increment</button>
        {/* <ParentMemo/> */}
        
        </>
    )

}
export default SettingScreen