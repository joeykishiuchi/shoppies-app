import React from 'react';
import './NominationArticle.scss';
import {Button} from '@material-ui/core';

function Nomination(props) {
  return(
    <li className="nomination-container">
      <div className="nomination-description">
        <span className="nomination-title">{props.title}</span>
        <span className="nomination-year">{props.year}</span>
      </div>
      <Button 
        variant="contained" 
        color="primary"
      >Remove</Button>
    </li>
  );
};

export default Nomination