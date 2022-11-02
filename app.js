const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const BodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
require('dotenv').config();
require('./database');

const app = express();
app.use(BodyParser.json());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./routes'));
app.use(errors());


module.exports = app;
