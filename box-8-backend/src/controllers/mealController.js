const express= require("express");
const router =express.Router();

const Meals=require("../models/mealsModel");

router.get("",async(req,res)=>{
    try{
     
        const MealItems=await Meals.find().lean().exec();
        return res.status(200).send(MealItems)
    }
    catch(err){
   return res.status(500).send({err:err.message})
    }
});

router.post("", async (req,res)=>{

    try{
        const  MealItems= await Meals.create(req.body);
        return res.status(201).send(MealItems);


    }catch(err){
        return res.status(500).send({err:err.message})
   
    }
})


router.get("/:id", async (req, res) => {
    try {
        const meal = await Meals.find(req.params.id).lean().exec();

        return res.status(200).send(meal);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


module.exports=router;