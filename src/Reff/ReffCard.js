import React from 'react'
import './Reff.css'
function ReffCard({COMPANY,NAME,POSITION,CONTACT}) {
  return (
    <div className='Reff_card'>
      <h2>{COMPANY}</h2>
      <p>{NAME}</p>
      <p>{POSITION}</p>
      <p>{CONTACT}</p>
    </div>
  )
}

export default ReffCard