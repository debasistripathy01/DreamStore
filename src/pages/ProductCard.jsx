import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import {Navbar} from "../Components/NavBar/Navbar"
import {Footer} from "../Components/Footer/Footer"

export const ProductCard = ({data}) => {
    const navigate = useNavigate();

    
    const handleClick=()=>{
        console.log("Button Clicked");
    }

  return (
    <>
  
        <img className='prodImage' src={data.image} alt={data.title} />
        <h3 className='prodtitle'>{data.title}</h3>
        <h2 className='prodprice'>$ {data.price}</h2>
        <div className='rate_count'>
          <p>⭐{data.rating.rate}</p>
          <p>{data.rating.count}</p>
        </div>
       <div  className='btn' onClick={()=>handleClick()}><button>QUICK BUY</button></div>
  
    </> 
  )
}