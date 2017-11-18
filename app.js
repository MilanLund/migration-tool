const express = require('express'),
		path = require('path'),
		logger = require('morgan'),
		bodyParser = require('body-parser'),
		bearerToken = require('express-bearer-token');

const importRoute = require('./routes/import');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bearerToken());

app.use('/', importRoute);

module.exports = app;
