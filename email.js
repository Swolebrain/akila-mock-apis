const nodemailer = require('nodemailer');

module.exports = function(req, res){
  console.log(req.user);
  if (!req.body || !req.body.shoppingLists){
    return res.status(400).json({error: "No shopping list present"});
  }

  let config = {
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false, // use TLS
    auth: {
        user: 'akilalabnyc@gmail.com',
        pass: require('./.sendmail-apikey.js')
    }
  };
  let transporter = nodemailer.createTransport(config);

  let mailOptions = {
    from: '"Akila Labs" <info@akila.ai>', 
    to: req.user.email, 
    subject: 'Your Akila Health Shopping List', 
    html: Object.keys(req.body.shoppingLists).map(
      (day, index) => {
        return `<h2>${day}</h2>
          ${req.body.shoppingLists[day].map(entry => `<p>${entry.itemname}. Quantity: ${entry.quantity}</p>`)}`
      }
    ).join("<br/>")
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
          res.status(500).json({error});
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.json(info);
  });
}