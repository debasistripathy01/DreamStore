import React from "react";

import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footerbody">
        <div className="fotertop">
          <div>
            <h1 className="fotertoph1">
              Sign up to our newsletters and receive the latest exclusive
              discounts and deals
            </h1>
            <div className="fotsignupbtn">SIGN ME UP</div>
          </div>
          <div>
            <h1 className="fotertoph1">Cnnect with us</h1>
            <div className="useritempanal">
              <div>
                <AiFillFacebook />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <AiFillTwitterSquare />
              </div>
              <div>
                <FaYoutube />
              </div>
              <div>
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>




        
      </div>
    </>
  );
};
