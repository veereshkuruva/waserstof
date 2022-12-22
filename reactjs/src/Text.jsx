import React from 'react'
import { useState } from 'react'

const Text = () => {
  const [state, setState] = useState([
    'Hello world people',
    'Hello there guys',
    'Some random text Here',
  ]);

  const [showHoverWindow, setShowHoverWindow] = useState(false);
  const changeColor = (event) => {
   
    var target = event.target;

    var parent = target.parentElement; 
    var grandPArent = parent.parentElement;
    grandPArent.style.color = 'red';
    grandPArent.style.border ="2px solid red"
    const randomPercentage = Math.floor(Math.random() *14)
    
      alert(randomPercentage)
  };
  const changeGreeen = (event) => {
   
    var target = event.target;

    var parent = target.parentElement; 
    var grandPArent = parent.parentElement;
    grandPArent.style.color = 'green';
    grandPArent.style.border ="2px solid green";
    const randomPercentage = Math.floor(Math.random() *10)
    alert(randomPercentage)
  };
  const changeBlue = (event) => {
    
    var target = event.target;

    var parent = target.parentElement; 
    var grandPArent = parent.parentElement;
    grandPArent.style.color = 'blue';
    grandPArent.style.border ="2px solid blue";
    const randomPercentage = Math.floor(Math.random() *6)
    alert(randomPercentage)
  };
  return (
    <div>
      {state.map((ele) => (
        <>
          <div className="tooltip">
            {`${ele},`}
            <span class="tooltiptext">
              <button onClick={changeColor}>Red Color</button>
              <button onClick={changeGreeen}>Green Color</button>
              <button onClick={changeBlue}>Blue Color</button>
            </span>
          </div>
        </>
      ))}
    </div>
  )
}

export default Text