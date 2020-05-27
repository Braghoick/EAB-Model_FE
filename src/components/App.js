 //siempre debe ir
import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import SliderParent from "./SliderParent";



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

					{/* ************************************************** */}
					</div>
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
