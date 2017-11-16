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
				.then((response) => {
					var requestedContentTypes = helper.getContentTypes(req.body); 
					helper.compareContentTypes(requestedContentTypes, response);

					helper.sendResponse(res, 200, response);
				})
		})
		.catch((error) => {
			helper.sendResponse(res, error.statusCode, error.error.message);
		});
	
});

module.exports = router;