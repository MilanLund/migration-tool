/* eslint-disable no-console */
'use-strict';

(function () {
	var form = document.getElementById('importForm'),
		socket = io(),
		projectId,
		cmKey,
		importData;

	// Make a request to the import endpoint and get a response
	var makeRequest = function (projectId, cmKey, importData) {
		var request = new XMLHttpRequest(),
			response,
			format = document.querySelector('.switch__link--active').getAttribute('data-format');

		request.open('POST', '/' + projectId, true);
		request.setRequestHeader('Content-Type', format);
		request.setRequestHeader('Authorization', 'Bearer ' + cmKey);

		// When a response is obtained
		request.onload = function() {
			helper.removeLoading();
			response = request.responseText;

			// If the response is successful
			if (request.status >= 200 && request.status < 400) {
				//Set code editor to use JSON
				document.querySelectorAll('.switch .switch__link').forEach(function (el) {
					el.classList.remove('switch__link--active');
				});
				document.querySelector('[data-format="application/json"]').classList.add('switch__link--active');
				editorWrapper.setOption('mode', 'application/json');

				// Set the response body to the code editor
				editorWrapper.setValue(js_beautify(response, {indent_size: 4}));
				helper.addLog('Import successful. See information about imported items in the code editor above.', true);
			} else {
				// If the response is failed
				//Log errors 
				helper.addLog(helper.encodedStr(JSON.parse(response).message), false);

				var errors = JSON.parse(response).validation_errors,
					itemIndex = JSON.parse(response).itemIndex;

				if (typeof errors !== 'undefined') {
					for (var i = 0; i < errors.length; i++) {
						helper.addLog(helper.encodedStr(errors[i].message), false);
					}
				}
			}
		};
        
		request.onerror = function() {
			// There was a connection error
			console.error('Connection error');
			helper.addLog('Connection error', false);
		};
        
		// Make the request
		request.send(importData);
	};

	// Save Project ID, Content Management Key, Format and Import Data to local storage
	var saveToLocalStorage = function (projectId, cmKey, importData, format) {
		localStorage.setItem('projectId', projectId);  
		localStorage.setItem('cmKey', cmKey); 
		localStorage.setItem('importData', importData);
		localStorage.setItem('format', format);
	};

	// Get Project ID, Content Management Key and Import Data from local storage
	var getFromLocalStorage = function () {
		var projectId = localStorage.getItem('projectId'),
			cmKey = localStorage.getItem('cmKey');

		if (projectId !== null && cmKey !== null) {
			document.getElementById('project').value = projectId;
			document.getElementById('cmkey').value = cmKey;
		}
	};  

	// Function that fires when import starts
	var sumbitForm = function (event) {
		projectId = document.getElementById('project').value;
		cmKey = document.getElementById('cmkey').value;
		importData = editorWrapper.getValue(),
		format = document.querySelector('.switch__link--active').getAttribute('data-format');

		// Markers is a global variable defined in the ./code-editor.js file
		editorMarkers.forEach(function (marker) {
			marker.clear();
		});

		saveToLocalStorage(projectId, cmKey, importData, format);

		helper.addLoading();
		helper.addLog('=== New data import at ' + helper.getNow() + '===');
		makeRequest(projectId, cmKey, importData); 

		event.preventDefault();     
	};

	// On page load

	// Get data from previous sessions
	getFromLocalStorage();

	// Attach event listener to the import form
	form.addEventListener('submit', sumbitForm, true);

	// Listen to Socket.io messages
	// Used for logging
	socket.on('message', function(message) {
		helper.addLog(message);
	});
})();