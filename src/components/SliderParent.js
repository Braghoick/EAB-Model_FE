import React from "react";

// Se importa el slider para hacer el carrousel
import Slider from "./Slider";
// Se importa el modal para mostrar la informacion de los carros
import CarModal from "./CarModal";

class SliderParent extends React.Component {
  // Constructor con estado para el modal
  constructor() {
    super();
    this.state = {
      showModal: false,
      data: {},
     
    };
  }
  
  
  render() {
    // Aqui se modifica el estado del modal para que se cierre
    let modalClose = () => this.setState({ showModal: false });
    let estilo;
    //console.log(this.props.carros);

    return (
      <div className="slider">
        <Slider>
          {this.props.carros.map((value) => {
            //console.log(value.estilos[0].estilo);
            return (
              <div key={value.id} className="Card" style={{width: "auto"}}>
                <div>
                  <img
                    className="card_img"
                    alt={value.marca}
                    src={value.urlImagen}
                  />
                  <div className="card_body">
                    <h3
                      className="card_title mt-3"
                      style={{ color: "#202337" }}
                    >
                      {value.marca} {value.modelo} 
                    </h3>
                    <p className="card_text mb-3" style={{ color: "#000" }}>
                      {value.anio}
                    </p>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn-modal rounded mt-2"
                      onClick={() => {
                        // Aqui se manda la informacion del card al state
                        estilo= value.estilos[0].estilo;
                        this.setState({ showModal: true, data: value});
                      }}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            );
          })}{" "}
          {/* Aqui termina el metodo .map */}
          {/* Aqui se llama al modal y se manda el estado
              para abrirlo ademas de la info que debe mostrar */}
          <CarModal
            show={this.state.showModal}
            onHide={modalClose}
            data={this.state.data}
            estilo={this.state.estilo}
          />
        </Slider>
      </div>
    );
  }
}

export default SliderParent;
