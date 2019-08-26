import React from 'react';
// import {  } from 'react-animated-text'; 

import './Home.css';
export default function Home() {
    return (
        <div id='home'>
            <div className="containerHome">
                <div className='homeIconContainer'>
                    <li className='item telephone' onClick={() => window.open("tel:07706022514")} />
                    <li className='item email' onClick={() => window.open('mailto:farajsharman@yahoo.com')} />
                    <li className='item github' onClick={() => window.open('https://github.com/farajsharman')} />
                    <li className='item linkedin' onClick={() => window.open('https://www.linkedin.com/in/farajsharman/')} />
                </div>
                <div className='details'>
                    <div className='name'>
                        {/* <animation for name  */}
                            id='ni'
                            text='FARAJ SHARMAN'
                            // iterations= {4} 
                            effect="stretch"
                            delay={3}
                            effectChange={2} />
                    </div>
                    <div className='detailContent'>
                        {/* <animation for text */}
                            text='London based Full-Stack Software Developer'
                            // iterations= {10}
                            delay={6}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}