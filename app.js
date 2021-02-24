const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const serveStatic = require('serve-static')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

app.use('/index', indexRouter);
app.use('/users', userRouter);

const exercisePosts = require("./routes/exercisePosts");

app.use("/exercise", exercisePosts);

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
