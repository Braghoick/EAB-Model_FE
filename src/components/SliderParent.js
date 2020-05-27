import React from "react";
import Slider from "./Slider";

class SliderParent extends React.Component {
    render() {
     let data = [
        <div>
            <img className="card_img" alt=" " src="https://i.kinja-img.com/gawker-media/image/upload/t_original/nceu6qqumhzv8v52tmof.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
         <div>
            <img className="card_img" alt=" " src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ykm8sk7atmprf8v3pbpr.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
         <div>
            <img className="card_img" alt=" " src="https://cnet2.cbsistatic.com/img/lSnyuIPjsqrc5URVmbSYNf2g0cw=/1200x675/2019/11/07/eafc3243-f819-4cf4-934f-73388b0906c8/rs-ford-mustang-mache-36.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
        <div>
            <img className="card_img" alt=" " src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ykm8sk7atmprf8v3pbpr.jpg"/>
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
         <div>
            <img className="card_img" alt=" " src="https://i.kinja-img.com/gawker-media/image/upload/t_original/nceu6qqumhzv8v52tmof.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
         <div>
            <img className="card_img" alt=" " src="https://cnet2.cbsistatic.com/img/lSnyuIPjsqrc5URVmbSYNf2g0cw=/1200x675/2019/11/07/eafc3243-f819-4cf4-934f-73388b0906c8/rs-ford-mustang-mache-36.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
         <div>
            <img className="card_img" alt=" " src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ykm8sk7atmprf8v3pbpr.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
         <div>
            <img className="card_img" alt=" " src="https://i.kinja-img.com/gawker-media/image/upload/t_original/nceu6qqumhzv8v52tmof.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>,
         <div>
            <img className="card_img" alt=" " src="https://cnet2.cbsistatic.com/img/lSnyuIPjsqrc5URVmbSYNf2g0cw=/1200x675/2019/11/07/eafc3243-f819-4cf4-934f-73388b0906c8/rs-ford-mustang-mache-36.jpg" />
            <div className="card_body">
                <h3 className="card_title">Titulo</h3>
                <p className="card_text">Relleno</p>
            </div>
        </div>
    ];
        
    return (
    <div className="slider">
    <Slider>
        {data.map(value=>{
            return (
                <div key={value} className="Card">
                {value}
                </div>
            );
        })}
    </Slider>
    </div>
    );
    }
}
  
export default SliderParent;