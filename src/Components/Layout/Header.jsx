import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "../NavBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../Pages/Auth/Registration/Resigstration";
const Header = () => {


  const [user] = useAuthState(auth)
  const logOut = () => {
    signOut(auth)
  }

  
  return (
    <nav>
      <img
        className="logo"
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/c3/28/0e/c3280e23-de94-22dd-3c5e-c6c0ce5d0cdf/source/60x60bb.jpg"
        alt=""
      />
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/calculator">Calculator</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/users">Users</NavLink>

        <div>
          {
            user ? 
            (<NavLink onClick={logOut}>LogOut</NavLink>) 
            : 
            (<div className="dropdown">
            <summary>Login & Register</summary>
            <div className="dropdown-content">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Register</NavLink>
            </div>
          </div>)
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
