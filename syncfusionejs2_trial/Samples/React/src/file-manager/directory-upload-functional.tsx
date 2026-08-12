import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { updateSampleSection } from '../common/sample-base';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, ToolbarItemsDirective, ToolbarItemDirective } from '@syncfusion/ej2-react-filemanager';
import { DropDownButtonComponent, ItemModel} from '@syncfusion/ej2-react-splitbuttons';


/**
 * File Manager folder upload sample
 */
const DirectoryUpload = () => {
    useEffect(() => {
        updateSampleSection();
    }, [])
    const [isDirectoryUpload, setIsDirectoryUpload] = useState<boolean>(false);
    let fmObj = useRef<FileManagerComponent>(null);
    const dropBtnRef = useRef<DropDownButtonComponent>(null);
    let hostUrl: string = "https://physical-service.syncfusion.com/";
    const OnCreated=() => {
        if (fmObj.current && dropBtnRef.current) {
            const fm = fmObj.current;
            const uploadText = fm.localeObj.getConstant('Upload');
            dropBtnRef.current.content = `<span class="e-tbar-btn-text">${uploadText}</span>`;
            dropBtnRef.current.items = [
                { text: fm?.localeObj?.getConstant('Folder') || 'Folder' },
                { text: fm?.localeObj?.getConstant('File') || 'File' },
            ];
        }
    }
    const onSelect= (args) => {
        if (args.item.text === fmObj.current?.localeObj.getConstant('Folder')) {
            setIsDirectoryUpload(true);
        } else {
            setIsDirectoryUpload(false);
        }
        setTimeout( () => {
            let uploadBtn: HTMLElement = document.querySelector('.e-file-select-wrap button');
            uploadBtn.click();
        }, 100);
    }
    const uploadClick = (e) => {
        e.stopPropagation();
    }
    const uploadTemplate = () => {
        return(
            <DropDownButtonComponent ref={dropBtnRef} id="dropButton" cssClass= "e-tbar-btn e-tbtn-txt" onClick={uploadClick} iconCss='e-icons e-fe-upload' select={onSelect} created={OnCreated}>
            </DropDownButtonComponent>
            );
    }
    return(
        <div>
            <div className="control-section">
                <FileManagerComponent id="file" ref={fmObj} uploadSettings={{directoryUpload: isDirectoryUpload}} ajaxSettings = {{url: hostUrl + "api/FileManager/FileOperations", getImageUrl: hostUrl + "api/FileManager/GetImage", uploadUrl: hostUrl + 'api/FileManager/Upload', downloadUrl: hostUrl + 'api/FileManager/Download'}}
                    contextMenuSettings={{
                        file: [ 'Cut', 'Copy', '|', 'Delete', 'Download', 'Rename', '|', 'Details'],                        
                        visible: true
                    }}>
                    <ToolbarItemsDirective>
                            <ToolbarItemDirective name='NewFolder'/>
                            <ToolbarItemDirective template= {uploadTemplate} name="Upload"  />
                            <ToolbarItemDirective name="SortBy" />
                            <ToolbarItemDirective name="Refresh" />
                            <ToolbarItemDirective name="Cut" />
                            <ToolbarItemDirective name="Copy" />
                            <ToolbarItemDirective name="Paste" />
                            <ToolbarItemDirective name="Delete" />
                            <ToolbarItemDirective name="Download" />
                            <ToolbarItemDirective name="Rename" />
                            <ToolbarItemDirective name="Selection" />
                            <ToolbarItemDirective name="View" />
                            <ToolbarItemDirective name="Details" />
                        </ToolbarItemsDirective>
                    <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
                </FileManagerComponent>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the folder (directory) upload feature. Choose <code>Folder</code> or <code>File</code> from the <code>Upload</code> Context Menu item or the Toolbar to upload a folder or a file in the File Manager component.</p>
            </div>
            <div id="description">
                <p>In this demo, a folder upload is enabled by setting <a href="https://ej2.syncfusion.com/react/documentation/api/file-manager/uploadSettingsModel/#directoryupload" target="_blank"> directoryUpload </a> to <code>true</code>. It allows users to select or drag and drop a folder to upload its contents including hierarchy folders and files in the File Manager component.</p>
                <p>
                    The folder (directory) upload is supported for the following file system providers, </p>
                <ul>
                    <li> Physical provider</li> 
                    <li> NodeJS provider</li>
                    <li> Azure provider</li>
                    <li> Amazon S3 provider</li>
                </ul>
                <p>
                    <b>Note: </b>File Manager's upload functionality is restricted in the online demos for security reasons. If you need to test upload functionality, please install 
                    <a target="_blank" href="https://www.syncfusion.com/downloads"> Syncfusion Essential Studio </a>on your machine and run the demo.
                </p>
                <p>
                    Looking for the full React File Manager component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/react-components/react-file-manager">React File Manager</a> page.
                </p>
            </div>
        </div>
    );
}
export default DirectoryUpload;
