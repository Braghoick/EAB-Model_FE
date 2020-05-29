import React from 'react';

// Componentes necesarios para mostrar la pagina
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import SliderParent from "./SliderParent";

class App extends React.Component{
	render(){
		return (
			
			<React.Fragment>

				{/* Seccion de Landing con Slider */}
				<section id="landing" class="landing">
					<HeaderNav fixed="top"/>
					<HeroSlider/>	
				</section>
				{/* Seccion de Autos destacados */}
				<section id="destacados" className="destacados">
					<div className="info">
					<h1 className="text-center">Destacados</h1>
					<SliderParent/>
					</div>
				</section>

			</React.Fragment>

		);
	}
}

export default App;


