import React,{useEffect,useState} from "react";
 import "./Orders.css"
 import { Button, ButtonGroup,Box } from "@chakra-ui/react";
 import { Singleproduct } from "./Singleproduct"; 
 import axios from "axios";

 export const Orders = () => {
  const [data,setdata]=useState([]);
const [param,setparam]=useState("cart")
const getdata=(param)=>{

  return  axios.get(`https://server-dermstore.onrender.com/cartproduct`)

  .then((r)=>setdata(r.data)).catch((e)=>console.log(e))
 }
useEffect(()=>{
  getdata(param)
},[param])



const ondeletitem=(id,param)=>{

 return axios 

    .delete(`https://server-dermstore.onrender.com/cartproduct/${id}`).then((r)=>{

        alert("Product Deleted from Server..")
    }).catch((e)=>{
        console.log(e)
    }).then( getdata(param))

}
   return (
     <>
 <div className="tophead">
       
       <Button colorScheme="twitter">Orders</Button>
     </div>
     <div className="productsdisplay">
        {
          data.length>0&&data.map((item)=>{
            return <Singleproduct key={item.id} item={item} onDelet={()=>ondeletitem(item.id,param)}/>
          })
        }


      </div>
     </>
   )
 }
 