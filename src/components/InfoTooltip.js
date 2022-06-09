import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip(props) {

  return (
    <PopupWithForm
      name="tooltip"
      onClose={props.onClose}
      isOpen={props.isOpen}>
      <img className="popup__img" src={props.imgSrc}></img>
      <h2 className="popup__title popup__title-tooltip">{props.title}</h2>
    </PopupWithForm>
  )

}

export default InfoTooltip;