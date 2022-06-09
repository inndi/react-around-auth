import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

export function EditAvatarPopup(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: values.avatarLink
    });
  }

  useEffect(() => {
    resetForm();
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="edit-photo"
      title="Change profile picture"
      isOpen={props.isOpen}
      isValid={isValid}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={values.avatarLink || ""}
        id="avaLink-input"
        type="url"
        name="avatarLink"
        placeholder="Avatar link"
        autoComplete="off"
        className="popup__input popup__input_field_link"
        required />
      <div className="popup__error-container">
        <span className="popup__input-error avaLink-input-error">{errors.avatarLink}</span>
      </div>
      <button className={`popup__save-btn ${!isValid ? 'popup__save-btn_disabled' : ''}`} type="submit">{props.buttonText}</button>
    </PopupWithForm>
  )
}