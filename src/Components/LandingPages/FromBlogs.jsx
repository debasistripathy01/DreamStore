import React from "react";
import { Slide } from "react-slideshow-image";
import { Image, Box } from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css"



const slideImages =[

  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/26/allure_blog-091926.jpg",
    title: "18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/19/original-skincare-order-073119.jpg",
    title: "Which SkinCeuticals Vitamin C Serum Is Right for You?"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/12/how_to_pick_eltamd_sunscreen-091512.jpg",
    title: "How to Pick the Right EltaMD Sunscreen for You"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/19/original-skincare-order-073119.jpg",
    title: "The Skinmialistic Three-Step P.M. Routine: Normal-Combo Skin"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/17/conscious-beauty-blog-081917.png",
    title: "Conscious Beauty: A More Mindful Approach to Your Routine"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/03/woman-in-the-sunlight-feature_1625258073-040303.jpg",
    title: "Why Probiotics Might Be the Secret to Calmer, Clearer Skin"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/13/Augustinus-Bader_1659128996-848x672-013513.jpg",
    title: "Introducing Augustinus Bader: Your One Stop Shop for Science-Backed Beauty"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/38/skin_timeline_%281%29-051238.jpg",
    title: "Flower Power: Meet the Family Behind Chantecaille"
  },
  {
    url: "https://blogscdn.thehut.net/app/uploads/sites/1160/2017/03/Woman-with-Curly-Red-Hair-on-Gray-Background-2.jpg",
    title: "Introducing: The Fragrance Shop"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/27/fragrance_blog_%281%29-075627.jpg",
    title: "Introducing: The Fragrance Shop"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/13/Augustinus-Bader_1659128996-848x672-013513.jpg",
    title: "Introducing Augustinus Bader: Your One Stop Shop for Science-Backed Beauty"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/38/skin_timeline_%281%29-051238.jpg",
    title: "Flower Power: Meet the Family Behind Chantecaille"
  },
  {
    url: "https://blogscdn.thehut.net/app/uploads/sites/1160/2017/03/Woman-with-Curly-Red-Hair-on-Gray-Background-2.jpg",
    title: "Introducing: The Fragrance Shop"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/27/fragrance_blog_%281%29-075627.jpg",
    title: "Introducing: The Fragrance Shop"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/13/Augustinus-Bader_1659128996-848x672-013513.jpg",
    title: "Introducing Augustinus Bader: Your One Stop Shop for Science-Backed Beauty"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/38/skin_timeline_%281%29-051238.jpg",
    title: "Flower Power: Meet the Family Behind Chantecaille"
  },
  {
    url: "https://blogscdn.thehut.net/app/uploads/sites/1160/2017/03/Woman-with-Curly-Red-Hair-on-Gray-Background-2.jpg",
    title: "Introducing: The Fragrance Shop"
  },
  {
    url: "https://static.thcdn.com/images/small/webp/widgets/208-us/27/fragrance_blog_%281%29-075627.jpg",
    title: "Introducing: The Fragrance Shop"
  }
]

export const FromBlogs = () => {

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
    <div style={{width: "100%", margin:"auto", justifyContent:"center", cursor:"pointer"}}>
      <Box width="100%" margin="auto">
        <Slide dots="true" infinite="true" speed="100" slidesToShow="5" autoplay="true" slidesToScroll="0.3" arrows="false" autoplaySpeed="200" cssEase="ease-in-out">
          {
            slideImages.map((items)=>{
            return (<Box key={Math.random()}>
              <Image width="100%" src={items.url}/>
              <span style={{width:"80%", textAlign:"center", fontSize: "16px"}}>{items.title}</span>
            </Box>)})
          }
        </Slide>
      </Box>


      {/* <div>
        <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/16/0818_THG0035093_DS_SEPT_SHOT_27_031_%281%29-101016.jpg" />
        <h6>Flower Power: Meet the Family Behind Chantecaille</h6>
      </div>
      <div>
        <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/27/fragrance_blog_%281%29-075627.jpg" />
        <h6>Introducing: The Fragrance Shop</h6>
      </div>
       <div>
        <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/13/Augustinus-Bader_1659128996-848x672-013513.jpg" />
        <h6>
          Introducing Augustinus Bader: Your One Stop Shop for Science-Backed
          Beauty
        </h6>
       </div>
      <div>
        <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/38/skin_timeline_%281%29-051238.jpg" />
        <h6>The Ultimate Skin Care Timeline</h6>
      </div> */}
    </div>
  );
};
