import { PureComponent } from "react";

class Child extends PureComponent{
    render(){
        console.log("Child render")
        return(
            <>
            <h1>Child component</h1>
            </>
        )
    }
}
export default Child