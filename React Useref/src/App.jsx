
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 const[count,setCount]=useState(0);
 let val=useRef(0);
 let btnRef=useRef();


 function handleIncrement() {
  val.current=val.current+1;

  setCount(count+1);
  
 }
 useEffect(()=>{
  console.log("i render every time")
 })
 function changeColor() {
  btnRef.current.style.backgroundColor= "red" ; 

  
 }

  return (
    <>
     <div>
    
      <button ref={btnRef} onClick={handleIncrement}>
      
        Increment
      </button>
      </div>

<div>
      <button onClick={changeColor}>
        change Color of first button
      </button>
      </div>

      <div>
        count:{count}
      </div>
    </>
  )
}

export default App
