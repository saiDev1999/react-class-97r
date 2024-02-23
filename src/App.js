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





function App(){
  return(
    <div>
<ProductsApi/>


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



