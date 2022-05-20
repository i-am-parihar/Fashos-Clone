const mongoose = require("mongoose") ;
const bcrypt = require("bcryptjs") ; //A library to help you hash passwords.

//UserSchema for registration 
const userSchema = new mongoose.Schema(
    {
        name:{type:String , required:true} ,
        role:[{type:String}] ,
        email:{type:String , required:false , unique:true} ,
        password:{type:String , required:true} ,
        mobile:{type:String , required:true} ,
        description :{type:String , required:false} , 
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

//Password Hashing
userSchema.pre("save", function(next){
    if(!this.isModified("password"))return next() ;

    var hash = bcrypt.hashSync(this.password , 8) ;
    this.password = hash ;
    return next() ;
});

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password , this.password) ;
}


//export Schema 
const User = mongoose.model("user" , userSchema) ;
module.exports = User ;

