/* eslint-disable no-console */
'use-strict';

//const util = require('util');

// Pupose of this file is to convert CSV import data to JSON 

// Main function that structures top level properties
function format (data) {
	let json = {};

	json.item = composeItem(data);
	data = removeItemPropeties(data);
	json.variants = composeVariants(data);

	return json;
}

// Structure the item object with relevant properties
function composeItem (data) {
	let json = {};

	json.name = getProperty(data, 'name', true);
	json.type = getObjectCodenameProperty(data, 'type');
	json.external_id = getProperty(data, 'external_id', true);
	json.sitemap_locations = getArray(data, 'sitemap_locations');
    
	return json;
}

// Structure variants array for language variants
function composeVariants (data) {
	var languages = getLanguages(data),
		property = '',
		subKey = '',
		arrayKey = '',
		array = [];

	// Constructor for object that stores a single language variant
	function JSONObject() {
		return { 
			language: {
				codename: ''
			},
			elements: {}
		};
	}

	// Iterate languages defined by structure of CSV header row
	for (let i = 0; i < languages.length; i++) {
		let json = new JSONObject();

		// Create language property
		json.language.codename = languages[i];

		// Iterate keys in helper JSON object that is a plain conversion from CSV
		for (var key in data) {

			// Structure content elements
			if (key.startsWith(languages[i])) {  
				property = key.replace(languages[i] + '/', '');

				if (property.indexOf('/') === -1) {
					json.elements[property] = getProperty(data, key);
				} else {
					subKey = property.substr(0, property.indexOf('/'));
					arrayKey = key.substr(0, key.lastIndexOf('/'));
					json.elements[subKey] = getArray(data, arrayKey);
				}
			}
            
		}
		array.push(json);  
	}
	return array;
}

// Get languages defined by structure of CSV header row
function getLanguages (data) {
	let language = '',
		languages = [];

	// Iterate keys in helper JSON object that is a plain conversion from CSV
	// and get unique values for languages
	for (var key in data) {
		language = key.substr(0, key.indexOf('/'));

		if (languages.indexOf(language) === -1) {
			languages.push(language);
		}
	}

	return languages;
}

// Get value of a property
function getProperty (data, property, stringify) {
	let value = null;

	if (data.hasOwnProperty(property)) {
		value = data[property];
	}

	if (stringify && value !== null) {
		value = value.toString();
	}

	return value;   
}

// Get value of a property and wrap it in a object in the 'codename' property
function getObjectCodenameProperty (data, property) {
	let value = null;

	if (data.hasOwnProperty(property)) {
		value = { codename: data[property].toString() };
	}

	return value;   
}

// Parse array values from the CSV
function getArray (data, property) {
	var delimiter = '|',
		array = [],
		values = [],
		item = {},
		subKey = '';

	property += '/';

	for (var key in data) {
		if (key.startsWith(property)) {       
			subKey = key.replace(property, '');
			values = data[key].toString().split(delimiter);

			for (let i = 0; i < values.length; i++) {
				if (values[i] !== '') {
					item = {};
					item[subKey] = values[i];
					array.push(item);
				}       
			}         
		}
	}

	return array;
}

// Helper function that removes properties stored in the 'item' object 
function removeItemPropeties (data) {
	delete data.name;
	delete data.type;
	delete data.external_id;

	for (var key in data) {
		if (key.startsWith('sitemap_locations')) {
			delete data[key];
		}         
	}

	return data;
}

module.exports = {
	format
};