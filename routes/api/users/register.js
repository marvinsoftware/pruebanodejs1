
const register = require('express').Router();
const bcrypt = require('bcryptjs');
const { Router } = require('express');
const {check,validationResult} = require('express-validator');


register.get('/', (req, res)=>{
    
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM users', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        });
    });

});


register.post('/',
    [check('username','El nombre de usuario es obligatorio').not().isEmpty(),
     check('email','El Email es obligatorio').not().isEmpty(),
     check('password','El Password es obligatorio').not().isEmail()],
     (req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }    
    req.body.password = bcrypt.hashSync(req.body.password)
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO  users set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Registro de usuario');
        });
    });
      
});


module.exports = register;