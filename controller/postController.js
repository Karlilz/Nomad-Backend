const express = require('express');
const PostUser = require('../model/PostUser');
const router = express.Router();

//INDEX
router.get ("/", async (req,res) =>{
     try{
        res.json(await PostUser.find())
     }catch(error){
        res.status(400).json(error)
     }
})

//DELETE
router.delete("/:id", async(req,res) =>{
    try {
        res.json(await PostUser.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

//UPDATE
router.post("/update/:id", async (req,res) =>{
    try{
        res.json(await PostUser.findByIdAndUpdate(req.params.id, req.body,{ new:true}))
    }catch{
        req.status(400).json(error)
    }
})

//CREATE
router.post("/", async (req,res) => {
    try {
        res.json( await PostUser.create(req.body))
    }catch (error){
        res.status(400).json(error)
    }
})

//SHOW
router.get("/:id", async (req,res)=>{
    try{
        res.json(await PostUser.findById(req.params.id));
    }catch (error){
        res.status(400).json(error)
    }
})
module.exports = router;




