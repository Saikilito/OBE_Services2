const mongoose = require('mongoose');
const config = require('./config');
// const URI = 'mongodb://localhost/db-obe'
mongoose.connect(config.db, {useNewUrlParser: true})
    .then(db => console.log('Database is connect'))
    .catch(err => console.error(err));

module.exports = mongoose ;

