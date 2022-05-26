const express = require("express") ;
const router = express.Router() ;
const Cart = require("../models/cart.model") ;


router.get("" , async(req,res)=>{
    try{
        const cartdata = await Cart.find().lean().exec() ;
        return res.send(cartdata) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

router.post("" , async(req,res) => {
    try{
        const cartdata = await Cart.create(req.body) ;
        return res.send(cartdata) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

router.patch("/:id" , async(req,res) => {
    try{
        const cartData = await Cart.findByIdAndUpdate(req.params.id, {quantiy:req.query.quantiy},{new:true})
        return res.send(cartData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

router.delete("/:id" , async(req,res) => {
    try{
        const cartData = await Cart.findByIdAndDelete(req.params.id).lean().exec() ;
        return res.send(cartData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

module.exports = router ;