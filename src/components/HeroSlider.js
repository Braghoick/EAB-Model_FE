import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const HeroSlider = () =>{
		return (
               <Carousel>
                    
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://odesza.com/wp-content/uploads/2017/08/ODESZA-Backgrounds-Desktop-1080.jpg"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         <h3>First slide label</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://s1.1zoom.me/big3/215/Painting_Art_Roads_Sunrises_and_sunsets_Sun_529517_1920x1080.jpg"
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         <h3>Second slide label</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://s1.1zoom.me/big7/642/Denmark_Scenery_Sunrises_and_sunsets_Rivers_Sky_513662_1920x1080.jpg"
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         <h3>Third slide label</h3>
                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    
               </Carousel>

);
}

export default HeroSlider;




















{/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
     <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     </ol>
     <div className="carousel-inner">
          <div className="carousel-item active">
               <img src="" className="mx-auto d-block img-fluid" style={{height: '80vh'}}  alt="First Slide" />
          </div>
          <div className="carousel-item">
               <img src="" className="d-block w-100" style={{height: '80vh'}} alt="Second Slide" />
          </div>
          <div className="carousel-item">
               <img src="" className="d-block w-100" style={{height: '80vh'}} alt="Third Slide" />
          </div>
     </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
          </a>
     </div> */}

     