import React, {useState, useEffect, useCallback} from 'react';
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
        <input
          autoFocus
          className='search-field'
          placeholder="Search Movies"
          onChange={event => setSearchTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;