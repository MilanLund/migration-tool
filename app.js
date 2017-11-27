const express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	bearerToken = require('express-bearer-token'),
	cookieParser= require('cookie-parser');

const importRoute = require('./routes/import');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bearerToken());
app.use(express.static(path.join(__dirname, './ui/assets'), {
	maxAge: 86400000
}));

// View engine setup
app.set('views', path.join(__dirname, './ui/views'));
app.set('view engine', 'pug');

// Routes
app.use('/', importRoute);

module.exports = app;
