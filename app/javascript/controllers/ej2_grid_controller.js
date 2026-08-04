import { Controller } from "@hotwired/stimulus";
import { Grid, Page, Sort, Filter, Toolbar, ColumnChooser } from "@syncfusion/ej2-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

// Register EJ2 Grid feature modules (tree-shakeable injection pattern)
Grid.Inject(Page, Sort, Filter, Toolbar, ColumnChooser);

// EJ2 Grid Stimulus Controller
//
// Usage:
//   <div
//     data-controller="ej2-grid"
//     data-ej2-grid-url-value="/grids/organizations.json?adapter=syncfusion"
//     data-ej2-grid-columns-value="<%= columns_json %>"
//     data-ej2-grid-page-size-value="25"
//   ></div>
//
// Attributes:
//   url-value       — JSON endpoint returning EJ2 Custom Data Binding format { result:, count: }
//   columns-value   — Array of EJ2 column definition objects (from SyncfusionAdapter#columns)
//   page-size-value — Number of rows per page (default: 25)
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

    this.grid = new Grid({
      dataSource: new DataManager({
        url:      this.urlValue,
        adaptor:  new UrlAdaptor(),
        headers:  headers
      }),
      allowPaging:    true,
      allowSorting:   true,
      allowFiltering: true,
      showColumnChooser: true,
      filterSettings: { type: "Menu" },
      pageSettings:   { pageSize: this.pageSizeValue },
      toolbar:        ["Search", "ColumnChooser"],
      columns:        this.columnsValue,
      locale:         document.documentElement.lang || "en"
    });

    this.grid.appendTo(this.element);
  }
}
