import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

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
          <p className='lead pt-3'>Soft Skills</p>
          
        </Row>

      </Container>
    </div>
  )
}

export default About