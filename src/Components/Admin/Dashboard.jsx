import React,{useEffect,useState} from "react";
import "./Dashboard.css";
import { Button, ButtonGroup,Box } from "@chakra-ui/react";
import { Singleproduct } from "./Singleproduct";
import axios from "axios";

export const Dashboard = () => {
const [data,setdata]=useState([]);
const getdata=(parm="men")=>{
  return  axios.get(`https://frightened-boot-dove.cyclic.app/${parm}`)
  .then((r)=>setdata(r.data)).catch((e)=>console.log(e))
 }
useEffect(()=>{
  getdata()
},[])

console.log(data)

  return (
    <>
      <div className="tophead">
       
        <Button colorScheme="twitter">Dashboard</Button>
      </div>
     <div className="totaldata">
     <div className="t123">
      <h1>Total Products</h1>
      <p className="countsdf3">5000</p>
      </div>
     <div className="t1234"><h1>Weekly Sells</h1>
      <p className="countsdf3">5000</p> </div>
     <div className="t1235"><h1>Weekly order Count</h1>
      <p className="countsdf3">5000</p></div>
     </div>

      <div className="productoverviewdaa">
      <Button colorScheme='purple'>Mens</Button>
      <Button colorScheme='purple'>Skincare</Button>
      <Button colorScheme='purple'>Trending</Button>
      <Button colorScheme='purple'>New Arivals</Button>
      <Button colorScheme='purple'>SkinCare</Button>
      <Button colorScheme='purple'>Hair</Button>
      
       </div>
      <div className="productsdisplay">
        {
          data.length>0&&data.map((item)=>{
            return <Singleproduct key={item.id} item={item}/>
          })
        }


      </div>
   








    </>
  );
};
