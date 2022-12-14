import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({data}) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        console.log("Button Clicked");
    }

  return (
    <>
        <div><img className='prodImage' src={data.image} alt={data.title} /></div>
        <p className='prodtitle'>{data.title}</p>
        <h2 className='prodprice'>$ {data.price}</h2>
        <div className='rate_count'>
          <p>⭐{data.rating.rate}</p>
          <p>{data.rating.count}</p>
        </div>
       <div  className='btn' onClick={()=>handleClick()}><button>QUICK BUY</button></div>
   
    </> 
  )
}