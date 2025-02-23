// Props in functional component

import React from "react";

const Student1 = (props) =>{

    //Props are immutable if we change we get error
    // props.Name = "Ketan"
    return(
        <div>
            <h1>Hello, Name: {props.Name}, RollNo: {props.RollNo}</h1>
            {props.children}
        </div>
    )
}

export default Student1