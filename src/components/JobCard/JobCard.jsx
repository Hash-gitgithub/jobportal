import React, { useEffect } from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'

function JobCard({ jobs, query }) {

  return (
    <>
      <Wrapper>
        {/* Job card content */}
        {jobs.filter((elem) => elem.title.toLowerCase().includes(query)).map((elem) => (
          <div key={elem.id} className="job-card">
            <div className="job-card__details">
              <h1 className="job-card__title">{elem.title} - {elem.company}</h1>
              <p className="job-card__info">
                {elem.type} - {elem.experience} - {elem.location}
              </p>
              <div className="job-card__skills">
                {elem.skills.map((item, index) => (
                  <p key={index} className="job-card__skill">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="job-card__actions">
              <a href={elem.job_link} target="_blank" rel="noopener noreferrer">
                <button className="job-card__apply">Apply</button>
              </a>
            </div>
          </div>
        ))}

      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
.job-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.job-card:hover {
  background-color: #f8f8f8;
  transform: scale(1.03); 
}

.job-card__details {
  flex-grow: 1;
}

.job-card__title {
  font-size: 1.125rem;
  font-weight: bold;
}

.job-card__info,
.job-card__posted {
  color: #808080;
}

.job-card__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.job-card__skill {
  padding: 4px 8px;
  border: 1px solid #ccc;
   background-color: #f0f0f0;
}

.job-card__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.job-card__apply {
  padding: 8px 16px;
  border: 1px solid #2980b9;
  border-radius: 4px;
  background-color: #2980b9;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.job-card__apply:hover {
  background-color: black;
}

.pagination {
  padding: 3px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid black;
}

.pagination__button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 4px;
  cursor: pointer;
}

.pagination__button.active {
  background-color: #2980b9;
  color: #fff;
}

.pagination__button:hover:not(.active) {
  background-color: #f0f0f0;
}
`;
export default JobCard