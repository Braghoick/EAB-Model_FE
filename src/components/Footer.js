import React from "react";
import logo from "./img/logoEAB192.png";


const Footer = (props) => {
  return (
    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="container footerContent">
        <div className="d-flex row justify-content-center">
          <div className="col-md-2 mb-4 mr-5 text-right logoDer">
            <img className="logoDer" src={logo} alt="logo" />
          </div>

          <div className="col-md-2 mb-4 text-right">
            <img className="logoIzq" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        ® 2020 Copyright:
        <p> EAB_Model</p>
      </div>
    </footer>
  );
};

export default Footer;
