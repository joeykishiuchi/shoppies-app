import React from 'react';
import './SearchBar.scss';


function SearchBar(props) {

  const handleInput = event => props.setInputValue(event.target.value);

  return (
    <div className="search-container">
      <form 
        className="search-bar--form" 
        onSubmit={event => event.preventDefault()}
        autoComplete="off"
      >
        <input
          className='search-field'
          placeholder="Search Movies"
          value={props.inputValue}
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default SearchBar;