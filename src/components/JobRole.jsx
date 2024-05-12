import React from 'react';

const JobRole = ({ job_title, start_date, end_date, employer, description, skills, web_link }) => {
  return (
    <div>
      <h6 className="mb-0"><strong>{job_title}</strong></h6>
      <p className="mb-0">{employer}</p>
      <p>{start_date} - {end_date}</p>
      <p>{description}</p>
      <p>Key Skills: {skills}</p>
      {web_link && <a href={web_link} target="_blank" rel="noopener" aria-label="visit related website (opens in new tag)">Visit Website</a>}
    </div>
  );
};

export default JobRole;