const express = require("express");
const UserModel = require("../Models/user.model");
const app = express.Router();

app.post("/register", async (req, res) => {
    const {name,email,password}=req.body;
  try {
    const finduser = await UserModel.findOne({email});
    if(finduser){
        return res.send({msg:"Try another email",status:false})
    }else{
        await UserModel.create({name,email,password});
        return res.send({msg:"Signup successful",status:true})
    }
  } catch (error) {
    return res.send(error.message);
  }
});

app.post("/login", async (req, res) => {
    const {email,password}=req.body;
  try {
    const finduser = await UserModel.findOne({email});
    if(finduser){
        if(finduser.password===password){
            return res.send({msg:"Login successful",status:true})
        }
        return res.send({msg:"Wrong Password",status:false})
    }else{
        return res.send({msg:"User is not Registered",status:false})
    }
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
