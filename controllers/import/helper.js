const util = require('util')

const helper = {
	getRequestAPIKeyProjectIDOptions: (req) => {
		return {
			method: 'GET',
			uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items',
			auth: {
				'bearer': (typeof req.token !== 'undefined') ? req.token : ''
			},
			json: true
		}
	},

	getRequestContentTypesOptions: (req) => {
		return {
			method: 'GET',
			uri: 'https://deliver.kenticocloud.com/' + req.params.projectId + '/types',
			json: true
		}
	},

	isImportDataValid: (importData, contentTypes) => {
		//console.log(util.inspect(importData, false, null));
		//console.log(util.inspect(contentTypes, false, null));


		var isDataValid = helper.isImportDataStructureValid(importData);

		/*if (isDataValid.isDataValid) {
			isDataValid = helper.doesImportDataFitContentTypes(importData, contentTypes);
		}*/

		return isDataValid;	
	},

	isImportDataStructureValid: (importData) => {
		var isDataValid = {
			isDataValid: true,
			message: 'Data is valid'
		};

		isDataValid = helper.checkProperties(importData.items, [{
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

		return isDataValid;
	},

	doesImportDataFitContentTypes: (importData, contentTypes) => {
		return {
			isDataValid: true,
			message: 'Data is valid'
		};
	},

	checkProperties: (importData, settings, isParentIteration, parentLevelIndex) => {
		var isDataValid = {
			isDataValid: true,
			message: 'Data is valid'
		};	

		for (var i = 0; i < importData.length; i++) {
			for (var j = 0; j < settings.length; j++) {
				// Check if is not in recursion call
				if (!isParentIteration) {
					parentLevelIndex = i;
				}

				// Check if all compulsory properties are in the imported data 
				if (settings[j].compulsory) {
					isDataValid = helper.itemHasProperty(importData[i], settings[j], parentLevelIndex);
					
					if (!isDataValid.isDataValid) {
						return isDataValid;
					}
				}			
				
				// Check if all compulsory properties are of required type and are not empty
				isDataValid = helper.itemIsOfTypeAndNotEmpty(importData[i], settings[j], parentLevelIndex);
				
				if (!isDataValid.isDataValid) {
					return isDataValid;
				}

				if (settings[j].childKeys) {	
					// Recursion call for childKeys
					isDataValid = helper.checkProperties(importData[i][settings[j].key], settings[j].childKeys, true, parentLevelIndex);
				
					if (!isDataValid.isDataValid) {
						return isDataValid;
					}
				}
			}
		}

		return isDataValid;
	},

	itemIsOfTypeAndNotEmpty: (data, settings, index) => {
		var key = settings.key,
			type = settings.type,
			compulsory = settings.compulsory,
			keys = key.split('.'),
			isDataValid = {
				isDataValid: true,
				message: 'Data is valid'
			},
			property;

		for (var i = 0; i < keys.length; i++) {
			data = data[keys[i]];
			property = keys[i];
		}

		// Error if data is null and is compulsory
		if (data === null && compulsory) {
			return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must not be null and should be type of "' + type + '"', index);
		}

		// If data should be string, is not null and is not mising at all
		if (type === 'string' && data !== null && typeof data !== 'undefined') {
			if (typeof data !== 'string') {
				return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must be type of string', index);
			}

			if (data === '' && compulsory) {
				return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must not be an empty string', index);
			}
		}

		// If data should be number, is not null and is not mising at all
		if (type === 'number' && data !== null && typeof data !== 'undefined') {
			if (typeof data !== 'number') {
				return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must be a number', index);
			}

			if (!isFinite(data) && compulsory) {
				return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must not be infinite or NaN', index);
			}
		}	
		
		// If data should be array, is not null and is not mising at all
		if (type === 'array' && data !== null && typeof data !== 'undefined') {
			if(!(data instanceof Array)) {
				return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must be an array', index);
			}

			if (data.length === 0 && compulsory) {
				return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must not be an empty array', index);
			}
		}

		// If data should be object, is not null and is not mising at all
		if (type === 'object' && data !== null && typeof data !== 'undefined') {
			if(!(typeof data === 'object' && !(data instanceof Array) && data !== null)) {
				return helper.setValidationResponseError(isDataValid, property, key, keys.length, 'must be an object', index);
			}
		}

		// If data is not compulsory and is null or missing take it as a correct behavior 

		return isDataValid;
	},

	itemHasProperty: (data, settings, index) => {
		var key = settings.key,
			keys = key.split('.'),
			isDataValid = {
				isDataValid: true,
				message: 'Data is valid'
			};

		for(var i = 0; i < keys.length; i++) {
			if (data.hasOwnProperty([keys[i]])) {
				data = data[keys[i]];
			} else {
				isDataValid = helper.setValidationResponseError(isDataValid, [keys[i]], key, keys.length, 'is compulsory', index);
				break;
			}
		}

		return isDataValid;
	},

	setValidationResponseError: (isDataValid, property, key, keysLength, errorMessage, index) => {
		isDataValid.isDataValid = false;
		if (keysLength === 1) {
			isDataValid.message = 'The object key "' + property + '" ' + errorMessage + ' in your import data item of index ' + index + '.';
		} else {
			isDataValid.message = 'The object key "' + property + '" in the "' + key + '" object ' + errorMessage + ' in your import data item of index ' + index + '.';
		}

		return isDataValid;
	},

	sendResponse: (res, code, message) => {
		res.status(code).send({
			message: message
		});
	}
};

module.exports = helper;