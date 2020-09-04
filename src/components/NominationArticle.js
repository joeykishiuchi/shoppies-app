import React from 'react';
import './NominationArticle.scss';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function NominationArticle(props) {

  const removeNomination = (nominations, movie) => {
    let newNominations = [];
    newNominations = nominations.filter(nomination => nomination.imdbID !== movie.imdbID);
    props.setNominations(newNominations);
  };

  return(
    <li className="nomination-container">
      <div className="nomination-description">
        <span className="nomination-title">{props.movie.Title}</span>
        <span className="nomination-year">{props.movie.Year}</span>
      </div>
      <HighlightOffIcon
        onClick={() => removeNomination(props.nominations, props.movie)}
      >Remove</HighlightOffIcon>
    </li>
  );
};

export default NominationArticle;