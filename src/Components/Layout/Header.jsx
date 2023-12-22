import React from "react";
import { NavLink } from "react-router-dom";
import "../NavBar.css";
const Header = () => {
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
          <div className="dropdown">
            <summary>Login & Register</summary>
            <div className="dropdown-content">
              <a href="/login">Login</a>
              <a href="/signup">Register</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
