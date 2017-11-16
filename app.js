const express = require('express'),
		path = require('path'),
		logger = require('morgan'),
		bodyParser = require('body-parser'),
		bearerToken = require('express-bearer-token');

const importRoute = require('./routes/import'),
		exportRoute = require('./routes/export');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bearerToken());

app.use('/import', importRoute);
app.use('/export', exportRoute);

module.exports = app;
