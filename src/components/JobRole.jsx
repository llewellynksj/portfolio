import React from 'react';

// Styles
import s from '../styles/JobRole.module.css';

const JobRole = ({ job_title, start_date, end_date, employer, description, skills, web_link, screenshot1, screenshot2 }) => {
  return (
    <div>
      <h6 className="mb-0"><strong>{job_title}</strong></h6>
      <p className="mb-0">{employer}</p>
      <p>{start_date} - {end_date}</p>
      <p>{description}</p>
      <p>Key Skills: {skills}</p>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        {screenshot1 && <img src={screenshot1} alt="screenshot" className={`${s.JobRoleImg}`} />}
        <br />
        {screenshot2 && <img src={screenshot2} alt="screenshot" className={`${s.JobRoleImg}`} />}
        <br />
        {web_link && <a href={web_link} target="_blank" rel="noopener" aria-label="visit related website (opens in new tag)">Visit Website</a>}
      </div>
    </div>
  );
};

export default JobRole;
