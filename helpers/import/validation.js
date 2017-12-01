/* eslint-disable no-console */
'use-strict';

const structure = require('./validationStructure'),
	models = require('./validationContentModels'),
	response = require('../general/response');

// Validates import data sturucture and compares it to content models structure in the Kentico Cloud project 
function isImportDataValid(req, importData, contentModels) {
	// Check whether structure of imported data is correct
	let isDataValid = structure.isImportDataStructureValid(importData);

	// Check whether import data fit referenced content models
	if (isDataValid.isDataValid) {
		response.sendLog(req, 'Import data structure ok...');
		
		isDataValid = models.importDataFitContentModels(importData, contentModels);
	}
	return isDataValid;	
}

module.exports = {
	isImportDataValid
};