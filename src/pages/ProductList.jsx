import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getData } from '../Redux/ProdData/action';
import { ProductCard } from './ProductCard';
import styled from '@emotion/styled';
import './ProductList.css'
import { FilterComp } from './FilterComp';
import {Navbar} from "../Components/NavBar/Navbar"
import {Footer} from "../Components/Footer/Footer"

export const ProductList = () => {
   const products = useSelector((store) => store.productReducer.products)
  //  console.log(products)
   const dispatch = useDispatch();
   const location = useLocation();
   const [searchParams] = useSearchParams();
  //  console.log(location);
// let store = useSelector((store)=>store)
// console.log("store",store);
   useEffect(()  => {
    if(location || products.length === 0){
      const sortBy = searchParams.get('sort')
      const ProductParams = {
        params:{
          category: searchParams.getAll(''),
          _sort: sortBy && 'price',
          _order: sortBy
        }
      }
      dispatch(getData(ProductParams));
    }
   }, [location.search, location, dispatch, products.length, searchParams])

  //  if(isLoading){
  //   return <div><h1>...Loading</h1></div>
  //  }

  return (
    <>
    <Navbar/>
     <div className='Product_store_main'>
   
   <div className='FilterWrapper'>
           <FilterComp />
   </div>

   <div className='product_store'>
   {/* <h1>products</h1> */}
   
     {products.length > 0 && products.map((item) => {
     return (
       <div className='prod_card' key={item.id}>
           <ProductCard data={item} />
       </div>
     )
   })}
  </div>


 </div>
 <Footer/>
    </>
   
  )
}

