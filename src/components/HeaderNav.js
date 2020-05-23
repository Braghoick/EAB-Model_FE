import React from 'react';

const HeaderNav = () =>{
		return (
				<div className="mb-3">
					<ul className="nav">
                              <li className="nav-item">
                                   <a className="nav-link active" href="/  ">Active</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Link</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Link</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                              </li>
                         </ul>
				</div>

		);
	}

//siempre se tiene que exportar
export default HeaderNav;
