const express = require("express") ;
const router = express.Router() ;
const Data = require("../models/data.model") ;

router.get("/filter" , async(req,res) => {

    try{
       let obj = {} ;
       let sort = {} ;
       let {price, brand , color , size } = req.query ;
    
       if(brand){
           obj["brand"] = brand ;
       }
       if(color){
           obj["color"] = color ;
       }
       if(size){
           obj["size"] = size ;
       }
       if(price){
           sort["price"] = price ;
       }
       let entity = await Data.find(obj)
       .sort(sort)
       .lean()
       .exec() ;

        return res.send(entity) ;
    }
    catch(er){
        return res.status(506).send(er.message) ;
    }
})

router.get("/:brand" , async(req,res) => {
    try{
        const productData = await Data.find({'brand':req.params.brand}).lean().exec() ;
        return res.send(productData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

router.get("" , async(req,res)=>{
    try{
        const productData = await Data.find().lean().exec() ;
        return res.send(productData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

router.post("" , async(req,res)=>{
    try{
        const productData = await Data.create(req.body) ;
        return res.send(productData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

router.get("/:id" , async(req,res) => {
    try{
        const productData = await Data.findById(req.params.id).lean().exec() ;
        return res.send(productData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})



// ****************

//*******************


module.exports = router ;