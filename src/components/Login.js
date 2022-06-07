import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './styles/Auth.css';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <div className="page">
      <Header>
        <Link to="signup" className="header__link hover-btn">Sign up</Link>
      </Header>
      <div className="auth">
        <h2 className="auth__title">Log in</h2>
        <form className="auth__form" onSubmit={props.onSubmit}>
          <input
            id="email-input"
            type="text"
            name="profileEmail"
            placeholder="Email"
            // onChange={handleChange}
            // value={values.email || ""}
            autoComplete="off"
            className="auth__input auth__input_field_email"
            minLength="2"
            maxLength="40"
            required />
          <div className="popup__error-container">
            {/* <span className="popup__input-error name-input-error">{errors.profileName}</span> */}
          </div>
          <input
            id="password-input"
            type="password"
            name="profilePassword"
            placeholder="Password"
            // onChange={handleChange}
            // value={values.profilePassword || ""}
            autoComplete="off"
            className="auth__input auth__input_field_password"
            // minLength="2"
            // maxLength="200"
            required />
          <div className="popup__error-container">
            {/* <span className="popup__input-error about-input-error">{errors.profileAbout}</span> */}
          </div>
          <button className="auth__btn hover-btn" type="submit">Log in</button>
        </form>
        <div className="auth__str-container">
          <p className="auth__str">Not a member yet?</p>
          <Link to="signup" className="auth__link hover-btn"> Sign up here!</Link>
        </div>
      </div>
    </div>
  )


}

export default Login; 