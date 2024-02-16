import ButtonComponent from "./components/functional-components/button/button-component"
import Naveen from "./components/functional-components/exports-imports/gallery"
import ImageComponent from "./components/functional-components/image/image-component"
import {Profile as Sai,Profile1 as Nithin,Profile2 as Jagadheesh} from "./components/functional-components/exports-imports/gallery"
import RulesOfJsx from "./components/functional-components/jsx/rules"
import OrderedList from "./components/functional-components/list/order-list/ordered-list"
import UnorderedList from "./components/functional-components/list/unorder-list/unordered-list"
import Profile from "./components/functional-components/props/profile"
import Parent from "./components/functional-components/props/parent"



function App(){
  return(
    <div>
  <Profile/>
  <Parent/>

    </div>
  )
}


export default App

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



