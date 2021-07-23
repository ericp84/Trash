var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('../models/user');
var uid2 = require('uid2');
var bcrypt =require('bcrypt');


router.post('/sign-up', async function(req, res) {
  var hash = bcrypt.hashSync(req.body.passwordFromFront,10)
  var newUser = new UserModel({
    lastName : req.body.usernameFromFront,
    email : req.body.emailFromFront,
    password : hash,
    token : uid2(32)
  })
  var userSaved = await newUser.save()

  res.json({user: userSaved})
});

router.post('/sign-in', async function(req, res) {
  var userExistFromBack = false
  var user = await UserModel.find({email: req.body.emailFromFront})
  console.log("USER",user)  
  if (user[0]){
    userExistFromBack = true
  }
  console.log(user[0].password)
  console.log(req.body.passwordFromFront)

  let result = false 
  if (bcrypt.compareSync(req.body.passwordFromFront,user[0].password)){
    console.log("MDP OK")
    result = true
    res.json({message: result, user : user[0]})
  } else {
    res.json({message: result})

  } 
});

module.exports = router;