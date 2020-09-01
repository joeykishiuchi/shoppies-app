import React, {useEffect} from 'react';
import './App.scss';
import SearchBar from './SearchBar.js';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      params: {
        s: "mission impossible"
      }
    })
    .then(res => {
      console.log(res.data.Search);
    })
  },[]);

  return (
    <div className="App">
      <h1 classname="main-header">The Shoppies</h1>
      <SearchBar />
    </div>
  );
}

export default App;