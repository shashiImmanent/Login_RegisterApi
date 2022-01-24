const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        
    },

    hash:{
        type:String,
       required:true,
    },

    firstname:{
        type:String,
        
    },

    lastname:{
        type:String,
       
    },

    
});

userSchema.set('toJSON',{
    virtuals:true,
    versionKey:true,
    transform: function(doc,ret){
       delete doc._id;
       delete ret.hash;
    }
});


// creating collection
const User = new mongoose.model("User",userSchema);

module.exports = User;