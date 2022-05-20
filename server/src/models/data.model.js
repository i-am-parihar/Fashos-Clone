const mongoose = require("mongoose") ;

const dataSchema = new mongoose.Schema(
    {
        name:{type:String , required:true} ,
        price:{type:Number , required:true} ,
        shoeType:{type:String, required:true},
        brand:{type:String , required:true},
        brandImg:{type:String, required:true},
        color:{type:String, required:true},
        size:{type:String, required:true},
        img1:{type:String, required:true},
        img2:{type:String, required:true},
        img3:{type:String, required:true}
    },
    {
        versionKey: false,
        timestamps:true,
    }
);

module.exports = mongoose.model("data" , dataSchema) ;