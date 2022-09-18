const express  =  require('express')
const bodyParser =  require("body-parser")
const app =   express()
const PORT  =  8799
var cors = require('cors')

const multer = require("multer")
app.use(cors())


app.use(express.static(`${__dirname}/public`))

// const upload = multer({dest:"public/images"})


const multerStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
       
        cb(null , "public")

    },
    filename : (req,file,cb)=>{
       
        const ext = file.mimetype.split("/")[1] 
        cb(null , `images/my-server-${file.originalname}-${Date.now()}.${ext}`)
    }
})

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }

const multerFilter  =  (req,file ,cb)=>{
    if(file.mimetype.split('/')[1] ===  "mp4" || file.mimetype.split('/')[1] ===  "png"    )
    {
        
        if( parseInt(bytesToSize(file.size)) > 15 )
        {

            cb(new Error("File size exceed " ) ,  false)

        }
        else
        {
            cb(null  ,true)

        }

    }
    else
    {
        cb(new Error("Not  a Png File " ) ,  false)
    }
}


const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter

})


app.post('/api/upload'  ,upload.single('myfile') ,async(req,res)=>{
    // console.log(req.file)

  try {
    const  newFile = await File.create({
        name : req.file.originalname
    })
    res.status(200).send({status :" sucess" , msg : "File created sucessfully"})
  } catch(error)
  {
    res.status(400).send(error)
  }
})


const myRoutes  =  require('./Routes/Routes')

const db   =  require('./Db/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :true}))



app.use('/'  ,myRoutes)

app.listen(PORT , ()=>{
 console.log(`Server is running on PORT  :  ${PORT}`)
})