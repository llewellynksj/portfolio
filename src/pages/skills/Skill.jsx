import React, { useState } from 'react';
import s from '../../styles/Skill.module.css';

// Bootstrap
import Card from 'react-bootstrap/Card';

const Skill = ({ name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={`my-2 ${s.FlipCard}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className={`${s.FlipCardInner}`}>
        <div className={`${s.FlipCardFront}`}>
          <p>{name}</p>
        </div>
        <div className={`${s.FlipCardBack}`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;