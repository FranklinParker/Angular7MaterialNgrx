const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const readline = require('readline');

const apiKey= ''

const sendUsingSendGridApi = () =>
{
  sgMail.setApiKey(apiKey);
  const msg = {
    to: 'fparker@deliveryman.com',
    from: 'fparker@deliveryman.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg)
    .then(result => console.log('result', result)).catch((err) => console.log(err));

}

const sendEmailGeneric = async () =>
{
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: apiKey
      }
    })
  );
  try {
    const result = await transporter.sendMail({
      to: 'fparker@deliveryman.com',
      from: 'fparker@deliveryman.com',
      subject: 'From trans',
      html: '<h4>hi there</h4>'
    });
    console.log('mail sent ', result);
  } catch(err){
    console.log('err', err);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('enter 1 for send grid, 2 from generic ',async (select) => {
  if(select ==='1'){
    sendUsingSendGridApi();
  } else  if(select ==='2'){
    await sendEmailGeneric();
  }
  rl.close();
});

