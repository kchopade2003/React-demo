import React, { useState } from 'react'

const UseStateHook3 = () => {
    const [address, setAddress] = useState({city: "", country: ""})
  return (
    <div>
        <input 
            type="text" 
            value={address.city} 
            onChange={e => setAddress({...address, city: e.target.value})}>
        </input>
        <input 
            type="text" 
            value={address.country} 
            onChange={e => setAddress({...address, country: e.target.value})}>
        </input>

        <h2>city - {address.city}</h2>
        <h2>country - {address.country}</h2>
    </div>
  )
}

export default UseStateHook3