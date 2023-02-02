const express = require("express")
const userController = require("../controller/userController")
const router = express.Router()

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get("/", userController.getLogin)
router.get("/getSignup", userController.getSignup)
router.post("/login", userController.login)
router.post("/signup", userController.signup)
router.post("/logOut",userController.logOut)
module.exports = router