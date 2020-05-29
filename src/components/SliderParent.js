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
    let data = [
      {
        id: 1,
        name: "Hilux",
        brand: "Toyota",
        year: "2010",
        style: "PickUp 4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "9.5 Millones",
      },
      {
        id: 2,
        name: "Civic Si",
        brand: "Honda",
        year: "2000",
        style: "Coupé",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "3.5 Millones",
      },
      {
        id: 3,
        name: "Yaris",
        brand: "Toyota",
        year: "2008",
        style: "Hatchback",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "2.5 Millones",
      },
      {
        id: 4,
        name: "Polo",
        brand: "Volkswagen",
        year: "2008",
        style: "Hatchback",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones",
      },
      {
        id: 5,
        name: "Corolla",
        brand: "Toyota",
        year: "2008",
        style: "Sport",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "2.5 Millones",
      },
      {
        id: 6,
        name: "Golf",
        brand: "Volkswagen",
        year: "2008",
        style: "Hatchback",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "2.5 Millones",
      },
      {
        id: 7,
        name: "Tucson",
        brand: "Hyundai",
        year: "2008",
        style: "4x4 SUV",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "2.5 Millones",
      },
      {
        id: 8,
        name: "M3",
        brand: "BMW",
        year: "2003",
        style: "Sport",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
      {
        id: 9,
        name: "Mustang",
        brand: "Ford",
        year: "1967",
        style: "Classic Muscle Car",
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
                    <h3 className="card_title mt-3" style={{color: '#202337'}}>
                      {value.brand} {value.name}
                    </h3>
                    <p className="card_text mb-3" style={{color: '#000'}}>{value.style}</p>
                  </div>
                  <div class="card-footer">
                    <button
                      className="btn-modal rounded mt-2"
                      onClick={() => {
                        // Aqui se manda la informacion del card al state
                        this.setState({ showModal: true, data: value });
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
          />
        </Slider>
      </div>
    );
  }
}

export default SliderParent;
