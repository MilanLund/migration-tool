const express = require('express'),
		router = express.Router(),
		preflight = require('../controllers/import/preflight');

router.post('/:projectId', (req, res, next) => {
	console.log('Import route hit.');

	var hasPreflightPassed = preflight.run(req);

	if (hasPreflightPassed.code !== 200){
		res.status(hasPreflightPassed.code).send({
			message: hasPreflightPassed.message
		});
	} else {
		console.log('Preflight passed.');
		res.status(200).send({
			message: 'Import passed.'
		});
	}
	
});

module.exports = router;