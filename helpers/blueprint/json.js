// Create structure of the blueprint JSON object
function structureBlueprint (model) {
    let blueprint = {};

    blueprint.items = [{
        item: {
            name: '',
            type: {
                codename: model.system.codename
            },
            sitemap_locations: [{
                codename: ''
            }],
            external_id: ''
        },
        variants: [{
            language: {
                codename: ''
            },
            elements: {}
        }]
    }];

    // Create structure of content elements
    for (let element in model.elements) {
        if (model.elements.hasOwnProperty(element)) {
            blueprint.items[0].variants[0].elements[element] = getElementValue(model.elements[element].type);
        }
    }

    return blueprint;
}

// Based on content element type return relevant value
function getElementValue (type) {
    let value;

    switch (type) {
        case 'text':
        case 'rich_text':
        case 'url_slug':
        case 'date_time':
            value = '';
            break;
        case 'number':
            value = 0;
            break;
        case 'multiple_choice':
        case 'modular_content': 
        case 'taxonomy':
            value = [{
                codename: ''
            }];
            break;
        case 'asset':
            value = [{
                id: ''
            }];
            break;
    }
    
    return value;
}


module.exports = {
	structureBlueprint
};