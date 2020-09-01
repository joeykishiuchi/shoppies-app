import React from 'react';

function Results({results}) {

  return(
    <div>
      <h3>Results</h3>
      {results.map(movie => {
        return(
          <li>{movie.Title}</li>
        );
      })}
    </div>
  );
};

export default Results;