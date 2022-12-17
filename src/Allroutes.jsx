import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './Components/LandingPages/Homepage'
import { Login } from './Components/LoginAuth/Login'
// import { Signup } from './Components/LoginAuth/Signup'
import { Cart } from './Components/CartPage/Cart'

import Signup from './Components/LoginAuth/Signup'
// import { ProductList } from './pages/ProductList'
import { ProductPage } from './pages/ProductPage';
//1. HomePage
//2. Login
//3. Signup
// 4. Products pages
//    i. mumltiple product
//    ii. individual
//4. Cart page

import { Skincare } from './pages/Productpages/Skincare'
import { Main } from './pages/Productpages/Main'
import { Makeup } from './pages/Productpages/Makeup'




import {Admin} from "./Components/Admin/Admin"
import { Dashboard } from './Components/Admin/Dashboard'
import { Category } from './Components/Admin/Category'
import { Editproduct } from './Components/Admin/Editproduct'
import { Orders } from './Components/Admin/Orders'
import { Addproduct } from './Components/Admin/Addproduct'
//import { Alladminrout } from './Components/Admin/Alladminrout'
import {ProductList} from "./pages/ProductList"

export const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup/>} />

      <Route path='/makeup' element={<Makeup />}/>


      <Route path='/product' element={<ProductList />}/>

      <Route path='/cart' element={<Cart />}/>
      <Route path='/main' element={<Main />}/>
      <Route path='/skincare' element={<Skincare />}/>
      <Route path='/cart' element={<Cart />}></Route>

      {/* <Route path='/admin' element={<Admin />}>
        <Alladminrout/>
      </Route> */}
      <Route path='/admin' element={<Admin />}>
        <Route index element={<Dashboard/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='category' element={<Category/>} />
        <Route path='editproduct' element={<Editproduct/>} />
        <Route path='orders' element={<Orders/>} />
        <Route path='addproduct' element={<Addproduct/>} />
      </Route> 

    </Routes>
  )
}
