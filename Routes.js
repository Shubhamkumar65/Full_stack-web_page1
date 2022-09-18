const express  =  require('express');

const router = express.Router()

const adminController  =  require('../Controllers/AdminController')
const proController  =  require('../Controllers/ProductsConroller')
const userController  =  require('../Controllers/UserContoller')



router.post('/add-product' , proController.addProduct )
router.post('/add-to-cart' , proController.addToCart )
router.get('/get-products' ,proController.getProducts) 
router.get('/get-cart' ,proController.getUserCart) 
router.get('/del-cart' ,proController.deleteCartItem) 


router.get('/admin-register-form' , adminController.adminRegFomr )
router.post('/admin-reg' ,  adminController.getAdminFormData)
router.post('/admin-upd' ,  adminController.updateAdmin)


router.post('/add-user' , userController.registerUser)
router.post('/login-user'  ,userController.userLogin)


// C  R   U  D 







module.exports  =  router;

