import React from 'react'
import loader from "../../assets/image/loader.gif"
import load from "./User.module.css"

const Loadding = () => {
  return (
    <div className={load.loaderContent}>
      <img className='loader' src={loader} alt="loader" />
    </div>
  )
}

export default Loadding