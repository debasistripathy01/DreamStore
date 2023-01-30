import React from 'react'
import { Link } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
// import { Navbar } from '../NavBar/Navbar';
import { BannerCarousel } from './BannerCarousel';
import { FeaturedBrand } from './FeaturedBrands';
import { FromBlogs } from './FromBlogs';

import "./homepage.css"
import { NowTrending } from './NowTrending';
import { ProductsBestSeller } from './ProductBestSeller';
import { ShopByCategory, ShopByCategory2 } from './ShopByCategory';

import { SmallSlider } from './firstSlider';

import {Navbar} from "../NavBar/Navbar"
import { Carousel } from 'react-bootstrap';
import { CarouselExmp } from './CarouselExmp';
import { Text } from '@chakra-ui/react';



export const Homepage = () => {
  return (
    <div className='fullpage'>
    <Navbar/>
        {/*------------ Navbar (Day-1 Step-1 Harshal)  ---------------*/}
      {/* <Navbar /> */}
        <section className='homeSection'>
        
            {/*------------ BannerCarousel (day-1 step-2 Debasis)------------*/}

            <div className="CaroselDivMain">
                <BannerCarousel />
            </div>


            {/* ASk The Esthetician ----Change Here*/}
            <div>
                <h3>3x Points on Sunday Riley</h3>
                <p>
                    Rewards members earn TRIPLE on the cult-favorite formulas for
                    radiant-looking skin.{" "}
                </p>
                <div>
                    <Text fontSize='4xl' textAlign={"center"} marginTop="1%" marginBottom="1%">Trending Today</Text>
                </div>
                <div className='first_slider_col'>
                    {/* <div className="SlidingProdSmall"> */}
                        <div className="ProdSmallDiv">
                            <img
                                src="https://static.thcdn.com/images/medium/webp/widgets/208-us/47/3x_PTS_Sunday_Riley-070147.png"
                                alt="prod"
                            />
                        </div>
                    {/* </div> */}

                    <div className='crouselExmp'>
                        <CarouselExmp />
                    
                    </div>
                </div>
            </div>
            
            {/* -------------------HomePage Body (Day-1 Step-2 Debasis)------------ */}
            
            {/* {SHop By Category } */}
            <div>
                <h2>Shop By Category</h2>
                <div className="shop_category">
                    <ShopByCategory />
                </div>
                
            </div>
                    {/* --------Carousel Second One For Products Below Banner page------ */}

            <div >
                <h2>Best Sellers</h2>
                <div className='BestSeller'>

                <ProductsBestSeller />
                </div>
            </div>
            <div >
                <ShopByCategory2 />
            </div>
            <div className="SingleImmg">
                <Link to="/products">
                    <img
                    src="https://static.thcdn.com/images/large/webp/widgets/208-us/05/original-Glo_Skin_Disrupter_long-054505.png"
                    alt="prod"
                    />
                    
                </Link>
            </div>
             {/* -----------------{Best Sellelr Part } -------------------*/}
             <>
                <h2>Best Sellers</h2>
                <ProductsBestSeller />
            </>
            <div>
                <h2>Now Trending</h2>
                <div className="NowTrendingDiv">
                    <NowTrending />
                </div>
            </div>
            {/*------------ FeaturedBrand----------- */}
            <div>
                <h2>Featured Brands</h2>
                <div className="FeaturedBrandDiv">
                    <FeaturedBrand />
                </div>
            </div>
             {/* -----------------{From The Blog } -------------------*/}
            <div>
                <h2> From The Blog</h2>
                {/* <div className="FromTheBlogDiv"> */}
                    <FromBlogs />
                {/* </div> */}
            </div>


        

        </section>
        <Footer />
    </div>
  )
}
