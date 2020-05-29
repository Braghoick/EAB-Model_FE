import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const HeroSlider = () =>{
		return (
               <Carousel className="carousel carousel-fade">
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-1.jpg"
                         alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-8.jpg"
                         alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-14.jpg"
                         alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-20.jpg"
                         alt="Fourth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-26.jpg"
                         alt="Fifth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-33.jpg"
                         alt="Sixth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-39.jpg"
                         alt="Seventh slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '100vh'}}>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-45.jpg"
                         alt="Eighth slide"
                    />
                    </Carousel.Item>  
               </Carousel>

);
}


export default HeroSlider;