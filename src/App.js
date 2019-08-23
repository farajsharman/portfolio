import React from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Header from './Header';
import self from './20141127_120312.jpg';
import { BrowserRouter as Router } from 'react-router-dom';

  function App() {  
  return (
    <Router>
        <div id='home'>
            <div className="containerHome">
                <ul className='homeIconContainer'>
                    <li className='item telephone' onClick={() => window.open("tel:07706022514")}>Telephone</li>
                    <li className='item email' onClick={() => window.open('mailto:farajsharman@yahoo.com.')}>email</li>
                    <li className='item github' onClick={() => window.open('https://github.com/farajsharman')}>Github</li>
                    <li className='item linkedin' onClick={() => window.open('https://www.linkedin.com/in/farajsharman/')}>Linkedin</li>
                </ul>
                <div className='details'>
                    <div className='name'>
                        
                    </div>
                    <div className='detailContent'>
                        Full-Stack Software Developer Based In London
                    </div>
                </div>
            </div>
        </div>
       
       </Router> 
     );
  }
export default App;
/* 
                            id='Fa'
                            text='FARAJ SHARMAN'
                            // iterations= {4} 
                            effect="stretch"
                            delay={3}
                            effectChange={2} /> 
                            /iterations= {10}
                            delay={5}*/
                            