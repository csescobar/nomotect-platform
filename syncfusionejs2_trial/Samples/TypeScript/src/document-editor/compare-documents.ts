import { loadCultureFiles } from '../common/culture-loader';
import { DocumentEditorContainer, Toolbar, DocumentEditor } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';

/**
 * Document Comparison sample
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let serviceUrl: string = 'https://ej2services.syncfusion.com/js/development/api/documenteditor/';
    // Load necessary modules
    DocumentEditorContainer.Inject(Toolbar);
    
    // Document editor container references
    let editorContainer1: DocumentEditorContainer;
    let editorContainer2: DocumentEditorContainer;

    // Track files and state
    let originalFile: File | null = null;
    let revisedFile: File | null = null;
    let showResult: boolean = true;
    let compareClicked: boolean = false;

    // Initialize the UI components after the DOM is fully loaded
    createDocumentEditors();
    attachEventListeners();

    function createDocumentEditors(): void {
        // Create the first document editor
        editorContainer1 = new DocumentEditorContainer({
            serviceUrl: serviceUrl,
            enableToolbar: false,
            showPropertiesPane: false,
            height: '100%',
            width: '100%'
        });
        editorContainer1.appendTo('#container1');

        // Create the second document editor
        editorContainer2 = new DocumentEditorContainer({
            serviceUrl: serviceUrl,
            enableToolbar: false,
            showPropertiesPane: false,
            height: '100%',
            width: '100%'
        });
        editorContainer2.appendTo('#container2');

        // Sync scroll between editors
        editorContainer1.documentEditor.viewChange = () => {
            const pos = editorContainer1.documentEditor.selection.getScrollPosition();
            editorContainer2.documentEditor.selection.setScrollPosition(pos);
        };

        editorContainer2.documentEditor.viewChange = () => {
            const pos = editorContainer2.documentEditor.selection.getScrollPosition();
            editorContainer1.documentEditor.selection.setScrollPosition(pos);
        };
    }

    function attachEventListeners(): void {
        // Get file input elements
        const originalFileInput = document.getElementById('originalFileInput') as HTMLInputElement;
        const revisedFileInput = document.getElementById('revisedFileInput') as HTMLInputElement;
        const showResultCheckbox = document.getElementById('showResultCheckbox') as HTMLInputElement;
        
        // Add event listeners for file inputs
        originalFileInput.addEventListener('change', (e: Event) => {
            const input = e.target as HTMLInputElement;
            originalFile = input.files ? input.files[0] : null;
            compareClicked = false;
            updateButtonStates();
        });
        
        revisedFileInput.addEventListener('change', (e: Event) => {
            const input = e.target as HTMLInputElement;
            revisedFile = input.files ? input.files[0] : null;
            compareClicked = false;
            updateButtonStates();
        });
        
        // Show result checkbox listener
        showResultCheckbox.addEventListener('change', (e: Event) => {
            const input = e.target as HTMLInputElement;
            showResult = input.checked;
            updateRightEditorTitle();
        });

        // Compare button
        const compareButton = new Button({
            cssClass: 'e-primary',
            disabled: true
        });
        compareButton.appendTo('#compareButton');

        // Download button
        const downloadButton = new Button({
            cssClass: 'e-outline e-flat e-primary',
            disabled: true
        });
        downloadButton.appendTo('#downloadButton');

        // Compare button click handler
        document.getElementById('compareButton')?.addEventListener('click', async () => {
            if (!originalFile || !revisedFile) return;

            compareClicked = true;
            downloadButton.disabled = false;

            if (showResult) {
                await openFileInEditor(originalFile, editorContainer1.documentEditor);
                await loadComparedDocumentAndOpen(editorContainer2.documentEditor, originalFile, revisedFile);
            } else {
                await openFileInEditor(originalFile, editorContainer1.documentEditor);
                await openFileInEditor(revisedFile, editorContainer2.documentEditor);
            }

            updateRightEditorTitle();
        });

        // Download button click handler
        document.getElementById('downloadButton')?.addEventListener('click', () => {
            if (editorContainer2.documentEditor) {
                editorContainer2.documentEditor.save('Result', 'Docx');
            }
        });
    }

    function updateButtonStates(): void {
        const compareButtonObj = (document.getElementById('compareButton') as any).ej2_instances[0];
        if (compareButtonObj) {
            compareButtonObj.disabled = !(originalFile && revisedFile);
        }

        const downloadButtonObj = (document.getElementById('downloadButton') as any).ej2_instances[0];
        if (downloadButtonObj) {
            downloadButtonObj.disabled = !compareClicked;
        }
    }

    function isSupportedFormatType(formatType: string): boolean {
        switch (formatType) {
            case '.docx':
            case '.dotx':
            case '.docm':
            case '.dotm':
            case '.doc':
            case '.dot':
            case '.rtf':
            case '.txt':
            case '.xml':
            case '.html':
                return true;
            default:
                return false;
        }
    }

    async function openFileInEditor(file: File, editor: DocumentEditor): Promise<void> {
        const formatType = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
        if (formatType === '.sfdt') {
            const content = await readFileAsText(file);
            editor.open(content);
        }
        else if (isSupportedFormatType(formatType)) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                const response = await fetch(serviceUrl + 'Import', {
                    method: 'POST',
                    body: formData
                });

                const sfdtString = await response.text();
                let sfdtObject: any = null;
                try {
                    sfdtObject = JSON.parse(sfdtString);
                } catch (e) {
                    alert("Failed to parse SFDT JSON string from backend.");
                }
                if (sfdtObject) {
                    editor.open(JSON.stringify(sfdtObject));
                } else {
                    alert("SFDT object missing or editor not ready.");
                }
            } catch (e) {
                alert('Failed to import document. Make sure the backend supports this file format.');
            }
        } else {
            alert('Unsupported file type. Please use .docx, .dotx, .docm, .dotm, .doc, .dot, .rtf, .txt, .xml, .html, or .sfdt files.');
        }
    }

    async function loadComparedDocumentAndOpen(editor: DocumentEditor, originalFile: File, revisedFile: File): Promise<void> {
        const formData = new FormData();
        formData.append("original", originalFile);
        formData.append("revised", revisedFile);

        try {
            const response = await fetch(serviceUrl + 'CompareDocuments', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                alert('Failed to fetch compared document.');
                return;
            }

            const sfdtString = await response.text();
            try {
                const sfdtObject = JSON.parse(sfdtString);
                editor.open(sfdtObject);
            } catch (e) {
                alert("Compare API did not return valid JSON.");
            }
        } catch (e) {
            alert('Error during document comparison.');
        }
    }

    function readFileAsText(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = event => {
                resolve(event.target?.result as string);
            };
            reader.onerror = error => reject(error);
            reader.readAsText(file);
        });
    }

    function updateRightEditorTitle(): void {
        const titleElement = document.getElementById('rightEditorTitle');
        if (titleElement) {
            titleElement.textContent = showResult ?
                'Result Document with tracked changes' :
                'Revised Document';
        }
    }
};