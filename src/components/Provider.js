import React, { Component } from "react";

class Provider extends Component {
  // Aqui se maneja la lista de carros
    state = {
    cars: [
      {
        id: 1,
        name: "Hilux",
        brand: "Toyota",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "9.5 Millones aproximadamente",
      },
      {
        id: 2,
        name: "Honda",
        brand: "Civic Si",
        year: "2000",
        style: "Coupe",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "3.5 Millones aproximadamente",
      },
      {
        id:3,
        name: "Yaris",
        brand: "Toyota",
        year: "2008",
        style: "Hatchback",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "2.5 Millones aproximadamente",
      },
      {
        id:4,
        name: "Hilux",
        brand: "Toyota",
        year: "2008",
        style: "4x4",
        transmission: "Manual 5 velocidades",
        gas: "Gasolina",
        price: "7.5 Millones aproximadamente",
      },
    ],
  };

  

}

export default Provider;
