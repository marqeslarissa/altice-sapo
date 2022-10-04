import React from 'react';
import logo from "../../assets/images/logo-meo.png"
import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logotipo Sapo 5G" className="logo" />
    </div>
  )
}
export default Header;
