import React, { useState } from 'react'

const UseStateHook4 = () => {
    const [fruits, setFruits] = useState([])
    const [fruit, setFruitInput] = useState('')

    const addFruit = () =>{
        setFruits([...fruits, {id: fruits.length, value: fruit}])
        setFruitInput('')
    }
  return (
    <div>
        <input 
            type='text'
            value={fruit}
            onChange={e => setFruitInput(e.target.value)}> 
        </input>
        <button onClick={addFruit}>Add fruit</button>

        <ul>
            {
                fruits.map((f) => {
                    <li key={f.id}>{f.value}</li>
                })
            }
        </ul>
    </div>
  )
}

export default UseStateHook4