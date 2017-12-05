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
	isDataValid.itemIndex = index;

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
	isDataValid.itemIndex = index;

	return isDataValid;
}

// Sets a validation response in case content element does not exist in the content type
function setValidationFailedContentElementExists(contentElement, contentModel, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'Content element "' + contentElement + '" referenced in your import data item of index ' + index + ' does not exist in content model "' + contentModel + '".';
	isDataValid.itemIndex = index;

	return isDataValid;
}

// Sets a validation response in case content element is of incorrect data type
function setValidationFailedContentElementDataType(contentElement, dataTypeModel, dataTypeData, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'The "' + contentElement + '" content element is type of "'+ dataTypeData +'" but should be "'+ dataTypeModel +'" in your import data item of index ' + index + '.';
	isDataValid.itemIndex = index;

	return isDataValid;
}

// Wrapper for sending responses
function send(res, code, message, validationErrors, itemIndex) {
	let response = {
		message: message
	};

	if (typeof validationErrors !== 'undefined' && validationErrors !== null) {
		response.validation_errors = validationErrors;
	}

	if (typeof itemIndex !== 'undefined' && itemIndex !== null) {
		response.itemIndex = itemIndex;
	}

	res.status(code).send(response);
}

function sendLog(req, message) {
	console.log(message);

	if (typeof req.cookies.io !== 'undefined') {
		var io = req.app.get('socketio');
		io.to(req.cookies.io).emit('message', message);
	}
}

module.exports = {
	setValidationFailed,
	setValidationFailedContentModels,
	setValidationFailedContentElementExists,
	setValidationFailedContentElementDataType,
	getPositiveResponse,
	send,
	sendLog
};