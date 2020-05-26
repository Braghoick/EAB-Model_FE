import React from 'react';

// Aqui se crea el header nav para moverse entre las pantallas

const HeaderNav = () =>{
		return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light  navbar-fixed-top">
        <a className="navbar-brand ml-5" href="/">
          <img src="https://image.flaticon.com/icons/png/512/2922/2922330.png" width="30" height="30" class="d-inline-block align-top mr-2" alt="" />
          Encuentra Autos Baratos
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Inicio<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Destacados</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contáctanos</a>
            </li>
          </ul>
        </div>
      </nav>
		);
}  

//siempre se tiene que exportar
export default HeaderNav;
