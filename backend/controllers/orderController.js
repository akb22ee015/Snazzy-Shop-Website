import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";

//Placing order using COD Method

const placeOrder = async (req,res) => {

    try {
        
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})


    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }

}

//using Stripe

const placeOrderStripe = async (req,res) => {
    
}

//using rozerpay

const placeOrderRozerpay = async (req,res) => {
    
}

//All oders details at admin
const allOrders = async (req,res) => {
    
}

//user data at frontend

const userOrders = async (req,res) => {
    
}

//update order status 

const updateStatus = async (req,res) => {
    
}

export {placeOrder,placeOrderStripe, placeOrderRozerpay, userOrders, allOrders, updateStatus}