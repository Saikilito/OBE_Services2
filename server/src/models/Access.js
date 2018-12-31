const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

const { Schema } = mongoose;

const Access = new Schema({
    medall:Boolean,
    beca:Boolean
},{collection:'access'})

module.exports = mongoose.model('Access', Access)