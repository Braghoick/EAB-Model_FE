 //siempre debe ir
import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import SliderParent from "./SliderParent";
import {Button, Modal} from 'react-bootstrap';


//debe existir siempre un metodo render o un return, en el caso de ser stateless
class App extends React.Component{

	render(){
		
		return (
      // agregar el carrusel donde deba estar
			<React.Fragment>
				<section class="landing">
					<HeaderNav fixed="top"/>
					<HeroSlider />
				</section>
				<section className="destacados">
					<div className="info">
					<h1 className="text-center">Destacados</h1>
					<SliderParent />

					{/* ****************************************** */}
					{/*
					
						Pasar este modal a el carrusel para que cada elelmento lo tenga y sea diferenteen cada uno
					
					*/}



					<Button>Hola</Button>
						<Modal show={false}>
							<Modal.Header>
								<h1>Hola</h1>
							</Modal.Header>
							<Modal.Body>
								Este es el cuerpo
							</Modal.Body>
						</Modal>
					{/* ************************************************** */}
					</div>
				</section>

			
			{/* <div className="app">
				<section id="landing">
					<div className="container">
						<React.Fragment>
							<HeaderNav />
							<HeroSlider />
						</React.Fragment>
					</div>
				</section> 
				</div>*/}
				{/* <section id="mostViewed">
					<div className="container">
						<div className="container">
							<React.Fragment>
								<HeroSlider />
							</React.Fragment>
						</div>
					</div>
				</section> */}
				{/* <section id="aboutUs">
					<div className="container">
					</div>
				</section> */}
			</React.Fragment>
		);
	}
}

//siempre se tiene que exportar
export default App;

/**
 * 
 * Existen 2 tipos de componentes
 * 
 * Stateful - Maneja Estados
 * 
 * Stateless - No Maneja Estados
 * 
 */
