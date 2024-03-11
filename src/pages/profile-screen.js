import ProfileExample from "../components/functional-components/hooks/useCallback/profile"
import UseMemoExample from "../components/functional-components/hooks/useMemo/useMemo"
import UseReducer from "../components/functional-components/hooks/useReducer/useReducerExample"
import Header from "../components/functional-components/navBar/header"



const ProfileScreen =()=>{
    return(
        <>
         <Header/>
        <h2>profile screen</h2>
        {/* <UseMemoExample/> */}
        {/* <UseReducer/> */}
        <ProfileExample/>
        
        </>
    )
}
export default ProfileScreen