 //siempre debe ir
import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import {Button, Modal} from 'react-bootstrap';

//debe existir siempre un metodo render o un return, en el caso de ser stateless
class App extends React.Component{

	render(){
		
		return (
			
			<div className="app">
				<section id="landing">
					<div className="container">
						<React.Fragment>
							<HeaderNav />
							<HeroSlider />
						</React.Fragment>
					</div>
				</section>
				<section id="mostViewed">
					<div className="container">
						<div className="container">
							<React.Fragment>
								<HeroSlider />
							</React.Fragment>
						</div>
					</div>
				</section>
				<section id="aboutUs">
					<div className="container">
						<Button>Hola</Button>
						<Modal show={true}>
							<Modal.Header>
								<h1>Hola</h1>
							</Modal.Header>
							<Modal.Body>
								Este es el cuerpo
							</Modal.Body>
						</Modal>
					</div>
				</section>
				
			</div>
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
