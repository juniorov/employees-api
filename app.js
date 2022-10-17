const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const BodyParser = require('body-parser');
const { errors } = require('celebrate');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const employeesRouter = require('./routes/employees');

const app = express();
app.use(BodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employees', employeesRouter);
app.use(errors());


module.exports = app;
