import React, {useState, useEffect} from 'react';
import './App.scss';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      params: {
        s: searchTerm,
        type: 'movie',
        plot: 'full'
      }
    })
    .then(res => {
      console.log(res.data.Search);
      setResults(res.data.Search);
    })
  },[searchTerm]);

  return (
    <div className="App">
      <h1 className="main-header">The Shoppies</h1>
      <SearchBar onSearch={term => setSearchTerm(term)}/>
      <Results results={results}/>
    </div>
  );
}

export default App;