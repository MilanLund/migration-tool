/* eslint-disable no-console */
'use-strict';

const response = require('../general/response'),
	json = require('./json'),
	csv = require('./csv');

// Main function
function renderBlueprint (req, res, contentModels) {
	// Get information about content model codename given in the endpoint url
	let model = getContentModel(contentModels, req.params.contentModel);
    
	if (model === null) {
		response.send(res, 405, 'Content model "' + req.params.contentModel + '" does not exist in the Kentico Cloud project.');
	}

	// Get blueprint for a requested format/content type
	switch (req.params.format) {
	case 'json':
		res.status(200).send(json.structureBlueprint(model));
		break;
	case 'csv': 
		res.status(200).type('text/csv').send(csv.structureBlueprint(model));
		break;
	default: 
		response.send(res, 405, 'Blueprint format "' + req.params.format + '" is not supported.');
	}   
} 

// Get specific content model object codename given in the endpoint url
function getContentModel (contentModels, codename) {
	let model = null;

	// Iterate all models
	for (let i = 0; i < contentModels.length; i++) {
		if (contentModels[i].system.codename === codename) {
			// If codenames equal get the model object
			model = contentModels[i];
		}
	}

	return model;
}



module.exports = {
	renderBlueprint
};