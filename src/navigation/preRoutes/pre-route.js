import { Route, Routes } from "react-router-dom"
import LoginScreen from "../../pages/login-screen"
import InvalidScreen from "../../pages/invalid-screen"






const PreRoute=()=>{
    return(
        <Routes>

        <Route  path="/" Component={LoginScreen}  />
        <Route  path="*" Component={InvalidScreen}  />
     


    </Routes>

    )
}
export default PreRoute