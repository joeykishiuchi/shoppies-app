import React from 'react';
// import './Article.scss';

function Article({movie}) {
  return(
    <div className="article-container">
      <img className="article-poster" alt="movie-poster" src={movie.Poster}></img>
      <span className="article-title">{movie.Title}</span>
      <span className="article-year">{movie.Year}</span>
    </div>
  );
};

export default Article;