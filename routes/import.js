const express = require('express'),
		router = express.Router(),
		requestPromise = require('request-promise');
		helper = require('../controllers/import/helper');

router.post('/:projectId', (req, res, next) => {

	// First level - Validate Project ID and API key in the authorization header
	requestPromise(helper.getRequestAPIKeyProjectIDOptions(req))
		.then((response) => {		

			// Second level - Validate content types
			requestPromise(helper.getRequestContentTypesOptions(req))
				.then((contentTypes) => {
					var isDataValid = helper.isImportDataValid(req.body, contentTypes);

					if (isDataValid.isDataValid) {
						helper.sendResponse(res, 200, contentTypes);
					} else {
						helper.sendResponse(res, 400, isDataValid.message);
					}
				})
				/*.catch((error) => {
					helper.sendResponse(res, error.statusCode, error.error.message);
				});*/
		})
		.catch((error) => {
			helper.sendResponse(res, error.statusCode, error.error.message);
		});	
});

router.use('/:projectId', (req, res, next) => {
	helper.sendResponse(res, 405, 'The endpoint supports only the POST request.');
});

module.exports = router;