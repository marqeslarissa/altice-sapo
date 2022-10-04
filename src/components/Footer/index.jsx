import React from 'react';
import logoInstagram from "../../assets/images/logo-instagram.png";
import logoFacebook from "../../assets/images/logo-facebook.png";
import logoTwitter from "../../assets/images/logo-twitter.png";
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <div>
          <span>Também estamos aqui:</span>
          <div className="social">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sapo/">
              <img src={logoInstagram} alt="Logotipo do Instagram" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sapo/">
              <img src={logoFacebook} alt="Logotipo do Facebook" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/sapo/">
              <img src={logoTwitter} alt="Logotipo do Twitter" />
            </a>
          </div>
        </div>
        <div className="community">
          <h3>Comunidade SAPO</h3>
          <a target="_blank" href="https://www.sapo.pt/">Nos conheça melhor</a>
        </div>
      </div>
      <div>
        <small className="right">Altice 2022</small>
      </div>
    </footer>
  )
}
export default Footer;
