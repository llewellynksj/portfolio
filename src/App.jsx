import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';

// Bootstrap
import { Container } from 'react-bootstrap';


function App() {

  return (
    <>
      <div>
        <NavBar />
        
          <Home />
          <About />

      </div>
      
    </>
  )
}

export default App;
