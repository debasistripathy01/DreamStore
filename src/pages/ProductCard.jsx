import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import {Navbar} from "../Components/NavBar/Navbar"
import {Footer} from "../Components/Footer/Footer"
import axios  from 'axios'
import {BsStarFill} from "react-icons/bs"

export const ProductCard = ({data}) => {
    const navigate = useNavigate();
    const ra=Math.floor(data.rating.rate)
    const addtocart=()=>{
      return axios 
     .post(`https://server-dermstore.onrender.com/cartproduct`,data).then((r)=>{
       alert("Product added to cart")
     }).then((e)=>{
         console.log(e)
     })
     
     
     
     
     }
    const handleClick=()=>{
        console.log("Button Clicked");
    }

  return (
    <>
  
        <img className='prodImage' src={data.image} alt={data.title} />
        <h3 className='prodtitle'>{data.title}</h3>
        <h2 className='prodprice'>$ {data.price}</h2>
        <div className='rate_count'>
          <p>{ [...Array(ra)].map((elementInArray, index) => ( 
    <BsStarFill key={index}/>
))}</p>
          
        </div>
       <div  className='btn' onClick={()=>addtocart()}>Quick By</div>
  
    </> 
  )
}