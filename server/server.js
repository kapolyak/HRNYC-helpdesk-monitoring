const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./../db/index.js');
const helpDeskController = require('./helpDesk.js');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(morgan('dev'));

db.connect((err) => {
  if (err) {
    console.error('db connection error', err.stack)
  } else {
    console.log('connected to db')
  }
})

app.get('/counts', helpDeskController.getCounts);

app.listen(port, () => console.log(`Server listening on port ${port}`));