import React from "react";

// Se importa el componente Modal para mostrar la info

import { Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

class CarModal extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="carInfo">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
      
              <h1>{this.props.data.name}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="contained-modal-body">
            <div className="contained-modal-multimedia"> {/*Este es el carrosel del modal donde iran los videos y fotos*/}
            <Carousel>
                    <Carousel.Item>{/*Video*/}
                    <img
                      className="d-block w-100"
                      src="https://raceandshop.com.mx/wp-content/uploads/2019/05/AE8.jpg"
                      alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>{/*Foto*/}
                    <img
                      className="d-block w-100"
                      src="https://s1.1zoom.me/big0/208/Ferrari_Sunrises_and_442416.jpg"
                      alt="Second slide"
                    />
                    </Carousel.Item>    
               </Carousel>
              </div>
            <div className="contained-modal-info">{/*Información tecnica del carro*/}
              <p>Fabricante: {this.props.data.brand}</p>
              <p>Año: {this.props.data.year}</p>
              <p>Estilo: {this.props.data.style}</p>
              <p>Trasmision: {this.props.data.transmission}</p>
              <p>Gas: {this.props.data.gas}</p>
              <p>Precio aproximado: {this.props.data.price}</p>
            </div>
      
              {/* Aqui va el titulo del modal
                  usar marca y modelo del vehiculo 
              {this.props.data.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4> {this.props.data.brand} </h4>
            <p>{this.props.data.year}</p>
            <p>{this.props.data.style}</p>
      */}
          </Modal.Body>
          <Modal.Footer>
            <a className="btn-modal" target="_blank" href="!#" role="button">Quiero saber más</a>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CarModal;
