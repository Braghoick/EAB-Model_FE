 //siempre debe ir
import React from 'react';

//debe existir siempre un metodo render o un return, en el caso de ser stateless
class App extends React.Component{

	state = {
	};

	render(){
		return (
				<div>
					Hello World !!!
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
