import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Contact from './Contact/Contact'
import History from './History/History';
import Reff from './Reff/Reff';
import About from './About/About'
import Media from './Media/Media'
import Sites from './Sites/Sites';
import './index.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter >
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/History' element={<History/>}/>
  <Route path='/Reff' element={<Reff/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Media' element={<Media/>}/>
  <Route path='/Sites' element={<Sites/>}/>
  </Routes>
  </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
