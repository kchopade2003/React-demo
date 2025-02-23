// props in class component

import React, { Component } from "react";

class Student2 extends Component{
    render(){
        return(
            <div>
                <h1>Hello, Name: {this.props.name}, RollNo: {this.props.RollNo}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Student2