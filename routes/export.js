const express = require('express'),
		router = express.Router();

router.get('/', (req, res, next) => {
	console.log('Export route hit.');
	res.status(200).send('All is good in export.');
});

module.exports = router;
