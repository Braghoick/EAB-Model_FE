import React from 'react';

// Aqui se crea el header nav para moverse entre las pantallas

const HeaderNav = () =>{
		return (
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="/">
                    <img src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top mr-2" alt="" />
                         Bootstrap
               </a>
               <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                   <li className="nav-item active">
                     <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="/">Features</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="/">Pricing</a>
                   </li>
                   
                 </ul>
               </div>
             </nav>	
  );
	}

//siempre se tiene que exportar
export default HeaderNav;
