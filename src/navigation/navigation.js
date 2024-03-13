import { BrowserRouter } from "react-router-dom"
import PostRoute from "./postRoutes/post-route"
import PreRoute from "./preRoutes/pre-route"
import { createContext, useState } from "react"
import HomeScreen from "../pages/home-screen"


export const UserDetails=createContext()

const NavigationStack =()=>{
    const[username,setUserName]=useState("Dheeraj")
    const [login,setLogin]=useState(false)

    const changeName=()=>{
        setUserName("hello")
    }
    return(
        <BrowserRouter>

        <UserDetails.Provider value={{
            username,
            changeName
        }} >
        {
            login
            ?
            <PostRoute/>
            :
            <PreRoute/>
        }
             </UserDetails.Provider>
           

        </BrowserRouter>

    )
}

export default NavigationStack


// Tasks:
// 1. Repeat the class
// 2. navigate the user if entered right details show the HomeScreen
// 3. date sub objects 



// 1. identify the data to be forwarded , for wrapping 
// 2. create a context using createContext method for global data share
// 3. wrap the context for which data to be forwarded , using provider with value attritube 
// 4. select the targeted component for data consumption 
// 5. consume the data using useContext hook 

// 1. Repeat the class 
// 2. Fill the content in all the page 
// 3. research on react router dom document
// 4. difference between authenication and authorisation (research)




// react-router-dom
// post route 
// home 
// setting 
// about 
// profile 

// pre route 
// 1. login 
// 2. register 
// 3. otp 
// 4.forgot password 

