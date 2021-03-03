const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const serveStatic = require('serve-static')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;



const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

//for heroku
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/client/dist')));

//for heroku
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
});


//connect to db and listen
app.listen(port, () => {
  mongoose.connect('mongodb+srv://MAL_DbUser:physicaltherapydb1@pt-app.5pwkv.mongodb.net/PTdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("connected to DB!");
  });
  console.log(`PT app listening at http://localhost:${port}`)
});

module.exports = app;
