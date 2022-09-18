const User  =  require('../Models/Users')
const bcrypt  = require('bcrypt')


exports.registerUser =  (req,res) =>{

    bcrypt.genSalt(10, (err,salt)=>{
        if(err)
        {
            
            res.status(403).send({msg : "Something went wrong"})
        }
        else
        {
            bcrypt.hash(req.body.password ,  salt , (err , hash) =>{

                        if(err)
                        {
                            res.status(403).send({msg : "Something went wrong"})
                        }
                        else
                        {
                            User.insertMany({
                                name : req.body.name,
                                email : req.body.email,
                                mobile : req.body.mobile,
                                password : hash,
                                address : req.body.address,
                                pincode: req.body.pincode,
                            }).then((result)=>{

                                res.status(200).send({msg : "User Registered Sucessfully" ,  id : result._id})

                            }).catch((err)=>{
                                console.log(err)
                                res.status(400).send({msg : "Something went wrong"})

                            })
                        }
                                
                            })
                        }

    })


}

exports.userLogin  = (req,res) =>{
    console.log(req.body)

    User.find({email : req.body.email}).then((result)=>{
        if(result.length  === 0)
        {
            res.status(403).send({msg : "User not Registerd"})
        }
        else
        {
            bcrypt.compare(req.body.password ,  result[0].password , (err ,status)=>{
                if(err)
                {
                    res.status(400).send({msg : "Something Went Wrong"})
                }
                else
                {
                    if(status  === true)
                    {
                        res.status(200).send({msg : "User Login Sucessfully" , id : result[0]._id})
                    }
                    else
                    {
                        res.status(403).send({msg : "Incorrect Password" })

                    }

                }

            })
        }
    }).catch((err)=>{
        console.log("2",err)
        res.status(400).send({msg : "Something went wrong"})

    })

}