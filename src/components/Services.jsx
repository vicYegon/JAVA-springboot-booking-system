import React from 'react';
import Servicesbox from './Servicesbox';
import simage1 from '../images/11.png';
import simage2 from '../images/12.png';
import simage3 from '../images/2.5.png';
import simage4 from '../images/2.6.png';

function Services() {
  return (
    <div id='services'>
      <h1>SERVICES OFFERED</h1>
      <div className='a-container'>
        <Servicesbox  image={simage1} title="Nail Polishing" infor="Make both your nails (fingers and toes) look beautiful and professional."/>
        <Servicesbox  image={simage2} title="Pedicure" infor="Relax your leg muscles after a long day's work."/>
        <Servicesbox  image={simage3} title="Manicure" infor="Relax and prepare your hands and nails for a perfect nail care & polish experience."/>
        <Servicesbox  image={simage4} title="Feet Waxing" infor="Moisture and soften your feet."/>
      </div>
    </div>
  )
}

export default Services
