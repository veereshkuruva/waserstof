import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import './land.css'

const LandPage = () => {

  const [state, setState] = useState('')

  const changeHandler = (e) => {
    setState(e.target.value)

  }


  return (
    <div className='land-page'>
      <h4>This is LandPage</h4>
      <input type='text' value={state}
        onChange={changeHandler} />

      <Link to='/dash'><button>click</button></Link>
    </div>
  )
}

export default LandPage