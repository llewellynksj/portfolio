import React from 'react'

// Styles
import s from '../../styles/Project.module.css';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = ({ title, project_video, github_link, description, extra_description, live_link }) => {
  return (
    <>
      <Col>
        <h4>{title}</h4>
        <p>{description}</p>
        <p className={`d-none d-lg-block`}>{extra_description}</p>
        <div className="d-flex flex-column"></div>
        <div className="d-flex flex-column">
          <a href={github_link} target="_blank" rel="noopener" aria-label="visit Github repository (opens in new tag)">Github Repository</a>
          <a href={live_link} target="_blank" rel="noopener" aria-label="visit live project (opens in new tag)">Live Project</a>
        </div>
      </Col>
      <Col>
        <video width="320" height="240" controls className={`${s.ProjectVideo}`}>
          <source src={project_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Col>
    </>
  )
}

export default Project