/* eslint-disable no-undef */


const Navbar = () => {
  return (
    <div>
      <ul> 
      <li> 
      <NavLink to="/">Home</NavLink>
      </li>
      <li> 
      <NavLink to="/About">About</NavLink>
      </li>
      <li> 
      <NavLink to="/Dashboard">Dashboard</NavLink>
      </li>
      
      </ul>
    </div>
  )
}

export default Navbar
