import React from 'react';
import Background from './background.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='text block'> 
      <h1>Faraj Sharman</h1>
      <p>Web Developer</p>
       <img src={Background} alt='waterfall'/>    
       
    </div>    
    </div>
  );
}

export default App;
