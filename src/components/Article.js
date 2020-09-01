import React from 'react';
import './Article.scss';
import {Button} from '@material-ui/core';

function Article({movie}) {
  return(
    <div className="article-container">
      <img className="article-poster" alt="movie-poster" src={movie.Poster === "N/A" ? 'images/no_image_found.jpg' : movie.Poster}></img>
      <div className="article-description">
        <span className="article-title">{movie.Title}</span>
        <span className="article-year">{movie.Year}</span>
      </div>
      <Button variant="contained" color="primary">Nominate</Button>
    </div>
  );
};

export default Article;