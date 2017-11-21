const express = require('express'),
		router = express.Router(),
		requestPromise = require('request-promise');
		request = require('../import/request'),
		response = require('../import/response'),
		validation = require('../import/validation'),
		importData = require('../import/import');

router.post('/:projectId', (req, res, next) => {
	// If no body sent
	if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
		response.send(res, 400, 'The request must contain import data in the JSON format sent as the request body.');
		return;
	}

	// Check the top-level property in the request body
	if (!req.body.hasOwnProperty('items') || (req.body.hasOwnProperty('items') && !(req.body.items instanceof Array))) {
		response.send(res, 400, 'The request body must have the top-level property "items" of type array.');
		return;
	}

	// First level - Validate Project ID and API key in the authorization header
	requestPromise(request.getAPIKeyProjectIDOptions(req))
		.then((data) => {		

			// Second level - Validate content models
			requestPromise(request.getContentModelsOptions(req))
				.then((contentModels) => {
					let isDataValid = validation.isImportDataValid(req.body, contentModels);

					if (isDataValid.isDataValid) {
						importData.importData(req.body);
						response.send(res, 200, 'Import data validation ok. Ready for the import process.');
					} else {
						response.send(res, 400, isDataValid.message);
					}
				})
				/*.catch((error) => {
					helper.send(res, error.statusCode, error.error.message);
				});*/
		})
		.catch((error) => {
			response.send(res, error.statusCode, error.error.message);
		});	
});

router.use('/:projectId', (req, res, next) => {
	response.send(res, 405, 'The endpoint supports only the POST request.');
});

module.exports = router;