import React from 'react';

function InfoTooltip(props) {

  return (
    <div className={`popup popup_tooltip ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img className="popup__img" src={props.imgSrc}></img>
        <h2 className="popup__title popup__title-tooltip">{props.title}</h2>
        <button className="popup__close-btn hover-btn" onClick={props.onClose} type="button"></button>
      </div>
    </div>
  )

}

export default InfoTooltip;