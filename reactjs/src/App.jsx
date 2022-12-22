import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import AddPage from './components/AddPage';
import Dashboard from './components/Dashboard';
import LandPage from './components/LandPage';
import Text from './Text';


const App = () => {
  return (
    
    <div>  
        <Routes>
        <Route path='/' element={<LandPage/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='/addpage' element={<AddPage/>}/>
          <Route path='/text' element={<Text/>}/>
        </Routes>
           
    </div>
  )
}

export default App;