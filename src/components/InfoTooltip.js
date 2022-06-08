import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip(props) {

  return (
    <PopupWithForm
      name="tooltip"
      onClose={props.onClose}
      isOpen={props.isOpen}>
      <h2 className="popup__title">{props.title}</h2>
    </PopupWithForm>
  )

}

export default InfoTooltip;