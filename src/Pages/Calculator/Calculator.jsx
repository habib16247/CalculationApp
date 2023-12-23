import React from 'react'
import calculate from "../Users/User.module.css"

const Calculator = () => {
  return (
    <div className={calculate.calContent}>
      <img className={calculate.calculation} src={"/src/assets/image/calculator.gif"} alt="" />
    </div>
  )
}

export default Calculator