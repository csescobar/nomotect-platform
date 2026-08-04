import { Controller } from "@hotwired/stimulus";
import { Grid, Page, Sort, Filter, Toolbar, ColumnChooser } from "@syncfusion/ej2-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

// Register EJ2 Grid feature modules
Grid.Inject(Page, Sort, Filter, Toolbar, ColumnChooser);

// EJ2 Grid Stimulus Controller
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
  // Private
  // ---------------------------------------------------------------------------

  #initGrid() {
    const csrfToken = document.querySelector("meta[name='csrf-token']")?.content;
    const headers = csrfToken ? [{ "X-CSRF-Token": csrfToken }] : [];

    // Map column definitions to use a clean, standard TextBox filter UI for string fields
    const columns = this.columnsValue.map(col => {
      if (col.type === "string") {
        return {
          ...col,
          filter: {
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
          }
        };
      }
      return col;
    });

    this.grid = new Grid({
      dataSource: new DataManager({
        url:      this.urlValue,
        adaptor:  new UrlAdaptor(),
        headers:  headers
      }),
      allowPaging:       true,
      allowSorting:      true,
      allowFiltering:    true,
      showColumnChooser: true,
      width:             "100%",
      filterSettings:    { type: "Menu" },
      pageSettings:      { pageSize: this.pageSizeValue },
      toolbar:           ["Search", "ColumnChooser"],
      columns:           columns,
      locale:            document.documentElement.lang || "en"
    });

    this.grid.appendTo(this.element);
  }
}
