import React from 'react';

function Nomination(props) {
  return(
    <li className="nomination-container">
      <span className="nomination-title">{props.title}</span>
      <span className="nomination-title">{props.year}</span>
    </li>
  );
};

export default Nomination