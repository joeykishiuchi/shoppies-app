import React, {useEffect} from 'react';
import NominationArticle from './NominationArticle.js';

function Nominations(props) {

  return (
    <div className="nominations-main">
      <span>Nominations</span>
      <div className="nominination-container">
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
      </div>
    </div>
  );
};

export default Nominations;