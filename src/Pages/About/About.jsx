import React from 'react'
import message from "../Users/User.module.css"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Auth/Registration/Resigstration'

const About = () => {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div className={message.aboutM}>
      <span>{user?.photoURL?<img src={user?.photoURL}></img>:""}</span>
      <span>{user?.displayName?<h1>{user?.displayName}</h1>:""}</span>
    </div>
  )
}

export default About