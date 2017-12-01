/* eslint-disable no-console */
'use-strict';

// Create structure of the blueprint CSV
function structureBlueprint (model) {
	let blueprint = 'name,type,sitemap_locations/codename,external_id,';


	// Create structure of content elements
	for (let element in model.elements) {
		if (model.elements.hasOwnProperty(element)) {
			blueprint += 'language_codename/' + element + getElementValue(model.elements[element].type) + ',';
		}
	}

	return blueprint.substring(0, blueprint.length - 1);
}

// Based on content element type return relevant value
function getElementValue (type) {
	let value;

	switch (type) {
	case 'text':
	case 'rich_text':
	case 'url_slug':
	case 'date_time':
	case 'number':
		value = '';
		break;
	case 'multiple_choice':
	case 'modular_content': 
	case 'taxonomy':
		value = '/codename';
		break;
	case 'asset':
		value = '/id';
		break;
	}
    
	return value;
}

module.exports = {
	structureBlueprint
};