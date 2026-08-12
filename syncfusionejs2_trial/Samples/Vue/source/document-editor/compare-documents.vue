<template>
<div class="control-section">
  <div
    style="
      display: flex;
      flex-direction: column;
      width: 900px;
      gap: 12px;
      padding: 18px;
      margin: 20px auto 24px auto;
      border: 1.5px solid #d4dbf9;
      background: #f6f9fe;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(80, 120, 220, 0.06);
    "
  >
    <!-- File upload buttons -->
    <div style="display: flex; flex-direction: row; gap: 60px">
      <label>
        Original Document :
        <input
          style="margin-left: 10px"
          type="file"
          accept=".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt"
          @change="onOriginalFileChange"
        />
      </label>
      <label>
        Revised Document :
        <input
          style="margin-left: 10px"
          type="file"
          accept=".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt"
          @change="onRevisedFileChange"
        />
      </label>
    </div>
    
    <div style="display: flex; flex-direction: row; align-items: center; gap: 20px">
      <label style="flex: 1">
        <input
          type="checkbox"
          v-model="showResult"
          style="margin-right: 8px"
        />
        Show comparison result with tracked changes
      </label>
      <ejs-button
        cssClass="e-primary"
        style="
          padding: 8px 30px;
          font-weight: 600;
          font-size: 1em;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        "
        :disabled="!originalFile || !revisedFile"
        @click="onCompare"
      >
        Compare Documents
      </ejs-button>
      <ejs-button
        cssClass="e-outline e-flat e-primary"
        style="
          padding: 8px 30px;
          font-weight: 600;
          font-size: 1em;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        "
        @click="onDownload"
        :disabled="!compareClicked"
      >
        Download Result
      </ejs-button>
    </div>
  </div>
  
  <div
    style="
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;
      height: 600px;
      overflow: hidden;
      padding: 10px;
    "
  >
    <div style="width: 50%; min-width: 0; height: 100%; display: flex; flex-direction: column">
      <div style="font-weight: 500; margin-bottom: 4px">Original Document</div>
      <ejs-documenteditorcontainer
        id="editor1"
        ref="editor1"
        :serviceUrl="serviceUrl"
        height="100%"
        width="100%"
        :enableToolbar="false"
        :showPropertiesPane="false"
      >
      </ejs-documenteditorcontainer>
    </div>
    <div style="width: 50%; min-width: 0; height: 100%; display: flex; flex-direction: column">
      <div style="display: flex; align-items: center; margin-bottom: 4px">
        <div style="font-weight: 500">
          {{ showResult ? 'Result Document with tracked changes' : 'Revised Document' }}
        </div>
      </div>
      <ejs-documenteditorcontainer
        id="editor2"
        ref="editor2"
        :serviceUrl="serviceUrl"
        height="100%"
        width="100%"
        :enableToolbar="false"
        :showPropertiesPane="false"
      >
      </ejs-documenteditorcontainer>
    </div>
  </div>

  <div id="action-description">
    <p>The Document Editor component supports comparing two documents with the help of Syncfusion DocIO and displays the differences between them.</p>
  </div>
  <div id="description">
    <p>In this example, you can:</p>
    <ul>
      <li>Upload original and revised documents (.docx or .sfdt formats)</li>
      <li>Compare the documents to see the differences</li>
      <li>View the differences with or without tracked changes</li>
      <li>Download the compared result document</li>
    </ul>
    <p style="display: block">More information about the document editor features can be found in this <a target="_blank" href="https://help.syncfusion.com/document-processing/word/word-library/net/word-document/compare-word-documents/">documentation section.</a>
    </p>
  </div>
</div>
</template>

<script>
import { DocumentEditorContainerComponent } from "@syncfusion/ej2-vue-documenteditor";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
components: {
  'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
  'ejs-button': ButtonComponent
},
data() {
  return {
    originalFile: null,
    revisedFile: null,
    showResult: true,
    compareClicked: false,
    serviceUrl: 'https://services.syncfusion.com/angular/production/api/documenteditor/'
  };
},
mounted() {
  this.$nextTick(() => {
    // Set up synced scrolling between editors
    const editor1 = this.$refs.editor1.ej2Instances.documentEditor;
    const editor2 = this.$refs.editor2.ej2Instances.documentEditor;
    
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
  });
},
methods: {
  onOriginalFileChange(e) {
    this.originalFile = e.target.files ? e.target.files[0] : null;
  },
  
  onRevisedFileChange(e) {
    this.revisedFile = e.target.files ? e.target.files[0] : null;
  },
  
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
  },
  
  async openFileInEditor(file, editorRef) {
    // Using slice instead of substr (which is deprecated)
    const formatType = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    
    if (formatType === '.sfdt') {
      const reader = new FileReader();
      reader.onload = e => {
        const docData = e.target?.result;
        if (docData && editorRef.ej2Instances.documentEditor) {
          editorRef.ej2Instances.documentEditor.open(docData);
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
        } catch (e) {
          alert("Failed to parse SFDT JSON string from backend.");
        }
        
        if (sfdtObject && editorRef.ej2Instances.documentEditor) {
          editorRef.ej2Instances.documentEditor.open(JSON.stringify(sfdtObject));
        } else {
          alert("SFDT object missing or editor not ready.");
        }
      } catch (e) {
        alert('Failed to import document file. Please check if the server supports this format.');
      }
    }
    else {
      alert('Unsupported file type. Please use .docx, .dotx, .docm, .dotm, .doc, .dot, .rtf, .txt, .xml, .html, or .sfdt files.');
    }
  },
  
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
      } catch {
        alert("Compare API did not return valid JSON.");
        return;
      }
      
      if (sfdtObject && editorRef.ej2Instances.documentEditor) {
        editorRef.ej2Instances.documentEditor.open(JSON.stringify(sfdtObject));
      } else {
        alert("Compare API did not return SFDT document or editor2 not ready");
      }
    } catch (e) {
      alert('Error comparing documents: ' + e);
    }
  },
  
  async onCompare() {
    this.compareClicked = false;
    
    setTimeout(async () => {
      this.compareClicked = true;
      
      if (this.showResult) {
        if (this.originalFile) await this.openFileInEditor(this.originalFile, this.$refs.editor1);
        if (this.originalFile && this.revisedFile) {
          await this.loadComparedDocumentAndOpen(this.$refs.editor2, this.originalFile, this.revisedFile);
        }
      } else {
        if (this.originalFile) await this.openFileInEditor(this.originalFile, this.$refs.editor1);
        if (this.revisedFile) await this.openFileInEditor(this.revisedFile, this.$refs.editor2);
      }
    }, 0);
  },
  
  onDownload() {
    if (this.$refs.editor2.ej2Instances.documentEditor) {
      this.$refs.editor2.ej2Instances.documentEditor.save('Result', 'Docx');
    }
  }
}
};
</script>

<style>
/* Any additional styles can be added here if needed */
</style>