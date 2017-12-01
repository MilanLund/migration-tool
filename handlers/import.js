/* eslint-disable no-console */
'use strict';

const requestPromise = require('request-promise'),
	csvtojson = require('csvtojson'),
	request = require('../helpers/general/request'),
	response = require('../helpers/general/response'),
	validation = require('../helpers/import/validation'),
	csvJson = require('../helpers/import/csvJson'),
	importData = require('../helpers/import/import');

function validateImportJSONData (req, res, data) {
	// If no body sent
	if (Object.keys(data).length === 0 && data.constructor === Object) {
		response.send(res, 400, 'The request must contain import data in the JSON or CSV format sent as the request body with a relevant Content-Type request header.');
		return;
	}

	// Check the top-level property in the request body
	if (!data.hasOwnProperty('items') || (data.hasOwnProperty('items') && !(data.items instanceof Array))) {
		response.send(res, 400, 'The request body must have the top-level property "items" of type array.');
		return;
	}

	// First level - Validate Project ID and API key in the authorization header
	requestPromise(request.getAPIKeyProjectIDOptions(req))
		.then(() => {		
			
			// Second level - Validate content models
			requestPromise(request.getContentModelsOptions(req))
				.then((contentModels) => {
					let isDataValid = validation.isImportDataValid(req, data, contentModels);

					if (isDataValid.isDataValid) {
						response.sendLog(req, 'Import data and content models comparision ok...');
						response.sendLog(req, 'Starting import...');
						importData.importData(req, res, data);
					} else {
						response.send(res, 400, isDataValid.message);
					}
				})
				.catch((error) => {
					response.send(res, error.statusCode, error.error.message);
				});
		})
		.catch((error) => {
			response.send(res, error.statusCode, error.error.message);
		});	
}

function validateImportCSVData (req, res) {
	var data = { items: [] };
    
	csvtojson({
		checkType: true,
		delimiter: 'auto'
	})
		.fromString(req.body)
		.on('json', (json) => {
			data.items.push(csvJson.format(json));
		})
		.on('done', () => {
			validateImportJSONData(req, res, data);
		});  
}

function migrateData (req, res) {
	switch (req.header('Content-Type')) {
	case 'text/csv':
		validateImportCSVData(req, res);  
		break;
	case 'application/json':
		validateImportJSONData(req, res, req.body);
		break;
	}
}

module.exports = {
	migrateData
};