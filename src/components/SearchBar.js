import React, {useState, useEffect} from 'react';

function SearchBar() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(text)
  }, [text])

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <input
          type="text"
          placeholder="Search movies"
          name="searchbar"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;