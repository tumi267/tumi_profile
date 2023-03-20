import React, { useState } from 'react'
import './Site.css'
import info from '../Info'
import {useNavigate} from 'react-router-dom'
function Sites() {
    const [hov,setHov]=useState(false);
    const nav =useNavigate()
    const changeText=(e)=>{
        setHov(!hov)
    }
  return (
    <div >
    <h1 className='header'>Sites</h1>
    <div className='site_contain'>
    <div>
    <iframe className='site' src="https://tumi267.github.io/panel_beter_exapmle/" 
    scrolling="no" 
    title='panel-beter'
    height='300px'
    ></iframe>
    <iframe className='site' src="https://tumi267.github.io/barber/" 
    scrolling="no" 
    title='barber'
    height='300px'
    ></iframe>
    <iframe className='site' src="https://tumi267.github.io/jozi/" 
    scrolling="no" 
    title='jozi' 
    height='300px'
    ></iframe>
    <iframe className='site' src="https://tumi267.github.io/tesla-clone/" 
    scrolling="no" 
    title='telsa clone' 
    height='300px'
    ></iframe>
    </div>
    <div>
    {hov===true?<div onMouseLeave={()=>{changeText()}}>
    <h3 className='contact_nav_item' onClick={()=>{nav('/History')}}>History</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Reff')}}>Reference</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Media')}}>Media</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/About')}}>About</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Sites')}}>Sites</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/')}}>Home</h3>
    </div>:<div onMouseOver={()=>{changeText()}}><h3>{info.NICKNAME}</h3></div>}
    </div>
    </div>
    </div>
  )
}

export default Sites