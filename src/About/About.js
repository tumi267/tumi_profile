import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import info from '../Info';
import './About.css'
function About() {
  const [hov,setHov]=useState(false);
  const nav =useNavigate()
  const changeText=()=>{
    setHov(!hov)
}
  return (
    <div className='About_contain'>
    <div className='About_content'>
    <div >
    <h1 className='About_Title'>About</h1>
    <div className='summery'>
    <img className='About_image' 
    src='https://firebasestorage.googleapis.com/v0/b/profile-78495.appspot.com/o/horse%20play.jpeg?alt=media&token=beaf568b-7b6a-474e-be6d-3361859ebe47'
    height={'300px'}
    width={'400px'} 
    alt='tumi'/>
    <div><p>{info.DESCRIPTION}</p></div>
    </div>
   
    <h3 className='About_Title'>Intrest</h3>  
    <div className='About_intrests'>
    
    <div className='About_intrests_items'>
    {info.INTRESTS.map((e,i)=>{return <div key={i} className='About_intrests_item'>{e}</div>})}
    </div> 
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

export default About