import React,{useEffect,useState} from "react";
import "./Dashboard.css";
import { Button, ButtonGroup,Box } from "@chakra-ui/react";
import { Singleproduct } from "./Singleproduct"; 
import axios from "axios";

export const Dashboard = () => {
const [data,setdata]=useState([]);
const [param,setparam]=useState("skincare")
const getdata=(param)=>{
  return  axios.get(`https://frightened-boot-dove.cyclic.app/${param}`)
  .then((r)=>setdata(r.data)).catch((e)=>console.log(e))
 }
useEffect(()=>{
  getdata(param)
},[param])



const ondeletitem=(id,param)=>{

 return axios 
    .delete(`https://frightened-boot-dove.cyclic.app/${param}/${id}`).then((r)=>{
        alert("Product Deleted from Server..")
    }).catch((e)=>{
        console.log(e)
    }).then( getdata(param))
 

    


}

  return (
    <>
      <div className="tophead">
       
        <Button colorScheme="twitter">Dashboard</Button>
      </div>
     <div className="totaldata">
     <div className="t123">
      <h1>Total Products</h1>
      <p className="countsdf3">{data.length}0</p>
      </div>
     <div className="t1234"><h1>Weekly Sells</h1>
      <p className="countsdf3">125</p> </div>
     <div className="t1235"><h1>Weekly order Count</h1>
      <p className="countsdf3">320</p></div>
     </div>

      <div className="productoverviewdaa">
      <Button colorScheme='purple' onClick={()=>setparam("men")}>Mens</Button>
      <Button colorScheme='purple' onClick={()=>setparam("SkinMedica")}>Skincare</Button>
      <Button colorScheme='purple' onClick={()=>setparam("Neocutis")}>Trending</Button>
      <Button colorScheme='purple' onClick={()=>setparam("NewArrivals")}>New Arivals</Button>
      <Button colorScheme='purple' onClick={()=>setparam("skinCare")}>SkinCare</Button>
      <Button colorScheme='purple' onClick={()=>setparam("hair")}>Hair</Button>
      
       </div>
      <div className="productsdisplay">
        {
          data.length>0&&data.map((item)=>{
            return <Singleproduct key={item.id} item={item} onDelet={()=>ondeletitem(item.id,param)}/>
          })
        }


      </div>
   








    </>
  );
};
