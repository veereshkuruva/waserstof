
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import data from '../../src/username'
import { useNavigate } from 'react-router-dom'
const Render = () => {
  const navigate = useNavigate();
const clickHa =()=>{
 
navigate('/text')

}
  return (
    <div>
        {
           data.map((item)=>{
             return (
              <li key={item.id}>{item.name}:<span>{item.percentage} <button onClick={clickHa}>Edit</button></span> </li>
             )
           })
        }

    </div>
  )
}

export default Render