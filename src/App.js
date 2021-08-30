import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
import './app.scss';
import {useState} from 'react'
function App() {
  const[menuOpen,setMenuOpen] =useState(false);
  return (
    <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className='sections'>
     <Intro />
     <Portfolio />
     <Contact />
     </div>
    </div>
  );
}

export default App;
