import React, {useState, useEffect} from 'react';
import './App.scss';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Nominations from './Nominations.js';
import Popup from "reactjs-popup";
import axios from 'axios';
import {Button} from '@material-ui/core';

const popupStyles = {
  'backgroundColor':'white',
  'border': 'none',
  'height': '15em',
  'border-radius': '0.5em',
  'padding': 0
}

function App() {
  // Various visual modes
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const LOADING = 'LOADING';

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  // Current mode of results
  const [mode, setMode] = useState(EMPTY)

  // Toggles modal activity
  const [popup, setPopup] = useState(false);

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

  // Checks if user had chosen all 5 nominations
  useEffect(() => {
    setPopup(!(nominations === undefined) && nominations.length === 1)
  },[nominations]);

  function submitNominations() {
    setNominations([]);
    setSearchTerm('');
    setResults([]);
  };

  return (
    <div className="App">
      {mode === 'SHOW' && (
        <Popup 
          modal
          open={popup}
          contentStyle={popupStyles}
          onclose={() => setPopup(false)}
        >

          <div className="popup-header">
            <span className="popup-title">You have nominated 5 movies!</span>
          </div>
          <article className="popup-article">You can edit your choices or submit your nominations.</article>
          <Button onClick={() => setPopup(false)}>Continue Editing</Button>
          <Button onClick={() => submitNominations()}>Submit</Button>
        </Popup>
      )}
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