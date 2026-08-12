<template>
  <div class="control-section">
    <div id="spreadsheet-default-section">
      <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :created="created">
        <e-sheets>
          <e-sheet name="Car Sales Report">
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
            <e-rows>
              <e-row :index="rowIndex" :cells="cells"></e-row>
            </e-rows>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width3"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
    <div id="action-description">
      <p>
        This sample demonstrates the <code>Spreadsheet</code> component and its features such as editing, formulas,
        formatting, importing, and exporting.
      </p>
    </div>
    <div id="description">
      <p>
        The <code>Spreadsheet</code> component is used to organize and analyze data in tabular format.
        It has a built-in calculation library that supports most commonly used formulas. Excel workbook files can be
        imported and exported by providing <code>openUrl</code> &
        <code>saveUrl</code> property.
      </p>
      <p>
        <strong>Note:</strong> The <code>openUrl</code> and <code>saveUrl</code> endpoints used in these demo samples are
        provided solely for demonstration purposes. The associated web service may experience memory limitations when
        handling large Excel files, which could result in import or export failures. For better performance and reliability
        especially when working with large files, we recommend hosting your own local service. For detailed guidance, please
        refer to our <a target="_blank" href="https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services">
        Blog</a> post.
      </p>
      <p>
        Data binding can be achieved by setting an array of JavaScript objects or an instance of Data Manager to the
        <code>dataSource</code> property under the range of sheet. The <code>cellFormat</code> and
        <code>numberFormat</code> methods are used to apply format to a <code>ranges</code> of cells in the <code>created</code> event.
      </p>
      <p>
        More information about the Spreadsheet component can be found in this
        <a target="_blank" href="https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/getting-started">
            documentation</a> section.
      </p>
    </div>
    <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-default-section {
        height: 550px;
    }

    .e-spreadsheet .e-main-panel .e-main-content {
        margin-left: 0 !important;
    }

    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }

    .ej2-new .sb-header,
    .ej2-new .sb-bread-crumb,
    .ej2-new #action-description,
    .ej2-new #description-section,
    .ej2-new #description {
        display: none
    }

    .ej2-new .container-fluid,
    .ej2-new .container-fluid .control-section,
    #sidebar-section {
        padding: 0px;
    }

    .ej2-new .sample-browser>.content.e-view {
        top: 0px;
        padding: 0px;
        text-align: initial;
        height: 100%;
        overflow: hidden;
    }

    .ej2-new .control-section .control-section {
        height: 100vh;
    }
</style>
<!-- custom code end -->
<script>
import { SpreadsheetComponent, SheetDirective, RowsDirective, RowDirective, SheetsDirective, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-spreadsheet';
import dataSource from "./default-data.json";

export default {
    components: {
    'ejs-spreadsheet': SpreadsheetComponent,
    'e-sheet': SheetDirective,
    'e-sheets': SheetsDirective,
    'e-row': RowDirective,
    'e-rows': RowsDirective,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'e-range': RangeDirective,
    'e-ranges': RangesDirective
   },  
   data: () => {
    return {
      dataSource: dataSource.defaultData,
      rowIndex: 30,
      colIndex: 4,
      cells: [
        { index: 4, value: 'Total Amount:', style: { fontWeight: 'bold', textAlign: 'right' } },
        { formula: '=SUM(F2:F30)', style: { fontWeight: 'bold' } },
      ],
      width1: 180,
      width2: 130,
      width3: 120,
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    }
  },
  methods: {
    created: function() {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
      // Apply format to the specified range in the active sheet.
      spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
      spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
    }
  }
}
</script>