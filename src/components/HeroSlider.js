import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const HeroSlider = () =>{
		return (
               <Carousel className="carousel carousel-fade">
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://c.wallhere.com/photos/1e/21/1920x1080_px_car_Dodge_Dodge_Challenger_Rear_View_red_Red_Cars-1338819.jpg!d"
                         alt="First slide"
                    />
                    <Carousel.Caption className="caption_slider first_slide">
                         <h4>Consulta los mejores autos</h4>
                         <p>Y descubre sobre las mejores marcas</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://centroautomotorrs.com.co/wp-content/uploads/2016/04/lamborghini-huracan-lp-610-4-red-car-sport-cars-1920x1080.jpg"
                         alt="Second slide"
                    />

                    <Carousel.Caption className="caption_slider second_slide">
                         <h3>La manera más rápida de informarte</h3>
                         <p>Todo lo que buscas sobre autos en un solo lugar</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://wallpapermemory.com/uploads/282/tuned-cars-background-full-hd-1080p-433203.jpg"
                         alt="Third slide"
                    />

                    <Carousel.Caption className="caption_slider third_slide">
                         <h3>Todo sobre los autos que sueñas</h3>
                         <p>Solo busca y encuentra lo que necesitas</p>
                    </Carousel.Caption>
                    </Carousel.Item>  
               </Carousel>

);
}


export default HeroSlider;