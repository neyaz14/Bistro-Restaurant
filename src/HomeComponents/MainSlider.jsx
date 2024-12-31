import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import b01 from "../assets/home/01.jpg";
import b02 from "../assets/home/02.jpg";
import b03 from "../assets/home/03.png";
import b04 from "../assets/home/04.jpg";
import b05 from "../assets/home/05.png";
const MainSlider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={b01} />
                    
                </div>
                <div>
                    <img src={b02} />
                    
                </div>
                <div>
                    <img src={b03} />
                    
                </div>
                <div>
                    <img src={b04} />
                    
                </div>
                <div>
                    <img src={b05} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default MainSlider;