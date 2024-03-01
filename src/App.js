import FancyText from "./components/functional-components/styles/text"
import "./App.css"
import Content from "./components/functional-components/styles/bootstrap/content"
import Spinner from "./components/functional-components/spinner/spinner"
import NavBar from "./components/functional-components/navBar/nav-bar"
import Corousel from "./components/functional-components/corousel/corousel"
import ModalExample from "./components/functional-components/modals/modal"
import AnimatedToast from "./components/functional-components/toast/toast"
// import ImageComponent from "./components/class-components /image/image-component"
// import YoutubeButton from "./components/class-components /youtubeButton/youtubeButton"
import Products from "./components/class-components/products/products"
import OrderedList from "./components/functional-components/list/order-list/ordered-list"
import ProductsApi from "./components/functional-components/axios/products"
import Mounting from "./components/class-components/lifeCycle/mounting/mountingPhase"
import DomManipulation from "./components/class-components/lifeCycle/mounting/dom"
import UpdatingPhase from "./components/class-components/lifeCycle/updating/stateUpdation"
import Unmounting from "./components/class-components/lifeCycle/unmounting/unmounting"
import CirclTask from "./components/class-components/homeWork/CircleTask"
import ParentComponent from "./components/class-components/pureComponents/parent"
import { useState } from "react"
import UseStateExample from "./components/functional-components/hooks/useState/useStateEx1"
import UseStateExample2 from "./components/functional-components/hooks/useState/useStateEx2"
import UseStateExample3 from "./components/functional-components/hooks/useState/useStateEx3"
import Uncontrolled from "./components/functional-components/forms/uncontrolled"
import Controlled from "./components/functional-components/forms/controlled"
import UseEffectExample from "./components/functional-components/hooks/useEffect/useEffectEx2"
import UseEffectEx3 from "./components/functional-components/hooks/useEffect/useEffectEx3"
import UseEffect4Example from "./components/functional-components/hooks/useEffect/useEffectEx4"
import UseEffect5 from "./components/functional-components/hooks/useEffect/useEffectEX5"





function App(){
  return(
    <div>
<UseEffect5/>



    </div>
 
  
  )
}


export default App




// API : Application programming interface , it acts a middle ware between client side and server side and vice versa

// get request ---> from server to client side data retrieval 
// post request ---> data from client side to server side 
// delete request --->  removal of data from server side 
// put request ---> to update the existing data in sever server 
// patch request ---->update with nested objects in server 


// fetch is a browser web api which to used for making http calls or api calls
// fetch will return a promise --> we can collect by using .then or by using async and await keywords

// fetch("url",{}).then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))

// axios
// axios is a third party library which is used to make http request more effienctly 

// Post man --> it is a tool for testing of api 






// Component : Component is a reusable bit of code which is responsible for creating user interface
// every component will return mark up 
// components are simple js functions 
// components can be a single button or a whole page 


// there are 2 types of components in react 
// 1. Functional based components 
// 2. Class based components


// 3 components 
// 1. List 
// 2. table 
// 3. image, buttons

// to display the ui , we need nest the components 


// tasks :
// 1. Repeat the class 
// 2. Create a table component with images 
// 3. document on folder structure in react 


// Babel : it is transpiler which transpiles the jsx code(new synntax) to js code 



// Class based components --- ui + js layer --> state full components 

// functional based components ---> ui + js layer , 16.8 version , in 2018 -> hooks 
// state less components, after hooks functional became state full component 



// react doesnt want to remove class based components 
// but suggesting to use functional based components 

// hooks : Hooks let you use of state and other react features(life cycle methods) with out writing the class

// examples built in hooks :

// 1. useState 
// 2. useEffect 
// 3. useContext 
// 4. useReducer 
// 5. useRef
// 6. useMemo 
// 7. useCallback

// 8. custom hooks 

//  limitations of hooks 

// 1. Hooks must always call at the top of the component 
// 2. Hooks must only use in functional based components 
// 3. Hooks can not be conditional 

// Tasks :
// 1. Repeat the class (pure components and , can we use pure components for all ?)
// 2. api call in class based components 3 apis (table,lists, card)
// 3. which is most popular css framework for react , mention the reasons 
// 4. why we go for react instead of other tech stack 
// 5. limitations for react 
// 6. difference between life cycle methods and hooks 







