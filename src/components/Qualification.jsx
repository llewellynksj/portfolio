import React from 'react';

const Qualification = ({ title, institution, year, grade }) => {
  return (
    <>
      <h6 className="mb-0"><strong>{title}</strong></h6>
      <p className="mb-0">{institution}</p>
      <p>Awarded {grade}, {year}</p>
    </>
  );
};

export default Qualification;