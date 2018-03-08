const nodemailer = require('nodemailer');
const fs = require('fs');
const emailTemplate = fs.readFileSync('./email-templates/shopping-list.html').toString();

module.exports = function(req, res){
  console.log(req.user);
  if ((!req.body || !req.body.shoppingLists) && req.method !== 'GET'){
    return res.status(400).json({error: "No shopping list present"});
  }

  let config = {
    host: 'smtp-relay.sendinblue.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'akilalabnyc@gmail.com',
        pass: require('./.sendmail-apikey.js')
    }
  };
  let transporter = nodemailer.createTransport(config);

  let mailOptions = {
    from: '"Akila Labs" <info@akila.ai>', 
    to: req.method === 'GET' ? 'thecodingteacher@gmail.com' :req.user.email, 
    subject: 'Your Akila Health Shopping List', 
    html: buildEmailbody(req.body.shoppingLists || dummyObj())
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

function buildEmailbody(shoppingLists){
  let entries = Object.keys(shoppingLists).map(
    (day, index) => {
      return `<h2>${day}</h2>
        ${shoppingLists[day].map(entry => `<p>${entry.itemname}. Quantity: ${entry.quantity}</p>`).join('')}`
    }
  ).join("<br/>");
  console.log(entries);
  return emailTemplate.replace("###emailbody###", entries);
}

function dummyObj(){
  return {
    "0-Mon": [
      {
        itemname: "thug cereal",
        quantity: 2
      },
      {
        itemname: "superman punch",
        quantity: 2
      }
    ],
    "0-Tue": [
      {
        itemname: "gansta cereal",
        quantity: 2
      },
      {
        itemname: "superman kick",
        quantity: 2
      },
      {
        itemname: "gansta wrap",
        quantity: 2
      },
      {
        itemname: "doe boy doe",
        quantity: 2
      }
    ],
    "0-Wed": [
      {
        itemname: "thug muffin",
        quantity: 2
      },
      {
        itemname: "superman bowl",
        quantity: 2
      }
    ],
    "0-Thu": [
      {
        itemname: "thug pancake",
        quantity: 2
      },
      {
        itemname: "superman juice",
        quantity: 2
      }
    ],
  }
}