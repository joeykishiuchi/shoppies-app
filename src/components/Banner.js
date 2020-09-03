import React from 'react';
import './Banner.scss';
import {Button} from '@material-ui/core';
import Popup from "reactjs-popup";

const popupStyles = {
  'backgroundColor':'white',
  'border': 'none',
  'height': '15em',
  'border-radius': '0.5em',
  'padding': 0
}

function Banner(props) {
  return (
    <Popup
        modal
        open={props.popup}
        contentStyle={popupStyles}
        onClose={props.closePopup}
      >
        <div className="popup-header">
          <span className="popup-title">You have nominated 5 movies!</span>
        </div>
        <article className="popup-article">You can edit your choices or submit your nominations.</article>
        <div className="popup-buttons">
          <Button className="edit-button" onClick={props.closePopup}>Continue Editing</Button>
          <Button className="submit-button" onClick={props.handleSubmit}>Submit</Button>
        </div>
      </Popup>
  );
};

export default Banner;