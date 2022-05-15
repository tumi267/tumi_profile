import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import './App.css'
import Contact from './Contact/Contact'
import History from './History/History';
import Reff from './Reff/Reff';
import About from './About/About'
import Media from './Media/Media'
function App() {
  return (

<BrowserRouter >

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/History' element={<History/>}/>
<Route path='/Reff' element={<Reff/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Media' element={<Media/>}/>
</Routes>

</BrowserRouter>

  );
}

export default App;
