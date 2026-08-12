import * as React from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { PropertyPane } from '../common/property-pane';
import { SampleBase } from '../common/sample-base';
import Fuse from 'fuse.js';
import './custom-filtering.css';
import * as data from './dataSource.json';
export class CustomFiltering extends SampleBase {
    listObj;
    temp = 'booksData';
    booksData = data[this.temp];
    // maps the appropriate column to fields property
    fields = { value: 'BookName' };
    //Bind the filter event
    onFiltering(e) {
        let options = {
            keys: ['BookName'],
            includeMatches: true,
            findAllMatches: true
        };
        // create object from Fuse constructor
        let fuse = new Fuse(this.booksData, options);
        // store the search result data based on typed characters
        let result = fuse.search(e.text);
        let data = [];
        for (let i = 0; i < result.length; i++) {
            data.push(result[i].item);
        }
        // pass the filter data source to updateData method.
        e.updateData(data, null);
        let popupElement = document.getElementById('books_popup');
        if (popupElement) {
            let lists = popupElement.querySelectorAll('.e-list-item');
            // For highlight the typed characters, pass the result data and list items to highlightSearch method.
            this.highlightSearch(lists, result);
        }
    }
    highlightSearch(listItems, result) {
        if (result.length > 0) {
            for (let i = 0; i < listItems.length; i++) {
                let innerHTML = listItems[i].innerHTML;
                for (let j = result[i].matches[0].indices.length - 1; j >= 0; j--) {
                    let indexes = result[i].matches[0].indices[j];
                    innerHTML = innerHTML.substring(0, indexes[0]) + '<span class="e-highlight">' +
                        innerHTML.substring(indexes[0], (indexes[1] + 1)) + '</span>' + innerHTML.substring(indexes[1] + 1);
                    listItems[i].innerHTML = innerHTML;
                }
            }
        }
    }
    onChange(args) {
        this.listObj.debounceDelay = args.value;
    }
    render() {
        return (<div id='autocustom' className='control-pane'>
        <div className='control-section'>
          <div className='col-lg-8'>
            <div id='custom-filtering' style={{ paddingTop: '50px' }}>
              <AutoCompleteComponent id="books" ref={(AutoComplete) => { this.listObj = AutoComplete; }} dataSource={this.booksData} filtering={this.onFiltering.bind(this)} fields={this.fields} placeholder="e.g. Node.js Succinctly" debounceDelay={300}/>
            </div>
          </div>
          <div className='col-lg-4 property-section dropdown-filtering'>
            <PropertyPane title='Properties:'>
              <div className="property-panel-content">
                <label className="example-label">Debounce Delay</label>
                <NumericTextBoxComponent format='n0' value={300} min={1} change={this.onChange.bind(this)}></NumericTextBoxComponent>
              </div>
            </PropertyPane>
          </div>
        </div>

        <div id="action-description">
          <p>This sample demonstrates the custom filtering functionalities of the AutoComplete. You can choose
              an item from the suggestion list that filtered items based on approximate string matching technique.</p>
        </div>

        <div id="description">
          <p> The AutoComplete can be customized to showcase the suggestion list by using <code>filtering</code> event.
          In that, you can use your own libraries to filter the data and update it to AutoComplete suggestion list via <code>updateData</code> method.
          The debounce delay, in milliseconds, for filtering items in the AutoComplete component can be set using the <a href="https://ej2.syncfusion.com/react/documentation/api/auto-complete/#debouncedelay" target="_blank">debounceDelay</a> property.
          </p>

          <p>In this sample, used Fuse.js library for custom filtering of books data.</p>
          <p>
            For more information about Fuse.js can be found in this <a href="http://fusejs.io/" target="_blank"> reference link</a>.
          </p>
        </div>
      </div>);
    }
}
