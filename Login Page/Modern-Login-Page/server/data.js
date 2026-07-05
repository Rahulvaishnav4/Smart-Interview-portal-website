const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/user";

mongoose.connect(mongoURL);
const link = mongoose.connection;

link.on('connected',()=>{
    console.log("MongoDB connected >>> ")
})
link.on('disconnected',()=>{
    console.log("MongoDB server disconnected >>> ")
})
link.on('error',(err)=>{
    console.error("We are facing some issue >>> " , err);
})

module.exports = link;