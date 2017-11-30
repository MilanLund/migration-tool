/* eslint-disable no-console */
'use strict';

const express = require('express'),
	router = express.Router(),
	response = require('../helpers/general/response'),
	importHandler = require('../handlers/import'),
	blueprintHandler = require('../handlers/blueprint');

// Tool UI
router.get('/', (req, res) => {
	res.render('app');
});

// Import endpoint
router.post('/:projectId', (req, res) => {
	importHandler.migrateData(req, res, req.body);
});

// Blueprint endpoint
router.get('/:projectId/blueprint/:format/:contentModel', (req, res) => {
	blueprintHandler.generateBlueprint(req, res);
});

router.use('/:projectId', (req, res) => {
	response.send(res, 405, 'Unsupported type of request.');
});

module.exports = router;