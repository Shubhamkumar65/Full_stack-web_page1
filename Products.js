const mongoose = require("mongoose")


const ProductSchema  =  new mongoose.Schema({

name  : {type : String,unique : true,required :  true },

price : { type :Number  , required : true  },
description : { type : String  , required : true  },
category : { type : String  , required : true  },
avl_quantity : {type : Number ,  required :  true ,  default  :  0},
image : {type : String  , required : true }
})


const Product  =  mongoose.model( "Products" ,  ProductSchema )


module.exports =  Product