const mongoose=require("mongoose");

const cartSchema =new mongoose.Schema({

   meal_name:{type:String,required:true},
   meal_price:{type:Number,required:true},
   meal_desc:{type:String,required:true}, 
},
{
    
        versionKey: false,
        timestamps: true
    
})

const Cart =mongoose.model("cart",cartSchema);
module.exports=Cart