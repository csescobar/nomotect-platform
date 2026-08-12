import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { DocumentEditorContainerComponent } from '@syncfusion/ej2-react-documenteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './default.component.css';
import { updateSampleSection } from '../common/sample-base';
const CompareDocumentsFunctional = () => {
    const editorRef1 = useRef(null);
    const editorRef2 = useRef(null);
    const [originalFile, setOriginalFile] = useState(null);
    const [revisedFile, setRevisedFile] = useState(null);
    const [showResult, setShowResult] = useState(true);
    const [compareClicked, setCompareClicked] = useState(false);
    let serviceUrl = 'https://services.syncfusion.com/react/production/api/documenteditor/';
    useEffect(() => {
        updateSampleSection();
        // Set up synced scrolling between editors
        const editor1 = editorRef1.current?.documentEditor;
        const editor2 = editorRef2.current?.documentEditor;
        if (editor1 && editor2) {
            editor1.viewChange = () => {
                const pos = editor1.selection.getScrollPosition();
                editor2.selection.setScrollPosition(pos);
            };
            editor2.viewChange = () => {
                const pos = editor2.selection.getScrollPosition();
                editor1.selection.setScrollPosition(pos);
            };
        }
    }, []);
    const isSupportedFormatType = (formatType) => {
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
    };
    const openFileInEditor = async (file, editorRef) => {
        // Using slice instead of substr (which is deprecated)
        const formatType = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
        if (formatType === '.sfdt') {
            const reader = new FileReader();
            reader.onload = e => {
                const docData = e.target?.result;
                if (docData && editorRef.current?.documentEditor) {
                    editorRef.current.documentEditor.open(docData);
                }
            };
            reader.readAsText(file);
        }
        else if (isSupportedFormatType(formatType)) {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const response = await fetch(serviceUrl + 'Import', {
                    method: 'POST',
                    body: formData
                });
                const sfdtString = await response.text();
                let sfdtObject = null;
                try {
                    sfdtObject = JSON.parse(sfdtString);
                }
                catch (e) {
                    alert("Failed to parse SFDT JSON string from backend.");
                }
                if (sfdtObject && editorRef.current?.documentEditor) {
                    editorRef.current.documentEditor.open(JSON.stringify(sfdtObject));
                }
                else {
                    alert("SFDT object missing or editor not ready.");
                }
            }
            catch (e) {
                alert('Failed to import document file. Please check if the server supports this format.');
            }
        }
        else {
            alert('Unsupported file type. Please use .docx, .dotx, .docm, .dotm, .doc, .dot, .rtf, .txt, .xml, .html, or .sfdt files.');
        }
    };
    async function loadComparedDocumentAndOpen(editorRef2, originalFile, revisedFile) {
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
            let sfdtObject = null;
            try {
                sfdtObject = JSON.parse(sfdtString);
            }
            catch {
                alert("Compare API did not return valid JSON.");
                return;
            }
            if (sfdtObject && editorRef2.current?.documentEditor) {
                editorRef2.current.documentEditor.open(JSON.stringify(sfdtObject));
            }
            else {
                alert("Compare API did not return SFDT document or editor2 not ready");
            }
        }
        catch (e) {
            alert('Error comparing documents: ' + e);
        }
    }
    const onCompare = async () => {
        setCompareClicked(false);
        setTimeout(async () => {
            setCompareClicked(true);
            if (showResult) {
                if (originalFile)
                    await openFileInEditor(originalFile, editorRef1);
                if (originalFile && revisedFile) {
                    await loadComparedDocumentAndOpen(editorRef2, originalFile, revisedFile);
                }
            }
            else {
                if (originalFile)
                    await openFileInEditor(originalFile, editorRef1);
                if (revisedFile)
                    await openFileInEditor(revisedFile, editorRef2);
            }
        }, 0);
    };
    const onDownload = () => {
        if (editorRef2.current?.documentEditor) {
            editorRef2.current.documentEditor.save('Result', 'Docx');
        }
    };
    return (<div className="control-section">
      <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 900,
            gap: 12,
            padding: 18,
            margin: '20px auto 24px auto',
            border: '1.5px solid #d4dbf9',
            background: '#f6f9fe',
            borderRadius: 10,
            boxShadow: '0 2px 8px rgba(80,120,220,0.06)'
        }}>
        {/* File upload buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 60 }}>
          <label>
            Original Document :
            <input style={{ marginLeft: 10 }} type="file" accept=".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt" onChange={e => setOriginalFile(e.target.files ? e.target.files[0] : null)}/>
          </label>
          <label>
            Revised Document :
            <input style={{ marginLeft: 10 }} type="file" accept=".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt" onChange={e => setRevisedFile(e.target.files ? e.target.files[0] : null)}/>
          </label>
        </div>
        {/* Checkbox, Compare button and Download button */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          <label style={{ flex: 1 }}>
            <input type="checkbox" checked={showResult} onChange={e => setShowResult(e.target.checked)} style={{ marginRight: 8 }}/>
            Show comparison result with tracked changes
          </label>
          <ButtonComponent cssClass="e-primary" style={{
            padding: '8px 30px',
            fontWeight: 600,
            fontSize: '1em',
            borderRadius: 6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }} disabled={!originalFile || !revisedFile} onClick={onCompare}>
            Compare Documents
          </ButtonComponent>
          <ButtonComponent cssClass="e-outline e-flat e-primary" style={{
            padding: '8px 30px',
            fontWeight: 600,
            fontSize: '1em',
            borderRadius: 6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }} onClick={onDownload} disabled={!compareClicked}>
            Download Result
          </ButtonComponent>
        </div>
      </div>
      {/* Editors Area */}
      <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            width: '100%',
            height: '600px',
            overflow: 'hidden',
            padding: '10px'
        }}>
        <div style={{ width: '50%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Original Document</div>
          <DocumentEditorContainerComponent id="editor1" ref={editorRef1} serviceUrl={serviceUrl} height={'100%'} width={'100%'} enableToolbar={false} showPropertiesPane={false}>
          </DocumentEditorContainerComponent>
        </div>
        <div style={{ width: '50%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <div style={{ fontWeight: 500 }}>
              {showResult ? 'Result Document with tracked changes' : 'Revised Document'}
            </div>
          </div>
          <DocumentEditorContainerComponent id="editor2" ref={editorRef2} serviceUrl={serviceUrl} height={'100%'} width={'100%'} enableToolbar={false} showPropertiesPane={false}>
          </DocumentEditorContainerComponent>
        </div>
      </div>

      {/* Description section */}
      <div id="action-description">
        <p>The Document Editor component supports comparing two documents with the help of sycnfusion DocIO and displays the differences between them.</p>
      </div>
      <div id="description">
        <p>In this example, you can:</p>
        <ul>
          <li>Upload original and revised documents (.docx or .sfdt formats)</li>
          <li>Compare the documents to see the differences</li>
          <li>View the differences with or without tracked changes</li>
          <li>Download the compared result document</li>
        </ul>
        <p style={{ 'display': 'block' }}> More information about the document editor features can be found in this <a target="_blank" href="https://help.syncfusion.com/document-processing/word/word-library/net/word-document/compare-word-documents/">documentation section.</a>
        </p>
      </div>
    </div>);
};
export default CompareDocumentsFunctional;
