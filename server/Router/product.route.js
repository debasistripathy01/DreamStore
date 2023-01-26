const express = require("express");
const {ProductModel} = require("../models/product.model.js");

const productRouter = express.Router();



//Post ALl the Products that are available with Data 
productRouter.post("/create",  async (req, res) => {
    const products=req.body;
  
    const data = new ProductModel.insertMany(products);
    await data.save();
  
    res.status(200).send("Products Data Added");
  });
  

//Get all the Products Data Available in the Data base that are present
productRouter.get("/", async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.send(products);
    } catch (error) {
      res.send({ message: error.message });
    }
  });
  
  //Get The Products data according to IDs
  productRouter.get("/:prodId", async (req, res) => {
    const id = req.params.prodId;
    try {
      const products = await ProductModel.findById(id);
      res.send(products);
    } catch (error) {
      res.send({ message: error.message });
    }
  });
  
  module.exports = {productRouter};