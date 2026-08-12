/* jshint esversion: 8, browser: true */
this.default = function () {
    var serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var editor1, editor2;
    var originalFile = null, revisedFile = null;
    // Syncfusion EJ2 Button Initialization (ES5 style):
    var compareButtonEJ = new ej.buttons.Button({ isPrimary: true, disabled: true }, '#compareButton');
    var downloadButtonEJ = new ej.buttons.Button({ cssClass: 'e-outline e-primary', disabled: true }, '#downloadButton');

    var originalFileInput = document.getElementById('originalFileInput');
    var revisedFileInput = document.getElementById('revisedFileInput');
    var showTrackedChanges = document.getElementById('showTrackedChanges');
    var compareButton = document.getElementById('compareButton');
    var downloadButton = document.getElementById('downloadButton');
    var editor2Label = document.getElementById('editor2Label');

    editor1 = new ej.documenteditor.DocumentEditorContainer({
        serviceUrl: serviceUrl,
        enableToolbar: false,
        showPropertiesPane: false
    });
    editor1.appendTo('#documentEditor1');
    editor2 = new ej.documenteditor.DocumentEditorContainer({
        serviceUrl: serviceUrl,
        enableToolbar: false,
        showPropertiesPane: false
    });
    editor2.appendTo('#documentEditor2');
    wireDocumentEditorScrollSync();

    function updateButtonStates() {
        compareButtonEJ.disabled = !(originalFile != null && revisedFile != null);
        downloadButtonEJ.disabled = compareButtonEJ.disabled;
    }

    function wireDocumentEditorScrollSync() {
        if (editor1 && editor1.documentEditor && editor2 && editor2.documentEditor) {
            editor1.documentEditor.viewChange = function () {
                var pos = editor1.documentEditor.selection.getScrollPosition();
                editor2.documentEditor.selection.setScrollPosition(pos);
            };
            editor2.documentEditor.viewChange = function () {
                var pos = editor2.documentEditor.selection.getScrollPosition();
                editor1.documentEditor.selection.setScrollPosition(pos);
            };
        }
    }

    originalFileInput.addEventListener('change', function (e) {
        originalFile = e.target.files[0] || null;
        updateButtonStates();
    });
    revisedFileInput.addEventListener('change', function (e) {
        revisedFile = e.target.files[0] || null;
        updateButtonStates();
    });

    showTrackedChanges.addEventListener('change', function (e) {
        editor2Label.textContent = e.target.checked ? 'Result Document (with tracked changes)' : 'Revised Document';
        downloadButtonEJ.disabled = !e.target.checked;
    });

    compareButton.addEventListener('click', function () {
        onCompare(originalFile, revisedFile, showTrackedChanges.checked);
    });
    downloadButton.addEventListener('click', onDownload);

    function onCompare(originalFile, revisedFile, showResult) {
        downloadButtonEJ.disabled = true;

        setTimeout(async function () {
            try {
                if (showResult) {
                    if (originalFile) await openFileInEditor(originalFile, editor1);
                    if (originalFile && revisedFile) {
                        await loadComparedDocumentAndOpen(originalFile, revisedFile);
                        downloadButtonEJ.disabled = false;
                    }
                } else {
                    if (originalFile) await openFileInEditor(originalFile, editor1);
                    if (revisedFile) {
                        await openFileInEditor(revisedFile, editor2);
                        downloadButtonEJ.disabled = false;
                    }
                }
            } catch (error) {
                alert('Failed to complete comparison: ' + error.message);
            }
        }, 0);
    }

    function onDownload() {
        if (editor2 && editor2.documentEditor)
            editor2.documentEditor.save('Result', 'Docx');
    }

    function isSupportedFormatType(formatType) {
        return ['.docx', '.dotx', '.docm', '.dotm', '.doc', '.dot', '.rtf', '.txt', '.xml', '.html'].includes(formatType);
    }

    function openFileInEditor(file, editor) {
        return new Promise(function (resolve, reject) {
            var formatType = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
            if (formatType === '.sfdt') {
                var reader = new FileReader();
                reader.onload = function (e) {
                    if (editor && editor.documentEditor) {
                        editor.documentEditor.open(e.target.result);
                        resolve();
                    } else reject(new Error('Editor not ready'));
                };
                reader.onerror = reject;
                reader.readAsText(file);
            }
            else if (isSupportedFormatType(formatType)) {
                var formData = new FormData();
                formData.append('file', file);
                fetch(serviceUrl + 'Import', {
                    method: 'POST',
                    body: formData
                })
                    .then(r => r.ok ? r.text() : Promise.reject('Failed import'))
                    .then(sfdtString => {
                        if (editor && editor.documentEditor)
                            editor.documentEditor.open(sfdtString);
                        resolve();
                    })
                    .catch(reject);
            }
            else {
                alert('Unsupported file type.');
                reject(new Error('Unsupported file type'));
            }
        });
    }

    function loadComparedDocumentAndOpen(originalFile, revisedFile) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            formData.append("Files", originalFile, originalFile.name);
            formData.append("Files", revisedFile, revisedFile.name);
            fetch(serviceUrl + 'CompareDocuments', {
                method: 'POST',
                body: formData
            })
                .then(r => r.ok ? r.text() : Promise.reject('Compare failed'))
                .then(sfdtString => {
                    if (editor2 && editor2.documentEditor)
                        editor2.documentEditor.open(sfdtString);
                    resolve();
                })
                .catch(reject);
        });

    }

};