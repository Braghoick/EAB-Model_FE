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
        extra: "Vehiculo cuenta con radio AUX/USB/BT de pantalla. Aros de lujo y trae llantas nuevas no cambio, solo vendo, ando buscando pick up mas moderna, se da vuelto a favor.",
        url: "https://autopunto.net/images/vehiculos/toyota/pickup/hilux%202010/1.jpg",
        video: "https://www.youtube.com/embed/YnJR0ZRRlFQ"
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
        url: "https://mycarboard.com/wp-content/uploads/2018/02/AwesomeAmazingGreat-2000-Honda-Civic-Si-2000-honda-civic-si-2017-20182018-201920172018.jpg",
        video: "https://www.youtube.com/embed/4NlnuK9Nbms"
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
        url: "https://pictures.topspeed.com/IMG/jpg/200802/2008-toyota-yaris-sr.jpg",
        video: "https://www.youtube.com/embed/CAyIaQSMuns"
      },
      {
        id: 4,
        name: "Polo",
        brand: "Fiat",
        year: "2008",
        style: "Hatchback",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones",
        url: "https://resources.carsguide.com.au/volkswagen-polo-beats-2019-tw-1001x565-(1).jpg",
        video:  "https://www.youtube.com/embed/xokJpil5oLQ"
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
        url:"https://upload.wikimedia.org/wikipedia/commons/d/de/2008-2010_Toyota_Corolla_Altis_%28ZRE142R%29_1.6_sedan_%282017-11-28%29_01.jpg",
        video: "https://www.youtube.com/embed/RQ-26cOC5TY"
      },
      {
        id: 6,
        name: "Gol",
        brand: "Volkswagen",
        year: "2008",
        style: "Hatchback",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "2.5 Millones",
        url: "https://www.coches.com/fotos_historicas/volkswagen/Gol-2008/volkswagen_gol-2008_r5.jpg",
        video: "https://www.youtube.com/embed/-SZSZqtF8Fk"
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
        url: "https://lh3.googleusercontent.com/proxy/ZCP7sCFIBwK_5ensoJa2mzzXOTTM9SbMx7DOt1TdjqxUi17BMCiojqdHUSEcpkVtldiQufKNa6kZrmkegj6l_qGMilN_4TeIRsdDCWtaGqqx4yZaL0rr1R2xd7K0mcNvGABhXOJGuYsrPlb7rT76rf8",
        video: "https://www.youtube.com/embed/wWoFmhmGX70"
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
        url:"https://cdn.motor1.com/images/mgl/ALNoL/s3/2003-bmw-m3-csl.jpg",
        video: "https://www.youtube.com/embed/t6XcYrqabFM"
      },
      {
        id: 9,
        name: "Mustang",
        brand: "Ford",
        year: "1967",
        style: "Classic",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
        url:"https://i.pinimg.com/originals/22/0e/f3/220ef3e8b642765e5f2dcaf8ae52e1a1.jpg",
        video: "https://www.youtube.com/embed/9eSHYKfwAg4"
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
                    src={value.url}
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
