import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './styles/Login.css';

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
      <div className="login">
        <h2 className="login__title">Log in</h2>
        <form className="login__form" onSubmit={props.onSubmit}>
          <input
            id="email-input"
            type="text"
            name="profileEmail"
            placeholder="Email"
            // onChange={handleChange}
            // value={values.email || ""}
            autoComplete="off"
            className="login__input login__input_field_email"
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
            className="login__input login__input_field_password"
            // minLength="2"
            // maxLength="200"
            required />
          <div className="popup__error-container">
            {/* <span className="popup__input-error about-input-error">{errors.profileAbout}</span> */}
          </div>
          <button className="login__btn hover-btn" type="submit">Log in</button>
        </form>
        <div className="login__register">
          <p className="login__register-str">Not a member yet?</p>
          <Link to="signup" className="login__register-link hover-btn"> Sign up here!</Link>
        </div>
      </div>
    </div>
  )


}

export default Login; 