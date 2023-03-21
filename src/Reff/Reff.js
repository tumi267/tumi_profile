import React from 'react'
import info from '../Info'

import './Reff.css'
import ReffCard from './ReffCard';
function Reff() {

  
  const duration = 1000; // ms
  const delay = 500; // ms
  const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;
  return (
    <div className='Reff_contain'>  
    <div className='Reff_title'><h1>References</h1> 
    <div className='Reff_content'>
      <div className="Reff_content">
      {info.reff.map((item, i) => (
        <div className='fader card' key={i} style={{ animation: animStr(i) }}>
          <ReffCard 
          COMPANY={item.COMPANY}
          NAME={item.NAME}
          POSITION={item.POSITION}
          CONTACT={item.CONTACT}
           />
        </div>
      ))}
    </div>
    </div>

    </div>

    </div>
  )
}

export default Reff

