import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, Edit, Page, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { appointmentData } from './data';
import { updateSampleSection } from '../common/sample-base';
import './cell-edit.css';

function CellEdit() {
    React.useEffect(() => {
        updateSampleSection();
    }, [])
  const gridRef = React.useRef<GridComponent>(null);
  const toolbarOptions: any = ['Add', 'Delete', 'Update', 'Cancel'];
  const filterSettings: any = { type: 'CheckBox' };
  const editSettings: any = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Cell'
  };

  const doctorTemplate = (props: any) => {
    const doctorList = [
      'Dr. Smitha', 'Dr. Johnson', 'Dr. Garcia', 'Dr. Brianna',
      'Dr. Williams', 'Dr. Martinez', 'Dr. Davis', 'Dr. Joanna'
    ];
    const index = doctorList.indexOf(props.Doctor) + 1;

    return (
      <div className="doctor-cell">
        <img
          src={`src/grid/images/${index}.png`}
          alt={props.Doctor}
          className="doctor-img"
        />
        <span>{props.Doctor}</span>
      </div>
    );
  };
  const statusTemplate = (props: any) => {
    let cls = 'waiting';
    if (props.Status === 'Booked') cls = 'booked';
    else if (props.Status === 'Canceled') cls = 'canceled';
    else if (props.Status === 'Completed') cls = 'completed';

    return (
      <div>
        <span className={`badge ${cls}`}>{props.Status}</span>
      </div>
    );
  };
  const typeTemplate = (props: any) => {
    let cls = 'consult';

    if (props.Type === 'Emergency') {
      cls = 'emergency';
    } else if (props.Type === 'Lab Test') {
      cls = 'lab';
    } else if (props.Type === 'Follow-up') {
      cls = 'follow';
    } else if (props.Type === 'Routine Check') {
      cls = 'routine';
    }

    return (
      <span className={`type ${cls}`}>
         {props.Type}
      </span>
    );
  };

  function actionBegin(args: any): void {
    if (args.requestType === 'save' && args.action === 'add') {
      args.data.ApptID = 'APT-' + (Date.now() % 100000);
    }
  }

  const onActionComplete = (args: any): void => {
    if (args.requestType === 'save' && args.columnName === 'Doctor') {
      const doctorRoomMap: any = {
        'Dr. Smitha': 'R1',
        'Dr. Johnson': 'R2',
        'Dr. Garcia': 'R6',
        'Dr. Brianna': 'R4',
        'Dr. Williams': 'R3',
        'Dr. Martinez': 'R7',
        'Dr. Davis': 'R8',
        'Dr. Joanna': 'R5',
      };

      gridRef.current?.updateCell(
        args.rowIndex,
        'Room',
        doctorRoomMap[args.data.Doctor]
      );
    }
  };
  const validateAppointmentTime = (args: any) => {
    if (!args.value) return false;
    const hour = new Date(args.value).getHours();
    return hour >= 9 && hour <= 20;
  };

  return (
    <div className='control-pane'>
      <div className='control-section'>
          <GridComponent id="CellEdit" ref={gridRef} dataSource={appointmentData} allowPaging={true} allowSorting={true} allowFiltering={true} filterSettings={filterSettings}
            editSettings={editSettings} toolbar={toolbarOptions} height={400} rowHeight={40} actionComplete={onActionComplete} clipMode="EllipsisWithTooltip" actionBegin={actionBegin}>
            <ColumnsDirective>
              <ColumnDirective field="ApptID" headerText="Appointment ID" isPrimaryKey={true} visible={false} validationRules={{ required: true }}></ColumnDirective>
              <ColumnDirective field="Patient" headerText="Patient" width="150" validationRules={{ required: true }}></ColumnDirective>
              <ColumnDirective field="Doctor" headerText="Doctor" width="160" template={doctorTemplate} editType="dropdownedit"></ColumnDirective>
              <ColumnDirective field="AppointmentTime" headerText="Appointment Time" editType="datetimepickeredit" width="200" format={{ type: 'dateTime', format: 'M/d/y hh:mm a' }}
                validationRules={{ required: true,
                  timeRule: [
                    validateAppointmentTime,
                    'Appointment allowed only between 9AM – 9PM'
                  ]
                }}></ColumnDirective>
              <ColumnDirective field="Type" headerText="Type" width="150" template={typeTemplate} editType="dropdownedit" validationRules={{ required: true }}></ColumnDirective>
              <ColumnDirective field="Status" headerText="Status" width="130" template={statusTemplate} editType="dropdownedit" validationRules={{ required: true }}></ColumnDirective>
              <ColumnDirective field="Room" headerText="Room No" width="120" editType="dropdownedit"></ColumnDirective>
              <ColumnDirective field="Fee" headerText="Fee" textAlign="Right" width="90" format="C2" editType="numericedit"
                edit={{ params: { showSpinButton: false } }} validationRules={{ required: true, min: 50, max: 500}}></ColumnDirective>
              <ColumnDirective field="Notes" headerText="Notes" width="260"></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Toolbar, Edit, Page, Sort, Filter]} />
        </GridComponent>
        <div id="action-description">
          <p>This sample demonstrates cell editing for quick and efficient data updates. It provides a seamless editing experience for modifying individual cell values within the Grid.</p>
        </div>
        <div id="description">
          <p>
            Cell editing allows users to modify a single cell’s value directly. This mode is enabled by setting <code><a target="_blank" className="code"
              href="https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode">editSettings.mode</a></code> to <code>Cell</code>. Users can enter edit mode by double‑clicking a cell and then changing its value. The update is applied when the user presses "Enter" key or moves to another cell.
          </p>
          <p>
            This editing mode works seamlessly with other Grid features such as validation, formatting, and more, ensuring a consistent and efficient editing experience.
          </p>
          <p>
            <strong>Injecting Module:</strong>
          </p>
          <p>
            Features of the Grid component are organized into individual, feature-specific modules. To use the editing and toolbar
           functionality, inject the required modules <code>Edit</code> and <code>Toolbar</code> into the <code>services</code>.
          </p>
          <p>
            More information on edit configuration can be found in the <a target="_blank"
              href="https://ej2.syncfusion.com/react/documentation/grid/editing"> documentation section</a>.
          </p>
          <p>Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our 
            <a target="_blank"
              href="https://www.syncfusion.com/react-components/react-data-grid"> React Data Grid component</a> page.</p>
        </div>
      </div>
    </div>
  );
}

export default CellEdit;