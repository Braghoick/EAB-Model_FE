 //siempre debe ir
import React from 'react';
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import SliderParent from "./SliderParent";
import CarouselNav from './CarouselNav';

//debe existir siempre un metodo render o un return, en el caso de ser stateless
class App extends React.Component{

	render(){
		return (
			<React.Fragment>
				<HeaderNav />
				<HeroSlider />
				<SliderParent />
				{/* <CarouselNav /> */}
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
