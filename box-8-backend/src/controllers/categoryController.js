const express= require("express");
const router =express.Router();

const Category=require("../models/mealCategoryModel");

router.get("",async(req,res)=>{
    try{
     
        const MaincategoryItems=await Category.find().lean().exec();
        return res.status(200).send({"allCategory":MaincategoryItems})
    }
    catch(err){
   return res.status(500).send({err:err.message})
    }
});

router.post("", async (req,res)=>{

    try{
        const  MaincategoryItems= await Category.create(req.body);
        return res.status(201).send({"MaincategoryItems":MaincategoryItems});


    }catch(err){
        return res.status(500).send({err:err.message})
   
    }
})

module.exports=router;