const express=require("express");
const router=express.Router();

const Cart =require("../models/cartModel")

router.get("",async(req,res)=>{
    try{
     const cartItem=await Cart.find().lean().exec();
     return res.status(200).send(cartItem)
    }
    catch(err){
        return res.status(500).send({err:err.message})

    }
})

router.post("",async(req,res)=>{
    try{

        const createCart=await Cart.create(req.body);
        return res.status(201).send(createCart);


    }catch(err){
        return res.status(500).send({err:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const deleteItem =await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).send(deleteItem)

    }catch(err){
        return res.status(500).send({err:err.message})

    }
})

module.exports=router