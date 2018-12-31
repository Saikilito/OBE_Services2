const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const app = express()

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(fileUpload());

//Routes
app.use('/api/',require('../routes/api.routes'));



module.exports =  app