import React from 'react'
import "./Admin.css"
import weblogo from "./weblogo.png"
import { Link,useNavigate } from 'react-router-dom'
import { Alladminrout } from './Alladminrout'
import { Outlet } from "react-router-dom"
import {BsBoxArrowInUpRight} from "react-icons/bs"

export const Admin = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='adminnav'>
         <div className='adminlogo'> 
          <img src={weblogo} alt="logo" className='logo'/>
         
         </div>
         <div className='adheading'>
            <h1>Welcome to Admin Overview</h1>
         </div>
         <div className='adminnavigate' onClick={()=>navigate("/")}>
           Go To Homepage<BsBoxArrowInUpRight/>
         </div>
    </div>
    <div className='adminbody'>
     <div className='categorypanel'>
     <div><Link to="dashboard" >Dashboard</Link>  </div>
   

     <div> <Link to="addproduct">Add Product</Link> </div>
     
     <div><Link to="orders">Orders</Link>  </div>
     </div>
<div className='rmcatbodubj'>
<Outlet/>
</div>


    </div>
 <div className='foterofadsfg'></div>







  
    
    </>
  )
}
