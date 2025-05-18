const mongoose = require("mongoose")

const phoneSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    price:{
        type:Number,
        required : true
    },
    year:{
        type:Number,
        required : true
    }
})

module.exports = mongoose.model("phone",phoneSchema)