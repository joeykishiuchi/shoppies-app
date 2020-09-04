import React from 'react';
import './ResultArticle.scss';
import {Button} from '@material-ui/core';

function ResultArticle(props) {

  const isMovieNominated = (nominations, movie) => {
    let nominated = false;
    if (nominations.length === 5) {
      // Movies cannot be nominated if their are 5 in the list
      return true;
    } else {
      nominations.map(nomination => (
        nomination.Title === movie.Title
        ? nominated = true
        : null
      ))
    }
    return nominated;
  };

  const saveNomination = () => {
    props.setNominations(nominations => [...nominations, props.movie])
    localStorage.setItem('nominations', JSON.stringify([...props.nominations, props.movie]))
  };

  return(
    <li className="article-container">
      <img 
        className="article-poster"
        alt="movie-poster"
        onError={event => event.target.src = 'images/no_image_found.jpg'}
        src={props.movie.Poster}
      ></img>
      <div className="article-description">
        <span className="article-title">{props.movie.Title}</span>
        <span className="article-year">{props.movie.Year}</span>
      </div>
      <Button 
        variant="contained" 
        color="primary"
        onClick={saveNomination}
        disabled={isMovieNominated(props.nominations, props.movie)}
      >Nominate</Button>
    </li>
  );
};

export default ResultArticle;