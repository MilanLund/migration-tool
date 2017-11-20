function getPositiveResponse() {
	return { 
		isDataValid: true,
		message: 'Data is valid'
	}
}

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

function setValidationFailedContentModels(contentModel, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'Content model "' + contentModel + '" referenced in your import data item of index ' + index + ' does not exist in the project.';
	
	return isDataValid;
}

function setValidationFailedContentElementExists(contentElement, contentModel, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'Content element "' + contentElement + '" referenced in your import data item of index ' + index + ' does not exist in content model "' + contentModel + '".';
	
	return isDataValid;
}

function setValidationFailedContentElementDataType(contentElement, dataTypeModel, dataTypeData, index) {
	let isDataValid = {};

	isDataValid.isDataValid = false;
	isDataValid.message = 'The "' + contentElement + '" content element is type of "'+ dataTypeData +'" but should be "'+ dataTypeModel +'" in your import data item of index ' + index + '.';
	
	return isDataValid;
}

function send(res, code, message) {
	res.status(code).send({
		message: message
	});
}

module.exports = {
	setValidationFailed,
	setValidationFailedContentModels,
	setValidationFailedContentElementExists,
	setValidationFailedContentElementDataType,
	getPositiveResponse,
	send
};