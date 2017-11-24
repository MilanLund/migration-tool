(function() {
    var codeEditor = {
        init: function (id, mode) {
            //Get textarea that should host the code editor
            var textArea = document.getElementById(id);
            
            //Init the code editor
            var myCodeMirror = CodeMirror.fromTextArea(textArea, {
                lineNumbers: true,
                lineWrapping: true,
                mode: mode,
                theme: 'material'
            });
            
            //Set the code editor to an empty state
            myCodeMirror.refresh();
            myCodeMirror.setValue('');
            
            return myCodeMirror;
        }
    };

    console.log('sad');
    codeEditor.init('import-data', 'application/json');
})();

