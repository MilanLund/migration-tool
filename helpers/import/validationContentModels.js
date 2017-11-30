/* eslint-disable no-console */
const response = require('../general/response');

// Compares import data with structure of content models defined in the Kentico Cloud project
// Validates data types of imported data and mapped content elements
function importDataFitContentModels(importData, contentModels) {
	let isDataValid = response.getPositiveResponse(),
		contentModelExists,
		contentElementExists,
		contentElementValid;

	// Iterate items in import data
	for (let i = 0; i < importData.items.length; i++) {
		// Flag for indicating whether a content model referenced in the currently iterated content item exists in the Kentico Cloud project
		contentModelExists = false;

		// Iterate list of content models
		for (var j = 0; j < contentModels.types.length; j++) {
			// Check if content model exists in the currently iterated content item
			if (importData.items[i].item.type.codename === contentModels.types[j].system.codename) {
				contentModelExists = true;
				break;
			}
		}

		// If the referenced content model does not exist set a response
		if (contentModelExists === false) {
			return response.setValidationFailedContentModels(importData.items[i].item.type.codename, i);
		}

		// Iterate language variants of the currently iterated content item
		for (let k = 0; k < importData.items[i].variants.length; k++) {
			// Iterate content elements of the currently iterated language variant
			Object.keys(importData.items[i].variants[k].elements).forEach(function(keyData) {
				// Flag for indicating whether a content element exists in the content model
				contentElementExists = false;
				// Flag for indicating whether a value assigned to a content element is of a corect data type
				contentElementValid = {
					isValid: false
				};	

				// Iterate content elements of the content model
				Object.keys(contentModels.types[j].elements).some(function(keyModels) {
					if (keyData === keyModels) {
						// Check if content element exists in the currently iterated content item
						contentElementExists = true;
						// and is of a correct data type
						contentElementValid = checkContentElementType(importData.items[i].variants[k].elements[keyData], contentModels.types[j].elements[keyModels]);
						return contentElementExists;
					}
				});
				
				// If the content element does not exist set a response
				if (contentElementExists === false) {
					isDataValid = response.setValidationFailedContentElementExists(keyData, importData.items[i].item.type.codename, i);
					return contentElementExists === false;
				}

				// If the content element is of incorrect data type set a response
				if (contentElementValid.isValid === false) {
					isDataValid = response.setValidationFailedContentElementDataType(keyData, contentElementValid.dataTypeModel, contentElementValid.dataTypeData, i);
					return contentElementValid.isValid === false;
				}
			});

			// Return a response data 
			if(!isDataValid.isDataValid) {
				return isDataValid;
			}
		}
	}
	return isDataValid;
}

// Checks whether a conent element is of a correct data type
function checkContentElementType(dataElement, modelElement) {
	let dataTypeData = '',
		dataTypeModel = '';

	// Unify element types into data types
	switch (modelElement.type) {
	case 'text':
	case 'rich_text':
	case 'url_slug':
	case 'date_time':
		dataTypeModel = 'string';
		break;
	case 'number':
		dataTypeModel = 'number';
		break;
	case 'multiple_choice':
	case 'modular_content': 
	case 'taxonomy':
	case 'asset':
		dataTypeModel = 'array';
		break;
	}

	// Check data types od import data
	if (typeof dataElement === 'string') {
		dataTypeData = 'string';
	} else if (typeof dataElement === 'number' && isFinite(dataElement)) {
		dataTypeData = 'number';
	} else if (dataElement instanceof Array) {
		dataTypeData = 'array';
	} else if (typeof dataElement === 'object') {
		dataTypeData = 'object';
	}  

	// Return comparision of data types and additional info for the response message purpose
	return { 
		isValid: dataTypeData === dataTypeModel,
		dataTypeData: dataTypeData,
		dataTypeModel: dataTypeModel
	};
}

module.exports = {
	importDataFitContentModels
};