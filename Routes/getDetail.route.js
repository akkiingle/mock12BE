const express = require("express");
const UserModel = require("../Models/user.model");
const app = express.Router();


app.get("/",async(req,res)=>{
    const {email}=req.body;
    try {
        let detail=await UserModel.findOne({email},{password:0,_id:0})
        return res.send(detail)
    } catch (error) {
        
    }
})




module.exports =app;