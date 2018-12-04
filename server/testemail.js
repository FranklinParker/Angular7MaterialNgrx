const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('');
const msg = {
  to: 'fparker@deliveryman.com',
  from: 'fparker@deliveryman.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg).catch((err)=>console.log(err));