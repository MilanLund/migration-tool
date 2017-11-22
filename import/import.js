const request = require('./request'),
		Bluebird = require('bluebird'),
		response = require('./response'),
		requestPromise = require('request-promise'),
		util = require('util');

function importData (req, res) {
	var addOptions = [],
		upsertOptions = [],
		item,
		variant,
		elem,
		lang,
		importedItems = [];

	for (var i = 0; i < req.body.items.length; i++) {
		item = req.body.items[i].item;
		addOptions.push(request.getAddOptions(req, item));
	}
	
	Bluebird.mapSeries(addOptions, (options, index) => {
		return requestPromise(options).then((data) => {
			console.log('Item "' + data.name + '" imported.');
			
			upsertOptions = [];
			importedItems.push({
				id: data.id,
				codename: data.codename
			});
	
			for (var j = 0; j < req.body.items[index].variants.length; j++) {
				variant = req.body.items[index].variants[j];
				elem = { elements: variant.elements };
				lang = variant.language.codename;
				upsertOptions.push(request.getUpsertOptions(req, elem, data.id, lang));
			}

			return Bluebird.mapSeries(upsertOptions, (options, index) => {
				return requestPromise(options)
				.catch((error) => {
					throw error;
				});			
			})
			.catch((error) => {
				throw error;
			});
		}).catch((error) => {
			throw error
		});
	})
	.then((data) => {
		console.log('Import successful.');
		response.send(res, 200, importedItems); 
	})
	.catch((error) => { 
		console.log('Import failed.');
		console.log('Starting deleting already imported items...');
		var deleteOptions = [];

		for (var i = 0; i < importedItems.length; i++) {
			deleteOptions.push(request.getDeleteOptions(req, importedItems[i].id));
		}
		
		return Bluebird.map(deleteOptions, (options, index) => {
			return requestPromise(options)
			.catch((error) => {
				throw error;
			});
		}, {concurrency: 2})
		.then((data) => {
			console.log('Deletion successful.');
			response.send(res, error.statusCode, error.error.message, error.error.validation_errors); 
		});
	});
}

module.exports = {
	importData
};