import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello!!</h1>
    //     </div>
    // )

    return React.createElement("div", {className: "helloclass"},
        React.createElement("h1", {className: "helloclass" , id : "hello"}, "Hello!!!!")
    )
}

export default Hello;