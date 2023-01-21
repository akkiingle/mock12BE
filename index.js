const express = require('express');
const connect = require('./Configue/dbConfigue');
const authRouter=require("./Routes/user.route")
const profileRouter=require("./Routes/getDetail.route")
const calculateRouter=require("./Routes/calculate.route")

const app = express();
app.use(express.json());


app.use("/auth", authRouter);
app.use("/getProfile", profileRouter);
app.use("/calculate", calculateRouter);


app.get('/', async(req, res) =>{


})


app.listen(8080, async (req, res) => {
    try {
      await connect();
      console.log(`listening on http://localhost:8080`);
    } catch (er) {
      console.log(er.message);
    }
  });