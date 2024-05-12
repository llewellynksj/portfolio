import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Employment from './pages/Employment';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <div>
        <NavBar />
        
          <Home />
          <About />
          <Projects />
          <Employment />
          <Education />
          <Contact />

      </div>
      
    </>
  )
}

export default App;
