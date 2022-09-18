const AdminModel  =  require('../Models/Admin')
const Product  = require('../Models/Products')
const bcrypt = require('bcrypt')




exports.adminRegFomr = (req,res) =>{
    res.status(200).send(
`
<html>
    <body>
        <form  method="POST" action="/admin-reg"  >
        <input placeholder="Enter your name" name="name" /><br></br>
        <input placeholder="Enter your mobile" name="mobile"  /><br></br>
        <input placeholder="Enter your email" name="email" /><br></br>
        <input placeholder="Enter your password" name="password" /><br></br>
        <button  type="submit"   >Submit</button>
        </form>
    </body>
</html>`
    )

}

exports.getAdminFormData  = (req,res) =>{

    bcrypt.genSalt(10, (err ,  salt)=>{

        if(err)
        {
            res.status(403).send({msg : "Error in Salt Generate"})
        }
        else{
            bcrypt.hash(req.body.password ,  salt , (err , hash)=>{
                if(err)
                    {
                        res.status(403).send({msg : "Error in Generate Hash"})
                    }
                    else
                    {
                            AdminModel.insertMany({name: req.body.name , email : req.body.email , 
                                 password : hash , mobile : req.body.mobile  }).then((result)=>{

                                    res.status(200).send({msg : "Admin registered Sucessfully" , id  : result._id})

                            }).catch((err)=>{
                                res.status(400).send({msg : "Something Went Wrong"})
                            })
                    }


            })
        }

    })


    
//  Methhod : Direct


    // var Admin  =  new AdminModel(req.body)

    // Admin.save().then((result)=>{
    //     res.send(`Admin Registered Sucessfully with ID ${result._id}`)
    // }).catch((err)=>{
    //     res.send("Something Went Wrong")
    // })

}



exports.updateAdmin = (req,res)=>{

    AdminModel.find({mobile : req.body.mobile}).then((result) =>{
        if(result.length === 0)
        {
                res.status(403).send({msg : "User not found !!"})
        }
        else
        {
            AdminModel.updateOne({mobile  : req.body.mobile} , { email : req.body.email ,  password : req.body.password  , name : req.body.name } ).then(()=>{

                console.log(result)
                res.status(200).send( { msg :  "Updated Successfully" })

            }).catch((err)=>{
                console.log(err)

                    res.status(400).send({msg : "Something went wrong"})
            })
        }
    })

}