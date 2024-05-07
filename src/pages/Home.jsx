import image from '../assets/image.webp';
import s from "../styles/Home.module.css";

// Bootstrap
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <Container className={`${s.HomeContainer}`}>
      <Row className="flex-column flex-lg-row-reverse justify-content-center align-items-center">
        <Col>
          <Image className={`p-2`} src={image} alt="Kate Llewellyn" fluid/>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit a nesciunt. Dolorem aspernatur similique dicta rerum vero nam. Voluptas vero quis mollitia eligendi cum sed placeat rem animi quo.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;