import React from "react";
import axios from "axios";

// Componentes necesarios para mostrar la pagina
import HeaderNav from "./HeaderNav";
import HeroSlider from "./HeroSlider";
import SliderParent from "./SliderParent";
import AboutUs from "./AboutUs";
import Caption from "./Caption";

class App extends React.Component {
  state = {
    carros: [],
    showModal: false,
    data: {},
    estilo: ""
  };

  requestEstilos = () => {
    let url = `http://eab.test/api/devolverCarro`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          carros: res.data.response.carros,
        });
        //console.log(this.state.carros);
      })
      .catch((crasheo) => {
        console.error(crasheo);
      });
  };

  componentDidMount = () => {
    this.requestEstilos();
  };
  
  render() {
    return (
      <React.Fragment>
        <section id="landing" className="landing">
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
            <SliderParent carros={this.state.carros} data={this.state.data} showModal={this.state.showModal}/>
          </div>
        </section>
        <AboutUs carros={this.state.carros}/>
      </React.Fragment>
    );
  }
}

export default App;
