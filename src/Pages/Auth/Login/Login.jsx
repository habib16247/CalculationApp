import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Login</h1>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  )
}

export default Login