import React, { useContext } from 'react';
import { AuthContext } from "../AuthContext";
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate()
  function logout() {
    //remove (email/password) from localstorage to avoid accessing to posts even after logging out
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    authContext.setAuth({});
    navigate('/')
  }
  return (
    <nav className='nav'>

      <h3 className='logo'> Logo </h3>

      <div>

        {authContext.auth.email ?
          //  authenticated 
          <div>
            <NavLink to="/" className='homeBtn' style={({ isActive }) => ({
              color: isActive ? '#FE5454' : 'black'
            })}>
              Home
            </NavLink>
            <NavLink to="/Posts" className='postsBtn' style={({ isActive }) => ({
              color: isActive ? '#FE5454' : 'black'
            })}>
              Posts
            </NavLink>
            <button className="btnLogin" onClick={logout}>Logout</button>
          </div>
          // not authenticated 
          : <div>
            <NavLink to="/" className='homeBtn' style={({ isActive }) => ({
              color: isActive ? '#FE5454' : 'black'
            })}>
              Home
            </NavLink>
            <NavLink to="/Login" style={({ isActive }) => ({
              color: isActive ? '#FE5454' : 'white'
            })}>
              <button className="btnLogin" >  Login </button>
            </NavLink>
          </div>
        }
      </div>

    </nav>
  )
}

export default Navbar

