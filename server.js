require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
// const expressLayouts = require('express-ejs-layouts')
const morgan = require("morgan");
const cors = require("cors");
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
const postController = require ('./controller/postController')
const UserLogInController = require('./controller/UserLogInController');
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');



app.use(express.static("public"));
// app.use(expressLayouts)

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended:true}));
app.use('/post', postController)
app.use('/signup',UserLogInController )


app.listen(PORT,() => console.log("Testing Nom@d App", PORT))