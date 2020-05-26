 //siempre debe ir
import React from 'react';

import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import SliderParent from "./SliderParent";


//debe existir siempre un metodo render o un return, en el caso de ser stateless
class App extends React.Component{

	render(){
		return (
			<React.Fragment>
				<section class="landing">
					<HeaderNav fixed="top"/>
					<HeroSlider />
				</section>
				<section className="destacados">
					<div className="info">
					<h1 className="text-center">Destacados</h1>
					<SliderParent />
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
