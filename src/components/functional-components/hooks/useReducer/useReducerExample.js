import React, { useReducer } from 'react'; // Corrected: Added import statement for useReducer

function reducer(state, action) {
    console.log(action, state);
    switch (action.type) {
        case "INCREMENT_AGE_BY_10":
            return {...state, age: state.age + 10}; // Corrected: Increment age by 10
        case "DECREMENT_AGE_BY_10":
            return {...state,age:state.age-10}
        case "CHANGE_THE_NAME":
            return {...state,name:"Kiran"}
        // case "ADD_FRIUT":
        //     return {...state,fruits:[...state,fruits,"NEW_FRUIT"]}
        default:
            return state;
    }
}

const initialState = {
    age: 90, // Adjusted: Starting from 90 so that incrementing by 10 makes sense
    name: "raju",
    fruits:["apple","banana"]
};

const UseReducer = () => {
    const [currentState, dispatch] = useReducer(reducer, initialState); // Corrected: Syntax for destructuring
    const incrementAge = () => {
        dispatch({ type: "INCREMENT_AGE_BY_10" });
    };
    const decrementAge=()=>{dispatch({type:"DECREMENT_AGE_BY_10"})}
    const changeName=()=>{
        dispatch({
            type:"CHANGE_THE_NAME"
        })
    }
    return (
        <>
            <h1>UseReducer</h1>
            <h2>{currentState.age}</h2>
            
            <h3>{currentState.name}</h3>
                        <button onClick={incrementAge}>Increment age by 10</button>
            <button onClick={decrementAge}>Increment age by 10</button>
             <button onClick={changeName}>ChangeName</button>
        </>
    );
};

export default UseReducer; // Assuming you want to export this component for use elsewhere


// Tasks :
// 1. Repeat the class (documentation )
// 2. CRUD Operation using useReducer
// 3. useReducer + useContext create global counter 
