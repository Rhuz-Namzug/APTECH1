import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Whaddup cuh</h1>
      <Card />
      <Card />
    </>
  )
}

const Card = () => {
  return (
<>
<h2>you are gae</h2>

</>

  )
}

export default App
