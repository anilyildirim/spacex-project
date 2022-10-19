import React, { useState, useEffect } from 'react';
import PastLaunches from './components/PastLaunches';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

const App = () => {
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);
  const [queryResultData, setQueryResultData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [invalidQuery, setInvalidQuery] = useState('');
  const [pastLaunchesData, setPastLaunchesData] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then(response => response.json())
      .then(data => {
        setPastLaunchesData(data.slice(data.length - 3));
      });
  }, []);
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      const launchUrl = `https://api.spacexdata.com/v4/launches/${ searchQuery }`;

      fetch(launchUrl)
        .then(data => data.json())
        .then(data => {
          setQueryResultData(data);
          setSearchQuery('');
          setIsSearchTriggered(true);
        })
        .catch((error) => {
          setInvalidQuery(error.message);
          setQueryResultData([]);
          setSearchQuery('');
          setIsSearchTriggered(true);
          console.error('Error:', error.message);
        })
    }
  }

  return(
    <div className='app'>
      <header className='main-header'>
        <h1>SpaceX Launches - Search Tool</h1>
        <SearchForm handleSubmit={ handleSubmit } handleChange={ handleChange } searchQuery={ searchQuery }/>
      </header>
      { isSearchTriggered ? (
        <SearchResult launchId={queryResultData.id} name={queryResultData.name} date={queryResultData.date_utc} success={queryResultData.success} error={invalidQuery}/>
      ) : ''}
      <PastLaunches launches={ pastLaunchesData }/> 
    </div>
  );
};

export default App;