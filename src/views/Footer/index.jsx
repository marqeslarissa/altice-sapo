import React from 'react';
import logoInstagram from "../../assets/images/logo-instagram.png";
import logoFaceook from "../../assets/images/logo-facebook.png";
import logoTwitter from "../../assets/images/logo-twitter.png";
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="section1">
        <div>
          <span>Também estamos aqui:</span>
          <div className="social">
            <a target="_blank" href="https://www.instagram.com/sapo/">
              <img src={logoInstagram} alt="Logotipo do Instagram" />
            </a>
            <a target="_blank" href="https://www.facebook.com/sapo/">
              <img src={logoFaceook} alt="Logotipo do Faceook" />
            </a>
            <a target="_blank" href="https://www.twiiter.com/sapo/">
              <img src={logoTwitter} alt="Logotipo do Twitter" />
            </a>
          </div>
        </div>
        <div id="footer__community">
          <h3>Comuidade SAPO</h3>
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
