import React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const CarouselNav = () =>{
     return (
       <div className="container mt-5">
          <Carousel id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
              
               <Carousel.Item>
                    <div className="row">
                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://lastfm.freetls.fastly.net/i/u/300x300/b6c8a3274bc147f3c7cbd278116dfd46.jpg"
                                        alt="Card cap1"
                                   />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://lastfm.freetls.fastly.net/i/u/300x300/b6c8a3274bc147f3c7cbd278116dfd46.jpg"
                                        alt="Card cap2"
                                   />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://lastfm.freetls.fastly.net/i/u/300x300/b6c8a3274bc147f3c7cbd278116dfd46.jpg"
                                        alt="Card cap3"
                                   />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://lastfm.freetls.fastly.net/i/u/300x300/b6c8a3274bc147f3c7cbd278116dfd46.jpg"
                                        alt="Card cap3"
                                   />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Carousel.Item>

               <Carousel.Item>
                    <div className="row">
                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7vXOTBs84LzgVamHBOEfvHpP-zgNLfr71hSpGVTeQXtG_GpUH&usqp=CAU"
                                        alt="Card cap1 1"
                                   />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7vXOTBs84LzgVamHBOEfvHpP-zgNLfr71hSpGVTeQXtG_GpUH&usqp=CAU"
                                        alt="Card cap2 2"
                                        />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7vXOTBs84LzgVamHBOEfvHpP-zgNLfr71hSpGVTeQXtG_GpUH&usqp=CAU"
                                        alt="Card cap3 3"
                                        />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-3">
                              <div className="card bg-warning mb-2">
                                   <img className="card-img-top"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7vXOTBs84LzgVamHBOEfvHpP-zgNLfr71hSpGVTeQXtG_GpUH&usqp=CAU"
                                        alt="Card cap3 3"
                                        />
                                   <div className="card-body">
                                        <h4 className="card-title" style={{color:'black'}}>Card title</h4>
                                        <p className="card-text" style={{color:'black'}}>Texto de relleno</p>
                                   </div>
                              </div>
                         </div>
                </div>
               </Carousel.Item>

          </Carousel>
        </div>
     );
}

export default CarouselNav;


/**
 * 
<div id="carousel-example-multi" class="carousel slide carousel-multi-item v-2" data-ride="carousel">

  <!--Controls-->
  <div class="controls-top">
    <a class="btn-floating" href="#carousel-example-multi" data-slide="prev"><i
        class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#carousel-example-multi" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
  <!--/.Controls-->

  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-multi" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-multi" data-slide-to="1"></li>
    <li data-target="#carousel-example-multi" data-slide-to="2"></li>
    <li data-target="#carousel-example-multi" data-slide-to="3"></li>
    <li data-target="#carousel-example-multi" data-slide-to="4"></li>
    <li data-target="#carousel-example-multi" data-slide-to="5"></li>
  </ol>
  <!--/.Indicators-->

  <div class="carousel-inner v-2" role="listbox">

    <div class="carousel-item active">
      <div class="col-12 col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-12 col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-12 col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (38).jpg"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-12 col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-12 col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-12 col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (27).jpg"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
 */