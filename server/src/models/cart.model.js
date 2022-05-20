const mongoose = require("mongoose") ;

const cartSchema = new mongoose.Schema(
    {
        arr:{type:Object , required:true} ,
        quantiy:{type:Number , required:true} ,
    },
    {
        versionKey: false ,
        timestamps:true,
    }
);

module.exports = mongoose.model("cartData" , cartSchema) ;