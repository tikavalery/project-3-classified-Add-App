//MONGOOSE/MODEL CONFIG
var mongoose = require("mongoose")
var buyandsellSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    create:{type:Date,default:Date.now()},
    picture1:String,
    picture2:String,
    picture3:String,
    picture4:String,
    picture5:String,
    picture6:String,
    picture7:String,
    picture8:String,
    condition:String,
    category:String,
    province:String,
    city:String,
    sellername:String,
    selleremail:String,
    sellerphonenumber:String,
    authorid:String,
    authorusername:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    }
})

//RESTFUL ROUTES

module.exports = mongoose.model("BuyandSell",buyandsellSchema);

