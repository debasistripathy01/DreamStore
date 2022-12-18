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



export const Homepage = () => {
  return (
    <>
    <Navbar/>
        {/*------------ Navbar (Day-1 Step-1 Harshal)  ---------------*/}
      {/* <Navbar /> */}
        <section className='homeSection'>
        
            {/*------------ BannerCarousel (day-1 step-2 Debasis)------------*/}

            <div className="CaroselDivMain">
                <BannerCarousel />
            </div>


            {/* ASk The Esthetician */}
            <div>
                <h3>3x Points on Sunday Riley</h3>
                <p>
                    Rewards members earn TRIPLE on the cult-favorite formulas for
                    radiant-looking skin.{" "}
                </p>
                <div className="SlidingProdSmall">
                    <div className="ProdSmallDiv">
                    <img
                        src="https://static.thcdn.com/images/medium/webp/widgets/208-us/47/3x_PTS_Sunday_Riley-070147.png"
                        alt="prod"
                    />
                    </div>
                    <SmallSlider />
                </div>
            </div>
            
            {/* -------------------HomePage Body (Day-1 Step-2 Debasis)------------ */}
            
            {/* {SHop By Category } */}
            <div>
                <h3>Shop By Category</h3>
                <div className="shop_category">
                    <ShopByCategory />
                </div>
                
            </div>
                    {/* --------Carousel Second One For Products Below Banner page------ */}

            <div>
                <h2>Best Sellers</h2>
                <ProductsBestSeller />
            </div>
            <div className="shop_category2">
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
                <h3>Now Trending</h3>
                <div className="NowTrendingDiv">
                    <NowTrending />
                </div>
            </div>
            {/*------------ FeaturedBrand----------- */}
            <div>
                <h3>Featured Brands</h3>
                <div className="FeaturedBrandDiv">
                    <FeaturedBrand />
                </div>
            </div>
             {/* -----------------{From The Blog } -------------------*/}
            <div>
                <h3> From The Blog</h3>
                {/* <div className="FromTheBlogDiv"> */}
                    <FromBlogs />
                {/* </div> */}
            </div>

        

        </section>
        <Footer />
    </>
  )
}
