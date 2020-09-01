import React from 'react';
import './Results.scss';
import Article from './Article.js';

function Results({results}) {
  return(
    <div className="results-main">
      <span className="results-title">Results</span>
      <div className="results-container">
      {results.map(movie => {
        return(
          <Article movie={movie}/>
        );
      })}
      </div>
    </div>
  );
};

export default Results;