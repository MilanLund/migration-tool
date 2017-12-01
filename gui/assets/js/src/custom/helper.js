/* eslint-disable no-console */
'use-strict';

// Helper functions for the GUI 

var helper = {
	// Encode special characters to html entities
	encodedStr: function encodedStr (rawStr) {
		return rawStr.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
			return '&#'+i.charCodeAt(0)+';';
		});
	},

	// Get timestamp with current datetime
	getNow: function getNow () {
		var date = new Date();
		return date.toUTCString();
	},

	// Keep scroll position on bottom in logs
	updateScroll: function updateScroll () {
		var element = document.querySelector('.editor__logs');
		element.scrollTop = element.scrollHeight;
	},
    
	// Add loading animation to the code editor 
	addLoading: function addLoading (message) {
		var editor = document.querySelector('#code-editor .editor__main'),
			loading = document.createElement('div');

		if (typeof message !== 'undefined') {
			loading.setAttribute('class', 'editor__loading editor__loading--' + message); 
		} else {
			loading.setAttribute('class', 'editor__loading');
		}

		editor.appendChild(loading);
	},

	// Remove loading animation from the code editor 
	removeLoading: function removeLoading () {
		var loading = document.querySelector('.editor__loading');
		loading.parentNode.removeChild(loading);
	},

	// Add a log message to the log area
	// If isSuccess parameter is set set the log color
	addLog: function addLog (message, isSuccess) {
		var logArea = document.querySelector('.editor__logs'),
			log = document.createElement('div');

		log.setAttribute('class', 'log');

		if (isSuccess && typeof isSuccess !== 'undefined') {
			log.setAttribute('class' ,'log--success');
		} else if (!isSuccess && typeof isSuccess !== 'undefined') {
			log.setAttribute('class' ,'log--error');
		}

		log.innerHTML = message;
		logArea.appendChild(log);
		helper.updateScroll();
	},

	createNodeFromString: function createNodeFromString (nodeString) {        
		var div = document.createElement('div');
		div.innerHTML = nodeString;
		return div.childNodes;
	},

	getMimeType: function getMimeType (format) {
		var mimeType = '';

		switch (format) {
		case 'json':
			mimeType = 'application/json';
			break;
		case 'csv':
			mimeType = 'text/csv';
			break;
		}

		return mimeType;
	} 
};

    