import React from "react";

// Se importa el componente Modal para mostrar la info

import {Modal} from "react-bootstrap";

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
              {/* Aqui va el titulo del modal
                  usar marca y modelo del vehiculo */}
              {this.props.data.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Aqui se inserta la informacion del 
                carro a mostrar */}
            <h4> {this.props.data.brand} </h4>
            <p>{this.props.data.year}</p>
            <p>{this.props.data.style}</p>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CarModal;
