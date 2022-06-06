import React from 'react';
import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img id="header-logo" src={logo} alt="logo" className="header__logo" />
      {props.children}
    </header>
  )
}

export default Header; 