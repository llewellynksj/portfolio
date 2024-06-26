import React from 'react'
import JobRole from '../components/JobRole';

  // React Icons
  import { FaLinkedin } from "react-icons/fa";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Employment = () => {
  return (
    <div className="w-100 my-4 py-4">
      <Container>
        <h1 className='text-center pt-4 m-2 pb-2'>Employment</h1>
        <div className='d-flex justify-content-center pb-4'>
          <a href="https://www.linkedin.com/in/llewellynksj/" target="_blank" rel="noopener" aria-label="visit LinkedIn profile (opens in new tag)" className=''><FaLinkedin size={25} color="black" /></a>
        </div>

        <Row className='flex-column justify-content-center align-items-center mt-3'>
          <Col className='pt-2'>
            < JobRole job_title="Centre for Computational Social Science Administrator" start_date="September 2018" end_date="Present" employer="University of Exeter" description="As the C2S2 Administrator I provide support to students and academic colleagues within the C2S2 Centre and across the University network. I have an in-depth knowledge of the C2S2 portfolio at Exeter and champion the delivery of this in collaboration with the wider computational sciences community.
            I also oversee the administration of C2S2's specialist proficiency award, as well as specialist programmes delivered in partnership with other HE institutions." skills="Database Administration, Finance Administration, Project Management, Problem Solving, Customer Service" />
            < JobRole job_title="Study Abroad Assistant" start_date="February 2018" end_date="September 2018" employer="University of Exeter" description="Assisting the central inbound study abroad team as well as college specific teams in order to increase mobility and promote exchanges between Exeter and other universities around the globe. Also assisting with the organisation of partner visits and various business duties as required." skills="Database Administration, Data Entry, Event Organisation" />
            < JobRole job_title="Customer Support Team Leader" start_date="February 2017" end_date="December 2017" employer="Explore Learniing" description="Ensuring the highest level of customer service was delivered to our clients and various stakeholders in line with the business' core values and beliefs. Assisting customers to meet the educational needs of their children and promoting a healthy and happy environment for learning." skills="Customer Service, Conflict Resolution, Leadership, Teamwork" />
            <h4 className='pt-1 pb-2 text-center'>Other Work</h4>
            < JobRole job_title="Website Developer" start_date="September 2023" end_date="December 2023" employer="University of Exeter" description="Within my role as the C2S2 Administrator, I have been able to take on a web development project for the Centre for Climate Communication and Data Science (c3ds) at Exeter University. In liaison with the Centre Directors I am designing a responsive website to showcase the new centre, it's team, research, publications, and events." skills="Django, Python, JavaScript, Bootstrap, HTML, CSS" web_link="https://c3ds-99d00e8e992e.herokuapp.com/" screenshot1="https://i.gyazo.com/61d50baa85d0e6341dc4e0625b0414e6.gif" screenshot2="https://i.gyazo.com/8649c77d44147828c68e33d23c4c3d46.gif" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Employment