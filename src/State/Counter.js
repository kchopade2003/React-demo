import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state ={
            marks: 5
        }
    }

    increment(){
        this.setState({
            marks : this.state.marks + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Marks - {this.state.marks}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter;