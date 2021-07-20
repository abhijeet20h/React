import React, { Component } from 'react'

export class SetStateEx extends Component {
    constructor(){
        super()
        this.state={
            counter : 0 
        }
    }
    incrementFun(){
        this.setState({
            counter : this.state.counter +1

        })
    }
    decrementFun(){
        this.setState({
            counter : this.state.counter  -1

        })
    }

    render() {
        return (
            <div>
                <h1>Counter  :  { this.state.counter} </h1>
                <button  onClick={()=>this.incrementFun()} className="btn btn-success m-3">Increment</button>
                <button  onClick={()=>this.decrementFun()} className="btn btn-danger m-3">Increment</button>

            </div>
        )
    }
}

export default SetStateEx
