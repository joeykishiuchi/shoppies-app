import React, {useEffect} from 'react';
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

  useEffect(() => {
    console.log(props.popup);
  },[props.popup])

  const display = (props.popup.isSubmitted 
    ? (
      <div>Thank You</div>
    )
    : (
      <>
        <div className="popup-header">
          <span className="popup-title">You have nominated 5 movies!</span>
        </div>
        <article className="popup-article">You can edit your choices or submit your nominations.</article>
        <div className="popup-buttons">
          <Button className="edit-button" onClick={props.closePopup}>Continue Editing</Button>
          <Button className="submit-button" onClick={props.handleSubmit}>Submit</Button>
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