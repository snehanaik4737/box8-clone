
const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());

const categoryController= require("./controllers/categoryController");
const mealsControlller=require("./controllers/mealController")

const cartController=require("./controllers/cartController")
app.use("/allCategory",categoryController);
app.use("/meals",mealsControlller);
app.use("/cart",cartController)



module.exports=app;
