import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

function SearchBar({ searchCriteria, onSearchChange, setquery, handleClearFilters}) {
   
    const handleInputChange = (event) => {
        onSearchChange(event);
    };

    return (
        <>
        <Wrapper>
        <div className='search-bar'>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setquery(e.target.value.toLowerCase())}
        className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
      />
      {/* <button onClick={thesearch}>search</button> */}
        </div>
        <div className='search-filters'>
            <select
                onChange={handleInputChange}
                name='jobRole'
                value={searchCriteria.jobRole}
                className='search-select'
            >
                <option value="" disabled hidden selected>
                    Job role
                </option>
                {/* ... your job role options */}
                <option value="iOS Developer">iOS Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
                <option value="Data Analyst">Data Analyst</option>
            </select>
            <select
                onChange={handleInputChange}
                name="jobType"
                value={searchCriteria.jobType}
                className='search-select'
            >
                <option value="" disabled hidden>
                    Job Type
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
            <select
                onChange={handleInputChange}
                name="location"
                value={searchCriteria.location}
                className='search-select'
            >
                <option value="" disabled hidden>
                    Location
                </option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select
                onChange={handleInputChange}
                name="experience"
                value={searchCriteria.experience}
                className='search-select'
            >
                <option value="" disabled hidden>
                    Experience
                </option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
            <button onClick={handleClearFilters} className='clear-filters-btn'>
            Clear Filters
          </button>
        </div>
        </Wrapper>
        </>
    )
}
const Wrapper = styled.section`

.search-bar {
  justify-content: center;
  display: flex;
  gap: 10px; /* Adjust the gap as needed */
  margin: 10px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-filters {
  margin: 14px;
  justify-content: center;
  display: flex;
  gap: 10px;
}

.search-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.clear-filters-btn{
 background-color: rgb(243, 68, 84);
 border: 2px solid black;
 border-radius:5px;
 padding:5px;
 color: white;
}

@media (max-width:750px) {
    .search-filters{
        flex-direction: column;
    }
    .search-select{
         margin-right: 175px;
    }
    }

`;

export default SearchBar