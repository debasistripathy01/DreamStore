import React, { useEffect, useState } from "react";
import "./Makeup.css";
import { Navbar } from "../../Components/NavBar/Navbar";
import { Singleproducts } from "./Singleproducts";
import axios from "axios";
import {Footer} from "../../Components/Footer/Footer"

export const New = () => {
  const [data, setdata] = useState([]);
  const [param, setparam] = useState("skincare");
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
          <p className="totalpr">Total Products ;{data.length}</p>
          <h4 className="desctop809">
            When you're ready to tackle the world of contouring, highlighting
            and barely-there makeup looks, let Dermstore be your go-to for
            cosmetics. Industry faves, such as Dermablend, jane iredale, Jouer
            and Tarte Cosmetics, often use skin-nourishing ingredients in their
            classic and playful pieces that draw upon your natural beauty. And
            since beauty is all about expressing yourself, you can't go wrong.
          </h4>
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
