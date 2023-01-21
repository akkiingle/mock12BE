const express = require("express");
const app = express.Router();

app.post("/",async(req,res)=>{
    const {P,i,n}=req.body;

    let Total_Maturity_Value=P*((((1+i)**n)-1)/i);
    let Total_Investment_Amount=P*n
    let Total_Interest_Gained=Total_Maturity_Value-Total_Investment_Amount;
    
   return res.send({Total_Maturity_Value,Total_Investment_Amount,Total_Interest_Gained})
})

module.exports = app;