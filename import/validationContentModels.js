const response = require('./response');

function importDataFitContentModels(importData, contentModels) {
	let isDataValid = response.getPositiveResponse(),
		contentModelIndex,
		contentModelExists,
		contentElementExists,
		contentElementValid;

	for (var i = 0; i < importData.items.length; i++) {
		contentModelExists = false;

		// Check if content model exists and get its index in the object obtained from Kentico Cloud
		for (var j = 0; j < contentModels.types.length; j++) {
			if (importData.items[i].item.type.codename === contentModels.types[j].system.codename) {
				contentModelExists = true;
				contentModelIndex = j;
				break;
			}
		}

		if (contentModelExists === false) {
			return response.setValidationFailedContentModels(importData.items[i].item.type.codename, i);
		}

		// Check if content elements exist and is of correct data type
		for (var k = 0; k < importData.items[i].variants.length; k++) {
			Object.keys(importData.items[i].variants[k].elements).forEach(function(keyData, indexData) {
				contentElementExists = false;
				contentElementValid = {
					isValid: false};	

				Object.keys(contentModels.types[j].elements).some(function(keyModels, indexModels) {
					if (keyData === keyModels) {
						contentElementExists = true;
						contentElementValid = checkContentElementType(importData.items[i].variants[k].elements[keyData], contentModels.types[j].elements[keyModels]);
						return contentElementExists;
					}
				});

				if (contentElementExists === false) {
					isDataValid = response.setValidationFailedContentElementExists(keyData, importData.items[i].item.type.codename, i);
					return contentElementExists === false;
				}

				if (contentElementValid.isValid === false) {
					isDataValid = response.setValidationFailedContentElementDataType(keyData, contentElementValid.dataTypeModel, contentElementValid.dataTypeData, i);
					return contentElementValid.isValid === false;
				}
		  });

		  if(!isDataValid.isDataValid) {
			  return isDataValid;
		  }
		}
	}
	return isDataValid;
};

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
	};

	// Check data types od import data
	if (typeof dataElement === 'string') {
		dataTypeData = 'string';
	} else if (typeof dataElement === 'number' && isFinite(dataElement)) {
		dataTypeData = 'number';
	} else if (dataElement instanceof Array) {
		dataTypeData = 'array';
		console.log('asd');
	} else if (typeof dataElement === 'object') {
		dataTypeData = 'object';
	}  

	// Return comparision of data types and additional info for the response message purpose
	return { 
		isValid: dataTypeData === dataTypeModel,
		dataTypeData: dataTypeData,
		dataTypeModel: dataTypeModel
	};
};

module.exports = {
	importDataFitContentModels
};