const express = require("express");
const {CartModel} = require("../models/cart.model");
const { Router } = require("express");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const cartRouter = Router();


//GET all the authorized Cart Data all
cartRouter.get("/", async (req, res) => {
  const user_token=req.headers.authorization;
  const decoded=jwt.verify(user_token, process.env.tokenKey);
  const { UserId } = decoded;

  const items = await CartModel.find({ UserId: UserId });
  // const items = await CartModel.find();

  res.status(200).send(items);
});


//CArt data according to all the specific ID
cartRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const items = await CartModel.find({ id: id });

  res.status(200).send(items);
});


//Delete all the Cart data according to their IDs

cartRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const deletedData = await CartModel.deleteOne({ id: id });

  const data = await CartModel.find();

  res.status(200).send(data);
});

// Cart Router patch according to their ID Edit the details

cartRouter.patch("/:id/edit", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { size, quantity } = req.body;
  const item = await CartModel.findOne({ _id: id });
  console.log(item);
  const updated_product = await CartModel.findOneAndUpdate(
    { _id: id },
    { size: size, quantity: quantity },
    { new: true }
  );
  return res.status(200).send(updated_product);
});


// Post or the Items Added through the Cart (EndPOint)

cartRouter.post("/create", async (req, res) => {
  const { id,
    brand_logo_url,
    name,
    productBlock_image_src,
    productBlock_productName,
    papBanner_text,
    papPopup_text,
    productBlock_ratingValue,
    productBlock_reviewCount,
    productBlock_priceValue,
    productQuickbuySimple,
    papFreeGift_image,
    papFreeGift_title,
    papFreeGift_saving,
    description,
    img_url_1,
    img_url_2,
    img_url_3,
    item_category,
    complexion_format,
    complexion_coverage,
    makeup_category,
    rating,
    review_count,
    mrp,
    offer_price,
    quantity,
    item_in_cart,
    item_like,
    item_stock,
    UserId } = req.body;


  const data = await CartModel.create({
        id,
        brand_logo_url,
        name,
        description,
        productBlock_image_src,
        productBlock_productName,
        papBanner_text,
        papPopup_text,
        productBlock_ratingValue,
        productBlock_reviewCount,
        productBlock_priceValue,
        productQuickbuySimple,
        papFreeGift_image,
        papFreeGift_title,
        papFreeGift_saving,
        img_url_1,
        img_url_2,
        img_url_3,
        item_category,
        complexion_format,
        complexion_coverage,
        makeup_category,
        rating,
        review_count,
        mrp,
        offer_price,
        quantity,
        item_in_cart,
        item_like,
        item_stock,
        UserId
  });
  return res.status(200).send({ message: "Item addeed", cart: data });
});

module.exports = {cartRouter}