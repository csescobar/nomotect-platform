import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useState, useEffect } from 'react';
import {
    PivotViewComponent, Inject, FieldList,
    Toolbar, CalculatedField, NumberFormatting, PDFExport, ExcelExport, ConditionalFormatting,
    type IDataSet, type IDataOptions, OlapEngine, PivotEngine
} from '@syncfusion/ej2-react-pivotview';
import { Menu } from '@syncfusion/ej2-navigations';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';
import { Pivot_Data } from './data-source';
import './interactive-pivot-table.css';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    type: 'JSON' as any,
    dataSource: Pivot_Data as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }] as any,
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
};
let toolbarOptions: any = ['Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'];

function InteractivePivotTableView() {
    const connectFileRef = useRef<HTMLInputElement>(null);
    const reportFileRef = useRef<HTMLInputElement>(null);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState(''); // 'csv' | 'json' | 'report' | 'olap'
    const [remoteUrl, setRemoteUrl] = useState('');
    const shouldAutoConfigRef = useRef(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [currentData, setCurrentData] = useState<any[]>(Pivot_Data);
    const [olapProxyUrl, setOlapProxyUrl] = useState('https://bi.syncfusion.com/olap/msmdpump.dll');
    const [proxyBaseUrl] = useState(''); // reserved for proxy usage if needed
    const [olapConnected, setOlapConnected] = useState(false);
    const [olapDataSources, setOlapDataSources] = useState<string[]>([]);
    const [olapCatalogs, setOlapCatalogs] = useState<string[]>([]);
    const [olapCubes, setOlapCubes] = useState<string[]>([]);
    const [selectedDataSource, setSelectedDataSource] = useState('');
    const [selectedCatalog, setSelectedCatalog] = useState('');
    const [selectedCube, setSelectedCube] = useState('');
    const [loadingSources, setLoadingSources] = useState(false);
    const [loadingCatalogs, setLoadingCatalogs] = useState(false);
    const [loadingCubes, setLoadingCubes] = useState(false);
    const [olapUiMessage, setOlapUiMessage] = useState('');
    const connectMenuRef = useRef<Menu | null>(null);
    const openMenuRef = useRef<Menu | null>(null);
    const defaultUrls = {
        CSV: 'https://cdn.syncfusion.com/data/sales-analysis.csv',
        JSON: 'https://cdn.syncfusion.com/data/sales-analysis.json',
    };

    let pivotObj: any;

    // CSV parse utility
    const parseCSV = (csvString: string): string[][] => {
        const lines = csvString.split(/\r?\n|\r/).filter(line => line.trim());
        return lines.map(line =>
            line.split(',').map(cell => cell.trim().replace(/^"|"$/g, '').replace(/""/g, '"'))
        );
    };

    const isOlapActive = () => {
        const pivot = pivotObj as any;
        if (!pivot) return false;
        const ds: any = pivot.dataSourceSettings || {};
        return pivot.dataType === 'olap' || !!pivot.olapEngineModule || ds.providerType === 'SSAS';
    };

    const cleanOlapForRelational = () => {
        const pivot = pivotObj as any;
        if (!pivot) return;
        pivot.olapEngineModule = null;
        pivot.dataType = 'pivot';
        pivot.engineModule = new PivotEngine();
        if (pivot.dataSourceSettings) {
            (pivot.dataSourceSettings as any).providerType = undefined;
            (pivot.dataSourceSettings as any).catalog = undefined;
            (pivot.dataSourceSettings as any).cube = undefined;
            (pivot.dataSourceSettings as any).url = undefined;
        }
        pivot.refresh();
    };

    const setPivotData = (type: 'CSV' | 'JSON', data: any[] | string[][]) => {
        const pivot = pivotObj as any;
        if (!pivot) return;
        if (isOlapActive()) cleanOlapForRelational();
        pivot.dataSourceSettings.type = type;
        pivot.dataSourceSettings.dataSource = data as any;
        delete (pivot.dataSourceSettings as any).url;
        setCurrentData(data);
        shouldAutoConfigRef.current = true;
        pivot.refresh();
    };

    const applyReportSettings = async (pivot: any, reportSettings: any, isOlapReport: boolean) => {
        if (isOlapReport) {
            setCurrentData([]);
            (pivot as any).olapEngineModule = new OlapEngine();
            (pivot as any).dataType = 'olap';
        } else {
            cleanOlapForRelational();
            const maybeDataUrl: string | undefined = (reportSettings as any).dataUrl || (reportSettings as any).url;
            const maybeCsvUrl: string | undefined = (reportSettings as any).csvUrl;
            if (!reportSettings.dataSource || reportSettings.dataSource.length === 0) {
                try {
                    if (maybeDataUrl) {
                        const res = await fetch(maybeDataUrl, { cache: 'no-store' });
                        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
                        const jsonData: any = await res.json();
                        const arr = Array.isArray(jsonData) ? jsonData : (jsonData?.data ?? jsonData);
                        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'object') {
                            throw new Error('Invalid JSON at dataUrl: expected an array of objects (or under "data").');
                        }
                        (reportSettings as any).type = 'JSON';
                        (reportSettings as any).dataSource = arr;
                        setCurrentData(arr);
                    } else if (maybeCsvUrl) {
                        const res = await fetch(maybeCsvUrl, { cache: 'no-store' });
                        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
                        const csvString = await res.text();
                        const csvArray = parseCSV(csvString);
                        if (!csvArray.length) throw new Error('CSV at csvUrl appears empty.');
                        (reportSettings as any).type = 'CSV';
                        (reportSettings as any).dataSource = csvArray;
                        setCurrentData(csvArray);
                    } else {
                        (reportSettings as any).dataSource = currentData;
                        (reportSettings as any).type = pivot.dataSourceSettings.type || 'JSON';
                    }
                } catch (_e) {
                    (reportSettings as any).dataSource = currentData;
                    (reportSettings as any).type = pivot.dataSourceSettings.type || 'JSON';
                }
            }
        }
        (pivot as any).dataSourceSettings = reportSettings as any;
        shouldAutoConfigRef.current = false;
        pivot.refresh();
    };

    const handleConnectFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const isCsv = e.target.dataset.type === 'csv' || /\.csv$/i.test(file.name);
        const reader = new FileReader();
        reader.onload = async (evt: ProgressEvent<FileReader>) => {
            try {
                const pivot = pivotObj;
                if (pivot && pivot.engineModule) {
                    (pivot.engineModule as any).fieldList = {};
                }
                if (pivot) {
                    pivot.dataSourceSettings.rows = [];
                    pivot.dataSourceSettings.columns = [];
                    pivot.dataSourceSettings.values = [];
                    pivot.dataSourceSettings.filters = [];
                }
                if (isCsv) {
                    const csvString = String(evt.target?.result ?? '');
                    const csvArray = parseCSV(csvString);
                    if (!csvArray.length) { alert('CSV appears empty.'); return; }
                    setPivotData('CSV', csvArray);
                } else {
                    const raw = String(evt.target?.result ?? '');
                    const parsed = JSON.parse(raw);
                    const unwrappedData = (parsed && typeof parsed === 'object' && 'record' in parsed) ? (parsed as any).record : parsed;
                    const looksLikeReport = !Array.isArray(unwrappedData)
                        && (unwrappedData?.dataSourceSettings || unwrappedData?.rows || unwrappedData?.columns || unwrappedData?.values || unwrappedData?.url || unwrappedData?.providerType);
                    if (looksLikeReport) {
                        const reportSettings = (unwrappedData as any).dataSourceSettings ?? unwrappedData;
                        const isOlapReport = (reportSettings as any)?.providerType === 'SSAS';
                        if (pivot) resetPivot();
                        if (pivot) await applyReportSettings(pivot, reportSettings, isOlapReport);
                        return;
                    }
                    const dataArray = Array.isArray(unwrappedData) ? unwrappedData : (unwrappedData?.data ?? unwrappedData);
                    if (!Array.isArray(dataArray) || dataArray.length === 0 || typeof dataArray[0] !== 'object') {
                        alert('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
                        return;
                    }
                    setPivotData('JSON', dataArray);
                }
            } catch (err: any) {
                alert(`Failed to load file: ${err.message}`);
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    };

    function toolbarRender(args: any): void {
        const connectMenu: any = { template: '<ul id="connect_menu"></ul>', id: 'custom_toolbar' };
        args.customToolbar!.splice(0, 0, connectMenu);
        const openMenu: any = { template: '<ul id="open_menu"></ul>', id: 'open_toolbar' };
        args.customToolbar!.splice(1, 0, openMenu);
        const saveItem: any = {
            prefixIcon: 'e-save-report e-btn-icon e-icons',
            tooltipText: 'Save Pivot Report as JSON',
            click: toolbarClicked,
        };
        args.customToolbar!.splice(2, 0, saveItem);
        const separator3: any = { type: 'Separator' };
        args.customToolbar!.splice(3, 0, separator3);
    }

    const onDataBound = () => {
        const pivot = pivotObj;
        if (Browser.isDevice && pivot && pivot.enableRtl) {
            document.querySelector('.control-section')?.classList.add('e-rtl');
        }
        const connectEl = document.getElementById('connect_menu');
        if (connectEl) {
            const menuItems = [{
                iconCss: 'e-connect-report e-btn-icon e-icons',
                items: [
                    {
                        text: 'JSON', iconCss: 'e-json-icon e-icons',
                        items: [
                            { text: 'Local', id: 'local_json' },
                            { text: 'Remote', id: 'remote_json' }
                        ]
                    },
                    {
                        text: 'CSV', iconCss: 'e-csv-icon e-icons',
                        items: [
                            { text: 'Local', id: 'local_csv' },
                            { text: 'Remote', id: 'remote_csv' }
                        ]
                    },
                    { text: 'OLAP (XMLA)', id: 'olap', iconCss: 'e-olap-icon e-icons' },
                ],
            }];
            if (connectMenuRef.current) { connectMenuRef.current.destroy(); connectMenuRef.current = null; }
            connectMenuRef.current = new Menu({ items: menuItems, select: gridToolbarClicked, cssClass: 'e-pivot-toolbar-menu' }, '#connect_menu');
        }
        const openEl = document.getElementById('open_menu');
        if (openEl) {
            const openMenuItems = [
                {
                    iconCss: 'e-open-report e-btn-icon e-icons',
                    items: [
                        {
                            text: 'Load Pivot Report',
                            items: [
                                { text: 'Local (JSON)', id: 'local_report', iconCss: 'e-local-report-icon e-icons' },
                                { text: 'Remote (JSON)', id: 'remote_report', iconCss: 'e-remote-report-icon e-icons' },
                            ],
                        },
                    ],
                },
            ];
            if (openMenuRef.current) { openMenuRef.current.destroy(); openMenuRef.current = null; }
            openMenuRef.current = new Menu({ items: openMenuItems, select: openToolbarClicked, cssClass: 'e-pivot-toolbar-menu' }, '#open_menu');
        }
    };

    const onEnginePopulated = () => {
        if (shouldAutoConfigRef.current && pivotObj) {
            shouldAutoConfigRef.current = false;
            if (pivotObj.dataSourceSettings.values?.length === 0) {
                (pivotObj.pivotFieldListModule.dialogRenderer as any).onShowFieldList();
            }
        }
    };

    const toolbarClicked = async () => { await saveReport(); };

    const saveReport = async () => {
        const pivot = pivotObj;
        if (!pivot) return;
        const download = (content: string, mime: string, filename: string) => {
            const blob = new Blob([content], { type: mime });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = filename; document.body.appendChild(a); a.click();
            document.body.removeChild(a); URL.revokeObjectURL(url);
        };
        try {
            const persisted = pivot.getPersistData();
            let dataSourceSettingsOnly: any = {};
            try {
                const parsed = JSON.parse(persisted);
                parsed.dataSourceSettings.dataSource = [];
                parsed.pivotValues = [];
                dataSourceSettingsOnly = parsed?.dataSourceSettings ?? pivot.dataSourceSettings ?? {};
            } catch {
                dataSourceSettingsOnly = pivot.dataSourceSettings ?? {};
            }
            const json = JSON.stringify(dataSourceSettingsOnly, null, 2);
            download(json, 'application/json', 'pivot.json');
        } catch (err: any) {
            console.error('Save failed:', err);
            alert(`Failed to save: ${err.message}`);
        }
    };

    const openToolbarClicked = (args?: any) => {
        const itemId = args?.item?.id;
        if (!itemId) return;
        if (itemId === 'local_report') {
            const input = connectFileRef.current;
            if (input) {
                input.onchange = null as any;
                (input as any).value = '';
                input.accept = '.json';
                delete (input as any).dataset.type;
                input.onchange = handleConnectFileChange as any;
                input.click();
            }
            return;
        }
        if (itemId === 'remote_report') {
            setDialogType('JSON Report');
            setRemoteUrl('https://api.jsonbin.io/v3/b/6912d9ecd0ea881f40e12335');
            setDialogOpen(true);
            return;
        }
    };

    const gridToolbarClicked = (args?: any) => {
        const itemId = args?.item?.id;
        if (!itemId) return;
        if (itemId === 'local_csv' || itemId === 'local_json') {
            const ext = itemId === 'local_csv' ? 'CSV' : 'JSON';
            const input = connectFileRef.current;
            if (input) {
                input.onchange = null as any;
                (input as any).value = '';
                input.accept = ext === 'CSV' ? '.csv' : '.json';
                (input as any).dataset.type = ext;
                input.onchange = handleConnectFileChange as any;
                input.click();
            }
            return;
        }
        if (itemId === 'remote_csv' || itemId === 'remote_json') {
            const type = itemId === 'remote_csv' ? 'CSV' : 'JSON';
            setDialogType(type);
            setRemoteUrl(defaultUrls[type as 'CSV' | 'JSON'] || '');
            setDialogOpen(true);
            return;
        }
        if (itemId === 'olap') {
            setDialogType('OLAP');
            setDialogOpen(true);
            setOlapConnected(false);
            setOlapUiMessage('');
            setLoadingSources(false);
            setLoadingCatalogs(false);
            setLoadingCubes(false);
            setOlapDataSources([]); setOlapCatalogs([]); setOlapCubes([]);
            setSelectedDataSource(''); setSelectedCatalog(''); setSelectedCube('');
            return;
        }
    };

    const resetPivot = () => {
        const pivot = pivotObj;
        if (pivot && (pivot as any).engineModule) {
            ((pivot as any).engineModule as any).fieldList = {};
        }
        if (pivot) {
            pivot.dataSourceSettings.rows = [];
            pivot.dataSourceSettings.columns = [];
            pivot.dataSourceSettings.values = [];
            pivot.dataSourceSettings.filters = [];
        }
    };

    const xmlaSoapEnvelope = (requestType: string, restrictions: Record<string, string | number | boolean> = {}, properties: Record<string, string | number | boolean> = {}) => {
        const restrXml = Object.keys(restrictions).length
            ? `<Restrictions><RestrictionList>${Object.entries(restrictions).map(([k, v]) => `<${k}>${String(v)}</${k}>`).join('')}</RestrictionList></Restrictions>`
            : '<Restrictions />';
        const propXml = `<Properties><PropertyList>${Object.entries(properties).map(([k, v]) => `<${k}>${String(v)}</${k}>`).join('')}</PropertyList></Properties>`;
        return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header />
  <soap:Body>
    <Discover xmlns="urn:schemas-microsoft-com:xml-analysis">
      <RequestType>${requestType}</RequestType>
      ${restrXml}
      ${propXml}
    </Discover>
  </soap:Body>
</soap:Envelope>`;
    };

    const resolveEndpoint = (endpoint: string) => {
        const trimmed = endpoint.trim();
        if (!proxyBaseUrl) return trimmed;
        const sep = proxyBaseUrl.includes('?') ? '&' : '?';
        return `${proxyBaseUrl}${sep}url=${encodeURIComponent(trimmed)}`;
    };

    const postXMLA = async (endpoint: string, bodyXml: string) => {
        const url = resolveEndpoint(endpoint);
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml; charset=utf-8',
                'Accept': 'text/xml, application/xml, */*;q=0.1',
            },
            body: bodyXml,
        });
        const text = await res.text();
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return text;
    };

    const parseRowset = (xmlText: string) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'text/xml');
        const rows = Array.from(xml.getElementsByTagNameNS('*', 'row'));
        const result: Record<string, string>[] = rows.map((r) => {
            const obj: Record<string, string> = {};
            Array.from(r.children).forEach((c) => { obj[(c as Element).localName] = (c.textContent ?? '').trim(); });
            return obj;
        });
        const fault = xml.getElementsByTagNameNS('*', 'Fault')[0];
        if (fault) { throw new Error((fault.textContent || 'SOAP Fault').trim()); }
        return result;
    };

    const discoverDataSources = async (endpoint: string): Promise<string[]> => {
        const body = xmlaSoapEnvelope('DISCOVER_DATASOURCES');
        const xml = await postXMLA(endpoint, body);
        const rows = parseRowset(xml);
        return rows.map(r => r.DataSourceName).filter(Boolean);
    };

    const discoverCatalogs = async (endpoint: string): Promise<string[]> => {
        const body = xmlaSoapEnvelope('DBSCHEMA_CATALOGS');
        const xml = await postXMLA(endpoint, body);
        const rows = parseRowset(xml);
        return rows.map(r => r.CATALOG_NAME).filter(Boolean);
    };

    const discoverCubes = async (endpoint: string, catalog: string): Promise<string[]> => {
        const body = xmlaSoapEnvelope('MDSCHEMA_CUBES', { CATALOG_NAME: catalog });
        const xml = await postXMLA(endpoint, body);
        const rows = parseRowset(xml);
        return rows.filter(r => r.CUBE_SOURCE === '1').map(r => r.CUBE_NAME).filter(Boolean);
    };

    const applyOlapBinding = async (opts?: { url?: string; catalog?: string; cube?: string }) => {
        const pivot = pivotObj as any;
        if (!pivot) return;
        const url = opts?.url ?? resolveEndpoint(olapProxyUrl);
        const catalog = opts?.catalog ?? selectedCatalog;
        const cube = opts?.cube ?? selectedCube;
        if (!url || !catalog || !cube) return;
        const olapDataSourceSettings: IDataOptions = {
            url, catalog, providerType: 'SSAS', cube, localeIdentifier: 1033, dataSource: [], rows: [], columns: [], values: []
        } as IDataOptions;
        (pivot as any).engineModule = null;
        pivot.olapEngineModule = new OlapEngine();
        pivot.dataType = 'olap';
        pivot.dataSourceSettings = olapDataSourceSettings as any;
        setCurrentData([]);
        shouldAutoConfigRef.current = true;
        pivot.refresh();
    };

    const loadRemoteAndBind = async (kind: 'CSV' | 'JSON', url: string) => {
        const cleanUrl = url.trim();
        if (!cleanUrl) throw new Error('Empty URL');
        resetPivot();
        if (kind === 'CSV') {
            const res = await fetch(cleanUrl, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            const csvString = await res.text();
            const csvArray = parseCSV(csvString);
            if (!csvArray.length) throw new Error('CSV appears empty.');
            setPivotData('CSV', csvArray);
        } else {
            const res = await fetch(cleanUrl, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            const jsonData: any = await res.json();
            const unwrappedData = (jsonData && typeof jsonData === 'object' && 'record' in jsonData) ? jsonData.record : jsonData;
            const looksLikeReport = !Array.isArray(unwrappedData)
                && (unwrappedData?.dataSourceSettings || unwrappedData?.rows || unwrappedData?.columns || unwrappedData?.values || unwrappedData?.url || unwrappedData?.providerType);
            if (looksLikeReport) {
                const reportSettings = (unwrappedData as any).dataSourceSettings ?? unwrappedData;
                const isOlapReport = (reportSettings as any)?.providerType === 'SSAS';
                resetPivot();
                const pivot = pivotObj as any;
                if (pivot) {
                    await applyReportSettings(pivot, reportSettings, isOlapReport);
                    return;
                }
            }
            const arr = Array.isArray(unwrappedData) ? unwrappedData : (unwrappedData?.data ?? unwrappedData);
            if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'object') {
                throw new Error('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
            }
            setPivotData('JSON', arr);
        }
    };

    const handleOpenRemote = async () => {
        if (!remoteUrl.trim()) {
            setErrorMessage('Please enter a valid URL.');
            setDialogOpen(false);
            setIsErrorDialogOpen(true);
            return;
        }
        try {
            await loadRemoteAndBind(dialogType as 'CSV' | 'JSON', remoteUrl);
            setDialogOpen(false);
        } catch (err: any) {
            setErrorMessage(`Failed to load remote ${dialogType}: ${err.message}\n\nTip: Ensure the URL is accessible and allows CORS for your origin.`);
            setDialogOpen(false);
            setIsErrorDialogOpen(true);
        }
    };
    return (
        <div className='control-pane'>
            <div className='control-section' id='pivot-table-section' style={{ overflow: 'initial' }}>
                <input ref={connectFileRef} type="file" id="connectFile" style={{ display: 'none' }} />
                <input ref={reportFileRef} type="file" id="reportFile" style={{ display: 'none' }} />

                {isDialogOpen && dialogType !== 'OLAP' && (
                    <DialogComponent visible={isDialogOpen} isModal showCloseIcon width="480px"
                        header={dialogType === 'JSON Report' ? `Load Pivot Report` : (`Connect to ${dialogType}`)} close={() => setDialogOpen(false)} target=".control-pane"
                        closeOnEscape overlayClick={() => setDialogOpen(false)} position={{ X: 'center', Y: 'center' }}
                        animationSettings={{ effect: 'Zoom', duration: 150 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <input type="text" placeholder={`Enter ${dialogType} URL`} value={remoteUrl} className='e-input'
                                onChange={(e) => setRemoteUrl(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleOpenRemote(); } }}
                                autoFocus />
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                                <ButtonComponent cssClass='e-primary' onClick={handleOpenRemote}>Open</ButtonComponent>
                                <ButtonComponent onClick={() => setDialogOpen(false)}>Cancel</ButtonComponent>
                            </div>
                        </div>
                    </DialogComponent>
                )}

                {isErrorDialogOpen && (
                    <DialogComponent visible={isErrorDialogOpen} isModal showCloseIcon width="420px"
                        header="Error" close={() => setIsErrorDialogOpen(false)} target=".control-pane"
                        closeOnEscape overlayClick={() => setIsErrorDialogOpen(false)} position={{ X: 'center', Y: 'center' }}
                        animationSettings={{ effect: 'Fade', duration: 120 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <p className="error-message">{errorMessage}</p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <ButtonComponent cssClass='e-primary' onClick={() => setIsErrorDialogOpen(false)}>OK</ButtonComponent>
                            </div>
                        </div>
                    </DialogComponent>
                )}

                {isDialogOpen && dialogType === 'OLAP' && (
                    <DialogComponent visible={isDialogOpen} isModal showCloseIcon width="620px" header="Connect to OLAP (XMLA)"
                        close={() => setDialogOpen(false)} target=".control-pane" closeOnEscape overlayClick={() => setDialogOpen(false)}
                        position={{ X: 'center', Y: 'center' }} animationSettings={{ effect: 'Zoom', duration: 150 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div className="olap-row">
                                <label style={{ minWidth: '80px', fontWeight: '500' }}>URL</label>
                                <div style={{ display: 'flex', flex: 1, gap: 8, alignItems: 'center' }}>
                                    <input type="text" className='e-input' value={olapProxyUrl}
                                        onChange={(e) => setOlapProxyUrl(e.target.value)}
                                        placeholder="Enter OLAP endpoint URL (e.g., https://bi.syncfusion.com/olap/msmdpump.dll)" style={{ flex: 1 }} />
                                    <ButtonComponent cssClass='e-primary' onClick={async () => {
                                        setOlapUiMessage(''); setLoadingSources(true);
                                        try {
                                            const sources = await discoverDataSources(olapProxyUrl);
                                            setOlapDataSources(sources); setSelectedDataSource(''); setOlapConnected(true);
                                            setOlapUiMessage(sources.length ? '' : 'No data sources found.');
                                        } catch (e: any) {
                                            const corsHint = ' If the browser blocks this due to CORS, configure a proxy base URL below and try again.';
                                            setOlapUiMessage(`Connect failed: ${e.message}.${corsHint}`);
                                            setOlapConnected(false); setOlapDataSources([]);
                                        } finally { setLoadingSources(false); }
                                    }}>{loadingSources ? 'Connecting…' : 'Connect'}</ButtonComponent>
                                </div>
                            </div>

                            <div className="olap-row">
                                <label style={{ display: 'block', marginBottom: 4, fontWeight: '500' }}>Data Sources</label>
                                <DropDownListComponent value={selectedDataSource} dataSource={olapDataSources} fields={{ text: 'value', value: 'value' }}
                                    placeholder={loadingSources ? 'Loading…' : 'Select data source'} disabled={!olapConnected || loadingSources}
                                    change={async (e) => {
                                        const v = e.value; setSelectedDataSource(v);
                                        setSelectedCatalog(''); setSelectedCube(''); setOlapCatalogs([]); setOlapCubes([]);
                                        if (!v) return; setLoadingCatalogs(true);
                                        try { const cats = await discoverCatalogs(olapProxyUrl); setOlapCatalogs(cats); setSelectedCatalog(''); }
                                        catch (err: any) { setOlapUiMessage(`Load catalogs failed: ${err.message}`); }
                                        finally { setLoadingCatalogs(false); }
                                    }} cssClass="e-input" style={{ width: '100%' }} />
                            </div>

                            <div className="olap-row">
                                <label style={{ display: 'block', marginBottom: 4, fontWeight: '500' }}>Catalogs</label>
                                <DropDownListComponent value={selectedCatalog} dataSource={olapCatalogs} fields={{ text: 'value', value: 'value' }}
                                    placeholder={loadingCatalogs ? 'Loading…' : 'Select catalog'} disabled={!selectedDataSource || loadingCatalogs}
                                    change={async (e) => {
                                        const v = e.value; setSelectedCatalog(v); setSelectedCube(''); setOlapCubes([]);
                                        if (!v) return; setLoadingCubes(true);
                                        try { const cubes = await discoverCubes(olapProxyUrl, v); setOlapCubes(cubes); setSelectedCube(''); }
                                        catch (err: any) { setOlapUiMessage(`Load cubes failed: ${err.message}`); }
                                        finally { setLoadingCubes(false); }
                                    }} cssClass="e-input" style={{ width: '100%' }} />
                            </div>

                            <div className="olap-row">
                                <label style={{ display: 'block', marginBottom: 4, fontWeight: '500' }}>Cubes</label>
                                <DropDownListComponent value={selectedCube} dataSource={olapCubes} fields={{ text: 'value', value: 'value' }}
                                    placeholder={loadingCubes ? 'Loading…' : 'Select cube'} disabled={!selectedCatalog || loadingCubes}
                                    change={async (e) => {
                                        const v = e.value; setSelectedCube(v);
                                        const pivot = pivotObj;
                                        const isOlap = pivot && (pivot.dataSourceSettings as any)?.providerType === 'SSAS';
                                        if (isOlap && v) { await applyOlapBinding({ cube: v }); }
                                    }} cssClass="e-input" style={{ width: '100%' }} />
                            </div>

                            {olapUiMessage && <div style={{ color: 'var(--e-error, #b00020)', fontSize: '14px' }}>{olapUiMessage}</div>}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                                <ButtonComponent cssClass='e-primary' onClick={async () => {
                                    const pivot = pivotObj;
                                    if (!pivot) { setDialogOpen(false); return; }
                                    if (!olapConnected || !selectedCatalog || !selectedCube) { alert('Please connect and select a Catalog and Cube.'); return; }
                                    await applyOlapBinding({ url: resolveEndpoint(olapProxyUrl), catalog: selectedCatalog, cube: selectedCube });
                                    setDialogOpen(false);
                                }} disabled={!olapConnected}>OK</ButtonComponent>
                                <ButtonComponent onClick={() => setDialogOpen(false)}>Cancel</ButtonComponent>
                            </div>
                        </div>
                    </DialogComponent>
                )}

                <PivotViewComponent
                    id='PivotView'
                    ref={(scope) => { pivotObj = scope; }}
                    dataSourceSettings={dataSourceSettings}
                    width={'100%'}
                    height={500}
                    showFieldList
                    showToolbar
                    allowCalculatedField={true}
                    allowPdfExport={true}
                    allowExcelExport={true}
                    allowNumberFormatting={true}
                    allowConditionalFormatting={true}
                    toolbar={toolbarOptions}
                    toolbarRender={toolbarRender}
                    dataBound={onDataBound}
                    enginePopulated={onEnginePopulated}
                    displayOption={{ view: 'Both' }}
                    gridSettings={{ columnWidth: Browser.isDevice ? 100 : 120 }}
                >
                    <Inject services={[FieldList, Toolbar, CalculatedField, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting]} />
                </PivotViewComponent>
            </div>

            <div id="action-description">
                <p>This sample showcases how to dynamically load data from multiple sources in the Pivot Table, including local and remote JSON/CSV files, as well as OLAP (XMLA) databases via a customized toolbar menu options. It highlights powerful analysis features such as drilling, filtering, formatting, and chart toggling. Additionally, you can save and reload pivot table reports as JSON files for future analysis.</p>
            </div>
            <div id="description">
                <p>
                    This sample demonstrates how to dynamically load data from various sources—local and remote JSON/CSV files, and OLAP (XMLA) databases—using a customized toolbar menu. The Pivot Table component automatically binds to these sources at runtime, recalculating aggregations and field configurations as data changes. The intuitive toolbar provides user-friendly options to connect to data sources without code changes.
                </p>
                <b>Loading JSON and CSV Data (Local and Remote)</b>
                <ul>
                    <li>Hover over <b>Data Binding &rarr; JSON</b>, then select <b>Local</b> to choose and load a JSON file from your system.</li>
                    <li>For remote JSON, select <b>Remote</b> to enter the URL and load data into the pivot table. Similarly, CSV data can be loaded from both local files and remote URLs.</li>
                </ul>
                <b>Loading OLAP (XMLA) Data</b>
                <ul>
                    <li>Hover over <b>Data Binding &rarr; OLAP (XMLA)</b> to open the connection popup.</li>
                    <li>Enter the OLAP server URL and click <b>Connect</b>.</li>
                    <li>Select a data source, then a catalog, then a cube from the respective dropdowns.</li>
                    <li>Click <b>OK</b> to load the selected cube and start your analysis.</li>
                </ul>
                <b>Saving and Reloading Reports</b>
                <p>
                    You can save pivot table reports as JSON files to preserve configurations (sorting, filtering, field arrangements, formatting, aggregations). Load saved or remote JSON reports anytime to restore the exact analysis state.
                </p>
            </div>
        </div>
    );
}

class InteractivePivotTable extends SampleBase<{}, {}> {
    render() {
        return <InteractivePivotTableView />;
    }
}
export default InteractivePivotTable;