/* eslint-disable no-console */
'use-strict';

(function() {
	var projectIdElem = document.getElementById('project'),
		projectId = projectIdElem.value,
		blueprintForm = document.getElementById('blueprintForm');

	// Takes passed content models object and transforms it into select options 
	var fillBlueprintSelector = function (data) {
		var selector = document.getElementById('contentmodel'),
			option = '';
    
		// It there are not any data
		if (data.length === 0) {
			// Set the selector to the disabled state
			selector.innerHTML = '<option value="">Fill in a valid Project ID</option>';
			selector.setAttribute('disabled', 'disabled');
		} else {
			// Fill the selector with content model names and codenames
			selector.innerHTML = '';
			selector.removeAttribute('disabled');

			for (var i = 0; i < data.length; i++) {
				option = '<option value="' + data[i].system.codename + '">' + data[i].system.name + '</option>';
				selector.appendChild(helper.createNodeFromString(option)[0]);         
			}  
		}
 
	};

	// Request the Delivery API to get all content models
	var initBlueprintSelector = function (projectId) {
		var request = new XMLHttpRequest(),
			response;

		// Assemble endpoint url
		request.open('GET', 'https://deliver.kenticocloud.com/' + projectId + '/types', true);
		request.setRequestHeader('Content-Type', 'application/json');

		// When a response is obtained
		request.onload = function() {
			response = request.responseText;

			// If the response is successful
			if (request.status >= 200 && request.status < 400) {
				// Initialize the blueprint selector with data
				fillBlueprintSelector(JSON.parse(response).types);
			}
		};
        
		request.onerror = function() {
			// There was a connection error
			console.error('Connection error');
			helper.addLog('Connection error', false);
		};
        
		// Make the request
		request.send();
	};

	// Request the Blueprint endpoint to get a blueprint of the selected content model
	var generateBlueprint = function (projectId, format, model) {
		var request = new XMLHttpRequest(),
			response,
			mimeType;

		// Assemble endpoint url
		request.open('GET', '/' + projectId + '/blueprint/' + format + '/' + model, true);
		request.setRequestHeader('Content-Type', helper.getMimeType(format));

		// When a response is obtained
		request.onload = function() {
			helper.removeLoading();
			response = request.responseText;

			// If the response is successful
			if (request.status >= 200 && request.status < 400) {
				// Set the response body to the code editor
				if (format === 'json') {
					editorWrapper.setValue(js_beautify(response, {indent_size: 3}));
					helper.addLog('JSON blueprint for the "' + model + '" content model successfully generated.', true);
				} else if (format === 'csv') {
					editorWrapper.setValue(response);
					helper.addLog('CSV header blueprint for the "' + model + '" content model successfully generated.', true);
				}   
			} else {
				// If the response is failed
				//Log errors 
				helper.addLog(helper.encodedStr(JSON.parse(response).message), false);
			}
		};
        
		request.onerror = function() {
			// There was a connection error
			console.error('Connection error');
			helper.addLog('Connection error', false);
		};
        
		// Make the request
		request.send();
	};

	// Get mode set in the code editor as a string to be passed in the blueprint endpoint 
	function getFormat () {
		// editorWrapper is a global variable set in the ./code-editor.js file
		var format = editorWrapper.getOption('mode');

		switch (format) {
		case 'application/json':
			format = 'json';
			break;
		case 'text/csv':
			format = 'csv';
			break;
		}

		return format;
	}

	// On page load

	if (projectId !== '') {
		// Fill content models selector with data
		initBlueprintSelector(projectId); 
	}

	// When Project ID input loses focus
	projectIdElem.addEventListener('blur', function () {
		projectId = projectIdElem.value;

		if (projectId !== '') {
			// Fill content models selector with data
			initBlueprintSelector(projectId); 
		}             
	});

	// On the blueprint form submit
	blueprintForm.addEventListener('submit', function (event) {
		var format = getFormat();
		selector = document.getElementById('contentmodel');
		model = selector.options[selector.selectedIndex].value;

		projectId = projectIdElem.value;
		helper.addLog('=== New blueprint at ' + helper.getNow() + '===');
		helper.addLoading('blueprint');

		if (model !== '' && format !== '' && selector !== null) {
			// Generate blueprint and show it in the code editor
			generateBlueprint(projectId, format, model);
		} else {
			helper.addLog('A content model must be selected to be able to generate a blueprint.' , false);
		}

		event.preventDefault(); 
        
	}, true);

})();