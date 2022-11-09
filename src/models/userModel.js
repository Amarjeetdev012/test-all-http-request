const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    
    data:{
        type:String
    }

},
{timestamps:true})

module.exports = mongoose.model("user",userSchema)