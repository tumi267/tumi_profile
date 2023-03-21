import React from 'react'
import './Site.css'

function Sites() {

  return (
    <div >
    <h1 className='header'>Sites</h1>
    <div className='site_contain'>
   
    <div className='frame_perant' onClick={()=>{
      window.location.replace("https://tumi267.github.io/panel_beter_exapmle/")
    }}>
    <h2 className='frame_perant_link'>click to see full site</h2>
    <iframe className='site' src="https://tumi267.github.io/panel_beter_exapmle/" 
    scrolling="no" 
    title='panel-beter'
    height='300px'
    ></iframe>
    </div>
    <div className='frame_perant' onClick={()=>{
      window.location.replace("https://tumi267.github.io/barber/")
    }}>
    <h2 className='frame_perant_link'>click to see full site</h2>
    <iframe className='site' src="https://tumi267.github.io/barber/" 
    scrolling="no" 
    title='barber'
    height='300px'
    ></iframe>
    </div>
    <div className='frame_perant' onClick={()=>{
      window.location.replace("https://tumi267.github.io/jozi/")
    }}>
    <h2 className='frame_perant_link'>click to see full site</h2>
    <iframe className='site' src="https://tumi267.github.io/jozi/" 
    scrolling="no" 
    title='jozi' 
    height='300px'
    ></iframe>
    </div>
    <div className='frame_perant' onClick={()=>{
      window.location.replace("https://tumi267.github.io/tesla-clone/")
    }}>
    <h2 className='frame_perant_link'>click to see full site</h2>
    <iframe className='site' src="https://tumi267.github.io/tesla-clone/" 
    scrolling="no" 
    title='telsa clone' 
    height='300px'
    ></iframe>
    </div>
    </div>

    
    </div>
  )
}

export default Sites