import React, {useState, useEffect} from 'react';
import {TextField} from '@material-ui/core'
import './SearchBar.scss';

function SearchBar({onSearch}) {
  const [text, setText] = useState('');

  useEffect(() => {
    onSearch(text);
  }, [text])

  return (
    <div className="search-container">
      <form 
        className="search-bar--form" 
        onSubmit={event => event.preventDefault()}
        autoComplete="off"
      >
        <TextField 
          placeholder="Search Movies"
          variant="outlined"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;