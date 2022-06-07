import React from "react";
import PopupWithForm from "./PopupWithForm";

export function ConfirmationPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onCardDelete(props.card)
  }

  return (
    <PopupWithForm
      name="delete"
      title="Are you sure?"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      isValid={true}
    >
      <button className="popup__save-btn" type="submit">Yes</button>
    </ PopupWithForm>
  )
}