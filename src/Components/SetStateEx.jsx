import React, { Component } from 'react'

export class SetStateEx extends Component {
    constructor(){
        super()
        this.state={
            counter : 0 
        }
    }
    incrementFun(){
        // this.setState({
        //     counter : this.state.counter +1

        // })
        this.setState((prevstate)=>({
            counter : prevstate.counter+1
        }))
    }
    decrementFun(){
        this.setState({
            counter : this.state.counter  -1

        })
    }
    fiveincrementFun(){
        this.incrementFun()
        this.incrementFun()
        this.incrementFun()
        this.incrementFun()
        this.incrementFun()
        this.incrementFun()

      
    }

    render() {
        return (
            <div>
                <h1>Counter  :  { this.state.counter} </h1>
                <button  onClick={()=>this.incrementFun()} className="btn btn-success m-3">Increment</button>
                <button  onClick={()=>this.decrementFun()} className="btn btn-danger m-3">Increment</button>
                <button  onClick={()=>this.fiveincrementFun()} className="btn  m-3">Increment By  5</button>

            </div>
        )
    }
}

export default SetStateEx
