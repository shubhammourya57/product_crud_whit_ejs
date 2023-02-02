const express = require("express")
const productController = require("../controller/productController")
const router = express.Router();
const isAuth = require('../middleware/isAuth')

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get("/productList", isAuth, productController.getProduct);
router.get('/getAddProduct', isAuth,productController.getAddProduct);
router.post('/addProduct', isAuth, upload.single('productImage'),productController.addProduct);
router.post('/delete', isAuth,productController.delete);
router.post('/getEditProduct', isAuth, productController.getEditProduct);
router.post('/editProduct', isAuth, productController.editProduct )

module.exports = router