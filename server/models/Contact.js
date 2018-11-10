const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require("../config/config");
const _ = require('lodash');
const updateIfCurrentPlugin = require('mongoose-update-if-current').updateIfCurrentPlugin;




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

ContactSchema.pre('save',async function () {
  const contact = this;
  const contactObject = contact.toObject();
  contactObject.__v = contact.__v++;

} );
const conn = mongoose.connection;
autoIncrement.initialize(conn);
ContactSchema.plugin(autoIncrement.plugin, {model: 'Contact', startAt: 1});


ContactSchema.methods.toJSON = function () {
  const contact = this;
  const contactObject = contact.toObject();
  contactObject.id = contactObject._id;
  contactObject.version = contactObject.__v;

  return _.pick(contactObject, ['id', 'email', 'firstName', 'lastName','email',
    ,'version', 'contactHistories']);
};

const Contact = mongoose.model('Contact', ContactSchema);

module.exports.Contact = Contact;
