import { useState } from 'react'
import './App.css'

function App() {

    const [count, setCount] = useState(0)

    const inc = () =>{
        setCount(count + 1)
            console.log(count)
    }

  return (
    <div>
      <button onClick={inc}>count {count}</button>
        <h1 className='oop'>hello rahul</h1>
    </div>
  )
}

export default App
