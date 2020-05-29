 //siempre debe ir
import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import SliderParent from "./SliderParent";
import {Button, Modal} from 'react-bootstrap';
import AboutUs from './AboutUs';
import Caption from './Caption'


//debe existir siempre un metodo render o un return, en el caso de ser stateless
class App extends React.Component{

	render(){
		
		return (
      // agregar el carrusel donde deba estar
			<React.Fragment>
				<section class="landing">
				<header className="header">
					<HeaderNav />
				</header>
					<caption className="caption">
							<Caption />
					</caption>
					<HeroSlider />
				</section>
				<section className="destacados">
					<div className="info">
					<h1 className="text-center">Destacados</h1>
					<SliderParent />
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
					<AboutUs />
				</section>
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
