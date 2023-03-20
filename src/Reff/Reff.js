import React, { useEffect, useState } from 'react'
import info from '../Info'
import { useNavigate } from 'react-router-dom';
import './Reff.css'
import ReffCard from './ReffCard';
function Reff() {
  const [hov,setHov]=useState(false);
  const changeText=()=>{
    setHov(!hov)
}
useEffect(()=>{},[hov])
  const nav =useNavigate()
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
    <div className='nav'>
    {hov===true?<div onMouseLeave={()=>{changeText()}}>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Contact')}}>Contact</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Reff')}}>Reference</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Media')}}>Media</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/About')}}>About</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Sites')}}>Sites</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/')}}>Home</h3>
    </div>:<div onMouseOver={()=>{changeText()}}><h3>{info.NICKNAME}</h3></div>}
    </div>
    </div>
  )
}

export default Reff

