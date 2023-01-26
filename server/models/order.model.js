const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    items: Array,
    address: Object,
    amount: Number,
    UserId: String
});

const orderModel=mongoose.model("order",orderSchema);

module.exports={orderModel};