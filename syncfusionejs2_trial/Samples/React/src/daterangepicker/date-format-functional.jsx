import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { updateSampleSection } from '../common/sample-base';
import './format-style.css';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent, MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';
const startValue = new Date(new Date().setDate(1));
const endValue = new Date(new Date().setDate(20));
const Format = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const dateRangePickerRef = useRef(null);
    const dataTypes = [
        { value: 'dd-MMM-yy' },
        { value: 'yyyy-MM-dd' },
        { value: 'dd-MMMM' },
        { value: 'dd/MMM/yy hh:mm a' },
    ];
    const inputFormatData = [
        { text: 'dd/MM/yyyy', value: 'dd/MM/yyyy' },
        { text: 'ddMMMyy', value: 'ddMMMyy' },
        { text: 'yyyyMMdd', value: 'yyyyMMdd' },
        { text: 'dd.MM.yy', value: 'dd.MM.yy' },
        { text: 'MM/dd/yyyy', value: 'MM/dd/yyyy' },
        { text: 'yyyy/MMM/dd', value: 'yyyy/MMM/dd' },
        { text: 'dd-MM-yyyy', value: 'dd-MM-yyyy' },
    ];
    const fields = { value: 'value' };
    const checkFields = { text: 'text', value: 'value' };
    const waterMark = 'Format';
    const floatLabelType = 'Auto';
    const index = 3;
    const [format, setFormat] = useState('dd/MMM/yy hh:mm a');
    const [inputFormats, setInputFormats] = useState(['dd/MM/yyyy', 'yyyyMMdd']);
    const [separator, setSeparator] = useState('-');
    /*Apply selected format to the component*/
    const onChange = (args) => {
        const selectedFormat = args.value;
        setFormat(selectedFormat);
        setSeparator(args.value.toString() === 'yyyy/MM/dd HH:mm' ? 'to' : '-');
    };
    const onChangeInputFormat = (args) => {
        const selectedValues = args.value || [];
        setInputFormats(selectedValues);
        // Directly update the DateRangePicker instance
        if (dateRangePickerRef.current) {
            dateRangePickerRef.current.inputFormats = selectedValues;
        }
    };
    // Use effect to update inputFormats when state changes
    useEffect(() => {
        if (dateRangePickerRef.current) {
            dateRangePickerRef.current.inputFormats = inputFormats;
        }
    }, [inputFormats]);
    return (<div className='control-pane'>
            <div className='control-section row'>
                <div className='col-lg-7'>
                    <div className='daterangepicker-control-section format'>
                        <DateRangePickerComponent ref={dateRangePickerRef} format={format} separator={separator} startDate={startValue} endDate={endValue} inputFormats={inputFormats}/>
                    </div>
                </div>
                <div id="format" className='col-lg-4 property-section'>
                    <div className="property-panel-header">Properties</div>
                    <div>
                        <label className='example-label'>Choose a display format</label>
                        <DropDownListComponent id="dateFormats" dataSource={dataTypes} fields={fields} index={index} placeholder={waterMark} change={onChange}/>
                    </div>
                </div>
                <div id="format" className='col-lg-4 property-section'>
                    <div>
                        <label className="example-label" style={{ marginTop: '40px' }}>Choose input formats</label>
                        <MultiSelectComponent id="inputFormatsDatePicker" dataSource={inputFormatData} allowFiltering={false} fields={checkFields} placeholder="e.g. MM/dd/yyyy" value={inputFormats} mode="CheckBox" showSelectAll={true} showDropDownIcon={true} enableSelectionOrder={false} change={onChangeInputFormat}>
                            <Inject services={[CheckBoxSelection]}/>
                        </MultiSelectComponent>
                    </div>
                </div>
            </div>
            <div id="action-description">
                <p>
                    In this sample, the DateRangePicker has been configured with the <code>dd-MMM-yy hh:mm a</code> date time format. 
                    To change this current date time format, go to the properties panel at the right side and select a date format from 
                    the dropdown options. For mobile mode touch the icon at the right side and select a date time format from the dropdown options.
                </p>
            </div>
            <div id='description'>
                <p>
                    Format sample illustrates the support of custom date format in the DateRangePicker component by
                    using the <code>format</code> property. You can also change the date format by selecting it from the format options in the properties
                    panel.
                </p>
                <p>
                    Furthermore, this example showcases the flexible date value parsing functionality available in DateRangePicker component.
                    By utilizing the <code>inputFormats</code> property, users can enter dates in various formats, which will be
                    automatically parsed and formatted according to the chosen date format.
                </p>
                <p>
                    More information on the date format configuration can be found in the <a href="https://ej2.syncfusion.com/react/documentation/daterangepicker/globalization/#date-format" target="_blank"> documentation section</a>.
                </p>
            </div>
        </div>);
};
export default Format;
