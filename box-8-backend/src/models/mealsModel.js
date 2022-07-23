const mongoose = require("mongoose");

const mealsSchema= new mongoose.Schema({

  meal_name:{type:String,required:true},
  meal_image:{type:String,required:true},
  meal_desc:{type:String,required:true},
  meal_price:{type:Number,required:true},
  meal_category_id:{
  
    type:mongoose.Schema.Types.ObjectId,
     ref:"category",
     required:true
  }
}, {
    versionKey: false,
    timestamps: true
});


const Meals = mongoose.model("meal", mealsSchema);

module.exports = Meals;
