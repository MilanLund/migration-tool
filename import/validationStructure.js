const response = require('./response');

function isImportDataStructureValid(importData) {
	return checkProperties(importData.items, [{
			key: 'item',
			type: 'object',
			compulsory: true
		}, {
			key: 'variants',
			type: 'array',
			compulsory: true,
			childKeys: [{
					key: 'language.codename',
					type: 'string',
					compulsory: true
				}, {
					key: 'elements',
					type: 'object',
					compulsory: true
				}
			]
		}, {
			key: 'item.name',
			type: 'string',
			compulsory: true
		}, {
			key: 'item.type.codename',
			type: 'string',
			compulsory: true
		}, {
			key: 'item.sitemap_locations',
			type: 'array',
			compulsory: false
		}
	]);
}

function checkProperties(importData, settings, isParentIteration, parentLevelIndex) {
	let isDataValid = response.getPositiveResponse();

	for (var i = 0; i < importData.length; i++) {
		for (var j = 0; j < settings.length; j++) {
			// Check if is not in recursion call
			if (!isParentIteration) {
				parentLevelIndex = i;
			}

			// Check if all compulsory properties are in the imported data 
			if (settings[j].compulsory) {
				isDataValid = itemHasProperty(importData[i], settings[j], parentLevelIndex);
				
				if (!isDataValid.isDataValid) {
					return isDataValid;
				}
			}			
			
			// Check if all compulsory properties are of required type and are not empty
			isDataValid = itemIsOfTypeAndNotEmpty(importData[i], settings[j], parentLevelIndex);
			
			if (!isDataValid.isDataValid) {
				return isDataValid;
			}

			if (settings[j].childKeys) {	
				// Recursion call for childKeys
				isDataValid = checkProperties(importData[i][settings[j].key], settings[j].childKeys, true, parentLevelIndex);
			
				if (!isDataValid.isDataValid) {
					return isDataValid;
				}
			}
		}
	}
	return isDataValid;
}

function itemHasProperty(data, settings, index) {
	let keys = settings.key.split('.'),
		isDataValid = response.getPositiveResponse();

	for(var i = 0; i < keys.length; i++) {
		if (data.hasOwnProperty([keys[i]])) {
			data = data[keys[i]];
		} else {
			isDataValid = response.setValidationFailed([keys[i]], settings.key, keys.length, 'is compulsory', index);
			break;
		}
	}
	return isDataValid;
}

function itemIsOfTypeAndNotEmpty(data, settings, index) {
	let key = settings.key,
		type = settings.type,
		compulsory = settings.compulsory,
		keys = key.split('.'),
		isDataValid = response.getPositiveResponse(),
		property;

	for (var i = 0; i < keys.length; i++) {
		data = data[keys[i]];
		property = keys[i];
	}

	// Error if data is null and is compulsory
	if (data === null && compulsory) {
		return response.setValidationFailed(property, key, keys.length, 'must not be null and should be type of "' + type + '"', index);
	}

	// If data should be string, is not null and is not mising at all
	if (type === 'string' && data !== null && typeof data !== 'undefined') {
		if (typeof data !== 'string') {
			return response.setValidationFailed(property, key, keys.length, 'must be type of string', index);
		}

		if (data === '' && compulsory) {
			return response.setValidationFailed(property, key, keys.length, 'must not be an empty string', index);
		}
	}

	// If data should be number, is not null and is not mising at all
	if (type === 'number' && data !== null && typeof data !== 'undefined') {
		if (typeof data !== 'number') {
			return response.setValidationFailed(property, key, keys.length, 'must be a number', index);
		}

		if (!isFinite(data) && compulsory) {
			return response.setValidationFailed(property, key, keys.length, 'must not be infinite or NaN', index);
		}
	}	
	
	// If data should be array, is not null and is not mising at all
	if (type === 'array' && data !== null && typeof data !== 'undefined') {
		if(!(data instanceof Array)) {
			return response.setValidationFailed(property, key, keys.length, 'must be an array', index);
		}

		if (data.length === 0 && compulsory) {
			return response.setValidationFailed(isDataValid, property, key, keys.length, 'must not be an empty array', index);
		}
	}

	// If data should be object, is not null and is not mising at all
	if (type === 'object' && data !== null && typeof data !== 'undefined') {
		if(!(typeof data === 'object' && !(data instanceof Array) && data !== null)) {
			return response.setValidationFailed(property, key, keys.length, 'must be an object', index);
		}
	}

	// If data is not compulsory and is null or missing take it as a correct behavior 
	return isDataValid;
}

module.exports = {
	isImportDataStructureValid
};