import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './dash.css'
import Render from './Render';


const Dashboard = () => {
    
  return (

    <div className='dashboard'>
     <Link to='/addpage'><button className='addbtn'>AddPage</button></Link>
     <Render/>
         </div>
   
  )
}

export default Dashboard