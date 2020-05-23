import React from 'react';

// Aqui se crea el header nav para moverse entre las pantallas

const HeaderNav = () =>{
		return (
				<div className="mb-3">
					<ul className="nav">
                              <li className="nav-item">
                                   <a className="nav-link active" href="#home">Home</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#mostViewed">Most Viewed</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#aboutUs">About Us</a>
                              </li>
                         </ul>
				</div>

		);
	}

//siempre se tiene que exportar
export default HeaderNav;
