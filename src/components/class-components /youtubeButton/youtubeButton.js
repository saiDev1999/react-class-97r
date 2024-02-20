import { Component } from "react";


class YoutubeButton extends Component{

    constructor(){
        super()
        this.state={
            isSubscribed:false
        }
    }
   handleSubscribe=()=>{

    this.setState(
        {
            isSubscribed: !this.state.isSubscribed

        }
    )

   }
    render(){
        return(
            <div>


            <button  onClick={this.handleSubscribe} >{this.state.isSubscribed?"un-subscribe":"please subscribe"}</button>

       {
        this.state.isSubscribed ? <h2>Wellcome user</h2> :null
       }

            </div>
        )
    }
}

export default YoutubeButton