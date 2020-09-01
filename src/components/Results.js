import React from 'react';
import './Results.scss';
import Article from './Article.js';

function Results(props) {
  return(
    <div className="results-main">
      <span className="results-title">Results</span>
      <div className="results-container">
        {props.results === undefined || props.results.length === 0
        ? <></>
        : props.results.map(movie => {
            return(
              <Article 
                key={movie.imdbID} 
                movie={movie}
                nominations={props.nominations}
                setNominations={props.setNominations}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Results;