import React ,{ Component } from "react"
class Message extends Component {

    constructor(){
        super()
        this.state={
            msg : "HELLO ABHI "
        }
    }
    Changemsg(){
        this.setState({
            msg : " HEYYYYY ABHI"
        })
    }
render()
{
    return(
        <>
        <h1>{this.state.msg}</h1>
        <button onClick={() =>this.Changemsg()} className="btn btn-success"> Click Me</button>
        </>
    )
}

}
export default Message;