import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import JobCard from './components/JobCard/JobCard';
import Dummy from './Dummy';

function App() {
  const [jobs, setJobs] = useState(Dummy); // Use dummy data
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [searchCriteria, setSearchCriteria] = useState({
    jobRole: '',
    jobType: '',
    location: '',
    experience: '',
  });
  const [query, setquery] = useState('')
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const filterJobs = () => {
      const filtered = jobs.filter((job) => {
        const { jobRole, jobType, location, experience } = searchCriteria;
        return (
          (jobRole === '' || job.title === jobRole) &&
          (jobType === '' || job.type === jobType) &&
          (location === '' || job.location === location) &&
          (experience === '' || job.experience === experience)
        );
      });
      setFilteredJobs(filtered);
    };
    filterJobs(); // Filter on initial render
  }, [jobs, searchCriteria]);
  const handleSearch = (event) => {
  const FilteredJobs = jobs.filter((job)=>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
);
setFilteredJobs(FilteredJobs)
  setSearchTerm(event.target.value);
};
const handleClearFilters = () => {
  setSearchCriteria({
    jobRole: '',
    jobType: '',
    location: '',
    experience: '',
  });
};

  const handleSearchChange = (event) => {
    setSearchCriteria({
      ...searchCriteria,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar
          searchCriteria={searchCriteria}
          onSearchChange={handleSearchChange}
          setquery={setquery}
          handleClearFilters={handleClearFilters}
        />
        {/* {filteredJobs.map((job) => ( */}
        <JobCard 
        jobs={filteredJobs}
        query={query}
        />
         {/* ))} */}
      </div>
    </>
  );
}

export default App;