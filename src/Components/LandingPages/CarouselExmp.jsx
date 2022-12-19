import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Image,Text } from '@chakra-ui/react';
import "./homepage.css"
import { padding } from '@mui/system';
import styled from "styled-components";


const responsiveSettings = [
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const sliderImages = [
    {
        url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11207443-2214866130380732.jpg",
        title: "SENTÉ Dermal Repair Cream (1.7 fl. oz.)",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13674838-2504939183735374.jpg",
        title: "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12905829-1844869965787699.jpg",
        title: "SENTÉ Cysteamine HSA 50ml",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/small/webp//productimg/original/12902890-7344869141944289.jpg",
        title: "SENTE Dermal Repair UltraNourish 1.7 fl. oz.",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/small/webp//productimg/original/12902892-1954869141433701.jpg",
        title: "SENTÉ Bio Complete Serum (1 fl. oz.)",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/small/webp//productimg/original/12902895-1884869141762477.jpg",
        title: "SENTÉ Cysteamine HSA 50ml",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13674838-2504939183735374.jpg",
        title: "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12905829-1844869965787699.jpg",
        title: "SENTÉ Cysteamine HSA 50ml",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
    {
        url: "https://static.thcdn.com/images/small/webp//productimg/original/12902890-7344869141944289.jpg",
        title: "SENTE Dermal Repair UltraNourish 1.7 fl. oz.",
        type: "Moisturizers",
        price:"$84",
        text: "Quick Buy"

    },
]


    const StyleCard = styled.div`
    background-color: white;
    display: flex;
    width: auto;
    height: auto;
    margin: auto;
    margin-top: 4%;
    justify-content: center;

    flex-direction: column;
    gap: 5px;
    align-items: center;

  & p {
    border: 1px solid grey;
    padding: 4px 8px;
    cursor: default;
  }

  & > img {
    width: 95%;
    height: 30%;
    cursor: pointer;
  }
  & >h6{
    textAlign:"center"

  }

`;
    const Button = styled.button`
    width: 90%;
    background-color: #222;
    color: white;
    padding: 6px 5px;
    font-size: 18px;
    border: none;
    transition: 0.2s;
  
    &: hover {
      background-color: rgb(95, 92, 92);
    }
  `;


export const CarouselExmp = () => {
    // const images = [
    //     {image : "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558706_TrueHB_Mini_banner_web.jpg"},
    //     {image :"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667462507_Web_Home_Page_Mini_Banner-436X224__.png"},
    //     {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1666259889_Truuth_web.jpg"},
    //     {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1665742857_Dabur_Home.jpg"},
    //     {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558258_Inlife_mini_banners_web.jpg"},
    //     {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558622_Ambitech_Mini_banner_web.jpg"},
    //     {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667559169_Mendwell_mini_web.jpg"}

    // ];
    return (
        <div >
            
            <Slide slidesToScroll={2} slidesToShow={3} indicators={true} responsive={responsiveSettings} style={{objectFit:"fill"}}>
                {
                    sliderImages.map((item)=>(
                        // <Box key={Math.random()}  
                        // bg={"white"} color="#0b1219" 
                        // lineHeight={"24px"} width={"99%"}  
                        // marginLeft="25px" padding="40px" 
                        // display="flex" flexDirection={"column"}
                        // alignItems="center" borderRadius="10px" 
                        // fontSize="17px" textAlign="left" >
                        <StyleCard key={Math.random()} style={{marginRight:"1%"}}>
                            <Image width='90%' height="40%"
                            borderRadius="10px" src={item.url}/>
                            <h6 style={{ }}>{item.title}</h6>
                            <p style={{ border: "1px solid grey", padding:"5px 12px",cursor:"default",
                            }}>{item.type}</p>
                            <h6 >{item.price}</h6>
                            <Button>{item.text}</Button>
                        </StyleCard>

                    ))
                }
                
            </Slide>
        </div>
    );
};

