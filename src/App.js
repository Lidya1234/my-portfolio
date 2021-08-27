import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from './components/Contact/Contact'
import './app.scss';

function App() {
  return (
    <div className="app">
     <Navbar />
     <div className='sections'>
     <Intro />
     <Portfolio />
     <Contact />
     </div>
    </div>
  );
}

export default App;
