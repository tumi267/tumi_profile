import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import info from '../Info';
import './History.css'
function History() {
  const [work,setWork]=useState(false)
  const [edu,setEdu]=useState(false)

const displayWork=()=>{
  setWork(!work)
}
const displayedu=()=>{
  setEdu(!edu)
}
  useEffect(()=>{},[work,edu])
  return (
    <div className='History_contain'>
    <div className='History_content'>
    <div><h1>Contact</h1></div>
      <h1 className='History_title'>{info.NAMES} {info.SURNAME}</h1>
      <h2 className='History_title'> also known as {info.NICKNAME}</h2>
      <h2 className='History_title'>Born {info.DATE_OF_BIRTH}</h2>
    <div className='History_btn'>
    <Button variant="outlined" color="error" size="large" onClick={displayedu} >Education</Button> 
    <Button variant="outlined" color="success" size="large" onClick={displayWork}>Work</Button>
    </div>
      
      {edu===true?<div className='History_edu'>
        {info.EDUCATION.map((e,i)=>{return <div key={i} className='History_edu_card'><p><strong>{e.SCHOOL}</strong></p>
        <p>{e.QUALFICATION}</p>
        <p>completed : {e.YEAR_OF_COMPLETION}</p>
        </div>})}
      </div>:null}
          
      {work===true?<div className='History_work'>
        {info.WORK.map((e,i)=>{
          info.WORK.sort((a, b)=>{return a.YEAR_START - b.YEAR_START});
          info.WORK.reverse();
          return <div key={i} className='History_work_card'><p><strong>{e.COMPANY}</strong></p>
        <p>{e.POSITION}</p>
        <p>{e.DUTIES}</p>
        <p>{e.YEAR_START}-{e.YEAR_END}</p>
        </div>})}
      </div>:null}
      
    </div>

    </div>
  )
}

export default History