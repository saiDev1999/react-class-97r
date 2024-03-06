import { useContext } from "react"
import Header from "../components/functional-components/navBar/header"
import { UserDetails } from "../navigation/navigation"




const SettingScreen =()=>{
    const userInfo=useContext(UserDetails)
    
    return(
        <>
        <Header/>
        <h2>Setting screen {userInfo.username}</h2>
        
        </>
    )

}
export default SettingScreen