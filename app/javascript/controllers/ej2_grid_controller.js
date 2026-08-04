import { Controller } from "@hotwired/stimulus";
import { Grid, Page, Sort, Filter, Toolbar, ColumnChooser, ExcelExport } from "@syncfusion/ej2-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

// Register EJ2 Grid feature modules including Excel/CSV Export
Grid.Inject(Page, Sort, Filter, Toolbar, ColumnChooser, ExcelExport);

// EJ2 Grid Stimulus Controller — Phase 4B Enterprise UX
export default class extends Controller {
  static values = {
    url:      String,
    columns:  Array,
    pageSize: { type: Number, default: 25 }
  };

  connect() {
    this.#initGrid();
  }

  disconnect() {
    this.grid?.destroy();
    this.grid = null;
  }

  // ---------------------------------------------------------------------------
  // Public Actions — Saved Views Modal
  // ---------------------------------------------------------------------------

  openSaveViewModal() {
    const dialog = document.getElementById("save-view-dialog");
    if (!dialog) return;

    const currentColumns = (this.grid ? this.grid.getColumns() : [])
      .filter(c => c.visible !== false)
      .map(c => c.field);

    const filterSettings = this.grid?.filterSettings?.columns || [];
    const sortSettings = this.grid?.sortSettings?.columns || [];

    const queryData = {
      sorts: sortSettings.map(s => ({ column: s.field, direction: s.direction?.toLowerCase() })),
      filters: filterSettings.map(f => ({ column: f.field, operator: f.operator, value: f.value }))
    };

    const preferencesData = {
      columns: currentColumns
    };

    const queryInput = document.getElementById("save-view-query-json");
    const prefInput = document.getElementById("save-view-preferences-json");

    if (queryInput) queryInput.value = JSON.stringify(queryData);
    if (prefInput) prefInput.value = JSON.stringify(preferencesData);

    if (dialog.showModal) {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "true");
    }
  }

  closeSaveViewModal() {
    const dialog = document.getElementById("save-view-dialog");
    if (!dialog) return;

    if (dialog.close) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  // ---------------------------------------------------------------------------
  // Private
  // ---------------------------------------------------------------------------

  #initGrid() {
    const csrfToken = document.querySelector("meta[name='csrf-token']")?.content;
    const headers = csrfToken ? [{ "X-CSRF-Token": csrfToken }] : [];

    // Map column definitions with native TextBox filter UI and semantic badges
    const columns = this.columnsValue.map(col => {
      const colDef = { ...col };

      if (col.type === "string") {
        colDef.filter = {
          ui: {
            create: (args) => {
              const fltrInput = document.createElement("input");
              fltrInput.className = "e-input";
              fltrInput.type = "text";
              fltrInput.placeholder = "Enter text...";
              args.target.appendChild(fltrInput);
              return fltrInput;
            },
            write: (args) => {
              const elem = args.element || (args.target ? args.target.querySelector("input") : null);
              if (elem) {
                elem.value = args.filteredValue || "";
              }
            },
            read: (args) => {
              const elem = args.element || (args.target ? args.target.querySelector("input") : null);
              const val = elem ? elem.value : "";
              args.fltrObj.filterByColumn(args.column.field, args.operator, val);
            }
          }
        };
      }
      return colDef;
    });

    const toolbarItems = [];
    if (document.getElementById("grid-saved-views-bar")) {
      toolbarItems.push({ template: "#grid-saved-views-bar" });
    }
    toolbarItems.push("ColumnChooser", "CsvExport", "ExcelExport");

    this.grid = new Grid({
      dataSource: new DataManager({
        url:      this.urlValue,
        adaptor:  new UrlAdaptor(),
        headers:  headers
      }),
      allowPaging:       true,
      allowSorting:      true,
      allowFiltering:    true,
      allowExcelExport:  true,
      showColumnChooser: true,
      width:             "100%",
      filterSettings:    { type: "Menu" },
      pageSettings:      { pageSize: this.pageSizeValue },
      toolbar:           toolbarItems,
      columns:           columns,
      locale:            document.documentElement.lang || "en",

      toolbarClick: (args) => {
        const itemId = (args.item?.id || "").toLowerCase();
        if (itemId.includes("csvexport")) {
          this.grid.csvExport();
        } else if (itemId.includes("excelexport")) {
          this.grid.excelExport();
        }
      },

      queryCellInfo: (args) => {
        const fieldName = (args.column?.field || "").toLowerCase();
        const val = String(args.data[args.column.field] || "");

        if (fieldName.includes("status") || fieldName.includes("state") || fieldName.includes("priority")) {
          const badge = document.createElement("span");
          const isRisk = val.toLowerCase().includes("risk") || val.toLowerCase().includes("cancel") || val.toLowerCase().includes("error");
          badge.className = isRisk ? "badge badge--danger" : "badge badge--active";
          badge.textContent = val;
          args.cell.innerHTML = "";
          args.cell.appendChild(badge);
        }
      }
    });

    this.grid.appendTo(this.element);
  }
}
