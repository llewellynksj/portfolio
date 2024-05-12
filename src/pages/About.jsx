import SkillGrid from './skills/SkillGrid';

// React Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { DiHeroku } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

// Styles
import s from '../styles/About.module.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <>
      <Container>
        <h1 className='text-center p-4 m-2'>About</h1>
        
        <Row className="flex-column flex-lg-row-reverse justify-content-center">
          <Col lg={4} className='d-flex flex-column align-items-center'>
            <p className='lead text-center'>Tech Stack</p>
            <div className={`${s.TechStack} d-flex flex-lg-column`}>
              <div className='d-flex align-items-end'>
                <a href="" className='align-self-start'><FaHtml5 size={50} color="orange" /></a>
                <p className='m-2'>HTML5</p>
              </div>
              <div className="d-flex align-items-end">
                <p className='m-2'>CSS3</p>
                <a href="" className="align-self-end"><FaCss3Alt size={50} /></a>
              </div>
              <div className="d-flex align-items-end">
                <a href=""><FaPython size={50} color="green" /></a>
                <p className='m-2'>Python</p>
              </div>
              <div className="d-flex align-items-end">
                <p className='m-2'>JavaScript</p>
                <a href="" className="align-self-end"><SiJavascript size={50} color="yellow" /></a>
              </div>
              <div className="d-flex align-items-end">
                <p className='m-2'>Django</p>
                <a href=""><DiDjango size={50} /></a>
              </div>
              <div className="d-flex align-items-end">
                <a href="" className="align-self-end"><FaBootstrap size={50} color="purple" /></a>
                <p className='m-2'>Bootstrap</p>
              </div>
              <div className="d-flex align-items-end">
                <p className='m-2'>ReactJS</p>
                <a href=""><FaReact size={50} /></a>
              </div>
              <div className="d-flex align-items-end">
                <p className='m-2'>jQuery</p>
                <a href="" className="align-self-end"><DiJqueryLogo size={50} color="blue" /></a>
              </div>
              <div className="d-flex align-items-end">
                <a href=""><DiHeroku size={50} color="purple" /></a>
                <p className='m-2'>Heroku</p>
              </div>
              <div className="d-flex align-items-end">
                <p className='m-2'>Git</p>
                <a href="" className="align-self-end"><FaGitAlt size={50} color="red"/></a>
              </div>
              <div className="d-flex align-items-end">
                <a href=""><SiPostgresql size={50} color="blue"/></a>
                <p className='m-2'>PostgreSQL</p>
              </div>
            </div>
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
    </>
  )
}

export default About