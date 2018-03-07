const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'windows',
  path: '/usr/sbin/sendmail'
});

module.exports = function(req,res){

  let mailOptions = {
    from: '"Akila Labs" <akilalabnyc@gmail.com>', // sender address
    to: 'thecodingteacher@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    html: '<b>Hello <em>world</em>?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log(error);
      return res.status(500).json(error);
  }
  console.log('Message sent: %s', info.messageId);
  res.json(info);
});

}