import React, {useState, useEffect, useCallback} from 'react';
import {TextField} from '@material-ui/core'
import './SearchBar.scss';
import useDebounce from '../hooks/useDebounce.js'

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const term = useDebounce(searchTerm, 300)

  const onSearch = useCallback(props.onSearch, [searchTerm])

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch])

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
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;