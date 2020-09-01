import React, {useState, useEffect} from 'react';
import './App.scss';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Nominations from './Nominations.js';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg",
      Title: "Mission: Impossible - Ghost Protocol",
      Type: "movie",
      Year: "2011",
      imdbID: "tt122938"
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg",
      Title: "Mission: Impossible - Ghost Protocol",
      Type: "movie",
      Year: "2011",
      imdbID: "tt1229238"
    }
  ])

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
      <Results 
        results={results}
        nominations={nominations}
        setNominations={setNominations}
      />
      <Nominations nominations={nominations}/>
    </div>
  );
}

export default App;