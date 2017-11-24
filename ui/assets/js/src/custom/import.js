(function () {

    var form = document.getElementById('importForm'),
        projectId,
        cmKey,
        importData;

    var encodedStr = function (rawStr) {
        return rawStr.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
            return '&#'+i.charCodeAt(0)+';';
        });
    };

    var getNow = function () {
        var date = new Date();
        return date.toUTCString();
    };

    var updateScroll = function () {
        var element = document.querySelector('.editor__logs');
        element.scrollTop = element.scrollHeight;
    }
    
    var addLoading = function () {
        var editor = document.querySelector('#code-editor .editor__main'),
            loading = document.createElement('div');

            loading.setAttribute('class', 'editor__loading');

        editor.appendChild(loading);
    };

    var removeLoading = function () {
        var loading = document.querySelector('.editor__loading');
        loading.parentNode.removeChild(loading);
    };

    var addLog = function (message, isSuccess) {
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
    };

    var makeRequest = function (projectId, cmKey, importData) {
        var request = new XMLHttpRequest(),
            response;
        request.open('POST', '/' + projectId, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Authorization', 'Bearer ' + cmKey);
        request.onload = function() {
            removeLoading();
            response = request.responseText;

            if (request.status >= 200 && request.status < 400) {
                // Success!
                editorWrapper.setValue(js_beautify(response, {indent_size: 4}));
                addLog('Import successful. See information about imported items in the code editor above.', true);
            } else {
                // We reached our target server, but it returned an error   
                addLog(encodedStr(JSON.parse(response).message), false);

                if (typeof response.validationErrors !== 'undefined') {
                    for(var i = 0; i < response.validationErrors.length; i++) {
                        addLog(encodedStr(response.validationErrors[i].message), false);
                    }
                }
            }

            updateScroll();
        };
        
        request.onerror = function() {
            // There was a connection error of some sort
            console.log('error');
        };
        
        request.send(importData);
    };

    var saveToLocalStorage = function (projectId, cmKey, importData) {
        localStorage.setItem('projectId', projectId);  
        localStorage.setItem('cmKey', cmKey); 
        localStorage.setItem('importData', importData); 
    };

    var getFromLocalStorage = function () {
        var projectId = localStorage.getItem('projectId'),
            cmKey = localStorage.getItem('cmKey'),
            importData = localStorage.getItem('importData');

        if (projectId !== null && cmKey !== null && importData !== null) {
            document.getElementById('project').value = projectId;
            document.getElementById('cmkey').value = cmKey;
            editorWrapper.setValue(js_beautify(importData, {indent_size: 4}));
        }
    };  

    var sumbitForm = function (event) {
        projectId = document.getElementById('project').value;
        cmKey = document.getElementById('cmkey').value;
        importData = editorWrapper.getValue();

        saveToLocalStorage(projectId, cmKey, importData);

        addLoading();
        addLog('=== New data import at ' + getNow() + '===');
        makeRequest(projectId, cmKey, importData); 

        event.preventDefault();     
    };

    getFromLocalStorage();
    form.addEventListener('submit', sumbitForm, true);
})();