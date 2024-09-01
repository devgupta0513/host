import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './compo/HomePage';
import Contact from './compo/Contact';
import Career from './compo/Career';
import About from './compo/About';
import ChatPage from './compo/ChatPage.jsx';
import Redirected from './compo/Redirected.jsx';
import NavBar from './compo/NavBar.jsx';

function App() {
  return (
    <>
<div className='app'>
      <NavBar  />
      <Routes>
        <Route path='/' element={<Redirected/>} />
        
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
</div>
    </>
  );
}

export default App;
