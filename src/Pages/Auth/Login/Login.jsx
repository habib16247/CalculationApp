import React from 'react'
import { NavLink } from 'react-router-dom'
import register from "../../Users/User.module.css"

const Login = () => {
  return (
    <div className={register.logBG}>
      
      <NavLink className={register.btgh} to="/">
      <button className={register.backLog}>Back</button>
      </NavLink>
    </div>
  )
}

export default Login
