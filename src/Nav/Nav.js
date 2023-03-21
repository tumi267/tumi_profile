import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css'
import { useNavigate } from 'react-router-dom';
import info from '../Info'
function Nav() {
    const [hov,setHov]=useState(false);
    const nav =useNavigate()
  
    const changeText=(e)=>{
      setHov(!hov)
  }
      const burger=()=>{
       document.documentElement.style.setProperty('--menu','block')
    }
    const burgerclose=()=>{
      document.documentElement.style.setProperty('--menu','none')
   }
  return (
    <div className='icon'>
        <MenuIcon onClick={()=>{burger()}}/>
    <div className='nav_menu_back' onClick={()=>{burgerclose()}}>
    <div className='nav_menu' onMouseLeave={()=>{changeText()}}>
    <h3 className='contact_nav_item' onClick={()=>{nav('/History')}}>History</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Reff')}}>Reference</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Media')}}>Media</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/About')}}>About</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Sites')}}>Sites</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/Contact')}}>Contact</h3>
    <h3 className='contact_nav_item' onClick={()=>{nav('/')}}>Home</h3>
    </div>

        </div>
    </div>
  )
}

export default Nav