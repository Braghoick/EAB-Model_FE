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
      data:{}
    };
  }

  render() {

    let data = [
      {
        id: 1,
        name: "Hilux",
        brand: "Toyota",
        year: "2010",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "9.5 Millones aproximadamente",
      },
      {
        id: 2,
        name: "Civic Si",
        brand: "Honda",
        year: "2000",
        style: "Coupe",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "3.5 Millones aproximadamente",
      },
      {
        id: 3,
        name: "Yaris",
        brand: "Toyota",
        year: "2008",
        style: "Hatchback",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "2.5 Millones aproximadamente",
      },
      {
        id: 4,
        name: "Brandon",
        brand: "Cisneros",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
      {
        id: 5,
        name: "Brandon",
        brand: "Cisneros",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
      {
        id: 6,
        name: "Brandon",
        brand: "Cisneros",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
      {
        id: 7,
        name: "Brandon",
        brand: "Cisneros",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
      {
        id: 8,
        name: "Brandon",
        brand: "Cisneros",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
      {
        id: 9,
        name: "Brandon",
        brand: "Cisneros",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
      {
        id: 4,
        name: "Brandon",
        brand: "Cisneros",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
    ];

    // Aqui se modifica el estado del modal para que se cierre
    let modalClose = () => this.setState({ showModal: false });

    return (
      <div className="slider">
        <Slider>
          {data.map((value) => {
            return (
              <div key={value.id} className="Card">
                <div>
                  <img
                    className="card_img"
                    alt=" "
                    src="https://cnet2.cbsistatic.com/img/lSnyuIPjsqrc5URVmbSYNf2g0cw=/1200x675/2019/11/07/eafc3243-f819-4cf4-934f-73388b0906c8/rs-ford-mustang-mache-36.jpg"
                  />
                  <div className="card_body">
                    <h3 className="card_title">
                      {value.brand} {value.name}
                    </h3>
                    <p className="card_text">{value.style}</p>
                  </div>
                  <div class="card-footer">
                    <button
                      className="btn-danger rounded"
                      onClick={() => {
                        // Aqui se manda la informacion del card al state
                        this.setState({showModal:true, data:value});
                      }}
                    >
                      Hola
                    </button>
                  </div>
                </div>
              </div>
            );
          })} {/* Aqui termina el metodo .map */}
          {/* Aqui se llama al modal y se manda el estado
              para abrirlo ademas de la info que debe mostrar */}
          <CarModal
            show={this.state.showModal}
            onHide={modalClose}
            data={this.state.data}
          />
        </Slider>
      </div>
    );
  }
}

export default SliderParent;
