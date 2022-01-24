const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/loginRegister-api").then((data)=>{
    console.log("server is connected to  db");
}).catch((err)=>{
    console.log("No Connection");
});

module.exports = {
    User : require("../user/userModel")
};