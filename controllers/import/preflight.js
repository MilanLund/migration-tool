const requestPromise = require('request-promise');

const preflight = {
	/* Methods that provide logic for validatin the request */

	// Check if authorization header is present
	isAutorizaionHeaderPresent: (req, hasPreflightPassed) => {
		if (typeof req.token === 'undefined') {
			hasPreflightPassed.code = 401;
			hasPreflightPassed.message = 'Authorization header is empty.';
		}

		return hasPreflightPassed;
	},

	isProjectIdValid: (req, hasPreflightPassed) => {
		var requestOptions = {
			method: 'GET',
			uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items',
			auth: {
				 'bearer': req.token
			},
			json: true
		};
		  
		requestPromise(requestOptions)
			.catch((response) => {
				res.status(response.statusCode).send({
					message: JSON.parse(response.message).message
				});
			});
	},


	/* Method that runs the entire preflight process */

	run: (req) => {
		// Default state of the preflight process
		var hasPreflightPassed = {
			code: 200,
			message: 'Preflight passed'
		}

		// Synchronous methods that validate the request before data are sent to Kentico Cloud
		var preflightMethods = [
			preflight.isAutorizaionHeaderPresent,
		]

		// Run each synchronous validation method
		for (var i = 0; i < preflightMethods.length; i++) {
			hasPreflightPassed = preflightMethods[i](req, hasPreflightPassed);

			if (hasPreflightPassed.code !== 200) {
				break;
			}
		}

		return hasPreflightPassed;
	}

};

module.exports = preflight;