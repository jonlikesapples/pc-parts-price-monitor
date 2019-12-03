const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Processor = new Schema({
    man: String,
    partnum: String,
    price: Number
}, {
    collection: 'pcparts'
});

module.exports = mongoose.model('Procesor', Processor);