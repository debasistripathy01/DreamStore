import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Image,Text } from '@chakra-ui/react';
import { padding } from '@mui/system';
import styled from "styled-components";


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





const responsiveSettings = [
  {
      breakpoint: 700,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 5
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 4
      }
  },
  {
      breakpoint: 500,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3
      }
  },
  {
      breakpoint: 400,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  }
];


const sliderImages =[
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/11289609-8744892770898772.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/12596429-5594867613443995.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/12596429-5594867613443995.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/11174178-1564909106414676.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/11291543-2074864291141689.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/12664555-1704871739992403.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/11588281-1814883754372942.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/productimg/1600/1600/11429291-1944572192851361.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
    title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
    type: "Moisturizers",
    price:"$84",
    text: "Quick Buy"
  },
  {
    url: "https://static.thcdn.com/images/small/webp//productimg/original/10560418-1084911743073195.jpg",
    title: "RevitaLash RevitaBrow Advanced Eyebrow Conditioner - 4 Month Supply (0.101 fl. oz.)",
    type: "Moisturizers",
    price:"$110.00",
    text: "Quick Buy"
  },
]

export const ProductsBestSeller = () => {

  
  return (
    <div >
            
            <Slide slidesToScroll={5} slidesToShow={5} indicators={true} responsive={responsiveSettings} style={{objectFit:"fill"}}>
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
  )
};

{/* <div className="SlidingProd">
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
    </div> */}