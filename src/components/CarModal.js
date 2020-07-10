/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

// Se importa el componente Modal para mostrar la info

import { Modal } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

class CarModal extends React.Component {

  

  render() {
    return (
      <div className="carInfo">
        <Modal
          {...this.props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* {console.log(this.props.estilo)} */}
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>
                {this.props.data.marca} {this.props.data.modelo}{" "}
                {this.props.data.anio}
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="contained-modal-body">
            <div className="d-flex modalContent">
              <div className="contained-modal-multimedia col-5">
                {" "}
                {/*Este es el carrosel del modal donde iran los videos y fotos*/}
                <Carousel className="carousel carousel-pause-true carousel-fade">
                  <Carousel.Item className="modal-item">
                    {/*Video los ajustes del tamaño del frame se deben de cambiar desde aquí no se puede hacer en el scss*/}
                    <iframe
                      width="510"
                      height="290"
                      src={this.props.data.urlVideo}
                      frameBorder="0"
                      allow="accelerometer; encrypted-media; gyroscope;"
                      allowFullScreen
                    ></iframe>
                  </Carousel.Item>
                  <Carousel.Item className="modal-item">
                    {/*Foto*/}
                    <img
                      width="510"
                      height="290"
                      className="d-block-modal w-100"
                      src={this.props.data.urlImagen}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="contained-modal-info pl-5 modalInfo col-7">
                {/*Información tecnica del carro*/}
                <p>Estilo: {this.props.estilo}</p>
                <p>Motor: {this.props.data.motor}</p>
                <p>Trasmisión: {this.props.data.transmision}</p>
                <p>Gas: {this.props.data.combustible}</p>
                
                <p>Precio aproximado: {this.props.data.precio}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a
              className="btn-modal"
              href={this.props.data.urlCompra}
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
