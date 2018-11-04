const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require("../config/config");


const Schema = mongoose.Schema;


const ContactSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true},
  contactHistories: [{
     date: {type: Date, default: new Date()},
     description: { type: String}
  }]
});

const conn = mongoose.connection;
autoIncrement.initialize(conn);
ContactSchema.plugin(autoIncrement.plugin, {model: 'Contact', startAt: 1});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports.Contact = Contact;
