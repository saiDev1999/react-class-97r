import { BrowserRouter } from "react-router-dom"
import PostRoute from "./postRoutes/post-route"
import PreRoute from "./preRoutes/pre-route"

const NavigationStack =()=>{
    return(
        <BrowserRouter>
        {
            true
            ?
            <PostRoute/>
            :
            <PreRoute/>
        }
           

        </BrowserRouter>

    )
}

export default NavigationStack


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

