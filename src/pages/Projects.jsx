import React from 'react'
import Project from './projects/Project';
import inkpad_vid from '../assets/inkpad_vid.mp4';

// React Icons
import { FaGithub } from "react-icons/fa";

// Styles
import s from '../styles/Projects.module.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Projects = () => {
  return (
    <div className="bg-light w-100 my-4 py-4">
      <Container>
        <h1 className='text-center pb-2 m-2'>Projects</h1>
        <div className='d-flex justify-content-center'>
          <a href="https://github.com/llewellynksj" target="_blank" rel="noopener" aria-label="visit Github profile (opens in new tag)" className=''><FaGithub size={25} className={`${s.SocialIcon}`}/></a>
        </div>
        <p className='pt-4 text-center'>Below are the details of my Portfolio projects completed as a part of my Level 5 EQF Diploma in Full Stack Software Development (Nov 2022 - March 2024) </p>
        <Row className='flex-column flex-md-row my-3 py-3'>
          <Project title='InkPad' project_video={inkpad_vid} github_link='https://github.com/llewellynksj/pp5-kl' live_link="https://pp5-kl-c6a010106309.herokuapp.com/" description='InkPad is social media platform designed to share, explore and connect with a community of users. The core aim of this web application is to promote and share tattoo designs, and to connect tattoo enthusiasts, artists, and admirers alike.' extra_description='Users will be able to browse and search through posts. They will be able to create their own posts, and attach tags to these to help others to find certain categories more easily. They will also be able to comment on eachothers posts, and to follow/be followed by other users.' />
        </Row>
        <Row className='flex-column flex-md-row-reverse my-3 py-3'>
          <Project title='Little White Dress' project_video={inkpad_vid} github_link='https://github.com/llewellynksj/little-white-dress?tab=readme-ov-file' live_link="https://little-white-dress-ad94e830edef.herokuapp.com/" description="Little White Dress has been created in line with a business idea, and as such the UX and UI have been developed closely with the prospective business owner's input throughout. A strong brand identity has been central to decisions around typography, imagery, and colours to create a feeling of sophisticated luxury but with a welcoming warmth." extra_description=" The main purposes of the webpage is to provide visitors with the ability to view products for sale, book appointments, and join a community of other brides. The site has been built with a mobile-first responsive design. The needs of the user and the brand identity have been kept at the forefront of the design process." />
        </Row>
      </Container>
    </div>
  )
}

export default Projects