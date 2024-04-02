const express = require('express');
 const router = express.Router();
 const  { registerUser } = require('../Controllers/AuthController')
 const { signupUser } = require("../Controllers/AuthController")


router.post('/register' , registerUser)
router.post('/signup' , signupUser)


module.exports = router ;


