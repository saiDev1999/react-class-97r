import { useState } from "react"









const Controlled =()=>{
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const[usernameError,setUserNameError]=useState(null)


    const usernameHandler=(event)=>{

        let usernameInput=event.target.value
        setUserName(usernameInput)
        if(usernameInput.length>5){
               showError()
        }else{
            setUserNameError(null)
        }


    }

    const showError=()=>{
        setUserNameError("username must be less than 5 characters")
    }
    const passwordHandler=(event)=>{

        let passwordInput=event.target.value
        setPassword(passwordInput)
        if(passwordInput.length>5){
        
        }else{
            setUserNameError(null)
        }


    }
      


    return(
        <>
        <h1>Controlled components</h1>
        <form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      value={username}
      onChange={usernameHandler}
      style={{border:usernameError ?  "2px solid red":"0px"}}
    />
    {
        usernameError 
        &&
        <span style={{color:"red"}} > {usernameError}</span>
     

    }

  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      value={password}
      onChange={passwordHandler}
    />
  </div>
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        </>
    )
}
export default Controlled


// steps to write controlled components :

// 1. take a input form with input elements 
// 2. create a local state using useState hook 
// 3. attach the local state to the input using value attribute 
// 4. give onChange handler (as a attribute) , collect the user input via event using event.target.value 
// 5. collect and validate the user details 



// regular expressions 



// Tasks :

// 1. Repeat the class 
// 2. Registration form --> email ,phone number , password , confirm pasword , radio , select 
// 3. push the registartion details to local storage 








