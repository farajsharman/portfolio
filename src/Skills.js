import React from 'react';
import bootstrap from './logo-image.js\bootstrap.png';
import css3 from './logo-images/css3.png';
import github from './logo-images/github.png';
import heroku from './logo-images/heroku.png';
import html5 from './logo-images/html5.png';
import javascript from './logo-images/javascript.png';
import react from './logo-images/react.png';
import nodejs from './logo-images/nodejs.png';
import wordpress from './logo-images/wordpress.png';
import'./Skills.css' ;
export default function About() {
    return (
        <div id='skills'>
            <h1 className='title'>SKILLS</h1>
             <div className='skillContainer'>
                <h2>Front End</h2>
                <div className='skillItem'>
                    <img className='skillIcon' src={css3} alt='a'></img>
                    <img className='skillIcon' src={html5} alt='b'></img>
                    <img className='skillIcon' src={javascript} alt='c'></img>
                    <img className='skillIcon' src={react} alt='d'></img>
               </div>
                <h2>Back End</h2>
                <div className='skillItem'>
                    <img className='skillIcon' src={nodejs} alt='f'></img>
                    <img className='skillIcon' src={mongoDb} alt='j'></img>
                    <img className='skillIcon' src={net} alt='o'></img>
                </div>
                <h2>Others</h2>
                <div className='skillItem'>
                    <img className='skillIcon' src={github} alt='g'></img>
                    <img className='skillIcon' src={latex} alt='z'></img>
                    <img className='skillIcon' src={heroku} alt='h'></img>
                    <img className='skillIcon' src={wordpress} alt='i'></img>
                </div>
            </div> 

        </div>
    );
}