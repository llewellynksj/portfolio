import React, { useState } from 'react';
// import './Skill.css';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Skill = ({ name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='my-2'>
      <Card className={`skill-card ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Card.Body>
          {isHovered ? (
            <Card.Text>{description}</Card.Text>
          ) : (
            <Card.Title>{name}</Card.Title>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Skill;