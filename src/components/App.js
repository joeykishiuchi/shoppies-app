import React, {useState, useEffect} from 'react';
import './App.scss';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Nominations from './Nominations.js';
import axios from 'axios';

function App() {
  // Various visual modes
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const LOADING = 'LOADING';
  const ERROR = 'ERROR';

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([])

  // Current mode of results
  const [mode, setMode] = useState(EMPTY)

  useEffect(() => {
    setMode(LOADING)
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
      res.data.Search === undefined || res.data.Search.length === 0 ? setMode(EMPTY) : setMode(SHOW)
    })
  },[searchTerm]);

  return (
    <div className="App">
      <h1 className="main-header"><span className="color-change">The</span> Shoppies</h1>
      <SearchBar onSearch={term => setSearchTerm(term)}/>
      <div className="main-container">
        <Results 
          results={results}
          nominations={nominations}
          setNominations={setNominations}
          mode={mode}
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