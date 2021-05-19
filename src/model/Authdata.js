const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    name: String,
    book : String,
    genre : String,
    description : String,
    image : String
});

var Authdata = mongoose.model('authdata',AuthSchema);
module.exports = Authdata;

