import React from 'react';
import logo from "../../assets/images/logo.png"
import './styles.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logotipo Sapo 5G" className="header__logo" />
    </div>
  )
}
export default Header;
