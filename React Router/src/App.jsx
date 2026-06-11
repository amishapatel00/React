
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
const router=createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
<Home/>
<Navbar/>
      </div>
    },
    {
      path:"/About",
      element: <div>
<About/>
<Navbar/>
      </div>
    },
    {
      path:"/Dashboard",
      element: <div>
<Dashboard/>
<Navbar/>
      </div>
    },
    
  ]
);

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
