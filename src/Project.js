import React from 'react';
import './Project.css';
// import kodflix from './images/kodflix.png';
// import volunteerup from './images/.png';
// import collections from './images/.png';

export default function Project() {
    return (
        <div id='project'>
            <h1 className='title'>PROJECTS</h1>
            <div id='projectContainer'>
                <div className='projectItem' >
                    <img 
                        className='projectImg'  
                        src={require('./kodflix.image.jpg')}
                        alt='kodflix' 
                        onClick ={() => window.open('https://kodflix-farajsharman.herokuapp.com/')} 
                        title='click to view' 
                    />
                    <a 
                        className='projectLink'
                        href='https://github.com/farajsharman/kodflix' 
                        target='_blank' 
                        rel="noopener noreferrer"
                        title='Click to view code'>KODFLIX</a>
                </div>
                    <a 
                        className='projectLink'
                        href='https://github.com/farajsharman/kodflix' 
                        target='_blank' 
                        rel="noopener noreferrer"
                        title='Click to view code'>KODFLIX</a>
                </div>
        
    
<div>

   className='extra'

   href='https://github.com/farajsharman'
   target='_blank'
   rel='noopener noreferrer'
   title='to view more project'
   more
</div>

</div>


   );
}
