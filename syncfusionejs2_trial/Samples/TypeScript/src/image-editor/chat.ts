import { loadCultureFiles } from '../common/culture-loader';
import { Button } from '@syncfusion/ej2-buttons';
import { ArrowheadType, ImageEditor, ImageFilterOption, SelectionPoint, ShapeChangeEventArgs, ShapeSettings, ShapeType, Transition } from '@syncfusion/ej2-image-editor'
import { Browser, EventHandler, getComponent, isNullOrUndefined } from '@syncfusion/ej2-base';
import { ColorPicker, ColorPickerEventArgs, Dimension, ModeSwitchEventArgs, PaletteTileEventArgs } from '@syncfusion/ej2-inputs';
import { ItemModel, MenuEventArgs, OpenCloseMenuEventArgs, Toolbar, ClickEventArgs as ToolbarClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { ItemModel as DropDownButtonItemModel } from '@syncfusion/ej2-splitbuttons';


/**
 * Default image editor sample
 */
// tslint:disable-next-line
(window as any).default = (): void => {
    loadCultureFiles();
    let selectedImageSrc: string = '';
    let isImgSelected: boolean = false;
    let imgCount: number = 2;
    let currImgId: string = '';
    let popupLeft: string;
    let currentToolbar: string = 'main';
    let activeObjIndex: string;
    let tempShapeSettings: ShapeSettings;
    let isShapeCustomizing: boolean = false;
    let isTextEditing: boolean = false;
    let tempObjColl: SelectionPoint[] = [];
    let tempPointColl: any = {};
    let isShapeSelected: boolean = false;
    const presetColors: { [key: string]: string[]; } = {
        'custom': ['#000000', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3',
            '#03a9f4', '#00bcd4', '#009688', '#ffeb3b', '#ffffff', '#ffebee', '#fce4ec', '#f3e5f5', '#ede7f6', '#e3f2fd',
            '#e1f5fe', '#e0f7fa', '#e0f2f1', '#fffde7', '#f2f2f2', '#ffcdd2', '#f8bbd0', '#e1bee7', '#d1c4e9', '#bbdefb',
            '#b3e5fc', '#b2ebf2', '#b2dfdb', '#fff9c4', '#e6e6e6', '#ef9a9a', '#f48fb1', '#ce93d8', '#b39ddb', '#90caf9',
            '#81d4fa', '#80deea', '#80cbc4', '#fff59d', '#cccccc', '#e57373', '#f06292', '#ba68c8', '#9575cd', '#64b5f6',
            '#4fc3f7', '#4dd0e1', '#4db6ac', '#fff176', '#b3b3b3', '#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#42a5f5',
            '#29b6f6', '#26c6da', '#26a69a', '#ffee58', '#999999', '#e53935', '#d81b60', '#8e24aa', '#5e35b1', '#1e88e5',
            '#039be5', '#00acc1', '#00897b', '#fdd835', '#808080', '#d32f2f', '#c2185b', '#7b1fa2', '#512da8', '#1976d2',
            '#0288d1', '#0097a7', '#00796b', '#fbc02d', '#666666', '#c62828', '#ad1457', '#6a1b9a', '#4527a0', '#1565c0',
            '#0277bd', '#00838f', '#00695c', '#f9a825', '#4d4d4d', '#b71c1c', '#880e4f', '#4a148c', '#311b92', '#0d47a1',
            '#01579b', '#006064', '#004d40', '#f57f17']
    };

    EventHandler.add(document, 'keydown', keyDownEventHandler, this);
    EventHandler.add(document.getElementById('image-editor-container'), 'dblclick', doubleClickEvent, this);

    let button: Button = new Button({ iconCss: 'e-icons e-circle-add' });
    button.appendTo('#add-image-btn');
    button.element.setAttribute('title', 'Add Image');

    button = new Button({ iconCss: 'e-icons e-send' });
    button.appendTo('#send-message');
    button.element.setAttribute('title', 'Send');

    button = new Button({ iconCss: 'e-icons e-close' });
    button.appendTo('#back');
    button.element.setAttribute('title', 'Back');

    button = new Button({ iconCss: 'e-icons e-edit' });
    button.appendTo('#edit');
    button.element.setAttribute('title', 'Edit');

    button = new Button({ iconCss: 'e-icons e-send' });
    button.appendTo('#send-image');
    button.element.setAttribute('title', 'Send');

    let imageEditorObj: ImageEditor;

    setTimeout(() => {
        imageEditorObj = new ImageEditor({
            theme: 'Material',
            toolbar: [],
            showQuickAccessToolbar: false,
            created: () => {
                if (Browser.isDevice) {
                    imageEditorObj.open('./../default/images/flower.png');
                } else {
                    imageEditorObj.open('./../default/images/nature.png');
                }
            },
            shapeChanging: (args: ShapeChangeEventArgs) => {
                if (args.action === 'select') {
                    isShapeSelected = isShapeSelected ? false : true;
                    updateToolbar(args, true);
                }
            },
            shapeChange: (args: ShapeChangeEventArgs) => {
                if (args.action === 'apply' && !isShapeCustomizing) {
                    isTextEditing = false;
                    refreshToolbar('main');
                }
            },
            zoomSettings: {minZoomFactor: 0.1, maxZoomFactor: 50}
        });
        imageEditorObj.appendTo('#imageEditor');
    
        let toolbarObj: Toolbar = new Toolbar({
            items: [
                {
                    id: 'cancel', prefixIcon: 'e-icons e-close', tooltipText: 'Cancel', align: 'Left' },
                {
                    id: 'undo', prefixIcon: 'e-icons e-undo', tooltipText: 'Undo', align: 'Right', disabled: true },
                {
                    id: 'redo', prefixIcon: 'e-icons e-redo', tooltipText: 'Redo', align: 'Right', disabled: true },
                {
                    id: 'ok', prefixIcon: 'e-icons e-send', tooltipText: 'Send', align: 'Right' }
            ],
            clicked: toolbarClicked.bind(this)
        });
        toolbarObj.appendTo('#top-toolbar');
    
        toolbarObj = new Toolbar({
            items: [
                {
                    id: 'cropAndTransform', prefixIcon: 'e-icons e-crop', tooltipText: 'Crop and Transform', align: 'Center' },
                {
                    id: 'rotateLeft', prefixIcon: 'e-icons e-transform-left', tooltipText: 'Rotate Left', align: 'Center', visible: false },
                {
                    id: 'rotateRight', prefixIcon: 'e-icons e-transform-right', tooltipText: 'Rotate Right', align: 'Center', visible: false },
                {
                    id: 'addText', prefixIcon: 'e-icons e-text-annotation', tooltipText: 'Text', align: 'Center' },
                {
                    id: 'fontColor', cssClass: 'top-icon e-text-fontColor', tooltipText: 'Font Color', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_fontColorBtn"></button>' },
                {
                    id: 'fontFamily', cssClass: 'top-icon e-img-font-family', tooltipText: 'Font Family', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_fontFamilyButton"></button>' },
                {
                    id: 'bold', prefixIcon: 'e-icons e-bold', tooltipText: 'Bold', align: 'Center', visible: false },
                {
                    id: 'italic', prefixIcon: 'e-icons e-italic', tooltipText: 'Italic', align: 'Center', visible: false },
                {
                    id: 'shapes', prefixIcon: 'e-icons e-shapes', tooltipText: 'Annotations', align: 'Center',
                    template: '<button id="' + 'imageEditor_annotationButton"></button>' },
                {
                    id: 'fillColor', prefixIcon: 'e-icons e-copy', cssClass: 'top-icon e-fill', tooltipText: 'Fill Color', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_fillColorBtn"></button>' },
                {
                    id: 'strokeColor', prefixIcon: 'e-icons e-copy', cssClass: 'top-icon e-stroke', tooltipText: 'Stroke Color', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_borderColorBtn"></button>' },
                {
                    id: 'strokeWidth', cssClass: 'top-icon e-size', tooltipText: 'Stroke Width', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_borderWidthButton"></button>' },
                {
                    id: 'arrowHead', cssClass: 'top-icon e-size', tooltipText: 'Arrow Head', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_startButton"></button>' },
                {
                    id: 'arrowTail', cssClass: 'top-icon e-size', tooltipText: 'Arrow Tail', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_endButton"></button>' },
                {
                    id: 'penStrokeColor', prefixIcon: 'e-icons e-copy', cssClass: 'top-icon e-pen-stroke-color',
                    tooltipText: 'Stroke Color', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_penColorBtn"></button>' },
                {
                    id: 'penStrokeWidth', prefixIcon: 'e-icons e-copy', cssClass: 'top-icon e-size',
                    tooltipText: 'Stroke Width', align: 'Center', visible: false,
                    type: 'Input', template: '<button id="' + 'imageEditor_penStrokeWidth"></button>' },
                {
                    id: 'remove', prefixIcon: 'e-icons e-trash', tooltipText: 'Remove', align: 'Center', visible: false, disabled: false },
                {
                    id: 'editText', prefixIcon: 'e-icons e-annotation-edit', cssClass: 'top-icon e-annotation-edit',
                    tooltipText: 'Edit Text', align: 'Center', visible: false, disabled: false },
                {
                    id: 'addPen', prefixIcon: 'e-icons e-signature', tooltipText: 'Pen', align: 'Center' },
                {
                    id: 'filters', prefixIcon: 'e-icons e-filters', tooltipText: 'Filters', align: 'Center' }
            ],
            created: () => {
                renderAnnotationBtn(); createFontColor(); createFontFamily();
                createShapeColor(); createShapeBtn(); createStartBtn(); createEndBtn();
                createPenColor(); createPenBtn();
                const toolbarArea: HTMLElement = document.getElementById('bottom-toolbar');
                toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
            },
            clicked: toolbarClicked.bind(this)
        });
        toolbarObj.appendTo('#bottom-toolbar');
    }, 10);

    document.getElementById('send-message').onclick = function() {
        newMessage();
    };

    document.getElementById('add-image-btn').onclick = function() {
        document.getElementById('file-uploader').click();
    };

    document.getElementById('file-uploader').onchange  = (e): void => {
        const convo = document.querySelector('.message-container');
        const input = e.target as HTMLInputElement;
        const file = input.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = document.createElement('img');
            img.classList.add('preview');
            img.src = reader.result as string;
            setTimeout(() => {
                selectedImageSrc = img.src;
                (document.getElementById('previewImgContainer') as HTMLImageElement).src = selectedImageSrc;
                (document.getElementById('chat-container') as HTMLElement).style.display = 'none';
                document.getElementById('imagePreviewContainer').style.display = 'block';
                document.getElementById('send-image').style.display = 'inline-block';
                input.value = '';
            }, 10);
        };

        reader.readAsDataURL(file);
    };

    function newMessage(): void {
        const convo = document.querySelector('.message-container');
        const value = (document.getElementById('textArea') as any).value;
        if (value) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const message: any = buildMessage(value);
            convo.appendChild(message);
        }

        (document.getElementById('textArea') as any).value = '';
        setTimeout(() => {
            convo.scrollTop = convo.scrollHeight;
        }, 10);
    }

    function buildMessage(text: string | HTMLImageElement): HTMLDivElement {
        const element: HTMLDivElement = document.createElement('div');
        const currentDate: Date = new Date();
        const formattedDate: string = currentDate.toLocaleDateString();
        const formattedTime: string = currentDate.toLocaleTimeString();
        element.classList.add('message', 'sent');
        if (typeof text === 'string') {
            element.innerHTML = `<div class="account-info"> <img src= "src/image-editor/images/sunset.jpg" alt="Receiver Avatar" class="avatar"> <span class="date-time">${formattedDate} ${formattedTime}</span> <br> ${text}</div>`;
        } else {
            imgCount++;
            element.innerHTML = `<div class="account-info"> <img src= "src/image-editor/images/sunset.jpg" alt="Receiver Avatar" class="avatar"> <span class="date-time">${formattedDate} ${formattedTime}</span> <br> </div>`;
            element.appendChild(text);
        }
        element.classList.add('receiver-message');
        return element;
    }


    document.getElementById('message-container').onclick = function() {
        if (document.getElementById('message-container')) {
            const target = event.target as HTMLElement;
            if (target.tagName === 'IMG') {
                isImgSelected = true;
                currImgId = (target as HTMLImageElement).id;
                document.getElementById('send-image').style.display = 'none';
                selectedImageSrc = (target as HTMLImageElement).src;
                (document.getElementById('previewImgContainer') as HTMLImageElement).src = selectedImageSrc;
                (document.getElementById('chat-container') as HTMLElement).style.display = 'none';
                document.getElementById('imagePreviewContainer').style.display = 'block';
            }
        }
    };

    document.getElementById('back').onclick = function() {
        isImgSelected = false;
        currImgId = '';
        document.getElementById('imagePreviewContainer').style.display = 'none';
        (document.getElementById('chat-container') as HTMLElement).style.display = 'block';
    };

    document.getElementById('edit').onclick = function() {
        document.getElementById('imagePreviewContainer').style.display = 'none';
        document.getElementById('image-editor-container').style.display = 'block';
        imageEditorObj.open(selectedImageSrc);
        setTimeout(() => {
            document.getElementById('cropAndTransform').click();
            document.getElementById('cancel').click();
        }, 10);
    };

    document.getElementById('send-image').onclick = function() {
        const convo = document.querySelector('.message-container');
        const img = document.createElement('img');
        img.classList.add('preview');
        const id: number = imgCount + 1;
        img.setAttribute('id', 'img_' + id);
        img.src = selectedImageSrc;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const message: any = buildMessage(img);
        convo.appendChild(message);
        document.getElementById('imagePreviewContainer').style.display = 'none';
        (document.getElementById('chat-container') as HTMLElement).style.display = 'block';
        document.getElementById('send-image').style.display = 'none';
        setTimeout(() => {
            convo.scrollTop = convo.scrollHeight;
        }, 10);
    };

    function toolbarClicked(args: ToolbarClickEventArgs): void {
        const item: string = args.item.id.toLowerCase();
        const dimension: Dimension = imageEditorObj.getImageDimension();
        let shapeSettings: ShapeSettings[]; let shapeSetting: ShapeSettings;
        let img: HTMLImageElement; let imageData: ImageData; let canvas: HTMLCanvasElement;
        const convo = document.querySelector('.message-container');
        switch (item) {
        case 'cancel':
            isTextEditing = false;
            if (currentToolbar === 'main') {
                document.getElementById('image-editor-container').style.display = 'none';
                (document.getElementById('imagePreviewContainer') as HTMLElement).style.display = 'block';
                isImgSelected = false;
                currImgId = '';
                imageEditorObj.reset();
            } else {
                if ((isShapeCustomizing || isShapeSelected) && tempShapeSettings && tempShapeSettings.id) {
                    imageEditorObj.updateShape(tempShapeSettings);
                } else {
                    imageEditorObj.setObjColl(tempObjColl);
                    imageEditorObj.setPointColl(tempPointColl);
                }
                imageEditorObj.cancel();
                refreshToolbar('main');
            }
            break;
        case 'undo':
            isTextEditing = false;
            imageEditorObj.undo();
            refreshToolbar('main');
            break;
        case 'redo':
            isTextEditing = false;
            imageEditorObj.redo();
            refreshToolbar('main');
            break;
        case 'ok':
            isTextEditing = false;
            if (currentToolbar === 'main') {
                imageData = imageEditorObj.getImageData();
                canvas = document.createElement('canvas');
                canvas.width = imageData.width; canvas.height = imageData.height;
                canvas.getContext('2d').putImageData(imageData, 0, 0);
                if (isImgSelected && document.getElementById(currImgId)) {
                    (document.getElementById(currImgId) as HTMLImageElement).src = canvas.toDataURL();
                    imageEditorObj.reset();
                    document.getElementById('image-editor-container').style.display = 'none';
                    (document.getElementById('chat-container') as HTMLElement).style.display = 'block';
                    document.getElementById('send-image').style.display = 'none';
                } else {
                    img = document.createElement('img');
                    img.classList.add('preview');
                    img.src = canvas.toDataURL();
                    if (convo) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const message: any = buildMessage(img);
                        convo.appendChild(message);
                        imageEditorObj.reset();
                        document.getElementById('image-editor-container').style.display = 'none';
                        (document.getElementById('chat-container') as HTMLElement).style.display = 'block';
                        document.getElementById('send-image').style.display = 'none';
                        setTimeout(() => {
                            convo.scrollTop = convo.scrollHeight;
                        }, 10);
                    }
                }
                isImgSelected = false;
                currImgId = '';
            } else {
                imageEditorObj.okBtn();
                refreshToolbar('main');
            }
            break;
        case 'cropandtransform':
            imageEditorObj.select('custom');
            refreshToolbar('crop');
            break;
        case 'rotateleft':
            imageEditorObj.rotate(-90);
            break;
        case 'rotateright':
            imageEditorObj.rotate(90);
            break;
        case 'addtext':
            tempObjColl = imageEditorObj.getObjColl();
            tempPointColl = imageEditorObj.getPointColl();
            // 65 is half the width of 'Add Text' text
            // 15 is half the height of 'Add Text' text
            imageEditorObj.drawText(dimension.x + (dimension.width / 2) - 65, dimension.y + (dimension.height / 2) - 15, 'Add Text',
                                    'Arial', 30, false, false, '#fff');
            shapeSettings = imageEditorObj.getShapeSettings();
            activeObjIndex = shapeSettings[shapeSettings.length - 1].id;
            tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
            isShapeSelected = true;
            imageEditorObj.selectShape(activeObjIndex);
            refreshToolbar('text');
            break;
        case 'bold':
            isShapeCustomizing = true;
            shapeSetting = imageEditorObj.getShapeSetting(activeObjIndex);
            if (shapeSetting.fontStyle.indexOf('bold') !== -1) {
                shapeSetting.fontStyle.splice(shapeSetting.fontStyle.indexOf('bold'), 1);
            } else {
                shapeSetting.fontStyle.push('bold');
            }
            imageEditorObj.updateShape(shapeSetting);
            isShapeSelected = true;
            imageEditorObj.selectShape(activeObjIndex);
            if (isTextEditing) {
                imageEditorObj.enableTextEditing();
            }
            isShapeCustomizing = false;
            break;
        case 'italic':
            isShapeCustomizing = true;
            shapeSetting = imageEditorObj.getShapeSetting(activeObjIndex);
            if (shapeSetting.fontStyle.indexOf('italic') !== -1) {
                shapeSetting.fontStyle.splice(shapeSetting.fontStyle.indexOf('italic'), 1);
            } else {
                shapeSetting.fontStyle.push('italic');
            }
            imageEditorObj.updateShape(shapeSetting);
            isShapeSelected = true;
            imageEditorObj.selectShape(activeObjIndex);
            if (isTextEditing) {
                imageEditorObj.enableTextEditing();
            }
            isShapeCustomizing = false;
            break;
        case 'remove':
            if (isNullOrUndefined(activeObjIndex) && tempShapeSettings && tempShapeSettings.id) {
                activeObjIndex = tempShapeSettings.id;
            }
            imageEditorObj.deleteShape(activeObjIndex);
            refreshToolbar('main');
            break;
        case 'edittext':
            isTextEditing = true;
            imageEditorObj.enableTextEditing();
            refreshToolbar('edittext');
            break;
        case 'addpen':
            tempObjColl = imageEditorObj.getObjColl();
            tempPointColl = imageEditorObj.getPointColl();
            imageEditorObj.freeHandDraw(true);
            refreshToolbar('pen');
            break;
        case 'filters':
            refreshToolbar('filter');
            break;
        }
    }

    function refreshToolbar(type: string, isEvent?: boolean): void {
        const toolbar: Toolbar = getComponent('bottom-toolbar', 'toolbar') as Toolbar;
        let items: string[] = []; let filterToolbar: Toolbar; let itemModel: ItemModel[];
        let dimension: Dimension; let shapeSettings: ShapeSettings[];
        document.getElementById('filter-toolbar').style.display = 'none';
        currentToolbar = type;
        switch (type) {
        case 'main':
            items = ['cropAndTransform', 'addText', 'shapes', 'addPen', 'filters'];
            break;
        case 'crop':
            items = ['rotateLeft', 'rotateRight'];
            break;
        case 'text':
        case 'edittext':
            items = ['fontColor', 'fontFamily', 'bold', 'italic', 'remove', 'editText'];
            break;
        case 'rectangle':
            items = ['fillColor', 'strokeColor', 'strokeWidth', 'remove'];
            if (!isEvent) {
                dimension = imageEditorObj.getImageDimension();
                // 100 is half the width of the rectangle
                // 50 is half the height of the rectangle
                imageEditorObj.drawRectangle(dimension.x + (dimension.width / 2) - 100, dimension.y + (dimension.height / 2) - 50, 200, 100, 2, '#fff');
                shapeSettings = imageEditorObj.getShapeSettings();
                activeObjIndex = shapeSettings[shapeSettings.length - 1].id;
                tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
            }
            break;
        case 'ellipse':
            items = ['fillColor', 'strokeColor', 'strokeWidth', 'remove'];
            if (!isEvent) {
                dimension = imageEditorObj.getImageDimension();
                // 100 is half the width of the ellipse
                // 50 is half the height of the ellipse
                imageEditorObj.drawEllipse(dimension.x + (dimension.width / 2) - 100, dimension.y + (dimension.height / 2) - 50, 100, 50, 2, '#fff');
                shapeSettings = imageEditorObj.getShapeSettings();
                activeObjIndex = shapeSettings[shapeSettings.length - 1].id;
                tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
            }
            break;
        case 'line':
            items = ['strokeColor', 'strokeWidth', 'remove'];
            if (!isEvent) {
                dimension = imageEditorObj.getImageDimension();
                // 200 is half the width of the line
                // 100 is half the height of the line
                imageEditorObj.drawLine(dimension.x + (dimension.width / 2) - 200, dimension.y + (dimension.height / 2) - 100, dimension.x + (dimension.width / 2) + 200, dimension.y + (dimension.height / 2) + 100, 2, '#fff');
                shapeSettings = imageEditorObj.getShapeSettings();
                activeObjIndex = shapeSettings[shapeSettings.length - 1].id;
                tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
            }
            break;
        case 'arrow':
            items = ['strokeColor', 'strokeWidth', 'arrowHead', 'arrowTail', 'remove'];
            if (!isEvent) {
                dimension = imageEditorObj.getImageDimension();
                // 200 is half the width of the arrow
                // 100 is half the height of the arrow
                imageEditorObj.drawArrow(dimension.x + (dimension.width / 2) - 200, dimension.y + (dimension.height / 2) - 100, dimension.x + (dimension.width / 2) + 200, dimension.y + (dimension.height / 2) + 100, 2, '#fff');
                shapeSettings = imageEditorObj.getShapeSettings();
                activeObjIndex = shapeSettings[shapeSettings.length - 1].id;
                tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
            }
            break;
        case 'pen':
        case 'freehanddraw':
            items = ['penStrokeColor', 'penStrokeWidth', 'remove'];
            break;
        case 'filter':
            document.getElementById('filter-toolbar').style.display = 'block';
            itemModel = [
                {
                    id: 'default', tooltipText: 'Default', align: 'Center',
                    template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_defaultCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Default' + '</span></div></div>' },
                {
                    id: 'chrome', tooltipText: 'Chrome', align: 'Center',
                    template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_chromeCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Chrome' + '</span></div></div>' },
                {
                    id: 'cold', tooltipText: 'Cold', align: 'Center',
                    template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_coldCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Cold' + '</span></div></div>' },
                {
                    id: 'warm', tooltipText: 'Warm', align: 'Center',
                    template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_warmCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Warm' + '</span></div></div>' },
                {
                    id: 'grayscale', tooltipText: 'Grayscale', align: 'Center',
                    template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_grayscaleCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Grayscale' + '</span></div></div>' },
                {
                    id: 'sepia', tooltipText: 'Sepia', align: 'Center',
                    template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_sepiaCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Sepia' + '</span></div></div>' },
                {
                    id: 'invert', tooltipText: 'Invert', align: 'Center',
                    template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_invertCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Invert' + '</span></div></div>' }
            ];
            if (!document.querySelector('#' + 'filter-toolbar').classList.contains('e-control')) {
                filterToolbar = new Toolbar({
                    width: '100%',
                    items: itemModel,
                    clicked: (args: ToolbarClickEventArgs) => {
                        filterImage(args.item.id as ImageFilterOption);
                    },
                    created: () => {
                        createCanvasFilter();
                        filterToolbar.refreshOverflow();
                    }
                });
                filterToolbar.appendTo('#filter-toolbar');
            }
            items = ['default', 'chrome', 'cold', 'warm', 'grayscale', 'sepia', 'invert'];
            break;
        }
        for (let i: number = 0; i < toolbar.items.length; i++) {
            if (items.indexOf(toolbar.items[i as number].id) !== -1) {
                toolbar.items[i as number].visible = true;
            } else {
                toolbar.items[i as number].visible = false;
            }
            if (toolbar.items[i as number].id === 'remove') {
                if (type === 'pen') {
                    toolbar.items[i as number].disabled = true;
                } else {
                    toolbar.items[i as number].disabled = false;
                }
            }
        }
        const enableUndo: boolean = canUndo();
        const enableRedo: boolean = canRedo();
        const topToolbar: Toolbar = getComponent('top-toolbar', 'toolbar') as Toolbar;
        for (let i: number = 0; i < topToolbar.items.length; i++) {
            if (topToolbar.items[i as number].id === 'ok') {
                if (type === 'main') {
                    topToolbar.items[i as number].prefixIcon = 'e-icons e-send';
                    topToolbar.items[i as number].tooltipText = 'Send';
                } else {
                    topToolbar.items[i as number].prefixIcon = 'e-icons e-check';
                    topToolbar.items[i as number].tooltipText = 'Ok';
                }
            }
            if (topToolbar.items[i as number].id === 'undo') {
                topToolbar.items[i as number].disabled = !enableUndo;
            }
            if (topToolbar.items[i as number].id === 'redo') {
                topToolbar.items[i as number].disabled = !enableRedo;
            }
        }
        const toolbarArea: HTMLElement = document.getElementById('bottom-toolbar');
        toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
    }

    function canUndo(): boolean {
        let canUndo: boolean = false;
        const object: Object = imageEditorObj.getUndoRedoColl();
        const undoRedoIndex: number = object['index'];
        if (undoRedoIndex > 0) {
            canUndo = true;
        }
        return canUndo;
    }

    function canRedo(): boolean {
        let canRedo: boolean = false;
        const object: Object = imageEditorObj.getUndoRedoColl();
        const undoRedoColl: Transition[] = object['undoRedoColl'];
        const undoRedoIndex: number = object['index'];
        if (undoRedoColl && undoRedoColl.length > 0 && undoRedoIndex < undoRedoColl.length - 1) {
            canRedo = true;
        }
        if (undoRedoIndex === undoRedoColl.length) {
            canRedo = false;
        } else if (undoRedoIndex === 0 && undoRedoColl.length > 0 ) {
            canRedo = true;
        } else if (undoRedoIndex > 0) {
            canRedo = true;
        }
        return canRedo;
    }

    function updateToolbar(args: ShapeChangeEventArgs, isEvent?: boolean): void {
        const type: string = args.currentShapeSettings.type.toLowerCase();
        refreshToolbar(type, isEvent);
        if (type === 'freehanddraw' && isEvent) {
            tempShapeSettings = args.currentShapeSettings;
        }
        setTimeout(() => {
            const selFillElem: HTMLElement = document.querySelector('.e-fill.e-template .e-dropdownbtn-preview') as HTMLElement;
            const selStrokeElem: HTMLElement = document.querySelector('.e-stroke.e-template .e-dropdownbtn-preview') as HTMLElement;
            const selTextStrokeElem: HTMLElement = document.querySelector('#imageEditor_fontColorBtn .e-dropdownbtn-preview') as HTMLElement;
            const selPenStrokeElem: HTMLElement = document.querySelector('.e-pen-stroke-color.e-template .e-dropdownbtn-preview') as HTMLElement;
            const strokeWidthElem: HTMLElement = document.querySelector('.e-shape-stroke-width') as HTMLElement;
            const selPenWidthElem: HTMLElement = document.querySelector('.e-pen-stroke-width') as HTMLElement;
            const fontFamilyElem: HTMLElement = document.querySelector('.e-text-font-family') as HTMLElement;
            const boldBtn: HTMLElement = document.querySelector('#' + 'bold') as HTMLElement;
            const italicBtn: HTMLElement = document.querySelector('#' + 'italic') as HTMLElement;
            const arrowHead: HTMLElement = document.querySelector('#' + 'imageEditor_startButton') as HTMLElement;
            const arrowTail: HTMLElement = document.querySelector('#' + 'imageEditor_endButton') as HTMLElement;
            if (selFillElem && (type === 'rectangle' || type === 'ellipse')) {
                if (args.currentShapeSettings.fillColor === '') {
                    selFillElem.classList.add('e-nocolor-item');
                } else {
                    selFillElem.classList.remove('e-nocolor-item');
                    selFillElem.style.background = args.currentShapeSettings.fillColor;
                }
                if (document.querySelector('#' + 'imageEditor_shapeFill')) {
                    (getComponent('imageEditor_shapeFill', 'colorpicker') as ColorPicker).value = args.currentShapeSettings.fillColor;
                }
            }
            if (selStrokeElem && (type === 'rectangle' || type === 'ellipse' || type === 'line' || type === 'arrow')) {
                selStrokeElem.style.background = args.currentShapeSettings.strokeColor;
                if (document.querySelector('#' + 'imageEditor_shapeStroke')) {
                    (getComponent('imageEditor_shapeStroke', 'colorpicker') as ColorPicker).value = args.currentShapeSettings.strokeColor;
                }
            }
            if (strokeWidthElem && (type === 'rectangle' || type === 'ellipse' || type === 'line' || type === 'arrow'
                || type === 'pen')) {
                strokeWidthElem.textContent = getStrokeWidth(args.currentShapeSettings.strokeWidth.toString(), type);
            }
            if (selTextStrokeElem && type === 'text') {
                selTextStrokeElem.style.background = args.currentShapeSettings.color;
                if (document.querySelector('#' + 'imageEditor_textFont')) {
                    (getComponent('imageEditor_textFont', 'colorpicker') as ColorPicker).value = args.currentShapeSettings.color;
                }
            }
            if (fontFamilyElem && type === 'text') {
                fontFamilyElem.textContent = toPascalCase(args.currentShapeSettings.fontFamily);
            }
            if (boldBtn && type === 'text') {
                if (args.currentShapeSettings.fontStyle.indexOf('bold') !== -1) {
                    boldBtn.classList.add('e-selected-btn');
                } else {
                    boldBtn.classList.remove('e-selected-btn');
                }
            }
            if (italicBtn && type === 'text') {
                if (args.currentShapeSettings.fontStyle.indexOf('italic') !== -1) {
                    italicBtn.classList.add('e-selected-btn');
                } else {
                    italicBtn.classList.remove('e-selected-btn');
                }
            }
            if (selPenStrokeElem && type === 'freehanddraw') {
                selPenStrokeElem.style.background = args.currentShapeSettings.strokeColor;
                if (document.querySelector('#' + 'imageEditor_penStroke')) {
                    (getComponent('imageEditor_penStroke', 'colorpicker') as ColorPicker).value = args.currentShapeSettings.strokeColor;
                }
            }
            if (selPenWidthElem && type === 'freehanddraw') {
                selPenWidthElem.textContent = getStrokeWidth(args.currentShapeSettings.strokeWidth.toString(), type);
            }
            if (arrowHead && type === 'arrow') {
                arrowHead.textContent = toPascalCase(args.currentShapeSettings.arrowHead.toString());
            }
            if (arrowTail && type === 'arrow') {
                arrowTail.textContent = toPascalCase(args.currentShapeSettings.arrowTail.toString());
            }
        }, 50);
    }

    function getStrokeWidth(text: string, type: string): string {
        let strokeWidth: string;
        const currentWidth: number = type === 'freehanddraw' ? parseInt(text, 10) : parseInt(text, 10) / 2;
        switch (currentWidth) {
        case 0:
            strokeWidth = 'No Outline';
            break;
        case 1:
            strokeWidth = 'XSmall';
            break;
        case 2:
            strokeWidth = 'Small';
            break;
        case 3:
            strokeWidth = 'Medium';
            break;
        case 4:
            strokeWidth = 'Large';
            break;
        case 5:
            strokeWidth = 'XLarge';
            break;
        }
        return strokeWidth;
    }

    function toPascalCase(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);

    }

    function filterImage(type: ImageFilterOption): void {
        switch (type.toLowerCase()) {
        case 'default':
            imageEditorObj.applyImageFilter(ImageFilterOption.Default);
            break;
        case 'chrome':
            imageEditorObj.applyImageFilter(ImageFilterOption.Chrome);
            break;
        case 'cold':
            imageEditorObj.applyImageFilter(ImageFilterOption.Cold);
            break;
        case 'warm':
            imageEditorObj.applyImageFilter(ImageFilterOption.Warm);
            break;
        case 'grayscale':
            imageEditorObj.applyImageFilter(ImageFilterOption.Grayscale);
            break;
        case 'sepia':
            imageEditorObj.applyImageFilter(ImageFilterOption.Sepia);
            break;
        case 'invert':
            imageEditorObj.applyImageFilter(ImageFilterOption.Invert);
            break;
        }
    }

    function renderAnnotationBtn(): void {
        const parent: ImageEditor = imageEditorObj; let isCustomized: boolean = false;
        const items: DropDownButtonItemModel[] = []; const id: string = 'imageEditor';
        const defItems: string[] = ['Rectangle', 'Ellipse', 'Line', 'Arrow'];
        if (parent.toolbar) {
            for (let i: number = 0; i < defItems.length; i++) {
                if (parent.toolbar.indexOf(defItems[i as number]) !== -1) {
                    isCustomized = true;
                    break;
                }
            }
        }
        items.push({ text: 'Rectangle', id: 'rectangle', iconCss: 'e-icons e-rectangle' });
        items.push({ text: 'Ellipse', id: 'ellipse', iconCss: 'e-icons e-circle' });
        items.push({ text: 'Line', id: 'line', iconCss: 'e-icons e-line' });
        items.push({ text: 'Arrow', id: 'arrow', iconCss: 'e-icons e-arrow-right-up' });
        const iconCss: string = 'e-shapes';
        const drpDownBtn: DropDownButton = new DropDownButton({ items: items, iconCss: 'e-icons ' + iconCss,
            cssClass: 'e-image-popup',
            open: (args: OpenCloseMenuEventArgs) => {
                if (Browser.isDevice) {
                    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top -
                    args.element.parentElement.offsetHeight + 'px';
                }
            },
            select: (args: MenuEventArgs) => {
                tempObjColl = imageEditorObj.getObjColl();
                tempPointColl = imageEditorObj.getPointColl();
                refreshToolbar(args.item.id);
            }
        });
        // Render initialized DropDownButton.
        drpDownBtn.appendTo('#' + id + '_annotationButton');
    }

    function createFontColor(): void {
        document.querySelector('.e-template.e-text-fontColor').appendChild(imageEditorObj.createElement('input', {
            id: 'imageEditor_textFont'
        }));
        const fontColor: ColorPicker = new ColorPicker({
            modeSwitcher: true, noColor: false, value: '#fff', inline: true,
            showButtons: false, mode: 'Palette', cssClass: 'e-text-font-color',
            beforeModeSwitch: (args: ModeSwitchEventArgs): void => {
                popupLeft = (args.element.offsetParent as HTMLElement).style.left;
                fontColor.value = tempShapeSettings.color !== '#fff' ? tempShapeSettings.color : '#008000ff';
                beforeModeSwitch(args, fontColor);
            },
            presetColors: presetColors,
            change: (args: ColorPickerEventArgs): void => {
                isShapeCustomizing = true;
                const shapeSetting: ShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                shapeSetting.color = args.value;
                imageEditorObj.updateShape(shapeSetting);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
                if (isTextEditing) {
                    imageEditorObj.enableTextEditing();
                }
                isShapeCustomizing = false;
                (strokeDDB.element.children[0] as HTMLElement).style.backgroundColor = args.currentValue.rgba;
                strokeDDB.toggle();
            },
            onModeSwitch: (args: ModeSwitchEventArgs): void => {
                if (Browser.isDevice) {
                    args.element.parentElement.parentElement.style.left = popupLeft;
                    args.element.parentElement.parentElement.style.top = (strokeDDB.element.getBoundingClientRect().top - args.element.parentElement.parentElement.offsetHeight) + 'px';
                }
            },
            beforeClose: (): void => {
                strokeDDB.toggle();
            }
        }, '#' + 'imageEditor_textFont');
        const strokeDDB: DropDownButton = new DropDownButton({
            open: (args: OpenCloseMenuEventArgs) => {
                const parenElem: HTMLElement = args.element.parentElement;
                if (Browser.isDevice) {
                    parenElem.style.top = strokeDDB.element.getBoundingClientRect().top -
                    parenElem.offsetHeight + 'px';
                    parenElem.style.left = args.element.parentElement.offsetLeft + 'px';
                }
            },
            target: '.e-text-font-color',
            iconCss: 'e-dropdownbtn-preview',
            cssClass: 'e-ie-ddb-popup'
        }, '#' + 'imageEditor_fontColorBtn');
        fontColor.inline = true;
        fontColor.value = fontColor.getValue(fontColor.value, 'rgba');
        (document.querySelector('.e-text-fontColor.e-template .e-dropdownbtn-preview') as HTMLElement).style.background = '#fff';
    }

    function beforeModeSwitch(args: ModeSwitchEventArgs, inst: ColorPicker): void {
        popupLeft = (args.element.offsetParent as HTMLElement).style.left;
        if (args.mode === 'Picker') {
            inst.showButtons = true; inst.dataBind();
            (args.element.querySelector('.e-apply') as HTMLElement).title = 'Apply';
            (args.element.querySelector('.e-cancel') as HTMLElement).title = 'Cancel';
            (args.element.querySelector('.e-mode-switch-btn') as HTMLElement).title = 'StandardColors';
        } else {
            inst.showButtons = false; inst.dataBind();
            (args.element.querySelector('.e-mode-switch-btn') as HTMLElement).title = 'MoreColors';
        }
    }

    function createFontFamily(): void {
        const fontNameBtn: HTMLElement = document.getElementById('imageEditor_fontFamilyButton');
        const spanElem: HTMLElement = document.createElement('span');
        if (Browser.isDevice) {
            spanElem.innerHTML = 'ABC';
            spanElem.setAttribute('style', 'font-family: ' + 'arial' + "'");
        } else {
            spanElem.innerHTML = 'Arial';
        }
        spanElem.className = 'e-text-font-family';
        if (fontNameBtn) {
            fontNameBtn.appendChild(spanElem);
        }
        let items: ItemModel[] = [];
        if (imageEditorObj.fontFamily && imageEditorObj.fontFamily.items && imageEditorObj.fontFamily.items.length > 0) {
            items = imageEditorObj.fontFamily.items;
        } else {
            if (Browser.isDevice) {
                items = [{ id: 'arial', text: 'ABC' }, { id: 'calibri', text: 'ABC' }, { id: 'georgia', text: 'ABC' },
                    { id: 'roboto', text: 'ABC' }, { id: 'tahoma', text: 'ABC' }];
            } else {
                items = [{ id: 'arial', text: 'Arial' }, { id: 'calibri', text: 'Calibri' }, { id: 'georgia', text: 'Georgia' },
                    { id: 'roboto', text: 'Roboto' }, { id: 'tahoma', text: 'Tahoma' }];
            }
        }
        const fontFamilyBtn: DropDownButton = new DropDownButton({ items: items,
            cssClass: 'e-font-family',
            createPopupOnClick: true,
            beforeItemRender: (args: MenuEventArgs) => {
                args.element.setAttribute('style', 'font-family:' + args.element.id);
            },
            open: (args: OpenCloseMenuEventArgs) => {
                if (Browser.isDevice) {
                    args.element.parentElement.style.top = fontFamilyBtn.element.getBoundingClientRect().top -
                    args.element.parentElement.offsetHeight + 'px';
                }
                const fontFamily: string = tempShapeSettings.fontFamily;
                const elem: HTMLElement = args.element.querySelector('[id *= ' + '"' + fontFamily.toLowerCase() + '"' + ']');
                if (elem) {
                    elem.classList.add('e-selected-btn');
                }
            },
            select: (args: MenuEventArgs) => {
                if (Browser.isDevice) {
                    spanElem.setAttribute('style', 'font-family:' + args.item.id);
                }
                isShapeCustomizing = true;
                const shapeSetting: ShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                shapeSetting.fontFamily = args.item.id;
                imageEditorObj.updateShape(shapeSetting);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
                if (isTextEditing) {
                    imageEditorObj.enableTextEditing();
                }
                isShapeCustomizing = false;
                spanElem.textContent = args.item.text;
            }
        });
        fontFamilyBtn.appendTo('#' + 'imageEditor_fontFamilyButton');
    }

    function createShapeColor(): void {
        const parent: ImageEditor = imageEditorObj; const id: string = 'imageEditor';
        document.querySelector('.e-template.e-fill').appendChild(parent.createElement('input', {
            id: id + '_shapeFill'
        }));
        const fillColor: ColorPicker = new ColorPicker({
            modeSwitcher: true, noColor: true, value: '', inline: true,
            showButtons: false, mode: 'Palette', cssClass: 'e-shape-fill-color',
            beforeModeSwitch: (args: ModeSwitchEventArgs): void => beforeModeSwitch(args, fillColor),
            presetColors: {
                'custom': ['', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3',
                    '#03a9f4', '#00bcd4', '#009688', '#ffeb3b', '#ffffff', '#ffebee', '#fce4ec', '#f3e5f5', '#ede7f6', '#e3f2fd',
                    '#e1f5fe', '#e0f7fa', '#e0f2f1', '#fffde7', '#f2f2f2', '#ffcdd2', '#f8bbd0', '#e1bee7', '#d1c4e9', '#bbdefb',
                    '#b3e5fc', '#b2ebf2', '#b2dfdb', '#fff9c4', '#e6e6e6', '#ef9a9a', '#f48fb1', '#ce93d8', '#b39ddb', '#90caf9',
                    '#81d4fa', '#80deea', '#80cbc4', '#fff59d', '#cccccc', '#e57373', '#f06292', '#ba68c8', '#9575cd', '#64b5f6',
                    '#4fc3f7', '#4dd0e1', '#4db6ac', '#fff176', '#b3b3b3', '#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#42a5f5',
                    '#29b6f6', '#26c6da', '#26a69a', '#ffee58', '#999999', '#e53935', '#d81b60', '#8e24aa', '#5e35b1', '#1e88e5',
                    '#039be5', '#00acc1', '#00897b', '#fdd835', '#808080', '#d32f2f', '#c2185b', '#7b1fa2', '#512da8', '#1976d2',
                    '#0288d1', '#0097a7', '#00796b', '#fbc02d', '#666666', '#c62828', '#ad1457', '#6a1b9a', '#4527a0', '#1565c0',
                    '#0277bd', '#00838f', '#00695c', '#f9a825', '#4d4d4d', '#b71c1c', '#880e4f', '#4a148c', '#311b92', '#0d47a1',
                    '#01579b', '#006064', '#004d40', '#f57f17']
            },
            beforeTileRender: (args: PaletteTileEventArgs): void => {
                if (args.value === '') {
                    args.element.classList.add('e-nocolor-item');
                }
            },
            change: (args: ColorPickerEventArgs): void => {
                isShapeCustomizing = true;
                const shapeSetting: ShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                shapeSetting.fillColor = args.value;
                imageEditorObj.updateShape(shapeSetting);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
                isShapeCustomizing = false;
                if (args.currentValue.rgba === '') {
                    (fillDDB.element.children[0] as HTMLElement).classList.add('e-nocolor-item');
                } else {
                    (fillDDB.element.children[0] as HTMLElement).classList.remove('e-nocolor-item');
                    (fillDDB.element.children[0] as HTMLElement).style.backgroundColor = args.currentValue.rgba;
                }
                fillDDB.toggle();
            },
            onModeSwitch: (args: ModeSwitchEventArgs): void => {
                if (Browser.isDevice) {
                    args.element.parentElement.parentElement.style.left = popupLeft;
                    args.element.parentElement.parentElement.style.top = (fillDDB.element.getBoundingClientRect().top - args.element.parentElement.parentElement.offsetHeight) + 'px';
                }
            },
            beforeClose: (): void => {
                fillDDB.toggle();
            }
        }, '#' + id + '_shapeFill');
        const fillDDB: DropDownButton = new DropDownButton({
            open: (args: OpenCloseMenuEventArgs) => {
                const parenElem: HTMLElement = args.element.parentElement;
                if (Browser.isDevice) {
                    parenElem.style.top = fillDDB.element.getBoundingClientRect().top -
                    parenElem.offsetHeight + 'px';
                    parenElem.style.left = parent.element.offsetLeft + 'px';
                }
            },
            target: '.e-shape-fill-color',
            iconCss: 'e-dropdownbtn-preview',
            cssClass: 'e-ie-ddb-popup'
        }, '#' + id + '_fillColorBtn');
        fillColor.inline = true;
        fillColor.value = fillColor.getValue(fillColor.value, 'rgba');
        (document.querySelector('.e-fill.e-template .e-dropdownbtn-preview') as HTMLElement).classList.add('e-nocolor-item');
        document.querySelector('.e-template.e-stroke').appendChild(parent.createElement('input', {
            id: id + '_shapeStroke'
        }));
        const strokeColor: ColorPicker = new ColorPicker({
            modeSwitcher: true, noColor: false, value: '#fff', inline: true,
            showButtons: false, mode: 'Palette', cssClass: 'e-shape-stroke-color',
            beforeModeSwitch: (args: ModeSwitchEventArgs): void => {
                popupLeft = (args.element.offsetParent as HTMLElement).style.left;
                strokeColor.value = tempShapeSettings.strokeColor;
                beforeModeSwitch(args, strokeColor);
            },
            presetColors: presetColors,
            change: (args: ColorPickerEventArgs): void => {
                isShapeCustomizing = true;
                const shapeSetting: ShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                shapeSetting.strokeColor = args.value;
                imageEditorObj.updateShape(shapeSetting);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
                isShapeCustomizing = false;
                (strokeDDB.element.children[0] as HTMLElement).style.backgroundColor = args.currentValue.rgba;
                strokeDDB.toggle();
            },
            onModeSwitch: (args: ModeSwitchEventArgs): void => {
                if (Browser.isDevice) {
                    args.element.parentElement.parentElement.style.left = popupLeft;
                    args.element.parentElement.parentElement.style.top = (strokeDDB.element.getBoundingClientRect().top - args.element.parentElement.parentElement.offsetHeight) + 'px';
                }
            },
            beforeClose: (): void => {
                strokeDDB.toggle();
            }
        }, '#' + id + '_shapeStroke');
        const strokeDDB: DropDownButton = new DropDownButton({
            open: (args: OpenCloseMenuEventArgs) => {
                const parenElem: HTMLElement = args.element.parentElement;
                if (Browser.isDevice) {
                    parenElem.style.top = strokeDDB.element.getBoundingClientRect().top -
                    parenElem.offsetHeight + 'px';
                    parenElem.style.left = parent.element.offsetLeft + 'px';
                }
            },
            target: '.e-shape-stroke-color',
            iconCss: 'e-dropdownbtn-preview',
            cssClass: 'e-ie-ddb-popup'
        }, '#' + id + '_borderColorBtn');
        strokeColor.inline = true;
        strokeColor.value = strokeColor.getValue(strokeColor.value, 'rgba');
        (document.querySelector('.e-stroke.e-template .e-dropdownbtn-preview') as HTMLElement).style.background = '#fff';
    }

    function createShapeBtn(): void {
        const id: string = 'imageEditor';
        let strokeWidthItems: DropDownButtonItemModel[] = [
            { id: '1', text: 'XSmall' },
            { id: '2', text: 'Small' },
            { id: '3', text: 'Medium' },
            { id: '4', text: 'Large' },
            { id: '5', text: 'XLarge' }
        ];
        if (tempShapeSettings && tempShapeSettings.type && (tempShapeSettings.type.toLowerCase() === 'rectangle'
            || tempShapeSettings.type.toLowerCase() === 'ellipse')) {
            strokeWidthItems = [
                { id: '1', text: 'No Outline' },
                { id: '2', text: 'XSmall' },
                { id: '3', text: 'Small' },
                { id: '4', text: 'Medium' },
                { id: '5', text: 'Large' },
                { id: '6', text: 'XLarge' }
            ];
        }
        const strokeWidthBtn: HTMLElement = document.getElementById(id + '_borderWidthButton');
        const spanElem: HTMLElement = document.createElement('span');
        spanElem.innerHTML = 'XSmall';
        spanElem.className = 'e-shape-stroke-width';
        strokeWidthBtn.appendChild(spanElem);
        // Initialize the DropDownButton component.
        const drpDownBtn: DropDownButton = new DropDownButton({ items: strokeWidthItems,
            open: (args: OpenCloseMenuEventArgs) => {
                if (Browser.isDevice) {
                    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top -
                    args.element.parentElement.offsetHeight + 'px';
                }
                const activeBtn: string = spanElem.innerHTML;
                if (activeBtn !== '') {
                    args.element.querySelector('[aria-label = ' + '"' + activeBtn + '"' + ']').classList.add('e-selected-btn');
                }
            },
            select: (args: MenuEventArgs) => {
                isShapeCustomizing = true;
                const shapeSetting: ShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                shapeSetting.strokeWidth = parseInt(args.item.id, 10);
                if (tempShapeSettings && tempShapeSettings.type && (tempShapeSettings.type.toLowerCase() === 'rectangle'
                    || tempShapeSettings.type.toLowerCase() === 'ellipse')) {
                    shapeSetting.strokeWidth = parseInt(args.item.id, 10) - 1;
                }
                shapeSetting.strokeWidth *= 2;
                imageEditorObj.updateShape(shapeSetting);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
                isShapeCustomizing = false;
                spanElem.textContent = args.item.text;
                if (document.getElementById('bottom-toolbar')) {
                    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                    const toolbar: any = getComponent('bottom-toolbar', 'toolbar') as Toolbar;
                    toolbar.refreshOverflow();
                }
            }
        });
        // Render initialized DropDownButton.
        drpDownBtn.appendTo('#' + id + '_borderWidthButton');
    }

    function createStartBtn(): void {
        const parent: ImageEditor = imageEditorObj; const id: string = 'imageEditor';
        const strokeWidthItems: DropDownButtonItemModel[] = [
            { id: '1', text: 'None' },
            { id: '2', text: 'Bar' },
            { id: '3', text: 'Arrow' },
            { id: '4', text: 'ArrowSolid' },
            { id: '5', text: 'Circle' },
            { id: '6', text: 'CircleSolid' },
            { id: '7', text: 'Square' },
            { id: '8', text: 'SquareSolid' }
        ];
        const strokeWidthBtn: HTMLElement = document.getElementById(id + '_startButton');
        const spanElem: HTMLElement = document.createElement('span');
        spanElem.innerHTML = 'None';
        spanElem.className = 'e-shape-start';
        strokeWidthBtn.appendChild(spanElem);
        // Initialize the DropDownButton component.
        const drpDownBtn: DropDownButton = new DropDownButton({ items: strokeWidthItems,
            open: (args: OpenCloseMenuEventArgs) => {
                if (Browser.isDevice) {
                    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top -
                    args.element.parentElement.offsetHeight + 'px';
                }
                const activeBtn: string = spanElem.innerHTML;
                if (activeBtn !== '') {
                    args.element.querySelector('[aria-label = ' + '"' + activeBtn + '"' + ']').classList.add('e-selected-btn');
                }
            },

            select: (args: MenuEventArgs) => {
                isShapeCustomizing = true;
                spanElem.textContent = args.item.text;
                const shapeSetting: ShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                shapeSetting.arrowHead = getTextFromId(args.item.id);
                imageEditorObj.updateShape(shapeSetting);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
                isShapeCustomizing = false;
            }
        });
        // Render initialized DropDownButton.
        drpDownBtn.appendTo('#' + id + '_startButton');
    }

    function createEndBtn(): void {
        const parent: ImageEditor = imageEditorObj; const id: string = 'imageEditor';
        const strokeWidthItems: DropDownButtonItemModel[] = [
            { id: '1', text: 'None' },
            { id: '2', text: 'Bar' },
            { id: '3', text: 'Arrow' },
            { id: '4', text: 'ArrowSolid' },
            { id: '5', text: 'Circle' },
            { id: '6', text: 'CircleSolid' },
            { id: '7', text: 'Square' },
            { id: '8', text: 'SquareSolid' }
        ];
        const strokeEndBtn: HTMLElement = document.getElementById(id + '_endButton');
        const spanElem: HTMLElement = document.createElement('span');
        spanElem.innerHTML = 'ArrowSolid';
        spanElem.className = 'e-shape-end';
        strokeEndBtn.appendChild(spanElem);
        // Initialize the DropDownButton component.
        const drpDownBtn: DropDownButton = new DropDownButton({ items: strokeWidthItems,
            open: (args: OpenCloseMenuEventArgs) => {
                if (Browser.isDevice) {
                    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top -
                        args.element.parentElement.offsetHeight + 'px';
                }
                const activeBtn: string = spanElem.innerHTML;
                if (activeBtn !== '') {
                    args.element.querySelector('[aria-label = ' + '"' + activeBtn + '"' + ']').classList.add('e-selected-btn');
                }
            },
            select: (args: MenuEventArgs) => {
                isShapeCustomizing = true;
                spanElem.textContent = args.item.text;
                const shapeSetting: ShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                shapeSetting.arrowTail = getTextFromId(args.item.id);
                imageEditorObj.updateShape(shapeSetting);
                isShapeSelected = true;
                imageEditorObj.selectShape(activeObjIndex);
                isShapeCustomizing = false;
            }
        });
            // Render initialized DropDownButton.
        drpDownBtn.appendTo('#' + id + '_endButton');
    }

    function createPenColor(): void {
        const parent: ImageEditor = imageEditorObj; const id: string = 'imageEditor';
        document.querySelector('.e-template.e-pen-stroke-color').appendChild(parent.createElement('input', {
            id: id + '_pen_stroke'
        }));
        const penColor: ColorPicker = new ColorPicker({
            modeSwitcher: false, value: '#fff',
            showButtons: false, mode: 'Palette', cssClass: 'e-pen-color',
            change: (args: ColorPickerEventArgs): void => {
                isShapeCustomizing = true;
                if (tempShapeSettings && tempShapeSettings.id) {
                    const shapeSetting: ShapeSettings = {id: tempShapeSettings.id, type: ShapeType.FreehandDraw,
                        startX: tempShapeSettings.startX, startY: tempShapeSettings.startY,
                        strokeColor: args.currentValue.hex, strokeWidth: tempShapeSettings.strokeWidth,
                        opacity: tempShapeSettings.opacity, points: tempShapeSettings.points };
                    imageEditorObj.updateShape(shapeSetting);
                    isShapeSelected = true;
                    imageEditorObj.selectShape(tempShapeSettings.id);
                } else {
                    const shapeSetting: ShapeSettings = {id: null, type: ShapeType.FreehandDraw, startX: null, startY: null,
                        strokeColor: args.currentValue.hex};
                    imageEditorObj.updateShape(shapeSetting);
                }
                isShapeCustomizing = false;
                (strokeDDB.element.children[0] as HTMLElement).style.backgroundColor = args.currentValue.rgba;
                strokeDDB.toggle();
            }
        }, '#' + id + '_pen_stroke');
        const strokeDDB: DropDownButton = new DropDownButton({
            open: (args: OpenCloseMenuEventArgs) => {
                const parentElem: HTMLElement = args.element.parentElement;
                if (Browser.isDevice) {
                    parentElem.style.top = strokeDDB.element.getBoundingClientRect().top -
                    parentElem.offsetHeight + 'px';
                    parentElem.style.left = parent.element.offsetLeft + 'px';
                }
            },
            target: '.e-pen-color',
            iconCss: 'e-dropdownbtn-preview',
            cssClass: 'e-ie-ddb-popup'
        }, '#' + id + '_penColorBtn');
        penColor.inline = true;
        (document.querySelector('.e-pen-stroke-color.e-template .e-dropdownbtn-preview') as HTMLElement).style.background
            = penColor.value;
    }

    function createPenBtn(): void {
        const parent: ImageEditor = imageEditorObj; const id: string = 'imageEditor';
        const strokeWidthItems: DropDownButtonItemModel[] = [
            { id: '1', text: 'XSmall' },
            { id: '2', text: 'Small' },
            { id: '3', text: 'Medium' },
            { id: '4', text: 'Large' },
            { id: '5', text: 'XLarge' }
        ];
        const strokeWidthBtn: HTMLElement = document.getElementById(id + '_penStrokeWidth');
        const spanElem: HTMLElement = document.createElement('span');
        spanElem.innerHTML = 'Small';
        spanElem.className = 'e-pen-stroke-width';
        strokeWidthBtn.appendChild(spanElem);
        const drpDownBtn: DropDownButton = new DropDownButton({ items: strokeWidthItems,
            open: (args: OpenCloseMenuEventArgs) => {
                if (Browser.isDevice) {
                    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top -
                    args.element.parentElement.offsetHeight + 'px';
                }
                const activeBtn: string = spanElem.innerHTML;
                args.element.querySelector('[aria-label = ' + '"' + activeBtn + '"' + ']').classList.add('e-selected-btn');
            },
            select: (args: MenuEventArgs) => {
                isShapeCustomizing = true;
                if (tempShapeSettings && tempShapeSettings.id) {
                    const shapeSetting: ShapeSettings = {id: tempShapeSettings.id, type: ShapeType.FreehandDraw,
                        startX: tempShapeSettings.startX, startY: tempShapeSettings.startY,
                        strokeColor: tempShapeSettings.strokeColor, strokeWidth: parseInt(args.item.id, 10),
                        opacity: tempShapeSettings.opacity, points: tempShapeSettings.points };
                    imageEditorObj.updateShape(shapeSetting);
                    isShapeSelected = true;
                    imageEditorObj.selectShape(tempShapeSettings.id);
                } else {
                    const shapeSetting: ShapeSettings = {id: null, type: ShapeType.FreehandDraw, startX: null, startY: null,
                        strokeWidth: parseInt(args.item.id, 10)};
                    imageEditorObj.updateShape(shapeSetting);
                }
                isShapeCustomizing = false;
                spanElem.textContent = args.item.text;
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                const toolbar: any = getComponent('bottom-toolbar', 'toolbar') as Toolbar;
                toolbar.refreshOverflow();
            }
        });
        // Render initialized DropDownButton.
        drpDownBtn.appendTo('#' + id + '_penStrokeWidth');
    }

    function getTextFromId(id: string): ArrowheadType {
        const idToValue: Object = {'1': ArrowheadType.None, '2': ArrowheadType.Bar, '3': ArrowheadType.Arrow, '4': ArrowheadType.SolidArrow,
            '5': ArrowheadType.Circle, '6': ArrowheadType.SolidCircle, '7': ArrowheadType.Square, '8': ArrowheadType.SolidSquare };
        return idToValue[`${id}`];
    }

    function createCanvasFilter(): void {
        const imageData: ImageData = getCurrentCanvasData();
        const inMemoryCanvas: HTMLCanvasElement = document.createElement('canvas');
        const inMemoryContext: CanvasRenderingContext2D = inMemoryCanvas.getContext('2d');
        inMemoryCanvas.width = imageData.width; inMemoryCanvas.height = imageData.height;
        inMemoryContext.putImageData(imageData, 0, 0);
        updateFilterCanvas('_defaultCanvas', 'default', inMemoryCanvas);
        updateFilterCanvas('_chromeCanvas', 'chrome', inMemoryCanvas);
        updateFilterCanvas('_coldCanvas', 'cold', inMemoryCanvas);
        updateFilterCanvas('_warmCanvas', 'warm', inMemoryCanvas);
        updateFilterCanvas('_grayscaleCanvas', 'grayscale', inMemoryCanvas);
        updateFilterCanvas('_sepiaCanvas', 'sepia', inMemoryCanvas);
        updateFilterCanvas('_invertCanvas', 'invert', inMemoryCanvas);
    }

    function getCurrentCanvasData(): ImageData {
        return imageEditorObj.getImageData();
    }

    function updateFilterCanvas(selector: string, type: string, inMemoryCanvas: HTMLCanvasElement): void {
        const filter: HTMLCanvasElement = document.querySelector('#imageEditor' + selector);
        if (filter) {
            let ctx: CanvasRenderingContext2D = filter.getContext('2d');
            ctx = filter.getContext('2d');
            filter.style.width = '100px'; filter.style.height = '100px';
            imageEditorObj.updateFilterToCanvas(type, ctx);
            ctx.drawImage(inMemoryCanvas, 0, 0, 300, 150);
        }
    }

    function keyDownEventHandler(e: KeyboardEvent): void {
        if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
            e.preventDefault();
        }
        switch (e.key) {
        case (e.ctrlKey && 's'):
            imageEditorObj.export();
            break;
        case (e.ctrlKey && 'z'):
            isTextEditing = false;
            imageEditorObj.undo();
            refreshToolbar('main');
            break;
        case (e.ctrlKey && 'y'):
            isTextEditing = false;
            imageEditorObj.redo();
            refreshToolbar('main');
            break;
        case 'Delete':
            if (isNullOrUndefined(activeObjIndex) && tempShapeSettings && tempShapeSettings.id) {
                activeObjIndex = tempShapeSettings.id;
            }
            if (activeObjIndex) {imageEditorObj.deleteShape(activeObjIndex); }
            refreshToolbar('main');
            break;
        case 'Escape':
            imageEditorObj.cancel();
            refreshToolbar('main');
            break;
        case 'Enter':
            if (document.getElementById('chat-container').style.display !== 'none') {
                newMessage();
            } else if (!(e.target as any).closest('.e-textarea')) {
                imageEditorObj.okBtn();
                refreshToolbar('main');
            }
            break;
        }
    }

    function doubleClickEvent(e: MouseEvent & TouchEvent): void {
        if (e.type === 'dblclick' && (e.target as any).closest('.e-textarea')) {
            isTextEditing = true;
        }
    }
};