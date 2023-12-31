const express = require('express');
const UserLogIn = require('../model/UserLogIn');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser= require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'oweubvcev';

// SIGNUP
router.post("/signup", async (req,res) =>{
    const{username,password} =req.body;
    console.log(username,password)
    console.log(req.body)
    try{
        const userDocument =await UserLogIn.create({
            username,
            password: bcrypt.hashSync(password,salt)
        });
            res.json(userDocument)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
      
})

// LOGIN
router.post('/login', async (req,res) =>{
    const{username,password} = req.body;
    const userDocument = await UserLogIn.findOne({username});
    const passOk=bcrypt.compareSync(password, userDocument.password)
    if (passOk){
        jwt.sign({username, id:userDocument.id}, secret, {}, (error,token) =>{
            if(error) throw error;
            res.cookie('token', token).json(userDocument);
        });
    }else{
        res.status(400)
    }
})

router.get('/profile', (req,res) => {
    const{token} =req.cookies;
    return jwt.verify(token,secret, {}, (error,info)=>{
        if(error) throw error;
        res.json(info);
        return 
    });
    res.json(req.cookies);
})

router.post('/logout', (req,res) =>{
    res.cookie('token', '').json('ok');
    redirect('/');
})
module.exports =router;