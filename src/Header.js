import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='headerItem'>
                <h3>Faraj.Sharman</h3>
                <h4>Full Stack Web Developer</h4>
            </div>
            <ul className='headerItem'>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
           
        </div>
    );
}