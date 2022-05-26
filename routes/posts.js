var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/postModel')
const User = require('../models/userModel')
const dotenv = require('dotenv');
const appError = require('../service/appError');
const handleErrorAsync = require('../service/handleErrorAsync')
const postcontroller = require('../controllers/postcontroller')

const DB = process.env.DATABASE

//mongodb://localhost:27017/HW5
mongoose.connect(DB)
.then(()=>console.log('資料連接成功'))

/* GET users listing. */
router.get('/',handleErrorAsync(postcontroller.getPosts));


//Post
router.post('/',handleErrorAsync(postcontroller.createPosts))

module.exports = router;
