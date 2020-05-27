import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const HeroSlider = () =>{
		return (
               <Carousel class>
                    
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://raceandshop.com.mx/wp-content/uploads/2019/05/AE8.jpg"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         <h3>Consulta los mejores autos</h3>
                         <p>Todo lo que buscas sobre autos</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://s1.1zoom.me/big0/208/Ferrari_Sunrises_and_442416.jpg"
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         <h3>La manera más rápida de informarte</h3>
                         <p>Todo lo que buscas sobre autos</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://a-static.besthdwallpaper.com/negro-ford-mustang-de-coches-papel-pintado-3440x1440-26074_15.jpg"
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         <h3>Todo sobre autos</h3>
                         <p>Todo lo que buscas sobre autos</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    
               </Carousel>

);
}


export default HeroSlider;