/* eslint-disable no-console */
'use-strict';

var editorWrapper,
	editorMarkers = [];

(function() {
	var codeEditor = {
		init: function (id, mode) {
			//Get textarea that should host the code editor
			var textArea = document.getElementById(id);
            
			//Init the code editor
			CodeMirror.keyMap.default['Shift-Tab'] = 'indentLess';

			var myCodeMirror = CodeMirror.fromTextArea(textArea, {
				lineNumbers: true,
				lineWrapping: false,
				mode: mode,
				theme: 'material',
				indentUnit: 3,
				tabSize: 3

			});
            
			//Set the code editor to an empty state
			myCodeMirror.refresh();
			myCodeMirror.setValue('');
            
			return myCodeMirror;
		}
	};

	var format = localStorage.getItem('format'),
		importData = localStorage.getItem('importData');

	// Set code format according to format stored in local storage
	if (format !== null) {
		document.querySelector('[data-format="' + format + '"]').classList.add('switch__link--active');
	} else {
		document.querySelector('[data-format="application/json"]').classList.add('switch__link--active');
	}

	// Get active code switch value
	var activeSwitch = document.querySelector('.switch .switch__link.switch__link--active').getAttribute('data-format');

	// Init code editor with a proper code format 
	editorWrapper = codeEditor.init('import-data', activeSwitch);

	// Set code from local storage
	if (importData !== null) {
		if (format === 'application/json') {
			editorWrapper.setValue(js_beautify(importData, {indent_size: 3}));
		} else if (format === 'text/csv') {
			editorWrapper.setValue(importData);
		}   
	} 

	// Get code switches options 
	var codeSwitches = document.querySelectorAll('.switch .switch__link');

	// Make switches change their visual look as well as mode of the code editor 
	for (i = 0; i < codeSwitches.length; i++) {
		(function (i) {
			codeSwitches[i].addEventListener('click', function (event) {
				event.preventDefault();
    
				document.querySelectorAll('.switch .switch__link').forEach(function (el) {
					el.classList.remove('switch__link--active');
				});
				codeSwitches[i].classList.add('switch__link--active');
				editorWrapper.setOption('mode', codeSwitches[i].getAttribute('data-format'));
			});
		})(i);
	}   
})();

