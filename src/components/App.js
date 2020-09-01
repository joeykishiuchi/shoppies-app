import React, {useState, useEffect} from 'react';
import './App.scss';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Nominations from './Nominations.js';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([])

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
      setResults(res.data.Search);
    })
  },[searchTerm]);

  return (
    <div className="App">
      <h1 className="main-header">The Shoppies</h1>
      <SearchBar onSearch={term => setSearchTerm(term)}/>
      <div className="main-container">
        <Results 
          results={results}
          nominations={nominations}
          setNominations={setNominations}
        />
        <Nominations
          nominations={nominations}
          setNominations={setNominations}
          />
      </div>
    </div>
  );
}

export default App;