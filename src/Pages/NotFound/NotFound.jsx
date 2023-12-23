import React from 'react'
import rocket from "../Users/User.module.css"

const NotFound = () => {
  return (
    <div className={rocket.e404}>
      <img src={"/src/assets/image/404.gif"} alt="" />
    </div>
  )
}

export default NotFound