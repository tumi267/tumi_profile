import React from 'react'
import info from '../Info';
import './About.css'
function About() {

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

    </div>
  )
}

export default About