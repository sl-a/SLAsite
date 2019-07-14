const nodemailer = require('nodemailer');
const pass = require('../config.js').emailPass;
const db = require('../database/index.js');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'SLAmailerbot@gmail.com',
      pass: pass
    }
  });

module.exports = {
    post: (req, res) => {
      let { name, subject, message, email, allowContact } = req.body;
      transporter.sendMail({
          from: 'SLAmailerbot@gmail.com',
          to: 'adam_reback@yahoo.com',
          subject,
          text: 
            `${name} has sent an email saying:\n\
            ${message}\n\
            ${allowContact ? `You may contact them using their email: ${email}` : 'They do not wish to be contacted.'}
            `
      },
      (err, info) => {
        if (allowContact === true) {
          db
            .query('INSERT INTO emails (name, email) VALUES ($1, $2)', [name, email])
        }
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(201).send('Emails sent')
        }
      })
    }
}