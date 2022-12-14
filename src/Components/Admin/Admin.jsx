import React from 'react'
import "./Admin.css"
import weblogo from "./weblogo.png"
import { Link } from 'react-router-dom'

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
    <div className="headingfdgsdfh">
     <div><button><Link to="/admin/dashboard" >Dashboard</Link> </button> </div>
     <div><button><Link to="/admin/category">Category</Link> </button> </div>

     <div><button> <Link to="/admin/addproduct">Add Product</Link> </button></div>
     
     <div><button><Link to="/admin/orders">Orders</Link> </button> </div>
    </div>
    {/* <Route path='' element={< />}/>
    import { Admin } from './Components/Admin/Admin'
import { Dashboard } from './Components/Admin/Dashboard'
import { Addproduct } from './Components/Admin/Addproduct'
import { Category } from './Components/Admin/Category'
import { Editproduct } from './Components/Admin/Editproduct'
import { Orders } from './Components/Admin/Orders'

    
     <Route path='/cart' element={<Cart />}></Route>
      <Route path="/admin" element={<Admin/>}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="addproduct" element={<Addproduct/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path="editproduct/:id" element={<Editproduct />}/>
      <Route path="orders" element={<Orders/>}/>
    
    
    
    */}
    
    </>
  )
}
