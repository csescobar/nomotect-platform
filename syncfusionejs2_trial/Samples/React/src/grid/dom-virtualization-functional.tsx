import * as React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Inject, Sort, Filter, Selection, VirtualScroll, DomVirtualization
} from '@syncfusion/ej2-react-grids';

import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { updateSampleSection } from '../common/sample-base';
import './dom-virtualization.css';

const avatarColors = [
  'avatar-red', 'avatar-blue', 'avatar-green', 'avatar-orange', 'avatar-purple'
];

function getInitials(name: string) {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

function getAvatarClass(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return avatarColors[sum % avatarColors.length];
}

const empAvatarTemplate = (props: any) => {
  return (
    <div className="customer-details">
      <div className={`customer-avatar ${getAvatarClass(props.Employees)}`}>
        {getInitials(props.Employees)}
      </div>

      <div className="customer-info">
        <p className="customer-name">{props.Employees}</p>
        <p className="customer-email">{props.Mail}</p>
      </div>
    </div>
  );
};

const statusTemplate = (props: any) => {
  const active = props.Status === 'Active';

  return (
    <div className={`statustemp ${active ? 'e-activecolor' : 'e-inactivecolor'}`}>
      <span className={`statustxt ${active ? 'e-activecolor' : 'e-inactivecolor'}`}>
        {props.Status}
      </span>
    </div>
  );
};


const data = new DataManager({
  url: "https://services.syncfusion.com/react/production/api/UrlDataSource",
  adaptor: new UrlAdaptor()
});

const query = new Query().addParams('dataCount', '100000');

function DOMVirtualGrid() {
  React.useEffect(() => {
    updateSampleSection();
  }, [])
  return (
    <div className='control-pane'>
      <div className='control-section'>
        <GridComponent
          id="DOMVirtualGrid"
          dataSource={data}
          query={query}
          height={400}
          rowHeight={50}
          enableVirtualization={true}
          enableDomVirtualization={true}
          pageSettings={{ pageSize: 100 }}
          domVirtualizationSettings={{ rowBuffer: 10 }}
          clipMode='EllipsisWithTooltip'
          allowSorting={true}
          allowFiltering={true}
          allowSelection={true}
          filterSettings={{ type: 'CheckBox' }}
        >
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150' isPrimaryKey={true} textAlign='Right'></ColumnDirective>
            <ColumnDirective field='Employees' headerText='Employee Name' width='260' template={empAvatarTemplate}></ColumnDirective>
            <ColumnDirective field='Designation' headerText='Designation' width='170'></ColumnDirective>
            <ColumnDirective field='Status' headerText='Status' width='150' template={statusTemplate}></ColumnDirective>
            <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='160' format='C2' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='Location' headerText='Location' width='160'></ColumnDirective>
            <ColumnDirective field='Address' headerText='Address' width='240'></ColumnDirective>
          </ColumnsDirective>

          <Inject services={[Sort, Filter, Selection, VirtualScroll, DomVirtualization]} />
        </GridComponent>
      </div>
      <div id="action-description">
        <p>This demo showcases the DOM Virtualization feature in the Grid, enabling efficient handling of large datasets. Instead of rendering all records at once, the Grid intelligently displays only the rows visible within the viewport, ensuring smooth scrolling and responsive performance.</p>
      </div>
      <div id='description'>
        <p>
          DOM virtualization is a performance optimization feature that renders only the visible rows within the Grid viewport instead of rendering the entire dataset. This significantly improves performance when working with large volumes of data.
        </p>
        <p>
          With this feature enabled, the Grid calculates the content height and renders only the necessary <code>tr</code> elements required for the visible portion of the Grid. As the user scrolls, previously rendered rows are replaced with newly required rows, ensuring that only a minimal number of DOM elements are maintained at any time. This behavior improves both rendering speed and memory usage, making the Grid highly efficient for large datasets.
        </p>
        <p>
          DOM virtualization can be enabled by setting the <code>enableDomVirtualization</code> property to <code>true</code>. In this demo, the Grid is loaded with "100k" records using both DOM virtualization and row virtualization features. Row virtualization is enabled using the <code>enableVirtualization</code> property.
        </p>
        <p>
          <strong>Injecting Module:</strong>
        </p>
        <p>
          Features of the Grid component are organized into individual, feature-specific modules. To use DOM virtualization, inject the required modules <code>DomVirtualization</code> into the <code>services</code>.
        </p>
        <p>
          More information on DOM virtualization can be found in this
          <a target="_blank" aria-label="API link for documentation"
            href="https://ej2.syncfusion.com/react/documentation/grid/getting-started"> documentation section</a>.
        </p>
        <p>Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our
          <a target="_blank"
            href="https://www.syncfusion.com/react-components/react-data-grid"> React Data Grid component</a> page.</p>
      </div>
    </div>
  );
}
export default DOMVirtualGrid;