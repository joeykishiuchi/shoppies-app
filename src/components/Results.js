import React from 'react';
import './Results.scss';
import ResultArticle from './ResultArticle.js';

function Results(props) {
  return (
    <div className="results-main">
      <span className="results-title">Results</span>
      <div className="results-container">
        {props.results === undefined || props.results.length === 0
        ? <></>
        : props.results.map(movie => {
            return(
              <ResultArticle 
                key={movie.imdbID} 
                movie={movie}
                results={props.results}
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