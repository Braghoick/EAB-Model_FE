import React from "react";

// Se importa el componente Modal para mostrar la info

import { Modal } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

class CarModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="carInfo">
        <Modal
          {...this.props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>{this.props.data.brand} {this.props.data.name} {this.props.data.year}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="contained-modal-body">
            <div className="d-flex row">
              <div className="contained-modal-multimedia col">
                {" "}
                {/*Este es el carrosel del modal donde iran los videos y fotos*/}
                <Carousel>
                  <Carousel.Item>
                    {/*Video*/}
                    <img
                      className="d-block-modal w-100"
                      src="https://raceandshop.com.mx/wp-content/uploads/2019/05/AE8.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    {/*Foto*/}
                    <img
                      className="d-block-modal w-100"
                      src="https://s1.1zoom.me/big0/208/Ferrari_Sunrises_and_442416.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="contained-modal-info col ml-5">
                {/*Información tecnica del carro*/}
                <p>Estilo: {this.props.data.style}</p>
                <p>Trasmision: {this.props.data.transmission}</p>
                <p>Gas: {this.props.data.gas}</p>
                <p>Vehiculo cuenta con radio AUX/USB/BT de pantalla. Aros de lujo y trae llantas nuevas
                  no cambio, solo vendo, ando buscando pick up mas moderna, se da vuelto a favor.
                </p>
                <p>Precio aproximado: {this.props.data.price}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a className="btn-modal" target="_blank" href="https://www.encuentra24.com/costa-rica-es/autos-usados?q=keyword.yaris|f_year.2008-2009|f_currency.CRC" role="button">
              Quiero saber más
            </a>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CarModal;
