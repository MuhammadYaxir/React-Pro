import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <h1>This is Tailwind css & Props</h1>
      <Card username="Yasir"/>
      <Card username="Haris" price="90"/>
      
    </>
  )
}

export default App
