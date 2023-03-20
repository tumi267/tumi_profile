import React, { useEffect, useState } from 'react'
import './Contact.css'
import info from '../Info'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {useNavigate} from 'react-router-dom'
function Contact() {
  const [phone,setPhone]=useState(false);
  const [email,setEmail]=useState(false);
  const [hov,setHov]=useState(false);
  const nav =useNavigate()

  const changeText=(e)=>{
    setHov(!hov)
}
  useEffect(()=>{},[])
  return (
    <div className='Contact_contain'>
    <div className='Contact_content'>
      <div>
      <h1 className='Contact_title1'>lets make</h1>
      </div>
      <div>
      <h1 className='Contact_title'>Something Great</h1>  
      </div>
    <div>
    <h1 className='Contact_title3'>Contact</h1>
      <div className='Contact_title2'>
      </div>
      <h1 className='Contact_name'>{info.NAMES.map((e,i)=>{return <p key={i} className='Contact_Title_name'>{e}</p>})}</h1>
      <h1 className='Contact_lastname'>{info.SURNAME}</h1>
    </div>
    
      <div>Get a hold of {info.NICKNAME} @
      {phone===false?<PhoneIcon onClick={()=>{setPhone(true)}}/>:<div onClick={()=>{setPhone(false)}}>{info.CONTACT_NUMBERS} </div>}
      {email===false?<EmailIcon onClick={()=>{setEmail(true)}}/>:<div onClick={()=>{setEmail(false)}}>{info.EMAIL}</div>}
      </div>   
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
  )
}

export default Contact