const { mongoose } = require('./config/database');
const express = require('express');
const app = require('./config/express');
const config = require('./config/config');
const path = require('path');

//Seting
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views/build')))
app.get('*', (req, res) => {res.sendFile(path.join(__dirname,'views/build/index.html'))});

app.set('PORT', config.port);

//Starting the server
app.listen(app.get('PORT'), ()=>{
    console.log(`Server on port:`, app.get('PORT'))
})
