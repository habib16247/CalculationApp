import React from 'react'
import connect from "../Users/User.module.css"

const Contact = () => {
  return (
    <div className={connect.phone}>
      <img className={connect.phoneI} src={"/src/assets/image/contact.gif"} alt="" />
    </div>
  )
}

export default Contact