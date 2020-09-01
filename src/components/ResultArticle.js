import React from 'react';
import './ResultArticle.scss';
import {Button} from '@material-ui/core';

function ResultArticle(props) {
  return(
    <li className="article-container">
      <img className="article-poster" alt="movie-poster" src={props.movie.Poster === "N/A" ? 'images/no_image_found.jpg' : props.movie.Poster}></img>
      <div className="article-description">
        <span className="article-title">{props.movie.Title}</span>
        <span className="article-year">{props.movie.Year}</span>
      </div>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => {props.setNominations(nominations => [...nominations, props.movie])}}
      >Nominate</Button>
    </li>
  );
};

export default ResultArticle;