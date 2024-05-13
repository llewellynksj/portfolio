import React from 'react';
import Skill from './Skill';

// Styles
import s from '../../styles/SkillGrid.module.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const skillsData = [
  { name: 'Communication', description: 'I believe this to be one of my strongest qualities. Communication is key to all success.' },
  { name: 'Teamwork', description: 'Working collaboratively with others towards a common goal.' },
  { name: 'Problem Solving', description: 'The ability to find solutions to complex problems.' },
  { name: 'Adaptability', description: 'The ability to adjust to new conditions and environments.' },
  { name: 'Organisation', description: 'The ability to plan and manage tasks efficiently.'},
  { name: 'Customer Service', description: 'I have over 10 years experience in Customer facing roles.' },
  { name: 'Creativity', description: 'The ability to think outside the box and come up with innovative solutions.' },
  { name: 'Critical Thinking', description: 'The ability to analyze and evaluate information to make informed decisions.' },
  { name: 'Empathy', description: 'The ability to understand and share the feelings of others.' },
  { name: 'Continuous Learning', description: 'The desire and ability to learn new skills and knowledge.' },
  
];

const SkillGrid = () => {
  return (
    <Container className={`mb-4 mt-2`}>
      <p className='lead pt-3'>Soft Skills</p>
      <Row xs={2} md={3} lg={4} xl={5} className='justify-content-center'>
        {skillsData.map((skill, index) => (
          <Col key={index} className={`${s.SkillCard} text-center`}>
            <Skill name={skill.name} description={skill.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillGrid;



