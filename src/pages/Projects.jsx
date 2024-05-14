import React from 'react'
import Project from './projects/Project';
import inkpad_vid from '../assets/inkpad_vid.mp4';
import kitchen_vid from '../assets/kitchen_vid.mp4';
import mama_vid from '../assets/mama_vid.mp4';
import lwd_vid from '../assets/lwd_vid.mp4';

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
        <p className='pt-4 text-center'>As part of my Level 5 Diploma in Full Stack Software Development I completed 5 Portfolio projects showcasing skills in HTML, CSS, Bootstrap, JavaScript, Python, Django, DRF, and ReactJS. Below are what I consider to be the projects I am most proud of. To see all of my Portfolio projects visit my <a href="https://github.com/llewellynksj" target="_blank" rel="noopener" aria-label="visit Github profile (opens in new tag)">Github page</a></p>
        <Row className='flex-column flex-md-row my-3 py-3'>
          <Project 
          title='Little White Dress' 
          project_video={lwd_vid}
          tech_stack={'Django, Python, JavaScript, Bootstrap, HTML, CSS, Heroku, PostgreSQL, Git'}
          github_link='https://github.com/llewellynksj/little-white-dress?tab=readme-ov-file' 
          live_link="https://little-white-dress-ad94e830edef.herokuapp.com/" 
          description="Little White Dress has been created in line with a business idea, and as such the UX and UI have been developed closely with the prospective business owner's input throughout. A strong brand identity has been central to decisions around typography, imagery, and colours to create a feeling of sophisticated luxury but with a welcoming warmth." 
          extra_description="The main purposes of the webpage is to provide visitors with the ability to view products for sale, book appointments, and join a community of other brides. The site has been built with a mobile-first responsive design. The needs of the user and the brand identity have been kept at the forefront of the design process." />
        </Row>
        <Row className='flex-column flex-md-row-reverse my-3 py-3'>
          <Project 
          title='InkPad' 
          project_video={inkpad_vid} 
          tech_stack={'Django Rest Framework, React, JavaScript, Bootstrap, HTML, CSS, Heroku, PostgreSQL, Git'}
          github_link='https://github.com/llewellynksj/pp5-kl' live_link="https://pp5-kl-c6a010106309.herokuapp.com/" description='InkPad is social media platform designed to share, explore and connect with a community of users. The core aim of this web application is to promote and share tattoo designs, and to connect tattoo enthusiasts, artists, and admirers alike.' 
          extra_description='Users will be able to browse and search through posts. They will be able to create their own posts, and attach tags to these to help others to find certain categories more easily. They will also be able to comment on eachothers posts, and to follow/be followed by other users.' />
        </Row>
        <Row className='flex-column flex-md-row my-3 py-3'>
          <Project 
          title='Kitchen Catastrophe' 
          project_video={kitchen_vid}
          tech_stack={'JavaScript, HTML, CSS, Github Pages, Git'}
          github_link='https://github.com/llewellynksj/kitchen-catastrophe' 
          live_link='https://llewellynksj.github.io/kitchen-catastrophe/' 
          description="Kitchen Catastrophe is a word game aimed at providing light entertainment while also serving to test and better user's knowledge of food and drink vocabulary. This game was created using JavaScript." 
          extra_description="Levels begin with 4 and 5 letter words in both the food and drink categories. These build to 5 and 6 letter words in levels 3 and 4. When the user reaches level 5, their unscrambling skills and foodie knowledge is put to the test with a new category; cooking methods. Finally the last level reuires 10 letter words to be solved!" />
        </Row>
        <Row className='flex-column flex-md-row-reverse my-3 py-3'>
          <Project 
          title='Mama & Cub' 
          project_video={mama_vid}
          tech_stack={'HTML, CSS, Github Pages, Git'} 
          github_link='https://github.com/llewellynksj/muma-and-cub' 
          live_link='https://llewellynksj.github.io/muma-and-cub/index.html' 
          description='The first web development project I completed, Mama & Cub is a simple to use website aimed at bringing together parents and their children in the Exeter area. The site is targeted towards mums who are looking for support from their peers and community. Mama & Cub was built using HTML and CSS.' 
          extra_description='The site has been built with a mobile-first responsive design. Keeping the needs of the user at the forefront of the design process particularly in the strategy and scope development stages.
          New parents are likely to have little time and little energy. Therefore the focus around the design of this website has been to keep things simple, clean and calm.' />
        </Row>
       
      </Container>
    </div>
  )
}

export default Projects