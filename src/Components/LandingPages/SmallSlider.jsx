import React  from "react";

import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {getProductsData} from "../../Redux/HomeRedux/sction"
import { postProductsData } from "../../Redux/HomeRedux/sction";
import "./homepage.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// import { postProductsData } from '../Allproducts/AllProductsAction';





export const SmallSlider=()=> {
 const sliderref=useRef(null)
// const products=useSelector((state)=>(state.productsofskinMedica.productsofskinMedica))
const products=useSelector((state)=>state.ReducerCarousel) //.productsofskinMedica
const dispatch=useDispatch()

console.log(products)

// const getData = ()=>{
//   dispatch(getProductsData());
// }
// getData();
useEffect(()=>{

dispatch(getProductsData())
},[])
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:false,autoplay: true,
      autoplaySpeed: 3000,
    cssEase: "ease-in-out"
    };



    return (
      <>

        <h3 style={{textAlign: "center",margin:"20px 0px"}}>15% off + Extra 20% Off Auto-Replenishment on SkinMedica</h3>
        <p style={{textAlign: "center",margin:"20px 0px"}}>Save on top skin care formulas rooted in science and created by dermatologists.
        Plus, receive a Skinmedica Vitamin C+E Complex 0.25 oz ($29 value) when you spend $160 or more on the brand.</p>
        <div className="slider2flex_div">
            <div>
                <img src="https://static.thcdn.com/images/medium/webp/widgets/208-us/49/676x556-Shot16-V1-115749.jpeg" alt=""  style={{width:"98%",height:"460px",marginLeft:"5%"}}/>
            </div>
            <ArrowBackIosNewSharpIcon  onClick={()=>sliderref.current.slickPrev()} className="arrowbutt1" />
            <div  className="slider2_maindiv">
                <Slider ref={sliderref} {...settings}>
                    {
                        products && products.map((items)=>
                            <div key={items.id}>
                                <div>
                                    <img src={items.image} style={{width:"100%",height:"200px"}} alt="" />
                                </div>
                                <div>
                                    <h6 style={{fontSize:"14px",fontWeight:"lighter"}}>{items.title}</h6>
                                    <p style={{fontSize:"14px",}}>Reviews: {items.reviews}</p>
                                    <p style={{fontSize:"14px",textDecoration:"line-through"}}>MSRP: ${items.MSRP}</p>
                                    <p style={{fontSize:"14px",}}>Price: ${items.price}</p>
                                    <p onClick={()=> dispatch( postProductsData(items))} style={{width:"98%",fontSize:"16px",backgroundColor:"black",color:"white"}}>QUICK BUY</p>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
            <ArrowForwardIosSharpIcon 
            onClick={()=>sliderref.current.slickNext()}
            className="arrowbutt1"
            />
        </div>
      </>
    );
 
}




       
 