import React, { useEffect, useState } from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
function Home() {
    const [hov,setHov]=useState(false);
    const [num,setNum]=useState(0);
    const [ani,setAni]=useState(false)
    const nav =useNavigate()

    const changeText=(e)=>{
        setHov(!hov)
        setNum(e)
        setAni(true)
    }

    useEffect(()=>{
      
    },[hov])
  return (
    <div className='Home_contain'>
        <div className='Home_left'>
        <div>
        {hov!==false&&num==1?<h1 className='Namelink' onMouseLeave={()=>{changeText(0)}} onClick={()=>{nav('/About')}}>about</h1>:ani===false?<h1 className='Namelink infirst' onMouseOver={()=>{changeText(1)}} >Hello</h1>:<h1 className='Namelink' onMouseOver={()=>{changeText(1)}} >Hello</h1>} 
        </div>
        <div>
        {hov!==false&&num==2?<h1 className='Namelink' onMouseLeave={()=>{changeText(0)}} onClick={()=>{nav('/History')}}>work</h1>:ani===false?<h1 className='Namelink2 insec' onMouseOver={()=>{changeText(2)}}>I am</h1>:<h1 className='Namelink2' onMouseOver={()=>{changeText(2)}}>I am</h1>}
        </div>
        <div>
        {hov!==false&&num==3?<h1 className='Namelink' onMouseLeave={()=>{changeText(0)}} onClick={()=>{nav('/Contact')}}>contact</h1>:ani===false?<h1 className='Namelink2 inthird' onMouseOver={()=>{changeText(3)} }>Itumeleng</h1>:<h1 className='Namelink2' onMouseOver={()=>{changeText(3)}}>Itumeleng</h1>}    
        </div>
        </div>
        <div className='Home_right'></div>
    </div>
  )
}

export default Home