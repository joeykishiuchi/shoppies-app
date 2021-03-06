import React, {useEffect} from 'react';
import NominationArticle from './NominationArticle.js';
import './Nominations.scss';

function Nominations(props) {

  useEffect(() => {
    //toggle popup if 5 movies are nominationed
    if(props.nominations === undefined || props.nominations.length === 5) {
      props.setPopup({...props.popup, isActive: true});
    }
  },[props.nominations]);

  const getNominationCount = () => {
    if (props.nominations === undefined || props.nominations.length === 0) {
      return '5 Choices Left';
    } else if ((5 - props.nominations.length) > 1) {
      return `${5 - props.nominations.length} Choices Left`;
    } else if ((5 - props.nominations.length) === 1) {
      return '1 Choice Left';
    } else {
      return 'No Choices Left'
    }
  };

  return (
    <div className="nominations-main">
      <div className="nominations-header">
        <span className="nominations-title">Your Nominations</span>
        <span className="nominations-count">{getNominationCount()}</span>
      </div>
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