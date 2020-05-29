/* eslint-disable jsx-a11y/iframe-has-title */
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
            <div className="d-flex modalContent">
              <div className="row">
              <div className="contained-modal-multimedia modalCarousel">
                {" "}
                {/*Este es el carrosel del modal donde iran los videos y fotos*/}
                <Carousel className="carousel carousel-pause-true carousel-fade">
                  <Carousel.Item className="modal-item">
                    {/*Video los ajustes del tamaño del frame se deben de cambiar desde aquí no se puede hacer en el scss*/}
                    
                    <iframe className="container-video iframe-video"
                      width="1080" 
                      height="610"
                      src="https://www.youtube.com/embed/UZdiiavIBsY"
                      frameborder="0"
                      allow="accelerometer; encrypted-media; gyroscope;"
                      allowfullscreen
                    ></iframe>
                  </Carousel.Item>
                  <Carousel.Item className="modal-item">
                    {/*Foto*/}
                    <img
                      className="d-block-modal w-100"
                      src="https://cdn.motor1.com/images/mgl/WpY43/s3/plymouth-xnr-concept.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="modal-item">
                    {/*Foto*/}
                    <img
                      className="d-block-modal w-100"
                      src="https://i.ytimg.com/vi/Dv8ffn8NpsY/maxresdefault.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="contained-modal-info ml-5 modalInfo">
                {/*Información tecnica del carro*/}
                <p>Estilo: {this.props.data.style}</p>
                <p>Trasmision: {this.props.data.transmission}</p>
                <p>Gas: {this.props.data.gas}</p>
                <p>
                  Vehiculo cuenta con radio AUX/USB/BT de pantalla. Aros de lujo
                  y trae llantas nuevas no cambio, solo vendo, ando buscando
                  pick up mas moderna, se da vuelto a favor.
                </p>
                <p>{this.props.data.extra}</p>
                <p>Precio aproximado: {this.props.data.price}</p>
            </div>
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
