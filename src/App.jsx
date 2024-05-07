import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

// Bootstrap
import { Container } from 'react-bootstrap';


function App() {

  return (
    <>
      <div>
        <NavBar />
        
          <Home />
      </div>
      
    </>
  )
}

export default App;
