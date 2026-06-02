
import { useState } from 'react'
import './App.css'
// import Card from './Components/Card'
import Button from './Components/Button';

function App() {
  const[count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
    <Button handleClick={handleClick}
    text="click me">
      <h1>{count}</h1>
    </Button>

      
    </div>
  )
}

export default App
