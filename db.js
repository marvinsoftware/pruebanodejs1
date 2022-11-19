const express = require ('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const app =  express(); 

const dbOptions = {
     host: 'localhost',
     port: 3306,
     user: 'root',
     password: '',
     database: 'novatec'
 }
 
 // middlewares -------------------------------------
 app.use(myconn(mysql, dbOptions, 'single'))
 app.use(express.json())

 
