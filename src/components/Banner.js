import React from 'react';
import './Banner.scss';
import {Button} from '@material-ui/core';
import Popup from "reactjs-popup";

const popupStyles = {
  'backgroundColor':'white',
  'border': 'none',
  'height': '15em',
  'borderRadius': '0.5em',
  'padding': 0
}

function Banner(props) {

  const display = (props.popup.isSubmitted 
    ? (
      <>
        <div className="submit-message">Thank you for your submission!</div>
        <div className="popup-buttons">
          <Button className="custom-button" onClick={props.closePopup}>Close</Button>
        </div>
      </>
    )
    : (
      <>
        <div className="popup-header">
          <span className="popup-title">You have nominated 5 movies!</span>
        </div>
        <article className="popup-article">You can edit your choices or submit your nominations.</article>
        <div className="popup-buttons">
          <Button className="custom-button" onClick={props.closePopup}>Continue Editing</Button>
          <Button className="custom-button" onClick={props.handleSubmit}>Submit</Button>
        </div>
      </>
    )
  )

  return (
    <Popup
        modal
        open={props.popup.isActive}
        contentStyle={popupStyles}
        onClose={props.closePopup}
      >
        {display}
      </Popup>
  );
};

export default Banner;