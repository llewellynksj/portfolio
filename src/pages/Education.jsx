import React from 'react'
import Qualification from '../components/Qualification';
import Certificate from '../components/Certificate';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Education = () => {
  return (
    <div className="bg-light w-100 my-4 py-4">
      <Container>
        <h1 className='text-center p-4 m-2'>Education</h1>
        

        <Row className="flex-column flex-lg-row justify-content-center mt-3">
          <Col className='d-flex flex-column justify-content-center align-items-center'>
            
            <h4>Professional</h4>
            <Qualification title="Level 5 (EQF) Diploma in Full Stack Software Development" institution="Code Institute" year="2024" grade=" Merit" />

            <h4 className='mt-4'>Higher Education</h4>
            <Qualification title="BA(Hons) Politics with Sociology" institution="Kingston University" year="2013" grade="2:1" />

            <h4 className='mt-4'>Secondary Education</h4>
            <Qualification title="A-Levels" institution="Torquay Grammar School for Girls" year="2004" grade="BCC" />
            <Qualification title="GCSEs" institution="Torquay Grammar School for Girls" year="2002" grade="10 B-C, including English, Maths and Science" />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h4>Professional Certificates</h4>
            <h6 className='mb-1'><strong>HackerRank:</strong></h6>
            <ul>
              <li><Certificate title="Python (Basic)" /></li>
              <li><Certificate title="CSS" /></li>
              <li><Certificate title="Problem Solving (Basic)" /></li>
            </ul>
            <br />
            <h6 className='mb-1'><strong>LinkedIn Skills Assessment:</strong></h6>
            <ul>
              <li><Certificate title="HTML" /></li>
              <li><Certificate title="CSS"/></li>
              <li><Certificate title="Django" /></li>
            </ul>
            <br />
            <h6 className='mb-1'><strong>Hackathons - awarded by Canva Credentials (Badgr):</strong></h6>
            <ul>
              <li><Certificate title="November 2022 Hybrid Hackathon Participant" /></li>
              <li><Certificate title="April 2023 Hybrid Hackathon Participant" /></li>
              <li><Certificate title="May 2023 Virtual Hackathon 3rd Place" /></li>
              <li><Certificate title="April 2024 Hybrid Hackathon 2nd Place" /></li>
            </ul>
          </Col>
        </Row>


      </Container>
    </div>
  )
}

export default Education