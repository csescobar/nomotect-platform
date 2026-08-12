import * as React from 'react';
import { DocumentEditorContainerComponent } from '@syncfusion/ej2-react-documenteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../common/sample-base';
import './default.component.css';
export class CompareDocuments extends SampleBase {
    editorRef1;
    editorRef2;
    serviceUrl = 'https://services.syncfusion.com/react/production/api/documenteditor/';
    constructor(props) {
        super(props);
        this.state = {
            originalFile: null,
            revisedFile: null,
            showResult: true,
            compareClicked: false
        };
    }
    rendereComplete() {
        // Set up synced scrolling between editors
        if (this.editorRef1 && this.editorRef2) {
            this.editorRef1.documentEditor.viewChange = () => {
                const pos = this.editorRef1.documentEditor.selection.getScrollPosition();
                this.editorRef2.documentEditor.selection.setScrollPosition(pos);
            };
            this.editorRef2.documentEditor.viewChange = () => {
                const pos = this.editorRef2.documentEditor.selection.getScrollPosition();
                this.editorRef1.documentEditor.selection.setScrollPosition(pos);
            };
        }
    }
    async openFileInEditor(file, editorRef) {
        const formatType = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
        if (formatType === '.sfdt') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const docData = e.target?.result;
                if (docData && editorRef?.documentEditor) {
                    editorRef.documentEditor.open(docData);
                }
            };
            reader.readAsText(file);
        }
        else if (this.isSupportedFormatType(formatType)) {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const response = await fetch(this.serviceUrl + 'Import', {
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
                if (sfdtObject && editorRef?.documentEditor) {
                    editorRef.documentEditor.open(JSON.stringify(sfdtObject));
                }
                else {
                    alert("SFDT object missing or editor not ready.");
                }
            }
            catch (e) {
                alert('Failed to open document file. Make sure your backend supports the format.');
            }
        }
        else {
            alert('Unsupported file type. Please use .docx, .dotx, .docm, .dotm, .doc, .dot, .rtf, .txt, .xml, .html, or .sfdt files.');
        }
    }
    isSupportedFormatType(formatType) {
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
    async loadComparedDocumentAndOpen(editorRef, originalFile, revisedFile) {
        const formData = new FormData();
        formData.append("original", originalFile);
        formData.append("revised", revisedFile);
        try {
            const response = await fetch(this.serviceUrl + 'CompareDocuments', {
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
            if (sfdtObject && editorRef?.documentEditor) {
                editorRef.documentEditor.open(JSON.stringify(sfdtObject));
            }
            else {
                alert("Compare API did not return SFDT document or editor not ready");
            }
        }
        catch (e) {
            alert('Error comparing documents: ' + e);
        }
    }
    onCompare = async () => {
        this.setState({ compareClicked: false });
        setTimeout(async () => {
            this.setState({ compareClicked: true });
            if (this.state.showResult) {
                if (this.state.originalFile)
                    await this.openFileInEditor(this.state.originalFile, this.editorRef1);
                if (this.state.originalFile && this.state.revisedFile) {
                    await this.loadComparedDocumentAndOpen(this.editorRef2, this.state.originalFile, this.state.revisedFile);
                }
            }
            else {
                if (this.state.originalFile)
                    await this.openFileInEditor(this.state.originalFile, this.editorRef1);
                if (this.state.revisedFile)
                    await this.openFileInEditor(this.state.revisedFile, this.editorRef2);
            }
        }, 0);
    };
    onDownload = () => {
        if (this.editorRef2?.documentEditor) {
            this.editorRef2.documentEditor.save('Result', 'Docx');
        }
    };
    handleOriginalFileChange = (e) => {
        this.setState({
            originalFile: e.target.files ? e.target.files[0] : null,
            compareClicked: false
        });
    };
    handleRevisedFileChange = (e) => {
        this.setState({
            revisedFile: e.target.files ? e.target.files[0] : null,
            compareClicked: false
        });
    };
    handleShowResultChange = (e) => {
        this.setState({ showResult: e.target.checked });
    };
    render() {
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
              <input style={{ marginLeft: 10 }} type="file" accept=".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt" onChange={this.handleOriginalFileChange}/>
            </label>
            <label>
              Revised Document :
              <input style={{ marginLeft: 10 }} type="file" accept=".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt" onChange={this.handleRevisedFileChange}/>
            </label>
          </div>
          {/* Checkbox, Compare button and Download button */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <label style={{ flex: 1 }}>
              <input type="checkbox" checked={this.state.showResult} onChange={this.handleShowResultChange} style={{ marginRight: 8 }}/>
              Show comparison result with tracked changes
            </label>
            <ButtonComponent cssClass="e-primary" style={{
                padding: '8px 30px',
                fontWeight: 600,
                fontSize: '1em',
                borderRadius: 6,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }} disabled={!this.state.originalFile || !this.state.revisedFile} onClick={this.onCompare}>
              Compare Documents
            </ButtonComponent>
            <ButtonComponent cssClass="e-outline e-flat e-primary" style={{
                padding: '8px 30px',
                fontWeight: 600,
                fontSize: '1em',
                borderRadius: 6,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }} onClick={this.onDownload} disabled={!this.state.compareClicked}>
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
            <DocumentEditorContainerComponent id="editor1" ref={(scope) => { this.editorRef1 = scope; }} serviceUrl={this.serviceUrl} height={'100%'} width={'100%'} enableToolbar={false} showPropertiesPane={false}>
            </DocumentEditorContainerComponent>
          </div>
          <div style={{ width: '50%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ fontWeight: 500 }}>
                {this.state.showResult ? 'Result Document with tracked changes' : 'Revised Document'}
              </div>
            </div>
            <DocumentEditorContainerComponent id="editor2" ref={(scope) => { this.editorRef2 = scope; }} serviceUrl={this.serviceUrl} height={'100%'} width={'100%'} enableToolbar={false} showPropertiesPane={false}>
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
          <p style={{ 'display': 'block' }}> More information about the document editor features can be found in this <a target="_blank" href="https://help.syncfusion.com/document-processing/word/word-library/net/word-document/compare-word-documents">documentation section.</a>
          </p>
        </div>
      </div>);
    }
}
export default CompareDocuments;
