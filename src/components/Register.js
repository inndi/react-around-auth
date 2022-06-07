import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import './styles/Auth.css';
import * as auth from '../auth.js';
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function Register(props) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const history = useHistory();
  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (values.email && values.password) {
      auth.register(values.email, values.password)
        .then((res) => {
          if (res) {
            history.push('/')
          }
        })
    }
  }

  return (
    <div className="page">
      <Header>
        <Link to="signin" className="header__link hover-btn">Log in</Link>
      </Header>
      <div className="auth">
        <h2 className="auth__title">Sign up</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            id="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email || ""}
            autoComplete="off"
            className="auth__input auth__input_field_email"
            required />
          <div className="auth__error-container">
            <span className="auth__input-error email-input-error">{errors.email}</span>
          </div>
          <input
            id="password-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password || ""}
            autoComplete="off"
            className="auth__input auth__input_field_password"
            minLength="8"
            required />
          <div className="auth__error-container">
            <span className="auth__input-error password-input-error">{errors.password}</span>
          </div>
          <button className="auth__btn hover-btn" type="submit">Sign up</button>
        </form>
        <div className="auth__str-container">
          <p className="auth__str">Already a member?</p>
          <Link to="signin" className="auth__link hover-btn"> Log in here!</Link>
        </div>
      </div>
    </div>
  )


}

export default Register; 