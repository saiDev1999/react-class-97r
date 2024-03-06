
import NavigationStack from "./navigation/navigation"

function App(){
  return(
    <div>
 <NavigationStack/>


    </div>
 
  
  )
}


export default App


// props Drilling : Prop drilling is basically a situation where data has to be pass through a nested levels to 
// reach the final component 


//  state management :
//  local state management --> if the State is managed with in component we call it as a local state management
//  global state management --> if the state managed globally , we call it as a global state management

//  to eliminate the prop drilling we need manage the state globally 

//  1.context api ---> medium level application 
//  2. redux ---> for larger level application we can prefer redux (which enables more features and its powerful)



// React-Router-dom 
// 2types of routing 
// 1. static routing --> fixed routing
// 2. dynamic routing ---> based on id 




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







