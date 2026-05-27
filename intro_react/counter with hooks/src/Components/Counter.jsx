import {useState} from 'react'

import './Counter.css'
// import './Counter.css '


const Counter = () => {
         const[count,setCount]=useState(0);
  return (
    <div className='container'>
     <p id='para'> you have clicked {count} times</p>
     <button id='btn' onClick={()=> {setCount(count+1)}}> click Me</button>
    </div>
  )
}

export default Counter


