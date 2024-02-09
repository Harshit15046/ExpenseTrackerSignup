const express=require('express');

const userControllers= require('../controllers/user');

const router= express.Router();

//router.route("/signup").post(userControllers.routesignup);
//router.route("/signup").post(signup);
router.post('/signup' , userControllers.signup);
module.exports= router;