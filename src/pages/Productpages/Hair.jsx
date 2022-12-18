import React, { useEffect, useState } from "react";
import "./Makeup.css";
import { Navbar } from "../../Components/NavBar/Navbar";
import { Singleproducts } from "./Singleproducts";
import axios from "axios";
import {Footer} from "../../Components/Footer/Footer"

export const Hair = () => {
  const [data, setdata] = useState([]);
  const [param, setparam] = useState("hair");
  const getdata = (param) => {
    return axios
      .get(`https://frightened-boot-dove.cyclic.app/${param}`)
      .then((r) => setdata(r.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getdata(param);
  }, [param]);

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="prodbody12">
        <div className="filterbody">
         <div></div>
      



        </div>
        <div className="poductbodymaincom">
          <h1 className="producttype">Hair Care Products</h1>
          <p className="totalpr">Total Products</p>
          <div className="categorudiv">
            <div>Oribe</div>
            <div>Olaplex</div>
            <div>Harry Josh Pro Tools</div>
            <div>R+co</div>
            <div>Briogeo </div>
          </div>
          <div className="mainproduts">
          {
          data.length>0&&data.map((item)=>{
            return <Singleproducts key={item.id} item={item}/>
          })
        }
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
