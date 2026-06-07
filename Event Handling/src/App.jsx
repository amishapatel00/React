

import './App.css'

function App() {
 
function handleClick() {
  alert("I m clicked");
  
}
function handleMouseOver() {
  alert("hii you clicked the para")
  
}
  return (
    <>
    <p onMouseOver={handleMouseOver}>
      
    </p>
     <button onClick={handleClick}>
      click ME
     </button>
    </>
  )
}

export default App
