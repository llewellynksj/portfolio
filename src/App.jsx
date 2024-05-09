import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';

// Bootstrap
import { Container } from 'react-bootstrap';


function App() {

  return (
    <>
      <div>
        <NavBar />
        
          <Home />
          <About />
          <Projects />
          <Education />

      </div>
      
    </>
  )
}

export default App;
