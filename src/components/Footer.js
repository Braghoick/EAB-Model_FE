import React from 'react';
import logo from './img/logoEAB192.png';

const Footer = () =>{
     return(
          <footer class="page-footer font-small special-color-dark pt-4">

               <div class="container">

                    <div class="row">
                         
                         <div class="col-md-2 mb-4 text-right">
                                   <img src={logo} alt="logo"/>
                              </div>

                         <div class="form-search col-md-4 mb-4">
                              <form class="form-inline">
                                   <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                                   aria-label="Search" />
                                   <i class="fas fa-search" aria-hidden="true"></i>
                              </form>

                         </div>

                         <div class="col-md-2 mb-4 text-right">
                              <img src={logo} alt="logo"/>
                         </div>
                    </div>
               </div>

               <div class="footer-copyright text-center py-3">® 2020 Copyright:
               <p> EAB_Model</p>
               </div>

          </footer>
     )
}

export default Footer;