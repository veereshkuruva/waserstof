import React from 'react'
import { useState } from 'react'
import Dashboard from '../components/Dashboard'
import './addpage.css'
import axios from 'axios';

const AddPage = () => {
  
  const [topic, setTopic] = useState('')

  const [todo, setTodo] = useState([])
  const[desc,setDesc] =useState('')
 


  const clickHandanler =() =>{
      
     if(!topic){

     }else{
      setTodo([...todo,topic,desc])
      setTopic("")
     
     }
   
   }

  return (
    <div className='container'>
      <h4>Add Topic</h4>
      <div className='add-topic'>

         <input type='text' value={topic}
         onChange={(e)=>setTopic(e.target.value)} placeholder='topic'/>
         <br/>
       
             <textarea type='text' placeholder='desc'
             value={desc} onChange={(e)=>setDesc(e.target.value)} style={{height:"100px"}}/>
             <br/>
            <button onClick={clickHandanler} className='btn'>Add</button>
        
     {

        todo.map((ele)=>{
            return (
              <li>{ele}</li>
            )
           
      })
     }
      </div>
    </div>
  )
}

export default AddPage