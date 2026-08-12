/**
 * Rich Text Editor markdown preview sample
 */
import { Browser } from '@syncfusion/ej2-base';
import { Image, Inject, Link, MarkdownEditor, RichTextEditorComponent, Table, Toolbar, HtmlEditor, ToolbarType, MarkdownFormatter } from '@syncfusion/ej2-react-richtexteditor';
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
import * as React from 'react';
import { SampleBase } from '../common/sample-base';
import './overview.css';
export class Preview extends SampleBase {
    rteObj;
    splitterInstance;
    // set the value to Rich Text Editor
    value = `## Welcome to the Syncfusion® EJ2 Markdown Editor

The **Syncfusion Rich Text Editor** in **Markdown** mode delivers a lightweight, distraction-free editing experience with full Markdown syntax support — powered natively by Syncfusion’s own **MarkdownConverter**.

Write beautiful documents faster using simple, readable Markdown syntax and see the formatted result instantly with live preview.

### Why Choose Markdown Mode?

- Clean, plain-text syntax that is easy to read and write — even in raw form
- Input or modify text, apply formatting, and view the Markdown preview side-by-side using the splitter control.
- Toolbar + keyboard shortcuts for rapid formatting
- Easy to convert content to HTML or other formats
- Ideal for documentation, notes, and developer-focused content
- Reduces clutter and keeps the writing experience distraction-free

### Supported Markdown Features in Action

# Headings
## Markdown Editor Demo
### Create Clean, Structured Content
#### Organize Sections Effortlessly
##### Add Subheadings for Clarity
###### Provide Notes or Additional Info

Headings help structure your content, making it easier to read, scan, and organize information within the Markdown editor.

#### Text Formatting
**Bold text highlights important information.**

*Markdown makes writing simple and clean.*

**_You can also combine bold and italic for emphasis._**

~~Use strikethrough to indicate removed or outdated content.~~

\`Inline code is perfect for short code snippets like commands or variables.\`

### Table
Create simple tables to organize information clearly and quickly.

| Feature | Description |
|---------|-------------|
| Markdown   | Lightweight, easy-to-read formatting syntax |
| Preview    | Shows formatted output side-by-side |

#### Lists

**Unordered**
- Explore the editor features
- Add content with simple syntax
    - Insert nested bullet points
    - Organize topics hierarchically
- Keep your notes clear and readable

**Ordered**
1. Start writing your content
2. Apply Markdown formatting
    1. Add sub-steps for detailed tasks
    2. Improve clarity with structure
3. Review and finalize your document

**Task List**
- [x] Completed task
- [ ] Write documentation
- [ ] Release new version

#### Blockquotes

> Markdown makes writing on the web beautiful and readable.
>
> — John Gruber, Creator of Markdown

#### Code Blocks
Inline code: Use \`npm install @syncfusion/ej2-richtexteditor\``;
    // Rich Text Editor items list
    items = ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Blockquote', 'OrderedList',
        'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'Undo', 'Redo'];
    textArea;
    srcArea;
    placeholder = 'Enter your text here...';
    formatter = new MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.' } });
    //Rich Text Editor ToolbarSettings
    toolbarSettings = {
        items: this.items,
        type: ToolbarType.Expand,
        enableFloating: false
    };
    onCreate() {
        this.textArea = this.rteObj.contentModule.getEditPanel();
        this.srcArea = document.querySelector('.source-code');
        this.updateValue();
    }
    onChange() {
        this.updateValue();
    }
    onResizing() {
        this.rteObj.refreshUI();
    }
    updateValue() {
        this.srcArea.innerHTML = MarkdownConverter.toHtml(this.rteObj.contentModule.getEditPanel().value, { lineBreak: true });
    }
    updateOrientation() {
        if (Browser.isDevice) {
            this.splitterInstance.orientation = 'Vertical';
            document.body.querySelector('.heading').style.width = 'auto';
        }
    }
    content1() {
        return (<div className="content">
            <RichTextEditorComponent id='defaultRTE' ref={(richtexteditor) => { this.rteObj = richtexteditor; }} editorMode='Markdown' toolbarSettings={this.toolbarSettings} height='447px' formatter={this.formatter} saveInterval={1} created={this.onCreate.bind(this)} change={this.onChange.bind(this)} actionComplete={this.updateValue.bind(this)} value={this.value}>

                <Inject services={[MarkdownEditor, Toolbar, Image, Link, HtmlEditor, Table]}/>
            </RichTextEditorComponent>
        </div>);
    }
    ;
    content2() {
        return (<div className="heading right">
            <h6 className="title"><b>Markdown Preview</b></h6>
            <div className="splitter-default-content source-code pane2" style={{ padding: "20px" }}></div>
        </div>);
    }
    ;
    render() {
        return (<div className='control-pane'>
                <div className='control-section markdown-preview' id="rtePreview">
                    <div className="content-wrapper">
                    <SplitterComponent id='splitter-rte-markdown-preview' ref={splitter => (this.splitterInstance = splitter)} height='450px' width='100%' resizing={this.onResizing.bind(this)} created={this.updateOrientation.bind(this)}>
                        <PanesDirective>
                            <PaneDirective resizable={true} size='50%' min="40%" cssClass='pane1' content={this.content1.bind(this)}></PaneDirective>
                            <PaneDirective min="40%" cssClass='pane2' content={this.content2.bind(this)}></PaneDirective>
                        </PanesDirective>
                    </SplitterComponent>
                    </div>
                </div>
                <div id="action-description">
                    <p>This example illustrates how to preview Markdown changes within the Rich Text Editor. You can input or modify the display text, apply formatting, and observe the Markdown preview alongside. This capability is enabled by utilizing the splitter component, which effectively separates the Rich Text Editor from the preview section.</p>
                </div>
                <div id="description">
                    <p>The Rich Text Editor provides the ability to instantly <code>preview</code> Markdown changes through the preview functionality. To achieve this, the sample uses Syncfusion's Markdown Converter to convert Markdown into HTML content.</p>
                </div>
            </div>);
    }
}
