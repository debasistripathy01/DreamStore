import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Dashboard} from "./Dashboard"
import {Addproduct} from "./Addproduct"
import {Category} from "./Category"
import {Editproduct} from "./Editproduct"
import {Orders} from "./Orders"


export const Alladminrout = () => {
  return (
    <Routes>
   
     <Route ></Route>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="addproduct" element={<Addproduct/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path="editproduct/:id" element={<Editproduct />}/>
      <Route path="orders" element={<Orders/>}/>
    



    </Routes>
  )
}
