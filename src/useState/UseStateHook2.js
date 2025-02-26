import React, { useState } from 'react'

const UseStateHook2 = () => {
    const initialMarks = 0;
    const [marks, setMarks] = useState(initialMarks);

    const incrementFive = () =>{
        for(let i = 0; i < 5; i++){
            setMarks(prevMarks => prevMarks + 1)
        }
    }

  return (
    <div>
        <h1>Marks - {marks}</h1>
        {/* <button onClick={() => setMarks(marks + 1)}>Increment</button> This is wrong way to do  */}
        <button onClick={() => setMarks(prevMarks => prevMarks + 1)}>Increment</button>
        <button onClick={() => setMarks(prevMarks => prevMarks - 1)}>Decrement</button>
        <button onClick={() => setMarks(initialMarks)}>Reset</button>

        <button onClick={incrementFive}>Increment by 5</button>
    </div>
  )
}

export default UseStateHook2