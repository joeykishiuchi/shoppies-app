import React, {useEffect} from 'react';

function Nominations(props) {
  useEffect(() => {
    console.log(props.nominations);
  },[props.nominations])

  const nominationArticle = (title, year) => {
    return(
      <li className="nomination-container">
        <span className="nomination-title">{title}</span>
        <span className="nomination-title">{year}</span>
      </li>
    );
  };

  return (
    <div className="nominations-main">
      <span>Nominations</span>
      <div className="nominination-container">
        {props.nominations === undefined || props.nominations.length === 0
          ? <></>
          : props.nominations.map(movie => nominationArticle(movie.Title, movie.Year))
        }
      </div>
    </div>
  );
};

export default Nominations;