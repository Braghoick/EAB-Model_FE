import React from 'react';

// Componentes necesarios para mostrar la pagina
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import SliderParent from "./SliderParent";
import {Button, Modal} from 'react-bootstrap';
import AboutUs from './AboutUs';
import Caption from './Caption'

class App extends React.Component{
	render(){
		return (
			
			<React.Fragment>
				<section className="landing">
				<header className="header">
					<HeaderNav />
				</header>
					<caption className="caption">
							<Caption />
					</caption>
					<HeroSlider />
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


