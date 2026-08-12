import * as React from 'react';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import './template.css';
import { SampleBase } from '../common/sample-base';
import * as data from './blockData.json';
export class TemplateGallery extends SampleBase {
    state = {
        selectedCardName: null,
        selectedCardIcon: null
    };
    editorRef = null;
    cards = data["blockTemplate"][0].page;
    componentDidMount() {
        this.loadPage(this.cards[1]);
    }
    loadPage = (pageData) => {
        this.setState({
            selectedCardName: pageData.name,
            selectedCardIcon: pageData.icon
        });
        if (this.editorRef && typeof this.editorRef.renderBlocksFromJson === 'function') {
            this.editorRef.renderBlocksFromJson(pageData.blocks, true);
        }
    };
    onCardClick = (pageData) => {
        this.editorRef.focusIn();
        this.loadPage(pageData);
    };
    onEditorCreated = () => {
        this.editorRef.focusIn();
    };
    render() {
        const { selectedCardName, selectedCardIcon } = this.state;
        return (<div className="control-pane">
        <div className="control-section blockeditor-template">

          <div className="cards-wrapper">
            <div className="fade left"/>
            <div className="cards-container">
              {this.cards.map((card) => (<div key={card?.name} className={`template-card ${selectedCardName === card?.name ? 'active' : ''}`} onClick={() => this.onCardClick(card)} title={card?.name}>
                  <div className="card-icon-left"><span className="icon">{card?.icon}</span></div>
                  <div className="card-content">
                    <div className="card-title">{card?.name}</div>
                    <div className="card-subtitle">{card?.subtitle}</div>
                  </div>
                </div>))}
            </div>
            <div className="fade right"/>
          </div>

           <div className="header-label" contentEditable={true} suppressContentEditableWarning>
            <span className="selectedTitle" aria-placeholder="Untitle">
              {selectedCardIcon || ''}{selectedCardName || ''}
            </span>
          </div>

          <BlockEditorComponent height="500px" ref={(be) => (this.editorRef = be)} id="template-gallery-blockeditor" created={this.onEditorCreated}/>

        </div>

        <div id="action-description">
          <p>
            This sample demonstrates a Template Gallery for the Block Editor; use the horizontal card rail to choose a
            template, load its blocks into the editor, and customize the content with slash (<code>/</code>) commands,
            lists, and inline formatting.
          </p>
        </div>
        <div id="description">
          <p>
            This sample implements a Template Gallery for the Block Editor. A horizontal set of cards acts as a template
            picker; selecting a card loads its predefined block structure into the editor without reloading the page.
          </p>
          <ul>
            <li><b>Interactive cards:</b> Click a card to select a template with active styling for the selected item.</li>
            <li>
              <b>Dynamic loading:</b> Clicking a card calls
              <a target="_blank" href="https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#renderblocksfromjson">
                {' '}renderBlocksFromJson
              </a> to populate the editor with that template's blocks.
            </li>
            <li><b>Responsive behavior:</b> The card rail scrolls when content overflows.</li>
            <li><b>Templates included:</b> Blank Page, Project Brief, Team Decisions, Project Planning, and Meeting Notes.</li>
          </ul>
          <p>
            Use this gallery to kickstart common document plan projects, record decisions, run meetings, and more then
            tailor the content with headings, lists, checklists, and rich inline styles.
          </p>
        </div>
      </div>);
    }
}
export default TemplateGallery;
