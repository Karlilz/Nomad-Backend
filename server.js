require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
// const expressLayouts = require('express-ejs-layouts')
// const morgan = require("morgan");
const cors = require("cors");
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
//const travelBlogController = require ('./controller/travelBlogController')
// const UserLogInController = require('./controller/UserLogInController');
// const cookieParser = require("cookie-parser");