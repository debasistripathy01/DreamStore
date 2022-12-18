import React from "react";
import styled from "styled-components";

import { Slide } from "react-slideshow-image";
import { Image, Box } from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css"


const StyleCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  & p {
    border: 1px solid grey;
    padding: 5px 12px;
    cursor: default;
  }

  & > img {
    width: 100%;
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 100%;
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


const slideImages =[

  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11814869-9924866362390772.jpg",
    title: "Which SkinCeuticals Vitamin C Serum Is Right for You?"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "How to Pick the Right EltaMD Sunscreen for You"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "The Skinmialistic Three-Step P.M. Routine: Normal-Combo Skin"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "Conscious Beauty: A More Mindful Approach to Your Routine"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
]





export const ProductsBestSeller2 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 0.2,
    slidesToScroll: 1,
    arrows:false,autoplay: true,
    autoplaySpeed: 3000,
  cssEase: "ease-in-out"
  };
  return (
  <div className="SlidingProd" style={{width: "100%", margin:"auto", justifyContent:"center", cursor:"pointer"}}>

      <Slide dots="true" infinite="true" speed="100" slidesToShow="5" autoplay="true" slidesToScroll="0.3" arrows="false" autoplaySpeed="200" cssEase="ease-in-out">
        {
          slideImages.forEach((items)=>{
          return (
          <StyleCard key={Math.random()}>
            <Image width="40%" src={items.url}/>
            <span style={{width:"80%", textAlign:"center", fontSize: "16px"}}>{items.title}</span>
          </StyleCard>)})
        }
      </Slide>

  </div>
  )
};





 






