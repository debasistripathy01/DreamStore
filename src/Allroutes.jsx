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

<<<<<<< HEAD
// import {Admin} from "./Components/Admin/Admin"
// import { Alladminrout } from './Components/Admin/Alladminrout'
=======
import {Admin} from "./Components/Admin/Admin"
import { Alladminrout } from './Components/Admin/Alladminrout'
>>>>>>> 110cf54c1b0f26175833e3a6a50ebe324dc0c7ce


export const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/product' element={<ProductPage />}/>
<<<<<<< HEAD
      <Route path='/cart' element={<Cart />}/>
      {/* <Route path='/admin' element={<Admin />}>
        <Alladminrout/>
      </Route> */}
=======
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/admin' element={<Admin />}>
        <Alladminrout/>
      </Route>
>>>>>>> 110cf54c1b0f26175833e3a6a50ebe324dc0c7ce
      <Route></Route>
      <Route></Route>

    </Routes>
  )
}
