/* eslint-disable no-console */

// Constructor for a positive response
function getPositiveResponse() {
	return { 
		isDataValid: true,
		message: 'Data is valid'
	};
}

// Sets a validation response in case content item validation fails
function setValidationFailed(property, key, keysLength, errorMessage, index) {
	let isDataValid = {};
	
	isDataValid.isDataValid = false;

	if (keysLength === 1) {
		isDataValid.message = 'The object key "' + property + '" ' + errorMessage + ' in your import data item of index ' + index + '.';
	} else {
		isDataValid.message = 'The object key "' + property + '" in the "' + key + '" object ' + errorMessage + ' in your import data item of index ' + index + '.';
	}
	return isDataValid;
}

// Sets a validation response in case content model does not exist in the Kentico Cloud project
function setValidationFailedContentModels(contentModel, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'Content model "' + contentModel + '" referenced in your import data item of index ' + index + ' does not exist in the project.';
	
	return isDataValid;
}

// Sets a validation response in case content element does not exist in the content type
function setValidationFailedContentElementExists(contentElement, contentModel, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'Content element "' + contentElement + '" referenced in your import data item of index ' + index + ' does not exist in content model "' + contentModel + '".';
	
	return isDataValid;
}

// Sets a validation response in case content element is of incorrect data type
function setValidationFailedContentElementDataType(contentElement, dataTypeModel, dataTypeData, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'The "' + contentElement + '" content element is type of "'+ dataTypeData +'" but should be "'+ dataTypeModel +'" in your import data item of index ' + index + '.';
	
	return isDataValid;
}

// Wrapper for sending responses
function send(res, code, message, validationErrors) {
	let response = {
		message: message
	};

	if (typeof validationErrors !== 'undefined') {
		response.validation_errors = validationErrors;
	}

	res.status(code).send(response);
}

module.exports = {
	setValidationFailed,
	setValidationFailedContentModels,
	setValidationFailedContentElementExists,
	setValidationFailedContentElementDataType,
	getPositiveResponse,
	send
};