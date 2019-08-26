import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contacts';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { toggleClassName } from './ToggleFn';

function App() {
  return (
    <Router>
      <div className='grid-container'>

        <Home></Home>
        <About></About>
        <Skills></Skills> 
        <Project></Project>
        <Contact></Contact>
        <Header></Header>
        <div className="menu-icon" onClick={() => toggleClassName('header', 'active')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
        </div>
      </div>

    </Router>
  );
}



export default App;