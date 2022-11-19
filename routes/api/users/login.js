//require('../../db');
const login = require('express').Router();
const moment = require('moment');
const jwt = require('jwt-simple');
const { body } = require('express-validator');

login.post('/', async (req, res)=>{
    const users = await email.findOneorfine({where: {email: req.body.email}});
    if (users) {
     res.json(users)
    }else{
        res.json({ error: 'Error en usuario y/o contraseña'})
    }
   
   

});

module.exports = login;