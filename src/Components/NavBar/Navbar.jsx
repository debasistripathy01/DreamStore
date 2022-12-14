import React from "react";
import style from "./Navbar.css";
import { Link } from "react-router-dom";
import weblogo from "./weblogo.png"
export const Navbar = () => {
  return (
    <>
      <div className="navbaody">
        <div className="navtopbody">
          <div className="mainlogo">
            <img src={weblogo} alt="" />
          </div>
          <div className="searchboxdic"></div>
          <div className="useracsection847">
            <button>
              <Link >Acount</Link>
            </button>
            <button>
              <Link >Cart</Link>
            </button>
          </div>
        </div>
        <div className="categorydic">
          <button>
            <Link >Brands</Link>
          </button>
          <button>
            <Link >Holidayshop</Link>
          </button>
          <button>
            <Link >bathandbody</Link>
          </button>
          <button>
            <Link >fragrance</Link>
          </button>
          <button>
            <Link >Tools And Devices</Link>
          </button>
          <button>
            <Link >gifts</Link>
          </button>
          <button>
            <Link >makeup</Link>
          </button>
          <button>
            <Link >hairandcare</Link>
          </button>
          <button>
            <Link >new</Link>
          </button>
          <button>
            <Link >skincare</Link>
          </button>
        </div>
      </div>
    </>
  );
};
