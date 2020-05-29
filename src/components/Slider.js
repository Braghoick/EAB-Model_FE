import React from "react";

class Slider extends React.Component {
    
    constructor() {
        super();
        this.state = {
            prevDisable: true,
            nextDisable: this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
        };
    }
   
    componentDidMount() {
     this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
    }

    checkButtons=(offsetWidthValue, scrollWidthValue)=>{
        this.setState({
            prevDisable: this.refs.scrollLeft <= 0 ? true : false,
            nextDisable:
            this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
        });
    };
   
    render(){
        const offsetWidthValue = this.refs.offsetWidth, scrollWidthValue = this.refs.scrollWidth;
        
        return (
            <div className="slider-container" ref={el=>{ this.refs = el; }}>

                <div className="slider-wrapper">
                    {this.props.children}
                </div>

                {/* botón */}
                <btn
                    className={`btn btn_prev ${this.state.prevDisable ? "disable" : ""}`} //disable = cuando no se puede desplazar más
                    disabled={this.state.prevDisable}
                    onClick={()=>{
                    this.refs.scrollLeft -= offsetWidthValue / 3;
                    this.checkButtons(offsetWidthValue, scrollWidthValue);
                    }}
                >
                    {
                        <span class="iconify" data-icon="bi:arrow-left-short" data-inline="false"></span>
                    }
                </btn>
                
                {/* botón */}
                <btn className={`btn btn_next ${this.state.nextDisable ? "disable" : ""}`} //disable = cuando no se puede desplazar más
                    disabled={this.state.nextDisable}
                    onClick={()=>{
                    this.refs.scrollLeft += offsetWidthValue / 3;
                    this.checkButtons(offsetWidthValue, scrollWidthValue);
                    }}
                >
                    {
                        <span class="iconify" data-icon="bi:arrow-right-short" data-inline="false"></span>
                    }
                </btn>
                
            </div>
        );
    }
}

export default Slider;