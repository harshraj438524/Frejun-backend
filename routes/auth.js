const express=require('express');
const Router=express.Router();
const bcrypt = require('bcryptjs');
const User=require('../models/user');


Router.post('/register', 

async (req, res) => {
    try{
        let success=false 
    var salt = bcrypt.genSaltSync(10);
    var secPas = bcrypt.hashSync(req.body.password, salt);
    
    let p=await User.findOne({email:req.body.email});
    if(p){
        let msg=`User with ${req.body.email} already exist`;
        res.send({success,msg});
    }
    else{
    const user= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPas,
 
    });
    success=true;
    res.json({user,success});
}
}
catch(err){
    console.log(err.message);
    res.send(err.message);

}
});


Router.post('/login', 

async (req, res) => {
    try{
        let success=false;
        const email=req.body.email;
         
        const exist=await User.findOne({email});
        if(!exist){
            return res.status(401).json({success});
        }
        const r=await bcrypt.compare(req.body.password, exist.password);
        if(!r){
            return res.status(401).send("Wrong password");
        }
       
        success=true
        req.user=exist
        res.status(200).json({exist,success});
    }
    catch(err){
        res.send("Server error");
        console.log(err);
    }
});




module.exports=Router