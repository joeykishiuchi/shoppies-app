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
              movie={movie}
              nominations={props.nominations}
              setNominations={props.setNominations}
            />
          )})
        }
      </ul>
    </div>
  );
};

export default Nominations;