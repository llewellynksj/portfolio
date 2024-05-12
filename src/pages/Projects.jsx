import React from 'react'
import { FaGithub } from "react-icons/fa";
import s from '../styles/Projects.module.css';

// Bootstrap
import Container from 'react-bootstrap/Container';

const Projects = () => {
  return (
    <div className="bg-light w-100 my-4 py-4">
      <Container>
        <h1 className='text-center p-4 m-2'>Projects</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic minus ducimus officiis soluta placeat, exercitationem harum! Debitis laudantium corporis alias, aliquam saepe laborum, ex ab facere cupiditate neque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio nesciunt corrupti maiores nostrum natus, dolores quibusdam iste placeat recusandae numquam. Modi, ipsam voluptatem repellat laboriosam quaerat quia iste fugit.</p>
        <div className='d-flex justify-content-center'>
          <a href="https://github.com/llewellynksj" target="_blank" rel="noopener" aria-label="visit Github profile (opens in new tag)" className=''><FaGithub size={25} className={`${s.SocialIcon}`}/></a>
        </div>
      </Container>
    </div>
  )
}

export default Projects