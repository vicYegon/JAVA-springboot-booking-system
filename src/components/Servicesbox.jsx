import React from 'react'

function Servicesbox(props) {
  return (
    <div className='a-box'>
        <div>
            <img src={props.image} alt='' />
        </div>
        <div>
            <h2>{props.title}</h2>
            <p>{props.infor}</p>
        </div>
    </div>
  )
}

export default Servicesbox
