<template>
  <div>
    <div class="row">
      <div class="control-section col-lg-8" style="height: 610px;">
        <!-- Left: PDF Viewer (60%) -->
        <div class="e-pv-visible-sign-pdfviewer-tab-container">
          <div class="e-pdf-toolbar e-pv-visible-sign-toolbar">
            <ejs-toolbar id="customToolbar_visibleSignature">
              <e-items>
                <e-item id="visibleSign_download" prefixIcon="e-icons e-download" tooltipText="Download"
                  cssClass="e-pv-download-document-container" align="Right" :disabled="!downloadvisibility"
                  :click="downloadClicked">
                </e-item>
              </e-items>
            </ejs-toolbar>
          </div>
    
          <div class="e-pv-visible-sign-message">
            <ejs-message id="msg_success" :content="msgSuccess" :visible="successVisible" severity="Success"></ejs-message>
            <ejs-message id="msg_warning" :content="msgWarning" :visible="warningVisible" severity="Warning"></ejs-message>
            <ejs-message id="msg_error" :content="msgError" :visible="errorVisible" severity="Error"></ejs-message>
          </div>
    
          <div class="e-pv-visible-sign-pdfviewer-container">
            <ejs-pdfviewer id="pdfViewer" ref="pdfViewer" :documentPath="documentPath" :enableToolbar="enableToolbar"
              :enableNavigationToolbar="enableNavigationToolbar" :resourceUrl="resourceUrl"
              :enableAnnotationToolbar="enableAnnotationToolbar" :enableTextSelection="enableTextSelection"
              :documentLoad="documentLoad" :zoomMode="zoomMode" style="height:100%; width: 100%;"></ejs-pdfviewer>
          </div>
        </div>
      </div>
      <!-- Right: Options Panel (40%) -->
      <div class="col-lg-4 e-pv-visible-sign-tab-panel">
        <!-- Toggle Buttons for Create New / Existing Field -->
        <div>
          <div class="e-pv-visible-sign-header-title">
            <div class="e-pv-visible-sign-group-title">Signature Field</div>
          </div>
          <div class="e-pv-visible-sign-tab-header">
            <div class="e-pv-visible-sign-tab-header-item" :class="{ active: isCreateNew }"
              @click="switchTab('isCreateNew', 'isExistingField')" style="padding: 0 10px;">
              <span class="e-pv-visible-sign-tab-header-item-text">Create New</span>
            </div>
            <div class="e-pv-visible-sign-tab-header-item" :class="{ active: isExistingField }"
              @click="switchTab('isExistingField', 'isCreateNew')" style="padding: 0 10px;">
              <span class="e-pv-visible-sign-tab-header-item-text">Existing Field</span>
            </div>
          </div>
        </div>
        <div class="e-pv-visible-sign-tab">
          <div class="e-pv-visible-sign-tab-content">
            <!-- Create New Section -->
            <div :hidden="!isCreateNew">
              <!-- Position Group -->
              <div class="e-pv-visible-sign-group">
                <div class="e-pv-visible-sign-group-title">
                  <span>Position</span>
                </div>
                <table class="e-pv-visible-sign-position-table">
                  <tbody>
                    <tr>
                      <td>
                        <div class="e-pv-visible-sign-text-content">
                          <span>X</span>
                          <div class="e-pv-input-item">
                            <ejs-numerictextbox id="xValue" :showSpinButton="false" placeholder="24" format="###.##"
                              :min="0" :value="x" @change="onPropertyChange('x', $event)"></ejs-numerictextbox>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="e-pv-visible-sign-text-content">
                          <span>Y</span>
                          <div class="e-pv-input-item">
                            <ejs-numerictextbox id="yValue" :showSpinButton="false" placeholder="12" format="###.##"
                              :min="0" :value="y" @change="onPropertyChange('y', $event)"></ejs-numerictextbox>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Size Group -->
              <div class="e-pv-visible-sign-group" style="margin-top: 6px;">
                <div class="e-pv-visible-sign-group-title">
                  <span>Size</span>
                </div>
                <table class="e-pv-visible-sign-size-table">
                  <tbody>
                    <tr>
                      <td>
                        <div class="e-pv-visible-sign-text-content">
                          <span>Width</span>
                          <div class="e-pv-input-item">
                            <ejs-numerictextbox id="width" :showSpinButton="true" placeholder="200" format="###.##"
                              :min="0" :value="width"
                              @change="onPropertyChange('width', $event)"></ejs-numerictextbox>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="e-pv-visible-sign-text-content">
                          <span>Height</span>
                          <div class="e-pv-input-item">
                            <ejs-numerictextbox id="height" :showSpinButton="true" placeholder="120" format="###.##"
                              :min="0" :value="height"
                              @change="onPropertyChange('height', $event)"></ejs-numerictextbox>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Existing Field Section -->
            <div :hidden="!isExistingField">
              <div class="e-pv-visible-sign-group">
                <table class="e-pv-visible-sign-inner-table">
                  <tbody>
                    <tr>
                      <td>
                        <div class="e-pv-visible-sign-dropdown-label">
                          <span>Existing Field</span>
                        </div>
                      </td>
                      <td>
                        <div class="e-pv-visible-sign-text-content">
                          <ejs-dropdownlist id="existingSignField" :dataSource="existingFieldSource"
                            :fields="dropDownField" :value="existingField"
                            @change="onPropertyChange('existingField', $event)"></ejs-dropdownlist>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Signature Image Group-->
            <hr />
            <div>
              <div class="e-pv-visible-sign-signature-image-group">
                <div class="e-pv-visible-sign-signature-image-header">
                  <ejs-checkbox label="Signature Image" :checked="signatureImage"
                    @change="onPropertyChange('signatureImage', $event)"></ejs-checkbox>
                </div>
                <div>
                  <div id="e-pv-visible-sign-image-uploader" style="display: none;">
                    <!-- uploader-->
                    <ejs-uploader id="signature-image-uploader" ref="uploader" :asyncSettings="path"
                      :allowedExtensions="'.jpg,.jpeg,.png'" :dropArea="dropElement" :success="onFileSuccess"
                      class="pdfViewer-ejs-uploader" :showFileList="false" :selected="onFileSelect"
                      :multiple="false">
                    </ejs-uploader>
                  </div>
                  <!-- Add Signature Button -->
                  <ejs-button :isPrimary="true" cssClass="e-btn e-outline"
                    style="float: right; text-transform: capitalize;" @click="browseOpen"
                    :style="{ display: !signatureImage ? 'none' : 'block' }">
                    Add Signature
                  </ejs-button>
                </div>
              </div>
              <div class="e-pv-visible-sign-uploaded-images" :class="{hidden: !signatureImage}">
                <div v-for="(imageUrl, index) in imageUrls" :key="index" class="e-pv-visible-sign-image-wrapper"
                  :class="{ selected: selectedImageIndex === index }" @click.stop="setSelectedImage(index)">
                  <ejs-button v-if="index > 0" class="e-pv-visible-sign-image-delete" cssClass="e-round"
                    iconCss="e-icons e-close" @click.stop="handleDeleteImage(index)">
                  </ejs-button>
                  <img :src="imageUrl" :alt="`Signature ${index}`" />
                </div>
              </div>
            </div>
            <!-- Signature Description Group -->
            <hr />
            <div class="e-pv-visible-sign-group">
              <div class="e-pv-visible-sign-group-title" style="margin-bottom: 6px;">
                <span>Signature Description</span>
              </div>
              <table class="e-pv-visible-sign-inner-table">
                <tbody>
                  <tr>
                    <td>
                      <ejs-checkbox :checked="showSigner" label="Show signer"
                        @change="onPropertyChange('showSigner', $event)"></ejs-checkbox>
                    </td>
                    <td>
                      <ejs-textbox class="e-input" type="text" placeholder="Enter signer" :enabled="showSigner"
                        :value="signer" @change="onPropertyChange('signer', $event)"></ejs-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ejs-checkbox :checked="showReason" label="Show reason"
                        @change="onPropertyChange('showReason', $event)"></ejs-checkbox>
                    </td>
                    <td>
                      <ejs-textbox class="e-input" type="text" placeholder="Enter reason" :enabled="showReason"
                        :value="reason" @change="onPropertyChange('reason', $event)"></ejs-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ejs-checkbox :checked="showLocation" label="Show location"
                        @change="onPropertyChange('showLocation', $event)"></ejs-checkbox>
                    </td>
                    <td>
                      <ejs-textbox class="e-input" type="text" placeholder="Enter location" :enabled="showLocation"
                        :value="location" @change="onPropertyChange('location', $event)"></ejs-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ejs-checkbox :checked="showDate" label="Show date"
                        @change="onPropertyChange('showDate', $event)"></ejs-checkbox>
                    </td>
                    <td>
                      <ejs-datepicker :value="date" :format="format" :inputFormats="inputFormats" :allowEdit="false"
                        placeholder="Enter date" :showClearButton="false" :enabled="showDate" :max="maxDate"
                        @change="onPropertyChange('date', $event)">
                      </ejs-datepicker>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Display Mode, Signature Type, Digest Algorithm -->
            <hr />
            <div class="e-pv-visible-sign-group">
              <table class="e-pv-visible-sign-inner-table">
                <tbody>
                  <tr>
                    <td>
                      <div class="e-pv-visible-sign-dropdown-label">
                        <span>Display mode</span>
                      </div>
                    </td>
                    <td>
                      <ejs-dropdownlist id="displayModeField" :dataSource="displayModeSource" :fields="dropDownField"
                        :value="displayMode" @change="onPropertyChange('displayMode', $event)"
                        :enabled="signatureImage"></ejs-dropdownlist>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="e-pv-visible-sign-dropdown-label">
                        <span>Signature Type</span>
                      </div>
                    </td>
                    <td>
                      <ejs-dropdownlist id="signatureTypeField" :dataSource="signatureTypeSource"
                        :fields="dropDownField" :value="signatureType"
                        @change="onPropertyChange('signatureType', $event)"></ejs-dropdownlist>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="e-pv-visible-sign-dropdown-label">
                        <span>Digest Algorithm</span>
                      </div>
                    </td>
                    <td>
                      <ejs-dropdownlist id="digestAlgorithmField" :dataSource="digestAlgorithmSource"
                        :fields="dropDownField" :value="digestAlgorithm"
                        @change="onPropertyChange('digestAlgorithm', $event)"></ejs-dropdownlist>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="e-pv-visible-sign-tab-content-footer">
          <!-- Sign Document Button -->
          <ejs-button :isPrimary="true" cssClass="e-btn e-primary" style="float: right; width: 160px"
            :disabled="!buttonVisibility" @click="signDocument">
            Sign Document
          </ejs-button>
        </div>
      </div>
    </div>
  
    <div id="action-description">
      <p>
        This sample demonstrates how to add visible digital signatures with customizable appearance options, including a
        signature image, signer details, and digital signature settings.
      </p>
    </div>
  
    <div id="description">
      <p>
        In this demo, users can either create a new signature or sign an existing form field. Once all required inputs are
        provided, clicking the "Sign Document" button programmatically applies a certified visual digital signature and
        refreshes the viewer to display the signed document.
      </p>
  
      <br />
  
      <p>After signing, the following message is displayed to indicate a successful and valid signature:</p>
  
      <br />
  
      <p>
        “The document has been digitally signed and all the signatures are valid.”<br />This message confirms that the
        document has been signed without any issues and that all digital signatures are valid.
      </p>

      <br/>
      
      <p>
        More information on the PDF Viewer instantiation can be found on this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
          documentation section</a>.
      </p>
    </div>
  </div>
</template>

<style>
.e-pv-visible-sign-pdfviewer-tab-container .e-pv-visible-sign-toolbar,
.e-pv-visible-sign-pdfviewer-tab-container .e-pv-visible-sign-message {
  flex-shrink: 0;
}

.e-pv-visible-sign-tab-panel {
  display: flex;
  flex-direction: column;
  border-left: 1px solid #D7D7D7;
  padding: 0 !important;
  height: 620px;
  overflow-x: hidden;
}

.container-fluid {
  padding-bottom: 15px;
}

.e-pv-visible-sign-tab {
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px 12px 16px;
}

.e-view.e-bigger .e-pv-visible-sign-tab {
  padding: 12px 16px 16px;
}

.e-pv-visible-sign-tab hr {
  border-color: #D7D7D7;
  margin-top: 16px;
  margin-bottom: 16px;
}

.control-wrapper {
  height: 100%;
}

.e-pv-visible-sign-tab-content {
  flex-grow: 1;
}

.e-pv-visible-sign-header-title {
  padding: 12px;
}

.e-pv-visible-sign-group-title,
.e-pv-visible-sign-dropdown-label {
  font-size: 14px;
  font-weight: 600;
}

.e-view.e-bigger .e-pv-visible-sign-text-content,
.e-view.e-bigger .e-pv-visible-sign-tab-header-item-text,
.e-view.e-bigger .e-pv-visible-sign-group-title,
.e-view.e-bigger .e-pv-visible-sign-dropdown-label {
  font-size: 16px;
}

.e-view.e-bigger .e-pv-visible-sign-group-title,
.e-view.e-bigger .e-pv-visible-sign-dropdown-label {
  font-weight: 600;
}

.e-pv-visible-sign-inner-table,
.e-pv-visible-sign-description-table,
.e-pv-visible-sign-position-table,
.e-pv-visible-sign-size-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.e-pv-visible-sign-position-table,
.e-pv-visible-sign-size-table {
  table-layout: auto;
}

.e-pv-visible-sign-inner-table td,
.e-pv-visible-sign-position-table td,
.e-pv-visible-sign-size-table td {
  text-wrap: nowrap;
  padding: 6px;
}

.e-pv-visible-sign-inner-table td:first-child,
.e-pv-visible-sign-position-table td:first-child,
.e-pv-visible-sign-size-table td:first-child {
  padding-left: 0;
}

.e-pv-visible-sign-inner-table td:last-child,
.e-pv-visible-sign-position-table td:last-child,
.e-pv-visible-sign-size-table td:last-child {
  padding-right: 0;
}

.e-pv-visible-sign-inner-table td:first-child {
  width: 40%;
}

.e-pv-visible-sign-inner-table td:last-child {
  width: 60%;
}

.e-pv-visible-sign-signature-image-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
}

.e-pv-visible-sign-text-content {
  font-size: 14px;
}

.e-pv-input-item {
  margin-top: 4px;
}

.e-pv-visible-sign-signature-image-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.e-pv-visible-sign-uploaded-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.e-pv-visible-sign-image-wrapper.selected {
  border-color: #0078d4;
}

.e-pv-visible-sign-image-wrapper .e-pv-visible-sign-image-delete {
  position: absolute;
  top: -10px;
  right: -10px;
}

.tailwind3-dark .e-pv-visible-sign-image-delete,
.tailwind3-dark .e-pv-visible-sign-image-delete:hover {
  color: #000;
}

.e-pv-visible-sign-image-wrapper {
  position: relative;
  border: 2px solid;
  border-color: lightgray;
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-color: white;
}

.e-pv-visible-sign-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.e-pv-visible-sign-text-content {
  font-size: 14px;
}

.e-pv-visible-sign-tab-content-footer {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  padding-right: 12px;
  padding-top: 12px;
  margin-bottom: 12px;
  bottom: -1px;
  z-index: 1;
  flex-shrink: 0;
  background-color: rgba(var(--color-sf-background));
  border-top: 1px solid #D7D7D7;
}

.e-pv-visible-sign-description-table td {
  text-wrap: nowrap;
  padding: 8px;
}

.e-pv-visible-sign-tab-header-item-text {
  height: 48px;
  display: inline-flex;
  align-items: center;
}

.e-pv-visible-sign-tab-header {
  display: flex;
  border-bottom: 1px solid #D7D7D7;
  background: rgba(var(--color-sf-background));
  position: sticky;
  top: 0;
  z-index: 1;
}

.material3 .e-pv-visible-sign-tab-header,
.material3-dark .e-pv-visible-sign-tab-header {
  background: rgba(var(--color-sf-background));
  border-bottom: 1px solid rgba(var(--color-sf-outline));
}

.e-pv-visible-sign-tab-header-item {
  position: relative;
  padding: 0 15px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  color: var(--color-sf-content-text-color-alt3);
}

.material3 .e-pv-visible-sign-tab-header-item,
.material3-dark .e-pv-visible-sign-tab-header-item {
  color: rgba(var(--color-sf-on-surface-variant));
}

.e-pv-visible-sign-tab-header-item:hover {
  color: rgba(var(--color-sf-content-text-color-hover));
}

.material3 .e-pv-visible-sign-tab-header-item:hover {
  color: rgba(var(--color-sf-black));
}

.material3-dark .e-pv-visible-sign-tab-header-item:hover {
  color: rgba(var(--color-sf-white));
}

.fluent2-highcontrast .e-pv-visible-sign-tab-header-item:hover {
  color: rgba(var(--color-sf-white));
}

.e-pv-visible-sign-tab-header-item.active {
  font-weight: 600;
  color: rgba(var(--color-sf-primary));
  border-bottom: 3px solid rgba(var(--color-sf-primary));
}

.bootstrap5_3-dark .e-pv-visible-sign-tab-header-item.active,
.bootstrap5_3 .e-pv-visible-sign-tab-header-item.active {
  color: #0d6efd;
}

.e-pv-visible-sign-tab-header-item.active::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--color-sf-primary);
}

.bootstrap5_3-dark .e-pv-visible-sign-tab-header-item.active::after,
.bootstrap5_3 .e-pv-visible-sign-tab-header-item.active::after {
  bottom: -1px;
  background-color: #0d6efd;
}

.material3 .e-pv-visible-sign-tab-header-item.active::after, 
.material3-dark .e-pv-visible-sign-tab-header-item.active::after {
  background-color: rgba(var(--color-sf-primary));
}

.material3 .e-pv-visible-sign-tab-header-item.active,
.material3-dark .e-pv-visible-sign-tab-header-item.active {
  border-bottom: 3px solid rgba(var(--color-sf-primary));
  color: rgba(var(--color-sf-primary));
}

.e-pv-visible-sign-tab-header-item.active:hover {
  color: rgba(var(--color-sf-primary));
}

.bootstrap5_3-dark .e-pv-visible-sign-tab-header-item.active:hover,
.bootstrap5_3 .e-pv-visible-sign-tab-header-item.active:hover {
  color: #0d6efd;
}

.material3 .e-pv-visible-sign-tab-header-item.active:hover,
.material3-dark .e-pv-visible-sign-tab-header-item.active:hover {
  color: rgba(var(--color-sf-primary));
}

.e-checkbox-wrapper .e-label {
  font-size: 14px;
}

.e-view.e-bigger .e-checkbox-wrapper .e-label {
  font-size: 16px;
}

.e-pv-visible-sign-pdfviewer-container,
.e-pv-visible-sign-pdfviewer-tab-container {
  flex-shrink: 1;
  flex-grow: 1;
}

.e-pv-visible-sign-tab-panel .e-tab .e-tab-header {
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: rgba(var(--color-sf-background));
  font-weight: 500;
}

.bootstrap5\.3 .e-pv-visible-sign-tab-header-item.active,
.bootstrap5 .e-pv-visible-sign-tab-header-item.active,
.bootstrap5-dark .e-pv-visible-sign-tab-header-item.active,
.bootstrap5\.3-dark .e-pv-visible-sign-tab-header-item.active {
  color: var(--color-sf-primary);
  border-bottom: 3px solid var(--color-sf-primary);
}

.bootstrap5\.3 .e-pv-visible-sign-tab-header,
.bootstrap5 .e-pv-visible-sign-tab-header,
.bootstrap5-dark .e-pv-visible-sign-tab-header,
.bootstrap5\.3 .e-pv-visible-sign-tab-content-footer,
.bootstrap5 .e-pv-visible-sign-tab-content-footer,
.bootstrap5-dark .e-pv-visible-sign-tab-content-footer {
  background-color: var(--color-sf-content-bg-color);
}

.bootstrap5\.3-dark .e-pv-visible-sign-tab-header,
.bootstrap5\.3-dark .e-pv-visible-sign-tab-content-footer {
  background-color: var(--color-sf-content-bg-color);
}

.fluent2 .e-pv-visible-sign-tab-header-item.active,
.fluent2-dark .e-pv-visible-sign-tab-header-item.active {
  color: var(--color-sf-primary);
  border-bottom: 3px solid var(--color-sf-primary);
}

.tailwind3 .e-pv-visible-sign-tab-header-item.active,
.tailwind3-dark .e-pv-visible-sign-tab-header-item.active,
.fluent2-highcontrast .e-pv-visible-sign-tab-header-item.active {
  color: var(--color-sf-primary);
  border-bottom: 3px solid var(--color-sf-primary);
}

.tailwind3 .e-pv-visible-sign-tab-header,
.tailwind3-dark .e-pv-visible-sign-tab-header,
.tailwind3 .e-pv-visible-sign-tab-content-footer,
.tailwind3-dark .e-pv-visible-sign-tab-content-footer {
  background-color: var(--color-sf-content-bg-color);
}

.e-pv-visible-sign-pdfviewer-tab-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { NumericTextBoxComponent, TextBoxComponent, UploaderComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent, ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { MessageComponent } from "@syncfusion/ej2-vue-notifications";

var viewer;
var documentData;
var fileName;
var proxy;
var uploader;
var defaultSignImage = "data:image/png;base64,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";

export default {
  components: {
    'ejs-toolbar': ToolbarComponent,
    'e-item': ItemDirective,
    'e-items': ItemsDirective,
    'ejs-message': MessageComponent,
    'ejs-pdfviewer': PdfViewerComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-button': ButtonComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-datepicker': DatePickerComponent,
    'ejs-uploader': UploaderComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/visible-digital-signature.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib',
      enableToolbar: false,
      enableNavigationToolbar: false,
      enableAnnotationToolbar: false,
      enableTextSelection: false,
      zoomMode: 'FitToPage',
      isCreateNew: true,
      isExistingField: false,
      dropDownField: { text: "Text", value: "ID" },
      existingFieldSource: [{ ID: "Signature Field 1", Text: "Signature Field 1" }],
      signatureImage: true,
      showSigner: true,
      showReason: true,
      showLocation: true,
      showDate: true,
      displayModeSource: [{ ID: "Image only", Text: "Image only" }, { ID: "With signer details", Text: "With signer details" }, { ID: "Signer details only", Text: "Signer details only" }],
      signatureTypeSource: [{ ID: "CAdES", Text: "CAdES" }, { ID: "CMS", Text: "CMS" }],
      digestAlgorithmSource: [{ ID: "SHA1", Text: "SHA1" }, { ID: "SHA256", Text: "SHA256" }, { ID: "SHA384", Text: "SHA384" }, { ID: "SHA512", Text: "SHA512" }, { ID: "RIPEMD160", Text: "RIPEMD160" }],
      buttonVisibility: true,
      downloadvisibility: false,
      x: 24,
      y: 12,
      width: 200,
      height: 120,
      existingField: "Signature Field 1",
      signer: "James Carter",
      reason: "I am the Author",
      location: "Austin",
      date: this.formatDate(new Date()),
      displayMode: "With signer details",
      signatureType: "CAdES",
      digestAlgorithm: "SHA256",
      format: 'MM-dd-yy',
      inputFormats: ['dd-MM-yy', 'MM-dd-yy'],
      selectedImageIndex: 0,
      imageUrls: [defaultSignImage],
      url: "https://ej2services.syncfusion.com/vue/development/api/pdfviewer/AddVisibleSignature",
      msgWarning: "The document has been digitally signed and at least one signature has problem ",
      msgError: "The document has been digitally signed, but it has been modified since it was signed and at least one signature is invalid .",
      msgSuccess: "The document has been digitally signed and all the signatures are valid",
      successVisible: false,
      errorVisible: false,
      warningVisible: false,
      path: {
        saveUrl: 'https://ej2services.syncfusion.com/vue/development/api/FileUploader/Save',
        removeUrl: 'https://ej2services.syncfusion.com/vue/development/api/FileUploader/Remove'
      },
      dropElement: document.getElementsByClassName('e-pv-visible-sign-tab-panel')[0],
      maxDate: this.formatDate(new Date())
    }
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    switchTab: function (property1, property2) {
      this[property1] = true;
      this[property2] = false;
    },
    formatDate: function (inputDate) {
      const month = String(inputDate.getMonth() + 1).padStart(2, '0');
      const day = String(inputDate.getDate()).padStart(2, '0');
      const year = String(inputDate.getFullYear()).slice(-2);
      return `${month}-${day}-${year}`;
    },
    onPropertyChange: function (property, args) {
      if (property === 'showSigner' || property === 'showReason' || property === 'showLocation' || property === 'showDate') {
        this[property] = args.checked;
        args.event.target.parentElement.
          querySelector('.e-label').classList.toggle('e-disabled');
      }
      else if (property === 'signatureImage') {
        this.signatureImage = args.checked;
        this.displayMode = args.checked ? "With signer details" : "Signer details only";
      }
      else if (property === 'date') {
        this.date = this.formatDate(args.value);
      }
      else {
        this[property] = args.value;
      }
    },
    handleDeleteImage: function (index) {
      this.imageUrls.splice(index, 1);
      if (this.selectedImageIndex >= index) {
        this.selectedImageIndex = this.imageUrls.length - 1;
      }
    },
    getRequestBody: function (pdfData) {
      const jsonObject = {
        pdfdata: pdfData,
        imagedata: this.imageUrls[this.selectedImageIndex],
        signatureType: this.signatureType.toUpperCase(),
        displayMode: this.displayMode.toUpperCase(),
        digestAlgorithm: this.digestAlgorithm.toUpperCase()
      };
      if (this.showSigner) {
        jsonObject['signerName'] = this.signer;
      }
      if (this.showReason) {
        jsonObject['reason'] = this.reason;
      }
      if (this.showLocation) {
        jsonObject['location'] = this.location;
      }
      if (this.showDate) {
        jsonObject['date'] = this.date;
      }
      if (this.isCreateNew) {
        jsonObject['isSignatureField'] = false;
        jsonObject['signatureBounds'] = JSON.stringify({
          x: this.x,
          y: this.y,
          height: this.height,
          width: this.width
        });
      } else {
        jsonObject['isSignatureField'] = true;
      }
      return jsonObject;
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfViewer.ej2Instances;
      uploader = this.$refs.uploader.ej2Instances;
      fileName = args.documentName;
      proxy = this;
      const postData = {
        documentData: documentData
      };
      let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      };
      const apiUrl = 'https://ej2services.syncfusion.com/vue/development/api/pdfviewer/ValidateSignature';
      fetch(apiUrl, options)
        .then(response => response.json())
        .then(body => {
          if (body.successVisible || body.warningVisible || body.errorVisible)
            proxy.buttonVisibility = false;
          if (!body.downloadVisibility)
            proxy.downloadvisibility = true;
          if ((body.successVisible)) {
            setTimeout(() => {
              proxy.msgSuccess = body.message;
              proxy.successVisible = true;
            }, 1000);
            setTimeout(() => {
              proxy.successVisible = false;
            }, 5000);
          }
          if ((body.warningVisible)) {
            proxy.msgWarning = body.message;
            proxy.warningVisible = true;
          }
          if (body.errorVisible) {
            proxy.msgError = body.message;
            proxy.errorVisible = true;
          }
        });
    },
    signDocument: function (e) {
      viewer.saveAsBlob().then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = (e) => {
          const pdfData = e.target ? e.target.result : ' ';
          const xhr = new XMLHttpRequest();
          const jsonObject = proxy.getRequestBody(pdfData);
          const requestData = JSON.stringify(jsonObject);
          viewer.downloadFileName = fileName;
          xhr.open('POST', proxy.url, true);
          xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
          xhr.onload = () => {
            if (xhr.status === 200) {
              documentData = xhr.responseText;
              viewer.load(xhr.responseText, null);
              proxy.downloadvisibility = false;
              viewer.fileName = proxy.fileName;
              proxy.buttonVisibility = false;
            }
          };
          xhr.onerror = () => {
            console.error('Error in server', xhr.statusText);
          };
          xhr.send(requestData);
        };
        reader.onerror = () => {
          console.error('Error reading blob as base 64', reader.error);
        };
      }).catch((error) => {
        console.error('Error converting Blob:', error);
      });
    },
    downloadClicked: function (args) {
      viewer.download();
    },
    onFileSelect: function (args) {
      uploader.upload(args.filesData);
      args.cancel = true;
    },
    onFileSuccess: async function (args) {
      const fileData = args.file.rawFile;
      if (fileData instanceof Blob) {
        const base64String = await this.blobToBase64(fileData);
        this.imageUrls.push(base64String);
        this.selectedImageIndex = this.imageUrls.length - 1;
      } else {
        console.error('Unexpected file data type:', typeof fileData);
      }
    },
    blobToBase64: function (blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    },
    browseOpen: function () {
      const fileInput = document.querySelector('#e-pv-visible-sign-image-uploader .e-file-select-wrap button');
      if (fileInput) {
        fileInput.click();
      }
    },
    setSelectedImage: function (index) {
      this.selectedImageIndex = index;
    }
  }
}
</script>
