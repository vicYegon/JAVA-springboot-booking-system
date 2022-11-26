import React from 'react';
import aboutpic from '../images/about2.png';

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutpic} />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          YeeWins Beauty Palour is located in Ruaka alongside Limuru Western Road. 
          It was launched in Feb,2022 and has since grown to be of service to many clients 
          both from Ruaka and mostly from Nairobi county. 
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
