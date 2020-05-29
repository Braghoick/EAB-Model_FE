import React from "react";

// Se importa el componente Modal para mostrar la info

import { Modal } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

class CarModal extends React.Component {
  //no remover, crea los props debidos para el funcionamiento del FrontEnd
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
              <h1>
                {this.props.data.brand} {this.props.data.name}{" "}
                {this.props.data.year}
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="contained-modal-body">
            <div className="d-flex row">
              <div className="contained-modal-multimedia col">
                {" "}
                {/*Este es el carrosel del modal donde iran los videos y fotos*/}
                <Carousel className="carousel carousel-pause-true">
                  <Carousel.Item>
                    {/*Video los ajustes del tamaño del frame se deben de cambiar desde aquí no se puede hacer en el scss*/}
                    <iframe
                      width="510" 
                      height="290"
                      src={this.props.data.video} 
                      frameborder="0"
                      allow="accelerometer; encrypted-media; gyroscope;"
                      allowfullscreen
                    ></iframe>
                  </Carousel.Item>
                  <Carousel.Item>
                    {/*Foto*/}
                    <img
                      width="510" 
                      height="290"
                      className="d-block-modal w-100"
                      src={this.props.data.url} 
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="contained-modal-info col ml-5">
                {/*Información tecnica del carro*/}
                <p>Estilo: {this.props.data.style}</p>
                <p>Trasmision: {this.props.data.transmission}</p>
                <p>Gas: {this.props.data.gas}</p>
                <p>{this.props.data.extra}</p>
                <p>Precio aproximado: {this.props.data.price}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a
              className="btn-modal"
              target="_blank"
              href="https://www.encuentra24.com/costa-rica-es/autos-usados?q=keyword.yaris|f_year.2008-2009|f_currency.CRC"
              role="button"
            >
              Quiero saber más
            </a>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CarModal;
