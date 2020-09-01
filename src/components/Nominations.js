import React from 'react';
import NominationArticle from './NominationArticle.js';
import './Nominations.scss';

function Nominations(props) {

  return (
    <div className="nominations-main">
      <span className="nominations-title">Nominations</span>
      <ul className="nominations-container">
        {props.nominations === undefined || props.nominations.length === 0
          ? <></>
        : props.nominations.map(movie => {
          return(
            <NominationArticle
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
            />
          )})
        }
      </ul>
    </div>
  );
};

export default Nominations;