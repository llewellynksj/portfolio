import React from 'react'

// React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  return (
    <div className="w-100 my-4 py-4">
      <Container>
        <h1 className='text-center p-4 m-2'>Contact</h1>
        <div className="d-flex justify-content-center align-items-center py-2">
          <p className='m-0'>Connect with me on LinkedIn</p>
          <a href="https://www.linkedin.com/in/llewellynksj/" target="_blank" rel="noopener" aria-label="visit LinkedIn profile (opens in new tag)" className='px-2'><FaLinkedin size={25} color="black" /></a>
        </div>
        <div className="d-flex justify-content-center align-items-center py-2">
          <p className='m-0'>Visit my Github Page</p>
          <a href="https://github.com/llewellynksj" target="_blank" rel="noopener" aria-label="visit Github profile (opens in new tag)" className='px-2'><FaGithub size={25} color="black" /></a>
        </div>
        <div className='d-flex justify-content-center'>
          <p className='pt-4'>Email me <a href="#">llewellyn.ksj@gmail.com</a></p>
        </div>
      </Container>
    </div>
  )
}

export default Contact