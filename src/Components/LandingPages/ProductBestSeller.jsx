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





export const ProductsBestSeller = () => {

  
  return (
    <div className="SlidingProd">
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11814869-9924866362390772.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11207443-2214866130380732.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12666791-4044866391045062.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12459291-1584866382993395.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
    </div>
  )
};

