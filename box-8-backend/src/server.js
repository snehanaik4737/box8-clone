const mongoose= require("mongoose");

const app=require("./index");
require("dotenv").config();
const PORT=process.env.PORT ||8080;
const connect=()=>{
    return mongoose.connect(process.env.mongodbURL)
}

app.listen(PORT,async function(){
    await connect();
    console.log("Listening on my port")
})