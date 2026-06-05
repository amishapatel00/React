
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  
const[name,setName]=useState('');
  return (
  <div> 
  <Card title="card1" name={name} setName={setName}/>
  <Card title="card2" name={name} setName={setName}/>
  

  </div>
  )
}

export default App
