import image from '../assets/image.webp';
import s from "../styles/Home.module.css";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <div className="bg-light w-100 mb-4 pb-4">
      <Container className={`${s.HomeContainer}`}>
        <Row className="flex-column flex-lg-row-reverse justify-content-center align-items-center">
          <Col>
            <Image className={`p-2`} src={image} alt="Kate Llewellyn" fluid/>
          </Col>
          <Col className='pt-3'>
            <h1>Kate Llewellyn</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit a nesciunt. Dolorem aspernatur similique dicta rerum vero nam. Voluptas vero quis mollitia eligendi cum sed placeat rem animi quo.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;