function getAPIKeyProjectIDOptions(req) {
	return {
		method: 'GET',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items',
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		json: true
	};
}

function getContentModelsOptions(req) {
	return {
		method: 'GET',
		uri: 'https://deliver.kenticocloud.com/' + req.params.projectId + '/types',
		json: true
	};
}

function getAddOptions(req, data) {
	return {
		method: 'POST',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items',
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		body: data,
		json: true
	};
}

function getUpsertOptions(req, data, itemId, languageVariant) {
	return {
		method: 'PUT',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items/' + itemId + '/variants/codename/' + languageVariant,
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		body: data,
		json: true
	};
}

function getDeleteOptions(req, itemId) {
	return {
		method: 'DELETE',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items/' + itemId,
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		json: true
	};
}


module.exports = {
	getAPIKeyProjectIDOptions,
	getContentModelsOptions,
	getAddOptions,
	getUpsertOptions,
	getDeleteOptions
};