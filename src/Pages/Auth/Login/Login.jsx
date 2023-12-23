import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <img src={"/src/assets/image/register.gif"} alt="" />
      <NavLink to="/">
      <button>Back</button>
      </NavLink>
    </div>
  )
}

export default Login
