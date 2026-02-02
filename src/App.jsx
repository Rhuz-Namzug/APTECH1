import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [like, setLike] = useState(false)

  return (
    <>
      <h1>Whaddup cuh</h1>
      <Card cardTitle="First Card"/>
      <Card cardTitle="Second Card"/>
    </>
  )
}

const Card = ({cardTitle}) => {
  const [like, setLike] = useState(false)
  return (
<>
<h2>you are gae {cardTitle}</h2>
<button onClick={() => setLike(!like)}>
  {like ? 'Unlike' : 'Like'}
</button>
</>

  )
}

export default App
