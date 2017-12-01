/* eslint-disable no-console */
'use strict';

const requestPromise = require('request-promise'),
	request = require('../helpers/general/request'),
	response = require('../helpers/general/response'),
	blueprint = require('../helpers/blueprint/blueprint');

function generateBlueprint (req, res) {
	// Get all content models
	requestPromise(request.getContentModelsOptions(req))
		.then((contentModels) => {	
			blueprint.renderBlueprint(req, res, contentModels.types);
		})
		.catch((error) => {
			response.send(res, error.statusCode, error.error.message);
		});
}

module.exports = {
	generateBlueprint
};