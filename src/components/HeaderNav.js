import React from 'react';
import logo from './img/logoEAB192.png';

// Aqui se crea el header nav para moverse entre las pantallas

const HeaderNav = () =>{
		return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <div className="navbar-nav">
        <a className="navbar-brand ml-5" style={{color: "#fff"}} href="/">
          <img src={logo}  height="30" class="d-inline-block align-top logo" alt="" />
        </a>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#landing" style={{color: "#fff"}}>Inicio
                <span className="sr-only" style={{color: "#000"}}>(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "#fff"}} href="#destacados">Destacados</a>
            </li>
          </ul>
        </div>
          <ul className="navbar-nav navbar-nav-auth">
            <li className="nav-item-auth m-2">
              <a className="btn btn-light" style={{color: "#000"}} href="/">Iniciar Sesión</a>
            </li>
            <li className="nav-item-auth m-2">
              <a className="btn btn-dark" style={{color: "#fff"}} href="/">Registrarse</a>
            </li>
          </ul>
      </nav>
		);
}  

//siempre se tiene que exportar
export default HeaderNav;
