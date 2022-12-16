import React from 'react'
import "./Admin.css"
import weblogo from "./weblogo.png"
import { Link } from 'react-router-dom'
import { Alladminrout } from './Alladminrout'
import { Outlet } from "react-router-dom"
export const Admin = () => {
  return (
    <>
    <div className='adminnav'>
         <div className='adminlogo'> 
          <img src={weblogo} alt="logo" className='logo'/>
         
         </div>
         <div className='adheading'>
            <h1>Welcome to Admin Overview</h1>
         </div>
         <div className='adminnavigate'>
            <button >Go To Homepage</button>
         </div>
    </div>
    <div className='adminbody'>
     <div className='categorypanel'>
     <div><Link to="dashboard" >Dashboard</Link>  </div>
     <div><Link to="category">Category</Link> </div>

     <div> <Link to="addproduct">Add Product</Link> </div>
     
     <div><Link to="orders">Orders</Link>  </div>
     </div>
<div className='rmcatbodubj'>
<Outlet/>
</div>


    </div>








  
    
    </>
  )
}
