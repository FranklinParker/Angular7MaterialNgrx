const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require("../config/config");


const Schema = mongoose.Schema;


const ContactSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true}
});

const conn = mongoose.connection;
autoIncrement.initialize(conn);
ContactSchema.plugin(autoIncrement.plugin, 'Contact')

const Contact = mongoose.model('Contact', ContactSchema);

module.exports.Contact = Contact;
