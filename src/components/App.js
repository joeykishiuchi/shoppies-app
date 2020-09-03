import React, {useState, useEffect, useCallback} from 'react';
import './App.scss';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Nominations from './Nominations.js';
import Popup from "reactjs-popup";
import axios from 'axios';
import {Button} from '@material-ui/core';
import useDebounce from '../hooks/useDebounce.js'

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

  //Search states
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState(inputValue);
  const term = useDebounce(inputValue, 300);
  const onSearch = useCallback(setSearchTerm, [searchTerm])

  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  // Current mode of results
  const [mode, setMode] = useState(EMPTY)

  // Toggles modal activity
  const [popup, setPopup] = useState(false);

  //Sets term to be passed to api after debouce
  useEffect(() => {
    setSearchTerm(term);
  }, [term, onSearch])

  // Calls OMDb api off search
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
    setPopup(!(nominations === undefined) && nominations.length === 5)
  },[nominations]);

  const closePopup = () => setPopup(false);

  const handleSubmit = () => {
    setNominations([]);
    setInputValue('');
    setResults([]);
  };

  return (
    <div className="App">
      {mode === 'SHOW' && (
        <Popup
          modal
          open={popup}
          contentStyle={popupStyles}
          onClose={closePopup}
        >
          <div className="popup-header">
            <span className="popup-title">You have nominated 5 movies!</span>
          </div>
          <article className="popup-article">You can edit your choices or submit your nominations.</article>
          <div className="popup-buttons">
            <Button className="edit-button" onClick={closePopup}>Continue Editing</Button>
            <Button className="submit-button" onClick={handleSubmit}>Submit</Button>
          </div>
        </Popup>
      )}
      <h1 className="main-header"><span className="color-change">The</span> Shoppies</h1>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue}/>
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