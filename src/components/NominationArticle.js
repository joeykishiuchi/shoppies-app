import React from 'react';
import './NominationArticle.scss';
import {Button} from '@material-ui/core';

function NominationArticle(props) {

  const removeNomination = (nominations, movie) => {
    let newNominations = [];
    newNominations = nominations.filter(nomination => nomination.Title !== movie.Title);
    props.setNominations(newNominations);
  };

  return(
    <li className="nomination-container">
      <div className="nomination-description">
        <span className="nomination-title">{props.movie.Title}</span>
        <span className="nomination-year">{props.movie.Year}</span>
      </div>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => removeNomination(props.nominations, props.movie)}
      >Remove</Button>
    </li>
  );
};

export default NominationArticle;