const express = require("express") ;
const connect = require("./configs/db") ;
const {register , login} = require("./controllers/authenticate.controller")
const data = require("./controllers/data.controller") ;
const cart = require("./controllers/cart.controller") ;
const app = express() ;

app.use(express.json()) ;
app.post("/register" , register) ;
app.post("/login" , login) ;
app.use("/data" , data) ;
app.use("/cart" , cart) ;


app.listen(9000 , async()=>{
    try{
        await connect() ;
    }
    catch(er){
        console.log(er.message) ;
    }
    console.log("Listening on port 9000") ;
})