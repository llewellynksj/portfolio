import React from 'react';
import Skill from './Skill';
// import './SkillGrid.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const skillsData = [
  { name: 'Communication', description: 'Effective communication is the ability to convey information clearly and concisely.' },
  { name: 'Teamwork', description: 'Working collaboratively with others towards a common goal.' },
  // Add more skills as needed
];

const SkillGrid = () => {
  return (
    <Container className='mb-4 mt-2'>
      <p className='lead pt-3'>Soft Skills</p>
      <div className="skill-grid">
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} description={skill.description} />
        ))}
      </div>
    </Container>
  );
};

export default SkillGrid;
