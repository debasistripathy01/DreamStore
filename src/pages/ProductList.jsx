import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getData } from '../Redux/ProdData/action';
import { ProductCard } from './ProductCard';
import styled from '@emotion/styled';
import './ProductList.css'


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
      dispatch(getData());
    }
   }, [location.search, location, dispatch, products.length, searchParams])

  //  if(isLoading){
  //   return <div><h1>...Loading</h1></div>
  //  }

  return (
    <div className='Product_store'>
    <h1>products</h1>
      {products.length > 0 && products.map((item) => {
        return (
          <ProductCardWrapper key={item.id}>
              <ProductCard data={item} />
          </ProductCardWrapper>
        )
      })}


    </div>
  )
}

const ProductCardWrapper = styled.div`
  width: 300px;
  border: 1px solid red;
  ${'' /* display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-template-rows:repeat(auto) */}
`;