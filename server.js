// Imports:
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./models/User");
const profile = require("./models/Profile");
const posts = require("./models/Post");
const passport = require("passport");
const path = require("path");

//这是我们的MongoDB数据库
const dbRoute =
    'mongodb+srv://jijuncai:Caijijun12@businessmatchmaker-m27fy.mongodb.net/test?retryWrites=true&w=majority';

//将我们的后端代码与数据库连接起来
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', function () {
    console.log('connected to the database')
});

//检查与数据库的连接是否成功
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Passport Middleware:
app.use(passport.initialize());

// Passport Config:
require("./config/passport.js")(passport);
