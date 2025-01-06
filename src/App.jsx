import { useState } from 'react'
import { Type } from './Components/Type'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Type></Type>
    </>
  )
}

export default App
