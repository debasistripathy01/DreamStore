import React from 'react'
// import { Navbar } from '../NavBar/Navbar';
import { BannerCarousel } from './BannerCarousel';

import "./homepage.css"
import { ProductsBestSeller } from './ProductsBestSeller';
import { ShopByCategory, ShopByCategory2 } from './ShopByCategory';



export const Homepage = () => {
  return (
    <div>

        {/*------------ Navbar (Day-1 Step-1 Harshal)  ---------------*/}
      {/* <Navbar /> */}
        <section className='homeSection'>
        
            {/*------------ BannerCarousel (day-1 step-2 Debasis)------------*/}

            <div className="CaroselDivMain">
                <BannerCarousel />
            </div>
            
            {/* -------------------HomePage Body (Day-1 Step-2 Debasis)------------ */}
            

                    {/* --------Carousel Second One For Products Below Banner page------ */}

            <div className='bestSellers'>
                <h2>Best Sellers</h2>
                <ProductsBestSeller />
            </div>

            {/* {SHop By Category } */}
            <div>
                <h3>Shop By Category</h3>
                <div className="shop_category">
                    <ShopByCategory />
                </div>
                <div className="shop_category2">
                    <ShopByCategory2 />
                </div>
            </div>

            

        

        </section>
        {/* <Footer/> */}
    </div>
  )
}
