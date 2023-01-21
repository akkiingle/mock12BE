const mongoose= require("mongoose")

const connect = ()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect("mongodb+srv://a:ab@cluster0.dfugyyq.mongodb.net/mock12?retryWrites=true&w=majority")
}
module.exports = connect