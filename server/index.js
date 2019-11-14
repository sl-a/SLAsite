const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const { apiLimit, adminLimit } = require('./rateLimiterOptions');
const path = require('path');
const router = require('./router.js');
const port = 4001;
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/homePage/dist')));

app.use('/api', apiLimit);
app.use('/admin', adminLimit);

app.use('/admin', express.static(path.join(__dirname, '../client/adminPage/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}`));