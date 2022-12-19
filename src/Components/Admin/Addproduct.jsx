import React, { useState } from "react";
import "./Addproduct.css";
import { Button, ButtonGroup, Box, Select } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
export const Addproduct = () => {
  const [state, setstate] = useState({
    title: "",
    image: "",
    price:"",
    rating:"",

    qty: "",
  });
  const [cate, setcate] = useState("");

const submitdata=()=>{

return axios.post(`https://frightened-boot-dove.cyclic.app/${cate}`,state).then((r)=>alert("Product Added To Server...")).catch((e)=>console.log(e)).then((q)=>setstate({
  title: "",
  image: "",
  price: "",
  rating: "",

  qty: "",
}))


}





  return (
    <>
      <div className="tophead">
        <Button colorScheme="twitter">Add Products to server</Button>
      </div>

      <div className="formbody">
        <input
          type="text"
          className="forminoput48"
          placeholder="Name of the Product"
          value={state.title} onChange={(e)=>setstate({...state,title:e.target.value})}
        />
        <input type="text" className="forminoput48" placeholder="Image "  value={state.image} onChange={(e)=>setstate({...state,image:e.target.value})}/>
        <input type="text" className="forminoput48" placeholder="Price "  value={state.price} onChange={(e)=>setstate({...state,price:e.target.value})}/>
        <input type="text" className="forminoput48" placeholder="Rating " value={state.rating} onChange={(e)=>setstate({...state,rating:e.target.value})}/>
        <select name="Category" className="forminoput48" value={cate} onChange={(e)=>setcate(e.target.value)}>
          <option value="">Select Category</option>
          <option value="men">Men</option>
          <option value="products">cosmatic</option>
          <option value="hair">Hair</option>
          <option value="neocutis">Neocutis </option>
        </select>
        <input type="text" className="forminoput48" placeholder="Quantity " value={state.qty} onChange={(e)=>setstate({...state,qty:e.target.value})}/>
        <div className="addbtn" onClick={submitdata}>
          ADD
          <AiFillEdit />
        </div>
      </div>
    </>
  );
};
