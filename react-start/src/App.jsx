import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    if(count < 20){
      setCount(count + 1)
    }
  }
  const minusValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }
  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
          <h3>Counter App</h3>
          <p>{count}</p>
          <button onClick={addValue}>Increment</button><br/>
          <button onClick={minusValue}>Decrement</button>
      </div>
      
    </>
  )
}

export default App
