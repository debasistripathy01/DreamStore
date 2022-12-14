import React, { useRef } from 'react'

// import { Carousel } from "react-bootstrap"
// import "./bannercarousel.css"
// import Slider from "react-slick";
// import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// slider-1:  https://i.postimg.cc/ZnNKf8Jj/banner3.webp
// slider-2: https://i.postimg.cc/d1bKxBKL/banner1.webp
//slider-3: https://i.postimg.cc/ZnNKf8Jj/banner3.webp
//slider-4: https://i.postimg.cc/yd4VDJmZ/banner4.webp
import "./bannercarousel.css"

import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export const BannerCarousel = () => {
  return (
    <Carousel fade={true} pause={false} variant="white">
      <Carousel.Item interval={3000} >
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/yd4VDJmZ/banner4.webp"
          alt="First slide"
         />
        <Carousel.Caption className="CrouselText">
          <h1 className="h1carosal">Upto 25% Gift</h1>
          <h1 className="h1carosal">Sets</h1>
          <div className='h1carosal-sec'>
            <p>
                Sleigh your list & save on
                limited-edition sets, 
                featuring the most-coveted formulas in skin,
                hair & beauty—just in time the holidays.
            </p>
          </div>
          <div className="h1carosal-sec">
            
            <p>
                •Ends 12/15. only.
            </p>
            <button className='buttonfirst'>
                <p>
                    SHOP NOW
                </p>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/d1bKxBKL/banner1.webp"
          alt="Third slide"
         />
        <Carousel.Caption className="CrouselText">
          <h3 style={{color: "black"}}>Now at DreamStore</h3>
          <h1 className="h1carosal" style={{color: "black"}}>Introducing: ISDIN</h1>
          <div className='h1carosal-sec'>
            <p style={{color: "black"}}>
                Discover Barcelona-born, advanced skin care formulas
                with innovative textures for a practical & sensory
                experience.
            </p>
          </div>
          <div className="h1carosal-sec">
            <button className='buttonsec'>
                <p>
                    SHOP NOW
                </p>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/yd4VDJmZ/banner4.webp"
          alt="Third slide"
         />
        <Carousel.Caption className="CrouselText">
        <h1 style={{fontSize:"30px"}}>The Ultimate Gift</h1>
          <h1 className="h1carosal" style={{color: "white", textAlign:"left", marginLeft:"43%"}}>Guide</h1>
          <div className='h1carosal-sec'>
            <p>
                Our curated roundup of 50 merry-making & glow-giving 
                skin, hair & beauty gifts for everyone on your list.
            </p>
          </div>
          <div className="h1carosal-sec">
            <button className='buttonfirst' style={{gap:"10px", marginRight:"1%"}}>
                <p>
                    SHOP NOW
                </p>
            </button>
            <button className='buttonfirst'>
                <p>
                    READ MORE
                </p>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/ZnNKf8Jj/banner3.webp"
          alt="Third slide"
         />
        <Carousel.Caption className="CrouselText">
            <button className='buttonfirst' style={{width:"8%",height:"6%",gap:"10px", marginRight:"1%"}}>
                <p>
                    SHOP NOW
                </p>
            </button>
            <button className='buttonfirst' style={{width:"8%", height:"6%"}}>
                <p>
                    READ MORE
                </p>
            </button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
