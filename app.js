const express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	bearerToken = require('express-bearer-token'),
	cookieParser= require('cookie-parser');

const rootRoute = require('./routes/root');

const app = express();
app.use(bodyParser.text({ type: 'text/csv' }));
app.use(bodyParser.json());
app.use(logger('dev'));
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
app.use('/', rootRoute);

module.exports = app;
