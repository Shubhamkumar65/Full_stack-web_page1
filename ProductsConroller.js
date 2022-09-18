const AdminModel  =  require('../Models/Admin')
const Product  = require('../Models/Products')
const bcrypt = require('bcrypt')
const Cart = require('../Models/Cart')


exports.addProduct = (req,res) =>{

Product.insertMany({
    name : req.body.name,
    price :  req.body.price,
    description  :  req.body.description,
    category : req.body.category,
    avl_quantity : req.body.avl_quantity,
    image : req.body.image

}).then((result)=>{
    res.status(200).send({msg : "Product Added Sucessfully!!"})
}).catch((err)=>{
    res.status(400).send({msg : "Something Went Wrong !! "})
})
   

}


exports.getUserCart = (req,res) =>{

    Cart.find({user_id  :  req.query.id }).then((result)=>{
        res.status(200).send({data : result , count  :  result.length})
    }).catch((err)=>{
        res.status(400).send({msg : "Something Went Wrong !! "})

    })

}


exports.addToCart = (req,res) =>{

    Cart.insertMany({
        name : req.body.name,
        price :  req.body.price,
        description  :  req.body.description,
        image : req.body.image,
        user_id : req.body.user_id
    
    }).then((result)=>{
        res.status(200).send({msg : "Product Added into Cart Sucessfully!!"})
    }).catch((err)=>{
        console.log(err)
        res.status(400).send({msg : "Something Went Wrong !! "})
    })
    }

exports.deleteCartItem  = (req,res) =>{
    Cart.deleteOne({ _id  : req.query.id }).then((result)=>{
        console.log(result)
        if(result.deletedCount === 1)
        {
            res.status(200).send({msg : "Item Removed Sucessfully"})

        }
        else
        {
            res.status(400).send({msg : "Something Went Wrong !! "})

        }
    }).catch((err)=>{
        res.status(400).send({msg : "Something Went Wrong !! "})

    })
}   


exports.getProducts =  (req,res)=>{
    Product.find({}).then((result)=>{
        res.status(200).send(result)
        
    }).catch((err)=>{
        res.status(400).send({msg : "Somethig went wrong"})
    })
}



