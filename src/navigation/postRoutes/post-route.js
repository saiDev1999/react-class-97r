import { Route, Routes } from "react-router-dom"
import HomeScreen from "../../pages/home-screen"
import SettingScreen from "../../pages/setting-screen"
import AboutScreen from "../../pages/about-screen"
import ProfileScreen from "../../pages/profile-screen"
import InvalidScreen from "../../pages/invalid-screen"



const PostRoute=()=>{
    return(
        <Routes>

        <Route  path="/" Component={HomeScreen}  />
        <Route  path="/setting" Component={SettingScreen}  />
        <Route  path="/about" Component={AboutScreen}  />
        <Route  path="/profile" Component={ProfileScreen}  />
        <Route  path="*" Component={InvalidScreen}  />


    </Routes>

    )
}
export default PostRoute