import React, { useEffect, useState } from 'react'
import './Contact.css'
import info from '../Info'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
function Contact() {
  const [phone,setPhone]=useState(false);
  const [email,setEmail]=useState(false);

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

    
    </div>
  )
}

export default Contact