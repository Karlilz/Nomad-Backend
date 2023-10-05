require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts')
const morgan = require("morgan");
const cors = require("cors");
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
const travelBlogController = require ('./controller/travelBlogController')
const UserLogInController = require('./controller/UserLogInController');
const cookieParser = require("cookie-parser");


app.use(express.static("public"));
app.use(expressLayouts)

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended:true}));
app.use('/travelblog', travelBlogController)
app.use('/signup',UserLogInController )


app.listen(PORT,() => console.log("Testing Nom@d App", PORT))