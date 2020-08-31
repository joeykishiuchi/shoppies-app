import React, {useState, useEffect} from 'react';
import {TextField} from '@material-ui/core'

function SearchBar() {
  const [text, setText] = useState('');

  return (
    <div className="search-container">
      <form 
        className="search-bar--form" 
        onSubmit={event => event.preventDefault()}
        autoComplete="off"
      >
        <TextField />
      </form>
    </div>
  );
};

export default SearchBar;