const response = require('../import/response');

// Main funciton
function renderBlueprint (req, res, contentModels) {
    if (req.params.format === 'json') {

        // Get information about content model codename given in the endpoint url
        let model = getContentModel(contentModels, req.params.contentModel);

        if (model === null) {
            response.send(res, 405, 'Content model "' + req.params.contentModel + '" does not exist in the Kentico Cloud project.');
        }

        // Send the blueprint as a response
        res.status(200).send(structureBlueprint(model));
    } else {
        response.send(res, 405, 'Blueprint format "' + req.params.format + '" is not supported.');
    }
} 

// Get specific content model object codename given in the endpoint url
function getContentModel (contentModels, codename) {
    let model = null;

    // Iterate all models
    for (let i = 0; i < contentModels.length; i++) {
        if (contentModels[i].system.codename === codename) {
            // If codenames equal get the model object
            model = contentModels[i];
        }
    }

    return model;
}

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
	renderBlueprint
};