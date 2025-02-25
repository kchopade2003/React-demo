import React,{Component} from 'react';

class Enroll extends Component{
    constructor(){
        super()
        this.state = {
            Message: 'Enrolling Student'
        }
    }

    enrollStudent(){
        this.setState({
            Message: 'Student is Enrolled'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.enrollStudent()}>Enroll</button>
            </div>
        )
    }
}

export default Enroll;