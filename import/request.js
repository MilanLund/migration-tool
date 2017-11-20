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

module.exports = {
	getAPIKeyProjectIDOptions,
	getContentModelsOptions
};