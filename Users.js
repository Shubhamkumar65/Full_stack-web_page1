const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    name : {type   : String  , required  : true },
    mobile  : {type : String  , required  : true  ,  unique  : true},
    email  : {type : String  , required  : true  ,  unique  : true},
    address : {type  : String  ,  required : true},
    pincode  : { type : String    , required   : true},
    password   : {type : String  , required : true}
})


const User   =  mongoose.model("Users" , userSchema);

module.exports =  User;