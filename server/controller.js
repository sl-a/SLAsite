const nodemailer = require('nodemailer');
const { emailPass, adminPass } = require('../config.js');
const db = require('../database/index.js');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'SLAmailerbot@gmail.com',
      pass: emailPass
    }
  });

module.exports = {
  //sends email to contact email and saves email information of those who agree
    postEmail: (req, res) => {
      let { name, subject, message, email, allowContact } = req.body;
      //formats and sends emails
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
          //saves email information from willing users
          db
            .query('INSERT INTO emails (name, email) VALUES ($1, $2)', [name, email])
        }
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(201).send('Emails sent')
        }
      })
    },
    getCandidate: (req, res) => {
      db
        .query(
          'SELECT * FROM candidates\
          ORDER BY electionDate DESC\
          LIMIT 1')
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send(err))
    },
    getEmails: (req, res) => {
      db
        .query(
          'SELECT name, email FROM emails'
        ).then (data => {
          res.send(data.rows)
        })
    },
    postCandidate: (req, res) => {
      let { name, adURL, blurb, electionDate } = req.body;
      db
        .query(
          `INSERT INTO candidates (name, electionDate, adURL, blurb)\
          VALUES\
          ('${name}', '${electionDate}', '${adURL}', '${blurb}')`
        )
        .then(() => {
          res.status(201).send('Candidate added');
        })
        .catch(err => {
          res.status(404).send(err)
        })
    },
    adminLogin: (req, res) => {
      if (req.body.password === adminPass) {
        res.status(201).end();
      } else {
        res.status(404).end();
      }
    }
}