import React, { useState } from 'react'

export const Type = () => {

  const[value, setValue] = useState('');  

  return (
    <div>
        <h1>Typing speed</h1>
        <p>{value}</p>
        <input type="text" onChange={(e)=>{
            setValue(e.target.value)
        }} />
    </div>
  )
}
