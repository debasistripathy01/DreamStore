import React from "react";
import style from "./Navbar.css";
import { Link ,useNavigate} from "react-router-dom";
import weblogo from "./weblogo.png"
import {AiOutlineUser} from "react-icons/ai"
import {FaShoppingBag} from "react-icons/fa"
import { TfiTruck } from "react-icons/tfi";
import { TbChartCircles,TbTruck ,TbDiamond} from "react-icons/tb";
import { FiClock,FiSmartphone,FiGift} from "react-icons/fi";
export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className="navtopbodyyy"></div>
      <div className="navbaody">
        <div className="navtopbody">
          <div className="mainlogo" onClick={()=>navigate("/")}>
            <img src={weblogo} alt="" />
          </div>
          <div className="searchboxdic">
            <input type="text" />
          </div>
          <div className="useracsection847">
           
              <h1 className="acountbuton"><AiOutlineUser className="naviconhgf554"/><Link to="/login">Account</Link></h1>
            
              <h1 className="acountbuton"><FaShoppingBag className="naviconhgf554"/><Link to="/cart">Cart</Link></h1>
            
          </div>
        </div>
        <div className="categorydic">
          
            <Link to="/product">Brands</Link>
          
          
            <Link to="/skincare">Holidayshop</Link>
         
          
            <Link to="/main">Bathandbody</Link>
          
            <Link to="/product">Fragrance</Link>
          
            <Link to="/skincare">Tools And Devices</Link>
          
            <Link to="/product">Gifts</Link>
         
            <Link to="/makeup">Makeup</Link>
          
            <Link to="/makeup">Hairandcare</Link>
          
            <Link to="/main">New</Link>
          
            <Link to="/skincare">Skincare</Link>
          
        </div>
      </div>
      <div className="bottomadd">
<h1><TbTruck className="naviconhgf554"/> FREE US Shiping $50+</h1>
<h1><TbChartCircles className="naviconhgf554"/> New Customers Save 15%*</h1>
<h1><TbDiamond className="naviconhgf554"/> Dermstore Rewards</h1>
<h1><FiClock className="naviconhgf554"/> Ask The Esthetician</h1>
<h1><FiSmartphone className="naviconhgf554"/> Download Our App</h1>
<h1><FiGift className="naviconhgf554"/> Refer a Friend, Get $15</h1>
      </div>
    </>
  );
};
