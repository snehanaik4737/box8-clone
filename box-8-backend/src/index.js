
const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());

const categoryController= require("./controllers/categoryController");
const mealsControlller=require("./controllers/mealController")

app.use("/allCategory",categoryController);
app.use("/meals",mealsControlller)

module.exports=app;
