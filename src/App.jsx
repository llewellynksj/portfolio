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
        
        <Container>
          <Home />
        </Container>
      </div>
      
    </>
  )
}

export default App;
