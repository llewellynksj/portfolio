import SkillGrid from './skills/SkillGrid';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center p-4 m-2'>About</h1>
        
        <Row className="flex-column flex-lg-row-reverse justify-content-center">
          <Col lg={4}>
            <p className='lead text-center'>Tech Stack</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit a nesciunt. Dolorem aspernatur similique dicta rerum vero nam. Voluptas vero quis mollitia eligendi cum sed placeat rem animi quo.</p>
          </Col>
          <Col className='pt-4 mt-4'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit a nesciunt. Dolorem aspernatur similique dicta rerum vero nam. Voluptas vero quis mollitia eligendi cum sed placeat rem animi quo.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit a nesciunt. Dolorem aspernatur similique dicta rerum vero nam. Voluptas vero quis mollitia eligendi cum sed placeat rem animi quo.</p>

            <p className='lead pt-3'>Background</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit a nesciunt. Dolorem aspernatur similique dicta rerum vero nam. Voluptas vero quis mollitia eligendi cum sed placeat rem animi quo.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit a nesciunt. Dolorem aspernatur similique dicta rerum vero nam. Voluptas vero quis mollitia eligendi cum sed placeat rem animi quo.</p>
          </Col>
        </Row>

        <Row>
          <SkillGrid />
        </Row>

      </Container>
    </div>
  )
}

export default About