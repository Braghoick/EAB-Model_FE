import React from "react";
import Slider from "./Slider";
import {Button, Modal} from 'react-bootstrap';

class SliderParent extends React.Component {
    constructor(){
		super()
		this.state={
			show:false
		}
    }
    handleModal(){
		this.setState({show:!this.state.show})
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
        name: "Hilux",
        brand: "Toyota",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
    ];
    
    return (
      <div className="slider">
        <Slider>
          {data.map((value) => {
            return (
              <div key={value} className="Card">
                <div>
                  <img
                    className="card_img"
                    alt=" "
                    src="https://cnet2.cbsistatic.com/img/lSnyuIPjsqrc5URVmbSYNf2g0cw=/1200x675/2019/11/07/eafc3243-f819-4cf4-934f-73388b0906c8/rs-ford-mustang-mache-36.jpg"
                  />
                  <div className="card_body">
                    <h3 className="card_title">{value.brand} {value.name}</h3>
                    <p className="card_text">{value.style}</p>
                  </div>
                  <div class="card-footer">
                    <button onClick={()=>{this.handleModal()}}>
                        Hola
                    </button>
					<Modal 
						size="lg"
						show={this.state.show}
						onHide={()=>{this.handleModal()}}
						centered
						>
							<Modal.Header closeButton>
                            {value.brand} {value.name}
							</Modal.Header>
							<Modal.Body>
                            {value.year}
                            {value.style}
                            {value.transmission}
                            {value.gas}
                            {value.price}
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={()=>{this.handleModal()}}>Hola</Button>
							</Modal.Footer>
						</Modal>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SliderParent;
