import styled from '@emotion/styled'
import React from 'react'
import { FilterComp } from './FilterComp'
import { ProductList } from './ProductList'

export const ProductPage = () => {
  return (
    <div>
        <ProductPageWrapper>
          <FilterWrapper>
            <FilterComp />
          </FilterWrapper>
          <ProductWrapper>
            <ProductList />
          </ProductWrapper>
        </ProductPageWrapper>


    </div>
  )
}

const ProductPageWrapper = styled.div`
   display: flex;
   border: 1px solid red;
`;

const FilterWrapper = styled.div`
  width: 300px;
  border: 1px solid blue;
  `;

const ProductWrapper = styled.div`
   width:100%;
   border:1px solid green;
   display: grid;
   ${'' /* grid-template-columns: repeat(auto-fill, minmax(300px, max-content));
  grid-template-rows: 200px repeat(auto-fill, 100px) 300px; */} 
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto);
   gap:10px 10px;
`;
