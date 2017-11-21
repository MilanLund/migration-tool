const response = require('./response'),
		structure = require('./validationStructure'),
		models = require('./validationContentModels');

function isImportDataValid(importData, contentModels) {
	// Check whether structure of imported data is correct
	let isDataValid = structure.isImportDataStructureValid(importData);

	// Check whether import data fit referenced content models
	if (isDataValid.isDataValid) {
		isDataValid = models.importDataFitContentModels(importData, contentModels);
	}
	return isDataValid;	
}

module.exports = {
	isImportDataValid
};