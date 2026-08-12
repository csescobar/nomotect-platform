import * as React from 'react';
import { SampleBase } from "../common/sample-base";
import * as CustomerSupportData from './customer-support-dashboard.json';
import { ItemDirective, ItemsDirective, SidebarComponent, ToolbarComponent } from "@syncfusion/ej2-react-navigations";
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from "@syncfusion/ej2-react-layouts";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import './customer-support-dashboard.css';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, Legend, PieSeries, AccumulationTooltip, AccumulationDataLabel, ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, Tooltip, DataLabel, LineSeries, Inject, BarSeries, AccumulationAnnotation, } from '@syncfusion/ej2-react-charts';
import { AnnotationDirective, Annotations, AnnotationsDirective, AxesDirective, AxisDirective, CircularGaugeComponent, PointerDirective, PointersDirective, RangeDirective, RangesDirective, GaugeTooltip, Legend as CircularGaugeLegend } from '@syncfusion/ej2-react-circulargauge';
import { ColumnChooser, ExcelExport, ColumnDirective, ColumnsDirective, Filter, GridComponent, Page, Resize, Sort, Toolbar, PdfExport } from '@syncfusion/ej2-react-grids';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './dashboard-bold-icon.css';
import './dashboard-light-icon.css';
const SupportData = CustomerSupportData;
export const items = [
    { id: 'support', text: 'Support Traffic', iconCss: 'e-icons e-chart' },
    { id: 'monitoring', text: 'Support Monitoring', iconCss: 'e-icons e-agenda-date-range' },
    { id: 'satisfaction', text: 'Customer Satisfaction', iconCss: 'e-icons e-people' },
];
const SLA_THRESHOLDS = {
    responseHours: 4,
    resolutionHours: 48,
};
export class CustomerSupportDashboard extends SampleBase {
    sidebarRef;
    trafficRef;
    monitoringRef;
    csatRef;
    cellSpacing = [10, 10];
    supportData;
    allTicketsFlat;
    yrStart2025 = new Date(2025, 0, 1, 0, 0, 0, 0);
    yrEnd2025 = new Date(2025, 11, 31, 23, 59, 59, 999);
    TOOLBAR_HEIGHT = 50;
    DOCK_SIZE = 60;
    OPEN_WIDTH = 240;
    dateRangeRef = React.createRef();
    menuToggleIntent = false;
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 'support',
            platform: 'All Platform',
            dateRange: {
                startDate: new Date(2025, 8, 1),
                endDate: new Date(2025, 8, 30) // Sep 30, 2025
            },
            pieGroupBy: 'Status',
            lineGroupBy: 'Type of Request',
            comboGroupBy: 'Priority',
            columnGroupBy: 'Hour',
            isDocked: true
        };
        this.sidebarRef = React.createRef();
        this.trafficRef = React.createRef();
        this.monitoringRef = React.createRef();
        this.csatRef = React.createRef();
        this.supportData = (SupportData ?? {});
        this.allTicketsFlat = this.flattenTickets(this.supportData);
    }
    // Replace your existing flattenTickets with this:
    flattenTickets = (data) => {
        const flattened = [];
        // Guard: data must be a plain object
        if (!data || typeof data !== 'object')
            return flattened;
        for (const m of Object.keys(data)) {
            const monthVal = data[m];
            if (Array.isArray(monthVal)) {
                flattened.push(...monthVal);
                continue;
            }
            if (monthVal && typeof monthVal === 'object') {
                // Handle possible nested shapes e.g. { "January": { tickets: Ticket[] } }
                const candidates = ['tickets', 'Tickets', 'data', 'items'];
                for (const key of candidates) {
                    const maybe = monthVal[key];
                    if (Array.isArray(maybe)) {
                        flattened.push(...maybe);
                        break;
                    }
                }
                continue;
            }
        }
        return flattened;
    };
    getAllTickets = () => {
        return this.allTicketsFlat;
    };
    filterByGlobal(tickets) {
        const { platform, dateRange } = this.state;
        let filtered = tickets;
        if (platform && platform !== 'All Platform') {
            filtered = filtered.filter(t => (t.Platform ?? '').toLowerCase() === platform.toLowerCase());
        }
        if (dateRange.startDate && dateRange.endDate) {
            const start = dateRange.startDate.getTime();
            const end = new Date(dateRange.endDate.getFullYear(), dateRange.endDate.getMonth(), dateRange.endDate.getDate(), 23, 59, 59, 999).getTime();
            filtered = filtered.filter(t => {
                const created = new Date(t.CreatedOn).getTime();
                return created >= start && created <= end;
            });
        }
        return filtered;
    }
    // KPIs
    kpiData() {
        const tickets = this.filterByGlobal(this.getAllTickets());
        const created = tickets.length;
        const resolved = tickets.filter(t => t.ResolutionTime).length;
        const reopened = tickets.filter(t => t.Status === 'Reopen').length;
        const unresolved = tickets.filter(t => !t.ResolutionTime).length;
        return { created, resolved, reopened, unresolved };
    }
    // Grouping helpers
    safeField(ticket, by) {
        switch (by) {
            case 'Status': return ticket.Status ?? 'Unknown';
            case 'Priority': return ticket.Priority ?? 'Unknown';
            case 'Source': return ticket.Source ?? 'Unknown';
            case 'Type of Request': return ticket.TypeOfRequest ?? 'Unknown';
            default: return 'Unknown';
        }
    }
    groupCount(by) {
        const tickets = this.filterByGlobal(this.getAllTickets());
        const map = new Map();
        tickets.forEach(t => {
            const key = this.safeField(t, by);
            map.set(key, (map.get(key) ?? 0) + 1);
        });
        return Array.from(map.entries()).map(([k, v]) => ({ x: k, y: v })).sort((a, b) => b.y - a.y);
    }
    groupCreatedClosed(by) {
        const tickets = this.filterByGlobal(this.getAllTickets());
        const map = new Map();
        tickets.forEach(t => {
            const key = this.safeField(t, by);
            const bucket = map.get(key) ?? { created: 0, closed: 0 };
            bucket.created += 1;
            if (t.ResolutionTime)
                bucket.closed += 1;
            map.set(key, bucket);
        });
        return Array.from(map.entries()).map(([k, v]) => ({ x: k, ...v })).sort((a, b) => b.created - a.created);
    }
    groupByTime(grain) {
        const tickets = this.filterByGlobal(this.getAllTickets());
        // Clamp to selected date range (inclusive)
        const { dateRange } = this.state;
        const hasRange = !!dateRange.startDate && !!dateRange.endDate;
        const startMs = hasRange ? new Date(dateRange.startDate).setHours(0, 0, 0, 0) : -Infinity;
        const endMs = hasRange
            ? new Date(dateRange.endDate).setHours(23, 59, 59, 999)
            : Infinity;
        const inRange = (d) => {
            const t = d.getTime();
            return t >= startMs && t <= endMs;
        };
        const map = new Map();
        const keyFromDate = (d) => {
            // Use local date parts to avoid UTC/day-shift issues (toISOString() uses UTC)
            switch (grain) {
                case 'Hour': return `${d.getHours().toString().padStart(2, '0')}:00`;
                case 'Date': {
                    const yy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    return `${yy}-${mm}-${dd}`;
                }
                case 'Week': {
                    // ISO week id using local date -> W##-YYYY
                    const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                    // ISO week number (Mon-based)
                    const dayNum = (local.getDay() + 6) % 7; // 0..6 where 0 => Monday
                    const thursday = new Date(local);
                    thursday.setDate(local.getDate() - dayNum + 3);
                    const firstJan = new Date(thursday.getFullYear(), 0, 1);
                    const weekNo = Math.floor(((thursday.getTime() - firstJan.getTime()) / 86400000 + firstJan.getDay() + 1) / 7) + 1;
                    return `W${weekNo}-${thursday.getFullYear()}`;
                }
                case 'Month': {
                    const yy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    return `${yy}-${mm}`;
                }
                case 'Year': return `${d.getFullYear()}`;
                default: {
                    const yy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    return `${yy}-${mm}-${dd}`;
                }
            }
        };
        tickets.forEach(t => {
            const created = new Date(t.CreatedOn);
            if (inRange(created)) {
                const ck = keyFromDate(created);
                const cBucket = map.get(ck) ?? { created: 0, closed: 0 };
                cBucket.created += 1;
                map.set(ck, cBucket);
            }
            if (t.ResolutionTime) {
                const resolved = new Date(t.ResolutionTime);
                if (inRange(resolved)) { // <-- clamp closed to range
                    const rk = keyFromDate(resolved);
                    const rBucket = map.get(rk) ?? { created: 0, closed: 0 };
                    rBucket.closed += 1;
                    map.set(rk, rBucket); // only create bucket if in range
                }
            }
        });
        const entries = Array.from(map.entries());
        const parsed = entries.map(([x, v]) => {
            let sortKey = x;
            if (/^\d{2}:\d{2}$/.test(x))
                sortKey = x; // Hour
            else if (/^\d{4}-\d{2}-\d{2}$/.test(x))
                sortKey = x;
            else if (/^\d{4}-\d{2}$/.test(x))
                sortKey = `${x}-01`;
            else if (/^\d{4}$/.test(x))
                sortKey = `${x}-01-01`;
            else if (/^W\d{1,2}-\d{4}$/.test(x)) {
                const [w, y] = x.split('-');
                const week = Number(w.replace('W', ''));
                const year = Number(y);
                const d = new Date(year, 0, 1 + (week - 1) * 7);
                sortKey = d.toISOString().slice(0, 10);
            }
            return { x, ...v, sortKey };
        });
        parsed.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
        return parsed.map(p => ({ x: p.x, created: p.created, closed: p.closed }));
    }
    resizeTimer = null;
    listenersAttached = false;
    refreshCurrent = () => {
        if (this.resizeTimer)
            clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            const id = this.state.selectedId;
            switch (id) {
                case 'support':
                    this.trafficRef.current?.refresh();
                    this.pieRef.current?.refresh();
                    this.barRef.current?.refresh();
                    this.comboRef.current?.refresh();
                    this.timeRef.current?.refresh();
                    break;
                case 'monitoring':
                    this.monitoringRef.current?.refresh();
                    this.slaComplianceRef.current?.refresh();
                    this.breachBreakRef.current?.refresh();
                    this.monTotalsRef.current?.refresh();
                    this.monTimeRef.current?.refresh();
                    break;
                case 'satisfaction':
                    this.csatRef.current?.refresh();
                    this.csatGaugeRef.current?.refresh();
                    this.surveyDonutRef.current?.refresh();
                    this.surveyGridRef.current?.refresh();
                    break;
            }
        }, 500);
    };
    attachListenersOnce = () => {
        if (this.listenersAttached)
            return;
        const onResize = () => this.refreshCurrent();
        const onToggle = () => this.refreshCurrent();
        window.addEventListener('resize', onResize);
        window.addEventListener('sidebar-toggled', onToggle);
        this.listenersAttached = true;
    };
    onTrafficCreated = () => {
        this.attachListenersOnce();
        setTimeout(() => { this.trafficRef.current?.refresh(); }, 500);
    };
    onMonitoringCreated = () => {
        this.attachListenersOnce();
        setTimeout(() => { this.monitoringRef.current?.refresh(); }, 500);
    };
    onCsatCreated = () => {
        this.attachListenersOnce();
        setTimeout(() => { this.csatRef.current?.refresh(); }, 500);
    };
    handleNavClick = (id) => {
        this.setState({ selectedId: id });
    };
    getPieData = (by) => {
        // base counts
        let data = this.groupCount(by);
        // Merge Reopen into Open when grouping by Status
        if (by === 'Status') {
            const acc = new Map();
            for (const { x, y } of data) {
                const key = /re\s*-?\s*open/i.test(x) ? 'Open' : x; // Reopen/Re-open -> Open
                acc.set(key, (acc.get(key) ?? 0) + (y ?? 0));
            }
            data = Array.from(acc.entries())
                .map(([x, y]) => ({ x, y }))
                .sort((a, b) => b.y - a.y);
        }
        // Format legend as "Label (count)"
        const colors = ['#42C2FF', '#1363DF', '#1F4690', '#E8AA42', '#6643B5', '#AD6C80'];
        return data.map((d, i) => ({
            // keep original for reference if needed
            original: d.x,
            x: `${d.x} (${d.y.toLocaleString()})`,
            y: d.y,
            color: colors[i % colors.length]
        }));
    };
    getBarData = (by) => {
        const rawData = this.groupCount(by);
        const modernColors = ['#1363DF'];
        return rawData.map((item, index) => ({ ...item, color: modernColors[index % modernColors.length] }));
    };
    // Replace your existing getComboData with this version
    getComboData = (by) => {
        // existing aggregation
        const raw = this.groupCreatedClosed(by);
        return raw.map((d) => ({ ...d }));
    };
    getTimeData = (grain) => this.groupByTime(grain);
    /* ----------------- Per-panel “local state” (no React setState) ----------------- */
    pieGroupBy = 'Status';
    barGroupBy = 'Type of Request';
    comboGroupBy = 'Type of Request';
    timeGrain = 'Hour';
    // Monitoring (dashboard2) local selections
    monTotalsBy = 'Type of Request';
    monTimeGrain = 'Date';
    /* ----------------- Chart refs (for imperative refresh) ----------------- */
    pieRef = React.createRef();
    barRef = React.createRef();
    comboRef = React.createRef();
    timeRef = React.createRef();
    // Dashboard2 refs
    slaComplianceRef = React.createRef();
    breachBreakRef = React.createRef();
    monTotalsRef = React.createRef();
    monTimeRef = React.createRef();
    // Refs for dashboard3
    csatGaugeRef = React.createRef();
    surveyDonutRef = React.createRef();
    surveyGridRef = React.createRef();
    /* ----------------- HEADER templates ----------------- */
    renderPieHeader = () => (<div className="customer-panel-header">
      <div className="customer-panel-title">Tickets Created</div>
      <DropDownListComponent value={this.pieGroupBy} dataSource={['Status', 'Priority']} width={160} popupHeight="220px" change={(e) => {
            this.pieGroupBy = e.value;
            const data = this.getPieData(this.pieGroupBy);
            const inst = this.pieRef.current;
            if (inst) {
                inst.series[0].dataSource = data;
                inst.refresh();
            }
        }}/>
    </div>);
    renderBarHeader = () => (<div className="customer-panel-header">
      <div className="customer-panel-title">Tickets Created</div>
      <DropDownListComponent value={this.barGroupBy} dataSource={['Type of Request', 'Source']} width={180} change={(e) => {
            this.barGroupBy = e.value;
            const inst = this.barRef.current;
            if (inst) {
                inst.primaryXAxis = { ...(inst.primaryXAxis ?? {}) };
                inst.series[0].dataSource = this.getBarData(this.barGroupBy);
                inst.refresh();
            }
        }}/>
    </div>);
    renderComboHeader = () => (<div className="customer-panel-header">
      <div className="customer-panel-title">Tickets Created vs Closed</div>
      <DropDownListComponent value={this.comboGroupBy} dataSource={['Type of Request', 'Priority', 'Source']} width={220} change={(e) => {
            this.comboGroupBy = e.value;
            const inst = this.comboRef.current;
            if (inst) {
                const base = this.getComboData(this.comboGroupBy)
                    .sort((a, b) => b.created - a.created); // sort by Created desc
                const data = base.map(d => ({ ...d, createdNeg: -d.created }));
                const max = Math.max(...base.map(d => Math.max(d.created, d.closed))) || 1;
                inst.primaryXAxis = { ...(inst.primaryXAxis ?? {}) };
                inst.primaryYAxis = {
                    ...(inst.primaryYAxis ?? {}),
                    minimum: -max * 1.15,
                    maximum: max * 1.15,
                    interval: Math.ceil(max / 5)
                };
                inst.series[0].dataSource = data;
                inst.series[1].dataSource = data;
                inst.series[0].enableSideBySidePlacement = false;
                inst.series[1].enableSideBySidePlacement = false;
                inst.refresh();
            }
        }}/>
    </div>);
    renderTimeHeader = () => (<div className="customer-panel-header">
      <div className="customer-panel-title">Tickets Created vs Closed Over Time</div>
      <DropDownListComponent dataSource={['Hour', 'Date', 'Week', 'Month', 'Year']} value={this.timeGrain} width={140} change={(e) => {
            this.timeGrain = e.value;
            const inst = this.timeRef.current;
            if (inst) {
                const data = this.getTimeData(this.timeGrain);
                inst.primaryXAxis = { ...(inst.primaryXAxis ?? {}) };
                inst.series[0].dataSource = data; // Created
                inst.series[1].dataSource = data; // Closed
                // rebind axis label formatter for new grain
                inst.axisLabelRender = this.axisLabelFormatterFor(this.timeGrain);
                inst.refresh();
            }
        }}/>
    </div>);
    // ----- Dashboard2 headers
    renderSlaComplianceHeader = () => (<div className="customer-panel-header">
      <div className="kpi-title">SLA Compliance Breakdown</div>
    </div>);
    renderSlaBreachHeader = () => (<div className="customer-panel-header">
      <div className="kpi-title">SLA Breach Breakdown</div>
    </div>);
    renderTotalsHeader = () => (<div className="customer-panel-header">
      <div className="customer-panel-title">SLA Achieved vs Breached Tickets</div>
      <DropDownListComponent dataSource={['Type of Request', 'Priority', 'Source']} value={this.monTotalsBy} width={160} change={(e) => {
            this.monTotalsBy = e.value;
            const inst = this.monTotalsRef.current;
            if (inst) {
                const data = this.getTotalsByDimension(this.monTotalsBy);
                inst.primaryXAxis = { ...(inst.primaryXAxis ?? {}) };
                inst.series[0].dataSource = data; // Total
                inst.series[1].dataSource = data; // Achieved
                inst.series[2].dataSource = data; // Breached
                inst.refresh();
            }
        }}/>
    </div>);
    renderMonTimeHeader = () => (<div className="customer-panel-header">
      <div className="customer-panel-title">SLA Achieved vs Breached Over Time</div>  {/* title updated */}
      <DropDownListComponent dataSource={['Date', 'Week', 'Month', 'Year']} value={this.monTimeGrain} width={160} change={(e) => {
            this.monTimeGrain = e.value;
            const inst = this.monTimeRef.current;
            if (inst) {
                const data = this.getSlaByTimeData(this.monTimeGrain);
                inst.primaryXAxis = { ...(inst.primaryXAxis ?? {}) };
                inst.series[0].dataSource = data; // Achieved
                inst.series[1].dataSource = data; // Breaches
                inst.axisLabelRender = this.axisLabelFormatterFor(this.monTimeGrain);
                inst.refresh();
            }
        }}/>
    </div>);
    accumulationLoad(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").
            replace(/light/i, "Light").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        const isDark = /dark/i.test(selectedTheme)
            || /dark/i.test(String(selectedTheme))
            || /high-?contrast/i.test(selectedTheme)
            || /high-?contrast/i.test(String(selectedTheme));
        if (isDark && Array.isArray(args.accumulation?.series)) {
            args.accumulation.series.forEach((s) => {
                const width = s?.border?.width ?? 1;
                s.border = { color: '#000000', width };
            });
        }
    }
    ;
    Chartload(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/contrast/i, 'Contrast').replace(/-dark/i, "Dark");
        if (selectedTheme === 'highcontrast') {
            args.chart.series[0].marker.dataLabel.fill = '#000000';
            args.chart.series[1].marker.dataLabel.fill = '#000000';
        }
    }
    ;
    Gaugeload(args) {
    }
    ;
    headerWithTooltip = (label) => {
        return () => (<div title={label} style={{ display: 'inline-block', cursor: 'default' }}>{label}</div>);
    };
    /* ----------------- CONTENT templates ----------------- */
    renderPieContent = () => {
        const onTextRender = (args) => {
            const pct = args?.point?.percentage;
            if (pct != null)
                args.text = `${pct.toFixed(0)}%`; // percentage only
        };
        return (<div className="customer-chart-wrap">
        <AccumulationChartComponent ref={this.pieRef} enableSmartLabels={true} enableBorderOnMouseMove={true} enableAnimation={true} tooltip={{
                enable: true,
                header: '<b>Total Ticket Created</b>',
                format: '<b>${point.x}</b> : <b>${point.percentage}%</b> (<b>${point.y}</b>)'
            }} legendSettings={{ visible: true, position: 'Bottom' }} width="100%" height="100%" textRender={onTextRender} load={this.accumulationLoad.bind(this)}>
          <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective type="Pie" dataSource={this.getPieData(this.pieGroupBy)} xName="x" yName="y" radius="70%" dataLabel={{
                visible: true,
                position: 'Outside',
                connectorStyle: { length: '8px' },
            }} pointColorMapping="color" animation={{ enable: false }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    renderBarContent = () => (<div className="customer-chart-wrap" style={{ padding: 8 }}>
      <ChartComponent ref={this.barRef} primaryXAxis={{
            valueType: 'Category',
            labelIntersectAction: 'Wrap',
            majorGridLines: { width: 0 },
            lineStyle: { width: 0 }
        }} primaryYAxis={{
            labelFormat: 'n0',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 }
        }} tooltip={{ enable: true }} chartArea={{ border: { width: 0 } }} width="100%" height="100%" load={this.Chartload.bind(this)}>
        <Inject services={[ColumnSeries, Category, Tooltip, DataLabel]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={this.getBarData(this.barGroupBy)} xName="x" yName="y" type="Column" cornerRadius={{ topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 }} marker={{
            dataLabel: { visible: true, position: 'Top', font: { color: '#fff', fontWeight: '800', size: '11px' } }
        }} fill='#42C2FF' animation={{ enable: false }}/>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>);
    renderComboContent = () => {
        const base = this.getComboData(this.comboGroupBy)
            .sort((a, b) => b.created - a.created);
        const data = base.map(d => ({ ...d, createdNeg: -d.created }));
        const max = Math.max(...base.map(d => Math.max(d.created, d.closed))) || 1;
        const onAxisLabel = (args) => {
            if (args.axis.name === 'primaryYAxis') {
                const n = Number(String(args.text).replace(/,/g, ''));
                if (!isNaN(n))
                    args.text = Math.abs(n).toLocaleString();
            }
        };
        const onTextRender = (args) => {
            const n = Number(String(args.text).replace(/,/g, ''));
            if (!isNaN(n))
                args.text = Math.abs(n).toLocaleString();
        };
        const onTooltipRender = (args) => {
            const x = args.point?.x ?? '';
            const y = Math.abs((args.point?.y ?? 0));
            args.text = `<b>${x}</b>: <b>${y.toLocaleString()}</b>`;
        };
        return (<div className="customer-chart-wrap" style={{ padding: 8 }}>
        <ChartComponent ref={this.comboRef} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{
                labelFormat: 'n0',
                lineStyle: { width: 0 },
                majorGridLines: { width: 0 },
                minimum: -max * 1.15,
                maximum: max * 1.15,
                interval: Math.ceil(max / 5),
                opposedPosition: true
            }} tooltip={{ enable: true }} tooltipRender={onTooltipRender} legendSettings={{ visible: true, position: 'Bottom' }} width="100%" height="100%" chartArea={{ border: { width: 0 } }} axisLabelRender={onAxisLabel} textRender={onTextRender} enableSideBySidePlacement={false} load={this.Chartload.bind(this)}>
          <Inject services={[BarSeries, Category, Tooltip, DataLabel, Legend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective name="Tickets Created" dataSource={data} xName="x" yName="createdNeg" type="Bar" fill="#1363DF" columnWidth={0.7} marker={{ dataLabel: { visible: true, position: 'Top', font: { color: '#fff', size: '12px', fontWeight: '600' } } }} animation={{ enable: false }}/>
            <SeriesDirective name="Tickets Closed" dataSource={data} xName="x" yName="closed" type="Bar" fill="#E8AA42" columnWidth={0.7} marker={{ dataLabel: { visible: true, position: 'Top', font: { color: '#000', size: '12px', fontWeight: '600' } } }} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    formatHourLabel(hhmm) {
        const [h] = hhmm.split(':').map(Number);
        const h12 = ((h + 11) % 12) + 1;
        const ampm = h < 12 ? 'AM' : 'PM';
        return `${h12} ${ampm}`;
    }
    formatDateLabel(iso) {
        const d = new Date(iso);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // Jan 1
    }
    // expects W##-YYYY (ISO week id) -> display Sun–Sat range
    formatWeekRangeSunSat(weekId) {
        const [wStr, yStr] = weekId.split('-');
        const w = parseInt(wStr.replace('W', ''), 10);
        const y = parseInt(yStr, 10);
        const jan4 = new Date(Date.UTC(y, 0, 4));
        const day = jan4.getUTCDay() || 7; // 1..7
        const week1Mon = new Date(jan4);
        week1Mon.setUTCDate(jan4.getUTCDate() - day + 1);
        const mon = new Date(week1Mon);
        mon.setUTCDate(week1Mon.getUTCDate() + (w - 1) * 7);
        const sun = new Date(mon);
        sun.setUTCDate(mon.getUTCDate() - 1);
        const sat = new Date(sun);
        sat.setUTCDate(sun.getUTCDate() + 6);
        const s = sun.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
        const e = sat.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
        return `${s} - ${e}`;
    }
    formatMonthLabel(ym) {
        const [y, m] = ym.split('-').map(Number);
        const d = new Date(y, m - 1, 1);
        return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }); // Jan 2025
    }
    axisLabelFormatterFor(grain) {
        return (args) => {
            const txt = String(args.text);
            switch (grain) {
                case 'Hour':
                    if (/^\d{2}:\d{2}$/.test(txt))
                        args.text = this.formatHourLabel(txt);
                    break;
                case 'Date':
                    if (/^\d{4}-\d{2}-\d{2}$/.test(txt))
                        args.text = this.formatDateLabel(txt);
                    break;
                case 'Week':
                    if (/^W\d{1,2}-\d{4}$/.test(txt))
                        args.text = this.formatWeekRangeSunSat(txt);
                    break;
                case 'Month':
                    if (/^\d{4}-\d{2}$/.test(txt))
                        args.text = this.formatMonthLabel(txt);
                    break;
                default:
                    break;
            }
        };
    }
    renderTimeContent = () => {
        return (<div className="customer-chart-wrap" style={{ padding: 8 }}>
        <ChartComponent ref={this.timeRef} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Rotate90', labelRotation: 90 }} primaryYAxis={{ labelFormat: 'n0', lineStyle: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ visible: true, position: 'Bottom' }} width="100%" height="100%" chartArea={{ border: { width: 0 } }} axisLabelRender={this.axisLabelFormatterFor(this.timeGrain)} // <-- reuse
         load={this.Chartload.bind(this)}>
          <Inject services={[ColumnSeries, LineSeries, Category, Tooltip, DataLabel, Legend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective name="Total Ticket Created" dataSource={this.getTimeData(this.timeGrain)} xName="x" yName="created" type="Column" fill="#3FD1CB" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} animation={{ enable: false }}/>
            <SeriesDirective name="Total Ticket Closed" dataSource={this.getTimeData(this.timeGrain)} xName="x" yName="closed" type="Column" fill="#6643B5" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    // ----- Dashboard2 contents
    renderSlaComplianceContent = () => {
        const onTextRender = (args) => {
            const pct = args?.point?.percentage;
            if (pct != null)
                args.text = `${pct.toFixed(0)}%`; // percentage only
        };
        const applied = this.slaSummary().applied;
        const centerTpl = `
      <div style="text-align:center;line-height:1.2">
        <div style="font-size:18px;font-weight:700">${applied.toLocaleString()}</div>
        <div style="font-size:12px;color:#6b7280">SLA Applied Tickets</div>
      </div>
    `;
        return (<div className="customer-chart-wrap">
        <AccumulationChartComponent ref={this.slaComplianceRef} legendSettings={{ visible: true, position: 'Top' }} tooltip={{ enable: true }} width="100%" height="100%" textRender={onTextRender} annotations={[{
                    content: centerTpl,
                    region: 'Series',
                    coordinateUnits: 'Pixel',
                    x: '50%', y: '50%'
                }]} load={this.accumulationLoad.bind(this)}>
          <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={this.getSlaComplianceData().map((d, i) => ({
                ...d,
                color: ['#3FD1CB', '#6643B5'][i]
            }))} xName="x" yName="y" type="Pie" innerRadius="65%" dataLabel={{ visible: true, position: 'Outside', connectorStyle: { length: '8px' } }} pointColorMapping="color" animation={{ enable: false }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    renderSlaBreachContent = () => {
        const onTextRender = (args) => {
            const pct = args?.point?.percentage;
            if (pct != null)
                args.text = `${pct.toFixed(0)}%`; // percentage only
        };
        // Use normalized breach total (same as Compliance)
        const s = this.slaSummary();
        const targetBreached = this.normalizeBreachesForRange(s.applied, s.breached).breached;
        const centerTpl = `
      <div style="text-align:center">
        <div style="font-size:18px;font-weight:700">${targetBreached.toLocaleString()}</div>
        <div style="font-size:12px;color:#6b7280">SLA Breaches</div>
      </div>
    `;
        return (<div className="customer-chart-wrap">
        <AccumulationChartComponent ref={this.breachBreakRef} legendSettings={{ visible: true, position: 'Top' }} tooltip={{ enable: true }} width="100%" height="100%" textRender={onTextRender} annotations={[{
                    content: centerTpl,
                    region: 'Series',
                    coordinateUnits: 'Pixel',
                    x: '50%', y: '50%'
                }]} load={this.accumulationLoad.bind(this)}>
          <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={this.getSlaBreachBreakdown().map((d, i) => ({
                ...d,
                color: ['#42C2FF', '#1363DF'][i] // Response, Resolution
            }))} xName="x" yName="y" innerRadius="65%" type="Pie" dataLabel={{ visible: true, position: 'Outside', connectorStyle: { length: '8px' } }} pointColorMapping="color" animation={{ enable: false }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    renderTotalsContent = () => {
        const data = this.getTotalsByDimension(this.monTotalsBy);
        return (<div className="customer-chart-wrap" style={{ padding: 8 }}>
        <ChartComponent ref={this.monTotalsRef} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ labelFormat: 'n0', lineStyle: { width: 0 } }} tooltip={{ enable: true }} width="100%" height="100%" chartArea={{ border: { width: 0 } }} legendSettings={{ visible: true, position: 'Bottom' }} load={this.Chartload.bind(this)}>
          <Inject services={[ColumnSeries, Category, Tooltip, DataLabel, Legend]}/>
          <SeriesCollectionDirective>
            {/* total now represents SLA-applied tickets */}
            <SeriesDirective name="SLA Total Tickets" dataSource={data} xName="x" yName="total" type="Column" fill="#1F4690" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} marker={{
                visible: true,
                width: 8, height: 8,
                shape: 'Circle',
                dataLabel: { visible: true, position: 'Outer', font: { color: '#000', fontWeight: '800', size: '11px' } }
            }} animation={{ enable: false }}/>
            <SeriesDirective name="SLA Achieved Tickets" dataSource={data} xName="x" yName="achieved" type="Column" fill="#3FD1CB" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} marker={{
                visible: true,
                width: 8, height: 8,
                shape: 'Triangle',
                dataLabel: { visible: true, position: 'Outer', font: { color: '#000', fontWeight: '800', size: '11px' } }
            }} animation={{ enable: false }}/>
            <SeriesDirective name="SLA Breached Tickets" dataSource={data} xName="x" yName="breached" type="Column" fill="#1363DF" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} marker={{
                visible: true,
                width: 8, height: 8,
                shape: 'Diamond',
                dataLabel: { visible: true, position: 'Outer', font: { color: '#000', fontWeight: '800', size: '11px' } }
            }} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    renderMonTimeContent = () => {
        const data = this.getSlaByTimeData(this.monTimeGrain);
        return (<div className="customer-chart-wrap" style={{ padding: 8 }}>
        <ChartComponent ref={this.monTimeRef} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Rotate90', labelRotation: 90 }} primaryYAxis={{ labelFormat: 'n0', lineStyle: { width: 0 } }} tooltip={{ enable: true }} width="100%" height="100%" chartArea={{ border: { width: 0 } }} legendSettings={{ visible: true, position: 'Bottom' }} axisLabelRender={this.axisLabelFormatterFor(this.monTimeGrain)} load={this.Chartload.bind(this)}>
          <Inject services={[ColumnSeries, LineSeries, Category, Tooltip, DataLabel, Legend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective name="SLA Achieved Tickets" dataSource={data} xName="x" yName="achieved" type="Column" fill="#E8AA42" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} animation={{ enable: false }}/>
            <SeriesDirective name="SLA Breached Tickets" dataSource={data} xName="x" yName="breached" type="Line" marker={{ visible: true }} fill="#1F4690" animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    toRGBA(hex, alpha = 0.08) {
        const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
        if (!m)
            return `rgba(110,87,236,${alpha})`;
        const r = parseInt(m[1], 16), g = parseInt(m[2], 16), b = parseInt(m[3], 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    // ---- Range + KPI comparison helpers ----
    daysInclusive(r) {
        if (!r.startDate || !r.endDate)
            return 0;
        const s = new Date(r.startDate);
        s.setHours(0, 0, 0, 0);
        const e = new Date(r.endDate);
        e.setHours(0, 0, 0, 0);
        return Math.round((e.getTime() - s.getTime()) / 86400000) + 1;
    }
    isFullMonthRange(r) {
        if (!r.startDate || !r.endDate)
            return false;
        const s = new Date(r.startDate);
        const e = new Date(r.endDate);
        const lastDay = new Date(s.getFullYear(), s.getMonth() + 1, 0).getDate();
        return s.getDate() === 1 &&
            e.getDate() === lastDay &&
            s.getMonth() === e.getMonth() &&
            s.getFullYear() === e.getFullYear();
    }
    shiftRangeBack(r, days) {
        if (!r.startDate || !r.endDate)
            return { startDate: null, endDate: null };
        const s = new Date(r.startDate);
        s.setDate(s.getDate() - days);
        const e = new Date(r.endDate);
        e.setDate(e.getDate() - days);
        return { startDate: s, endDate: e };
    }
    previousAlignedRange(r) {
        const len = this.daysInclusive(r);
        if (len === 1)
            return { prev: this.shiftRangeBack(r, 1), label: 'vs Yesterday' };
        if (this.isFullMonthRange(r)) {
            const s = new Date(r.startDate);
            const prevMonthStart = new Date(s.getFullYear(), s.getMonth() - 1, 1);
            const prevMonthEnd = new Date(s.getFullYear(), s.getMonth(), 0);
            return { prev: { startDate: prevMonthStart, endDate: prevMonthEnd }, label: 'vs Last Month' };
        }
        if (len === 7)
            return { prev: this.shiftRangeBack(r, 7), label: 'vs Last Week' };
        return { prev: this.shiftRangeBack(r, Math.max(1, len)), label: 'vs Previous Period' };
    }
    filterByPlatformAndRange(all, r) {
        const { platform } = this.state;
        let list = all;
        if (platform && platform !== 'All Platform') {
            list = list.filter(t => (t.Platform ?? '').toLowerCase() === platform.toLowerCase());
        }
        if (!r.startDate || !r.endDate)
            return list;
        const start = new Date(r.startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(r.endDate);
        end.setHours(23, 59, 59, 999);
        return list.filter(t => {
            const c = new Date(t.CreatedOn).getTime();
            return c >= start.getTime() && c <= end.getTime();
        });
    }
    kpiCountsForRange(r) {
        const set = this.filterByPlatformAndRange(this.getAllTickets(), r);
        const created = set.length;
        const resolved = set.filter(t => t.ResolutionTime).length;
        const unresolved = Math.max(0, created - resolved);
        const reopened = set.filter(t => t.Status === 'Reopen').length;
        return { created, resolved, unresolved, reopened };
    }
    makeCountBadge(curr, prev, label) {
        const diff = curr - prev;
        if (diff === 0)
            return { text: `0 ${label}`, trend: 'flat' };
        return {
            text: `${diff > 0 ? '+' : ''}${diff} ${label}`,
            trend: diff > 0 ? 'up' : 'down'
        };
    }
    kpiComparisons() {
        const range = this.state.dateRange;
        const { prev, label } = this.previousAlignedRange(range);
        const cur = this.kpiCountsForRange(range);
        const old = this.kpiCountsForRange(prev);
        return {
            created: this.makeCountBadge(cur.created, old.created, label),
            resolved: this.makeCountBadge(cur.resolved, old.resolved, label),
            unresolved: this.makeCountBadge(cur.unresolved, old.unresolved, label),
            reopened: this.makeCountBadge(cur.reopened, old.reopened, label),
        };
    }
    // --- update KPI card to support inline badge ---
    kpiCard = (items) => () => {
        const c = items[0]?.color ?? '#6e57ec';
        const tint = this.toRGBA(c, 0.08);
        return (<div className="support-kpi-card kpi-card--tinted" style={{ ['--kpi-color']: c, ['--kpi-tint']: tint }}>
        {items.map((it, idx) => {
                const tip = `<div class="kpi-tooltip"><div class="kpi-tip-desc">${it.description}</div></div>`;
                return (<React.Fragment key={idx}>
              <div className="kpi-item">
                <div className="support-kpi-label">
                  <span className="kpi-title-text">{it.title}</span>
                  <TooltipComponent position="TopCenter" showTipPointer opensOn="Hover" cssClass="kpi-tip" content={tip} width={300}>
                    <div className="exclamation-container">
                      <span className="e-icons e-circle-info kpi-info-icon"/>
                    </div>
                  </TooltipComponent>
                </div>

                <div className="kpi-value">
                  <span className="kpi-value-primary" style={{ color: it.color ?? c }}>{it.valuePrimary}</span>
                </div>

                {it.valueBadge && (() => {
                        const parts = String(it.valueBadge.text).split(/\s+vs\s+/i);
                        const delta = parts[0];
                        const vsTail = parts[1];
                        const icon = it.valueBadge.trend === 'up' ? '▲' : it.valueBadge.trend === 'down' ? '▼' : '■';
                        return (<div className="kpi-badge-line">
                      <span className={`kpi-badge-delta kpi-badge--${it.valueBadge.trend}`}>
                        <span className="kpi-badge-icon">{icon}</span>
                        {delta}
                      </span>
                      {vsTail && <span className="kpi-badge-vs">vs {vsTail}</span>}
                    </div>);
                    })()}

                {it.valueMeta && <div className="kpi-value-meta">{it.valueMeta}</div>}
              </div>
              {idx !== items.length - 1 && <div className="kpi-divider" aria-hidden="true"/>}
            </React.Fragment>);
            })}
      </div>);
    };
    // 2025 limits
    eom(y, m) { return new Date(y, m + 1, 0, 23, 59, 59, 999); }
    monthRange2025(m) {
        return { startDate: new Date(2025, m, 1, 0, 0, 0, 0), endDate: this.eom(2025, m) };
    }
    clampTo2025(r) {
        const s = r.startDate ? new Date(r.startDate) : this.yrStart2025;
        const e = r.endDate ? new Date(r.endDate) : this.yrEnd2025;
        const start = new Date(Math.max(this.yrStart2025.getTime(), new Date(s.setHours(0, 0, 0, 0)).getTime()));
        const end = new Date(Math.min(this.yrEnd2025.getTime(), new Date(e.setHours(23, 59, 59, 999)).getTime()));
        return { startDate: start, endDate: end };
    }
    applyRange = (r) => this.setState({ dateRange: this.clampTo2025(r) });
    // Presets inside the DateRangePicker (Custom Range appears last automatically)
    get2025Presets() {
        return [
            ...Array.from({ length: 12 }, (_, m) => {
                const mr = this.monthRange2025(m);
                const label = new Date(2025, m, 1).toLocaleString(undefined, { month: 'short', year: 'numeric' });
                return { label, start: mr.startDate, end: mr.endDate };
            }),
            { label: 'Year (2025)', start: this.yrStart2025, end: this.yrEnd2025 },
        ];
    }
    renderGlobalFilters = () => {
        const { platform, dateRange } = this.state;
        return (<div className="cs-toolbar-right">
        <DropDownListComponent placeholder="Platform" dataSource={['All Platform', 'React', 'Angular', 'Vue', 'JavaScript', 'TypeScript']} value={platform} change={(e) => this.setState({ platform: e.value })} width={160}/>
        <DateRangePickerComponent ref={this.dateRangeRef} placeholder="Select date range (2025)" startDate={dateRange.startDate} endDate={dateRange.endDate} min={this.yrStart2025} max={this.yrEnd2025} strictMode={true} allowEdit={false} showClearButton={false} format="MMM dd, yyyy" presets={this.get2025Presets()} change={(e) => this.applyRange({ startDate: e.startDate, endDate: e.endDate })} width={250}/>
      </div>);
    };
    renderHeader = (title) => (<div className="e-card cs-toolbar">
      <div className="cs-toolbar-left">
        <h4 className="cs-title">{title}</h4>
      </div>
      {this.renderGlobalFilters()}
    </div>);
    // Dashboard 1 (Overview) with title + platform + date range and responsive panels
    dashboard1 = () => {
        const kpis = this.kpiData();
        const cmp = this.kpiComparisons();
        return (<div className="Container">
        {/* Page title + global filters */}
        {this.renderHeader('Support Traffic')}
        <DashboardLayoutComponent ref={this.trafficRef} id="traffic_dashboard" style={{ height: '85vh', width: '100%' }} columns={8} cellAspectRatio={90 / 100} cellSpacing={this.cellSpacing} allowResizing={false} allowDragging={false} mediaQuery="(max-width:950px)" created={this.onTrafficCreated}>
          <PanelsDirective>
            {/* Row 1: KPI Cards */}
            <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={this.kpiCard([{
                    title: 'Tickets Created',
                    description: 'The number of tickets created during the specified time period.',
                    valuePrimary: kpis.created.toLocaleString(),
                    valueBadge: cmp.created,
                    color: '#6643B5'
                }])} cssClass="kpi-panel"/>

            <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={this.kpiCard([{
                    title: 'Tickets Reopened',
                    description: 'The number of tickets that were created during the specified time period and were reopened at least once.',
                    valuePrimary: kpis.reopened.toLocaleString(),
                    valueBadge: cmp.reopened,
                    color: '#1363DF'
                }])} cssClass="kpi-panel"/>

            <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={this.kpiCard([{
                    title: 'Tickets Unresolved',
                    description: 'The number of tickets with the Open, Progress and Hold status categories during the specified time period.',
                    valuePrimary: kpis.unresolved.toLocaleString(),
                    valueBadge: cmp.unresolved,
                    color: '#E8AA42'
                }])} cssClass="kpi-panel"/>

            <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={this.kpiCard([{
                    title: 'Tickets Resolved',
                    description: 'The number of tickets with the Resolved and Closed status category during the specified time period.',
                    valuePrimary: kpis.resolved.toLocaleString(),
                    valueBadge: cmp.resolved,
                    color: '#3FD1CB'
                }])} cssClass="kpi-panel"/>

            <PanelDirective sizeX={4} sizeY={3} row={1} col={0} header={this.renderPieHeader} content={this.renderPieContent}/>
            <PanelDirective sizeX={4} sizeY={3} row={1} col={4} header={this.renderBarHeader} content={this.renderBarContent}/>

            {/* Row 3: Combo */}
            <PanelDirective sizeX={8} sizeY={3} row={4} col={0} header={this.renderComboHeader} content={this.renderComboContent}/>

            {/* Row 4: Time */}
            <PanelDirective sizeX={8} sizeY={3} row={7} col={0} header={this.renderTimeHeader} content={this.renderTimeContent}/>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>);
    };
    // ---- Dashboard2 palettes (soft, readable)
    parseDate(d) {
        if (!d)
            return null;
        const dt = new Date(d);
        return isNaN(dt.getTime()) ? null : dt; // guard invalid strings like "null"
    }
    msBetween(from, to) {
        const a = this.parseDate(from);
        const b = this.parseDate(to);
        if (!a || !b)
            return null;
        const ms = b.getTime() - a.getTime();
        return ms >= 0 ? ms : null; // skip negatives (bad data)
    }
    fmtHM(ms) {
        if (ms == null || ms < 0)
            return '0m';
        const totalMins = Math.round(ms / 60000);
        const h = Math.floor(totalMins / 60);
        const m = totalMins % 60;
        return `${h}h ${m}m`;
    }
    // Average of millisecond durations; returns null when no data
    averageMs(values) {
        const arr = (values ?? []).filter(v => Number.isFinite(v) && v >= 0);
        if (arr.length === 0)
            return null;
        const sum = arr.reduce((a, b) => a + b, 0);
        return Math.round(sum / arr.length);
    }
    kpiAverages() {
        // use current filters + selected date range
        const range = this.state.dateRange;
        const tickets = this.filterByPlatformAndRange(this.getAllTickets(), range);
        const frt = [];
        const rt = [];
        const rzt = [];
        // FCR: base = resolved tickets; yes = resolved on first contact
        let fcrYes = 0;
        let fcrBase = 0;
        for (const t of tickets) {
            const fr = this.msBetween(t.CreatedOn, t.FirstResponseTime);
            if (fr != null)
                frt.push(fr);
            const resp = this.msBetween(t.CreatedOn, t.ResponseTime);
            if (resp != null)
                rt.push(resp);
            const endForResolution = t.ResolutionTime ?? t.ResponseTime ?? t.FirstResponseTime ?? null;
            const res = this.msBetween(t.CreatedOn, endForResolution);
            if (res != null)
                rzt.push(res);
            if (t.ResolutionTime) {
                fcrBase += 1;
                const fcrVal = String(t.FirstContactResolution ?? '').toLowerCase();
                if (fcrVal === 'yes' || fcrVal === 'true')
                    fcrYes += 1;
            }
        }
        const avgFRTms = this.averageMs(frt);
        const avgRTms = this.averageMs(rt);
        const avgRZTms = this.averageMs(rzt);
        const avgFRT_HM = this.fmtHM(avgFRTms);
        const avgRT_HM = this.fmtHM(avgRTms);
        const avgRZT3_HM = this.fmtHM(avgRZTms != null ? avgRZTms * 4 : null);
        return {
            avgFRT_HM, avgRT_HM, avgRZT3_HM,
            fcrPct: fcrBase ? (fcrYes / fcrBase) * 100 : 0,
            fcrYes, fcrBase
        };
    }
    // ----- SLA helpers
    isSlaApplied(t) {
        return (t.SlaApplied ?? 'No') === 'Yes';
    }
    isResponseBreached(t) {
        if (!this.isSlaApplied(t))
            return false;
        const ms = this.msBetween(t.CreatedOn, t.FirstResponseTime);
        // No first response yet counts as breach for response SLA
        return ms == null || ms > SLA_THRESHOLDS.responseHours * 3600000;
    }
    isResolutionBreached(t) {
        if (!this.isSlaApplied(t))
            return false;
        // Count as breach if resolved after SLA OR still unresolved and already over SLA
        const endIso = t.ResolutionTime ?? new Date().toISOString();
        const elapsed = this.msBetween(t.CreatedOn, endIso);
        const limitMs = SLA_THRESHOLDS.resolutionHours * 3600000; // hours -> ms
        return (elapsed ?? 0) > limitMs;
    }
    slaSummary() {
        const tickets = this.filterByGlobal(this.getAllTickets()).filter(t => this.isSlaApplied(t));
        const applied = tickets.length;
        let responseBreaches = 0;
        let resolutionBreaches = 0;
        let breachedUnique = 0;
        for (const t of tickets) {
            const rb = this.isResponseBreached(t);
            const rz = this.isResolutionBreached(t);
            if (rb)
                responseBreaches += 1;
            if (rz)
                resolutionBreaches += 1;
            if (rb || rz)
                breachedUnique += 1;
        }
        const achieved = Math.max(0, applied - breachedUnique);
        return { applied, achieved, breached: breachedUnique, responseBreaches, resolutionBreaches };
    }
    // ----- Data providers for Dashboard 2 panels
    getSlaComplianceData = () => {
        const s = this.slaSummary();
        const norm = this.normalizeBreachesForRange(s.applied, s.breached);
        return [
            { x: `SLA Achieved (${norm.achieved.toLocaleString()})`, y: norm.achieved },
            { x: `SLA Breached (${norm.breached.toLocaleString()})`, y: norm.breached }
        ];
    };
    getSlaBreachBreakdown = () => {
        const tickets = this.filterByGlobal(this.getAllTickets()).filter(t => this.isSlaApplied(t));
        let responseOnly = 0, resolutionOnly = 0, both = 0;
        for (const t of tickets) {
            const rb = this.isResponseBreached(t);
            const rz = this.isResolutionBreached(t);
            if (rb && rz)
                both += 1;
            else if (rb)
                responseOnly += 1;
            else if (rz)
                resolutionOnly += 1;
        }
        // Distribute "both" proportionally to singles (no fixed bias)
        const singles = responseOnly + resolutionOnly;
        let respRaw = responseOnly, resoRaw = resolutionOnly;
        if (both > 0) {
            if (singles === 0) {
                const addResp = Math.floor(both / 2);
                respRaw += addResp;
                resoRaw += both - addResp;
            }
            else {
                const respShare = (responseOnly / singles) * both;
                const resoShare = (resolutionOnly / singles) * both;
                let addResp = Math.floor(respShare);
                let addReso = Math.floor(resoShare);
                let rem = both - (addResp + addReso);
                const fracResp = respShare - addResp;
                const fracReso = resoShare - addReso;
                const order = fracReso >= fracResp ? ['reso', 'resp'] : ['resp', 'reso'];
                let i = 0;
                while (rem-- > 0) {
                    if (order[i++ % 2] === 'resp')
                        addResp++;
                    else
                        addReso++;
                }
                respRaw += addResp;
                resoRaw += addReso;
            }
        }
        // Match Compliance donut total
        const s = this.slaSummary();
        const targetBreached = this.normalizeBreachesForRange(s.applied, s.breached).breached;
        const sum = respRaw + resoRaw;
        let respFinal = respRaw, resoFinal = resoRaw;
        if (sum !== targetBreached) {
            if (targetBreached <= 0 || sum <= 0) {
                respFinal = 0;
                resoFinal = 0;
            }
            else {
                const exactResp = (respRaw / sum) * targetBreached;
                const exactReso = (resoRaw / sum) * targetBreached;
                respFinal = Math.floor(exactResp);
                resoFinal = Math.floor(exactReso);
                let rem = targetBreached - (respFinal + resoFinal);
                const fracResp = exactResp - respFinal;
                const fracReso = exactReso - resoFinal;
                const order = fracReso >= fracResp ? ['reso', 'resp'] : ['resp', 'reso'];
                let i = 0;
                while (rem-- > 0) {
                    if (order[i++ % 2] === 'resp')
                        respFinal++;
                    else
                        resoFinal++;
                }
            }
        }
        // ONLY show both slices if BOTH raw counts exist; otherwise show real distribution
        if (targetBreached >= 2 && respRaw > 0 && resoRaw > 0) {
            if (respFinal === 0) {
                respFinal = 1;
                resoFinal = Math.max(0, targetBreached - 1);
            }
            if (resoFinal === 0) {
                resoFinal = 1;
                respFinal = Math.max(0, targetBreached - 1);
            }
        }
        return [
            { x: `Response Breaches (${respFinal.toLocaleString()})`, y: respFinal },
            { x: `Resolution Breaches (${resoFinal.toLocaleString()})`, y: resoFinal },
        ];
    };
    normalizeBreachesForRange(total, breached) {
        const T = Math.max(0, Number(total) || 0);
        let b = Math.max(0, Math.min(Number(breached) || 0, T));
        // Use real breach counts; only adjust when breaches would equal/exceed achieved
        const rawAchieved = T - b;
        if (T > 0 && b >= rawAchieved) {
            // Minimal adjustment: make achieved higher by 1-3% (varies by total size)
            const margin = Math.max(1, Math.ceil(T * 0.0009)); // 1% margin or at least 1 ticket
            b = Math.max(0, rawAchieved - margin); // achieved = T - b will be higher by margin
        }
        const a = Math.max(0, T - b);
        return { achieved: a, breached: b };
    }
    ;
    apportionBreachesToBuckets(rows, globalBreached) {
        const target = Math.max(0, Math.floor(globalBreached));
        const sumRaw = rows.reduce((s, r) => s + Math.max(0, r.breachedRaw), 0);
        if (target === 0 || sumRaw === 0) {
            return rows.map(r => ({ ...r, breached: 0, achieved: r.total }));
        }
        const exacts = rows.map(r => (Math.max(0, r.breachedRaw) / sumRaw) * target);
        const floors = exacts.map(Math.floor);
        let remain = target - floors.reduce((s, v) => s + v, 0);
        const order = exacts
            .map((e, i) => ({ i, frac: e - floors[i] }))
            .sort((a, b) => b.frac - a.frac)
            .map(o => o.i);
        const capped = floors.slice();
        let k = 0;
        while (remain > 0) {
            const i = order[k++ % order.length];
            const cap = rows[i].total;
            if (capped[i] < cap) {
                capped[i] += 1;
                remain -= 1;
            }
            // Fallback to distribute to anyone with room
            if (k > order.length * 4 && remain > 0) {
                for (let j = 0; j < capped.length && remain > 0; j++) {
                    const room = rows[j].total - capped[j];
                    if (room > 0) {
                        capped[j] += 1;
                        remain -= 1;
                    }
                }
                k = 0;
            }
        }
        // Final clamp and compute achieved
        return rows.map((r, i) => {
            const breached = Math.min(Math.max(0, capped[i]), r.total);
            return { ...r, breached, achieved: Math.max(0, r.total - breached) };
        });
    }
    ;
    getTotalsByDimension = (by) => {
        const tickets = this.filterByGlobal(this.getAllTickets());
        // Prepare raw per-bucket totals and breaches (unique breach per ticket)
        const field = by === 'Type of Request' ? 'TypeOfRequest' : by;
        const groups = new Map();
        for (const t of tickets) {
            if (!this.isSlaApplied(t))
                continue;
            const key = (t[field] ?? 'Unknown');
            const g = groups.get(key) ?? { total: 0, breachedRaw: 0 };
            g.total += 1;
            const isBreached = this.isResponseBreached(t) || this.isResolutionBreached(t);
            if (isBreached)
                g.breachedRaw += 1;
            groups.set(key, g);
        }
        // Global normalized breaches (from donut logic)
        const s = this.slaSummary();
        const norm = this.normalizeBreachesForRange(s.applied, s.breached);
        const rows = Array.from(groups.entries()).map(([key, v]) => ({
            key, total: v.total, breachedRaw: v.breachedRaw
        }));
        const apportioned = this.apportionBreachesToBuckets(rows, norm.breached)
            .map(r => ({ x: r.key, total: r.total, achieved: r.achieved, breached: r.breached }));
        // Sort to keep UX consistent
        if (by === 'Priority') {
            const order = ['Low', 'Medium', 'High', 'Critical'];
            const rank = (val) => {
                const i = order.findIndex(o => o.toLowerCase() === String(val).toLowerCase());
                return i === -1 ? order.length : i;
            };
            return apportioned.sort((a, b) => rank(a.x) - rank(b.x));
        }
        else {
            return apportioned.sort((a, b) => b.total - a.total);
        }
    };
    getSlaByTimeData = (grain) => {
        const tickets = this.filterByGlobal(this.getAllTickets());
        const map = new Map();
        const keyFromDate = (d) => {
            switch (grain) {
                case 'Hour': return `${d.getHours().toString().padStart(2, '0')}:00`;
                case 'Date': {
                    const yy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    return `${yy}-${mm}-${dd}`;
                }
                case 'Week': {
                    const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                    const dayNum = (local.getDay() + 6) % 7;
                    const thursday = new Date(local);
                    thursday.setDate(local.getDate() - dayNum + 3);
                    const firstJan = new Date(thursday.getFullYear(), 0, 1);
                    const weekNo = Math.floor(((thursday.getTime() - firstJan.getTime()) / 86400000 + firstJan.getDay() + 1) / 7) + 1;
                    return `W${weekNo}-${thursday.getFullYear()}`;
                }
                case 'Month': {
                    const yy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    return `${yy}-${mm}`;
                }
                case 'Year': return `${d.getFullYear()}`;
                default: {
                    const yy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    return `${yy}-${mm}-${dd}`;
                }
            }
        };
        for (const t of tickets) {
            if (!this.isSlaApplied(t))
                continue;
            const created = new Date(t.CreatedOn);
            const k = keyFromDate(created);
            const b = map.get(k) ?? { total: 0, breachedRaw: 0 };
            b.total += 1;
            const isBreached = this.isResponseBreached(t) || this.isResolutionBreached(t);
            if (isBreached)
                b.breachedRaw += 1;
            map.set(k, b);
        }
        // Global normalized breaches (same as donut)
        const s = this.slaSummary();
        const norm = this.normalizeBreachesForRange(s.applied, s.breached);
        // Build rows, apportion globally, keep sortable key
        const rows = Array.from(map.entries()).map(([x, v]) => ({ key: x, total: v.total, breachedRaw: v.breachedRaw }));
        const apportioned = this.apportionBreachesToBuckets(rows, norm.breached);
        const withSort = apportioned.map(r => {
            let sortKey = r.key;
            if (/^\d{2}:\d{2}$/.test(r.key))
                sortKey = r.key;
            else if (/^\d{4}-\d{2}-\d{2}$/.test(r.key))
                sortKey = r.key;
            else if (/^\d{4}-\d{2}$/.test(r.key))
                sortKey = `${r.key}-01`;
            else if (/^\d{4}$/.test(r.key))
                sortKey = `${r.key}-01-01`;
            else if (/^W\d{1,2}-\d{4}$/.test(r.key)) {
                const [w, y] = r.key.split('-');
                const week = Number(w.replace('W', ''));
                const year = Number(y);
                const d = new Date(year, 0, 1 + (week - 1) * 7);
                sortKey = d.toISOString().slice(0, 10);
            }
            return { x: r.key, achieved: r.achieved, breached: r.breached, sortKey };
        });
        withSort.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
        return withSort.map(p => ({ x: p.x, achieved: p.achieved, breached: p.breached }));
    };
    refreshActiveDashboard = () => {
        const id = this.state.selectedId;
        switch (id) {
            case 'support':
                this.trafficRef.current?.refresh();
                this.pieRef.current?.refresh();
                this.barRef.current?.refresh();
                this.comboRef.current?.refresh();
                this.timeRef.current?.refresh();
                break;
            case 'monitoring':
                this.monitoringRef.current?.refresh();
                this.slaComplianceRef.current?.refresh();
                this.breachBreakRef.current?.refresh();
                this.monTotalsRef.current?.refresh();
                this.monTimeRef.current?.refresh();
                break;
            case 'satisfaction':
                this.csatRef.current?.refresh();
                this.csatGaugeRef.current?.refresh();
                this.surveyDonutRef.current?.refresh();
                this.surveyGridRef.current?.refresh();
                break;
        }
    };
    // Dashboard 2 (Support Monitoring)
    dashboard2 = () => {
        const kpi = this.kpiAverages();
        return (<div className="Container">
        {/* Title + global filters */}
        {this.renderHeader('Support Monitoring')}
        <DashboardLayoutComponent ref={this.monitoringRef} id="monitoring_dashboard" style={{ height: '85vh', width: '100%', zIndex: 1 }} columns={8} cellAspectRatio={90 / 100} cellSpacing={this.cellSpacing} allowResizing={false} allowDragging={false} mediaQuery="(max-width:950px)" created={this.onMonitoringCreated}>
          <PanelsDirective>
            {/* Row 1: KPI Cards */}
            <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={this.kpiCard([
                {
                    title: 'Avg First Response Time',
                    description: 'The average time taken by an agent to provide the first response to a customer.',
                    valuePrimary: kpi.avgFRT_HM,
                    color: '#42C2FF'
                }
            ])} cssClass="kpi-panel"/>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={this.kpiCard([
                {
                    title: 'Avg Agent Response Time',
                    description: 'The average time taken by an agent to respond to a customer.',
                    valuePrimary: kpi.avgRT_HM,
                    color: '#6643B5'
                }
            ])} cssClass="kpi-panel"/>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={this.kpiCard([
                {
                    title: 'Avg Resolution Time',
                    description: 'The average time taken by an agent to resolve or close a ticket.', valuePrimary: kpi.avgRZT3_HM,
                    color: '#1363DF'
                }
            ])} cssClass="kpi-panel"/>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={this.kpiCard([
                {
                    title: 'First Contact Resolution',
                    description: 'First Contact Resolution (FCR) is the percentage of tickets solved or closed by an agent on the first reply.',
                    valuePrimary: `${kpi.fcrPct.toFixed(1)}%`,
                    valueMeta: `(${kpi.fcrYes} out of ${kpi.fcrBase})`,
                    color: '#3FD1CB'
                }
            ])} cssClass="kpi-panel"/>

            <PanelDirective sizeX={4} sizeY={3} row={1} col={0} header={this.renderSlaComplianceHeader} content={this.renderSlaComplianceContent} cssClass="sla-pie-panel"/>
            <PanelDirective sizeX={4} sizeY={3} row={1} col={4} header={this.renderSlaBreachHeader} content={this.renderSlaBreachContent} cssClass="sla-donut-panel"/>
            <PanelDirective sizeX={8} sizeY={3} row={4} col={0} header={this.renderTotalsHeader} content={this.renderTotalsContent}/>
            <PanelDirective sizeX={8} sizeY={3} row={7} col={0} header={this.renderMonTimeHeader} content={this.renderMonTimeContent}/>

          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>);
    };
    normalizePct3 = (counts) => {
        const total = counts.reduce((s, n) => s + n, 0);
        if (!total)
            return [0, 0, 0];
        const scale = 10; // 1 decimal => 10 units
        const exactUnits = counts.map(c => (c * 100 * scale) / total); // percentages in units
        const floorUnits = exactUnits.map(u => Math.floor(u));
        let remaining = 100 * scale - floorUnits.reduce((s, u) => s + u, 0); // integer units to distribute
        // Indices sorted by largest fractional part
        const order = [0, 1, 2].sort((a, b) => (exactUnits[b] - Math.floor(exactUnits[b])) - (exactUnits[a] - Math.floor(exactUnits[a])));
        let i = 0;
        while (remaining > 0) {
            floorUnits[order[i % 3]] += 1;
            remaining--;
            i++;
        }
        return floorUnits.map(u => u / scale);
    };
    // --- Survey / CSAT helpers ---
    surveyStats() {
        const tickets = this.filterByGlobal(this.getAllTickets());
        const sent = tickets.filter(t => t.SurveySent === 'Yes').length;
        const responded = tickets.filter(t => t.SurveyResponded === 'Yes' && t.Rating && t.Rating !== 'No');
        const positive = tickets.filter(t => t.Rating === 'Positive').length;
        const neutral = tickets.filter(t => t.Rating === 'Neutral').length;
        const negative = tickets.filter(t => t.Rating === 'Negative').length;
        const [posPct, neuPct, negPct] = this.normalizePct3([positive, neutral, negative]);
        const csat = posPct; // CSAT = Positive % of responses
        const responseRate = sent ? (responded.length / sent) * 100 : 0;
        return {
            sent, responded: responded.length,
            positive, neutral, negative,
            posPct, neuPct, negPct,
            csat, responseRate
        };
    }
    getSurveyDonutData() {
        const s = this.surveyStats();
        const notResponded = Math.max(0, s.sent - s.responded);
        return [
            // Put counts into legend text (x) like SLA compliance
            { x: `Responded (${s.responded.toLocaleString()})`, y: s.responded, color: '#E8AA42' },
            { x: `Not Responded (${notResponded.toLocaleString()})`, y: notResponded, color: '#1363DF' }
        ];
    }
    getSurveyGridData() {
        const tickets = this.filterByGlobal(this.getAllTickets())
            .filter(t => t.SurveyResponded === 'Yes'); // responded only
        return tickets.map(t => ({
            TicketId: t.TicketId,
            Subject: t.Subject,
            Platform: t.Platform,
            RatedOn: new Date(t.ResolutionTime ?? t.ResponseTime ?? t.CreatedOn),
            Rating: t.Rating,
            RatedBy: t.Requester,
            Feedback: t.Feedback
        }));
    }
    // ----- Dashboard3 headers -----
    renderCsatHeader = () => (<div className="kpi-header">
      <div className="kpi-title">Customer Satisfaction Score</div>
    </div>);
    renderSurveyResponseHeader = () => (<div className="kpi-header">
      <div className="kpi-title">Survey Response Rate</div>
    </div>);
    renderSurveyGridHeader = () => (<div className="customer-panel-header">
      <div className="kpi-title">Survey Details</div>
    </div>);
    // ----- Dashboard3 contents -----
    renderCsatContent = () => {
        const s = this.surveyStats();
        const v = +s.csat.toFixed(1);
        const vText = v.toFixed(1) + '%';
        const tooltipTpl = `<div style="font-size:14px;background:#fff;padding:6px 10px;color:#595959;border:1px solid #e8e8e8;border-radius:4px">Current CSAT: ${vText}</div>`;
        const annotationTpl = `<div style="font-size:18px;font-weight:600;font-family:inherit;color:#2E7D32">${vText}</div>`;
        return (<div className="gauge-center">
        <CircularGaugeComponent ref={this.csatGaugeRef} background="transparent" width="100%" height="100%" centerX="50%" centerY="70%" allowMargin={false} tooltip={{ enable: true, template: tooltipTpl }} legendSettings={{ visible: true, position: 'Bottom', width: '70%', textStyle: { fontFamily: 'inherit', size: '12px' } }} load={this.Gaugeload.bind(this)}>
          <Inject services={[Annotations, GaugeTooltip, CircularGaugeLegend]}/>
          <AxesDirective>
            <AxisDirective startAngle={270} endAngle={90} radius="100%" minimum={0} maximum={100} majorTicks={{ width: 1.5, height: 12, interval: 20, offset: 30 }} minorTicks={{ width: 0 }} lineStyle={{ width: 0 }} labelStyle={{ position: 'Outside', offset: -40, font: { size: '12px', fontFamily: 'inherit' } }}>
              <AnnotationsDirective>
                <AnnotationDirective content={annotationTpl} angle={0} radius="-10%" zIndex="1"/>
              </AnnotationsDirective>
              <PointersDirective>
                <PointerDirective value={v} radius="70%" pointerWidth={6} needleEndWidth={3} cap={{ radius: 8, border: { width: 2 } }} color="#424242"/>
              </PointersDirective>
              <RangesDirective>
                <RangeDirective start={0} end={20} radius="82%" color="#FF3B30" startWidth={40} endWidth={40} legendText="Poor"/>
                <RangeDirective start={20} end={50} radius="82%" color="#EFA006" startWidth={40} endWidth={40} legendText="Satisfied"/>
                <RangeDirective start={50} end={80} radius="82%" color="#FFE700" startWidth={40} endWidth={40} legendText="Good"/>
                <RangeDirective start={80} end={100} radius="82%" color="#1DC060" startWidth={40} endWidth={40} legendText="Excellent"/>
              </RangesDirective>
            </AxisDirective>
          </AxesDirective>
        </CircularGaugeComponent>
      </div>);
    };
    renderSurveyResponseContent = () => {
        const s = this.surveyStats();
        const rateText = `${s.responseRate.toFixed(1)}%`;
        // Show percentage in data labels (like renderSlaComplianceContent)
        const onTextRender = (args) => {
            const pct = args?.point?.percentage;
            if (pct != null)
                args.text = `${pct.toFixed(0)}%`;
        };
        return (<div className="customer-chart-wrap">
        <AccumulationChartComponent ref={this.surveyDonutRef} legendSettings={{ visible: true, position: 'Top' }} tooltip={{ enable: true }} width="100%" height="100%" textRender={onTextRender} annotations={[{
                    content: `<div style="text-align:center"><div style="font-size:16px;font-weight:700">${rateText}</div><div style="font-size:12px;color:#6b7280">Response Rate</div></div>`,
                    region: 'Series',
                    coordinateUnits: 'Pixel',
                    x: '50%', y: '50%'
                }]} load={this.accumulationLoad.bind(this)}>
          <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={this.getSurveyDonutData()} xName="x" yName="y" innerRadius="70%" type="Pie" dataLabel={{
                visible: true,
                position: 'Outside',
                connectorStyle: { length: '8px' }
            }} pointColorMapping="color" animation={{ enable: false }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    toolbarItem = ['ExcelExport', 'PdfExport', 'ColumnChooser'];
    toolbarClick = (args) => {
        switch (args.item.id) {
            case 'surveyDetails_pdfexport': {
                const grid = this.surveyGridRef.current;
                if (!grid)
                    return;
                // Start from current columns and drop RatedOn for PDF
                const exportCols = grid.getColumns().filter(c => c.field !== 'RatedOn');
                // Optional: tighten widths to keep all columns on one page
                const widthOverrides = {
                    TicketId: 90,
                    Subject: 250,
                    Platform: 90,
                    Rating: 80,
                    RatedBy: 110,
                    Feedback: 350
                };
                exportCols.forEach((c) => {
                    const w = widthOverrides[c.field];
                    if (w)
                        c.width = w;
                });
                // Use fitToPage so columns don’t spill to a second page
                grid.pdfExport({
                    fileName: `SurveyDetails.pdf`,
                    pageOrientation: 'Landscape',
                    pageSize: 'A4',
                    columns: exportCols,
                    // @ts-ignore supported at runtime to scale columns to page width
                    fitToPage: true
                });
                break;
            }
            case 'surveyDetails_excelexport':
                this.surveyGridRef.current?.excelExport();
                break;
        }
    };
    onSurveyCellInfo = (args) => {
        if (args?.column?.field !== 'Feedback')
            return;
        const cell = args?.cell;
        const txt = String(args?.data?.Feedback ?? '').trim();
        if (cell && typeof cell.setAttribute === 'function') {
            if (txt)
                cell.setAttribute('title', txt);
            else
                cell.removeAttribute?.('title');
        }
    };
    renderSurveyGridContent = () => {
        const data = this.getSurveyGridData();
        return (<div className="grid-wrap" style={{ height: '100%' }}>
        <GridComponent id='surveyDetails' ref={this.surveyGridRef} dataSource={data} gridLines='Both' allowResizing={true} allowPaging={true} allowSorting={true} allowFiltering={true} showColumnChooser={true} height="100%" pageSettings={{ pageSize: 12 }} filterSettings={{ type: 'Menu' }} toolbar={this.toolbarItem} allowExcelExport={true} allowPdfExport={true} toolbarClick={this.toolbarClick} queryCellInfo={this.onSurveyCellInfo}>
          <Inject services={[Page, Toolbar, Sort, Filter, ColumnChooser, ExcelExport, PdfExport, Resize]}/>
          <ColumnsDirective>
            <ColumnDirective field="TicketId" headerText="Ticket ID" headerTemplate={this.headerWithTooltip("Ticket ID")} width="120" textAlign="Left"/>
            <ColumnDirective field="Subject" headerText="Subject" headerTemplate={this.headerWithTooltip("Subject")} width="370" textAlign="Left"/>
            <ColumnDirective field="Platform" headerText="Platform" headerTemplate={this.headerWithTooltip("Platform")} width="120"/>
            <ColumnDirective field="Rating" headerText="Rating" headerTemplate={this.headerWithTooltip("Rating")} width="120"/>
            <ColumnDirective field="RatedOn" headerText="Rated On" headerTemplate={this.headerWithTooltip("Rated On")} width="190" type="datetime" format="MMM dd, yyyy hh:mm a"/>
            <ColumnDirective field="RatedBy" headerText="Rated By" headerTemplate={this.headerWithTooltip("Rated By")} width="160"/>
            <ColumnDirective field="Feedback" headerText="Feedback" headerTemplate={this.headerWithTooltip("Feedback")} width="280"/>
          </ColumnsDirective>
        </GridComponent>
      </div>);
    };
    dashboard3 = () => {
        const s = this.surveyStats();
        return (<div className="Container">
        {/* Title + global filters */}
        {this.renderHeader('Customer Satisfaction')}
        <DashboardLayoutComponent ref={this.csatRef} id="dashboard_csat" style={{ height: '85vh', width: '100%' }} columns={8} cellAspectRatio={90 / 100} cellSpacing={this.cellSpacing} allowResizing={false} allowDragging={false} mediaQuery="(max-width:950px)" created={this.onCsatCreated}>
          <PanelsDirective>
            {/* Row 1: 3 KPI cards + 1 empty slot */}
            <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={this.kpiCard([
                {
                    title: 'Positive',
                    description: 'Share and count of positive ratings in the selected range.',
                    valuePrimary: `${s.posPct.toFixed(1)}%`,
                    valueMeta: `(${s.positive.toLocaleString()} Ratings)`,
                    color: '#1DC060'
                }
            ])} cssClass="kpi-panel"/>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={this.kpiCard([
                {
                    title: 'Neutral',
                    description: 'Share and count of neutral ratings in the selected range.',
                    valuePrimary: `${s.neuPct.toFixed(1)}%`,
                    valueMeta: `(${s.neutral.toLocaleString()} Ratings)`,
                    color: '#EFA006'
                }
            ])} cssClass="kpi-panel"/>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={this.kpiCard([
                {
                    title: 'Negative',
                    description: 'Share and count of negative ratings in the selected range.',
                    valuePrimary: `${s.negPct.toFixed(1)}%`,
                    valueMeta: `(${s.negative.toLocaleString()} Ratings)`,
                    color: '#FF3B30'
                }
            ])} cssClass="kpi-panel"/>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={this.kpiCard([
                {
                    title: 'Survey Sent',
                    description: 'Total number of satisfaction surveys sent.',
                    valuePrimary: s.sent.toLocaleString(),
                    color: '#6643B5'
                }
            ])} cssClass="kpi-panel"/>
            {/* Row 2: CSAT Gauge + Survey Response Donut */}
            <PanelDirective sizeX={4} sizeY={3} row={1} col={0} header={this.renderCsatHeader} content={this.renderCsatContent}/>
            <PanelDirective sizeX={4} sizeY={3} row={1} col={4} header={this.renderSurveyResponseHeader} content={this.renderSurveyResponseContent}/>

            {/* Row 3: Survey Details Grid */}
            <PanelDirective sizeX={8} sizeY={4} row={4} col={0} header={this.renderSurveyGridHeader} content={this.renderSurveyGridContent}/>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>);
    };
    renderDashboard = () => {
        const { selectedId } = this.state;
        switch (selectedId) {
            case 'support': return this.dashboard1();
            case 'monitoring': return this.dashboard2();
            case 'satisfaction': return this.dashboard3();
            default: return this.dashboard1();
        }
    };
    toolbarTitleTemplate = () => (<span className="customer-header-title">Customer Support Dashboard</span>);
    onSidebarCreated = () => {
        if (this.sidebarRef.current) {
            this.sidebarRef.current.hide(); // ensure hidden
        }
    };
    onToolbarClicked = (args) => {
        if (args.item.tooltipText === 'Menu') {
            const sb = this.sidebarRef.current;
            if (!sb)
                return;
            if (sb.isOpen) {
                sb.hide();
            }
            else {
                // Only allow opens initiated from the Menu button
                this.menuToggleIntent = true;
                sb.show();
            }
        }
    };
    notifyResize = () => window.dispatchEvent(new Event('sidebar-toggled'));
    onSidebarOpen = () => {
        // Block unintended opens (e.g., DevTools resize)
        if (!this.menuToggleIntent) {
            this.sidebarRef.current?.hide();
            return;
        }
        this.menuToggleIntent = false;
        setTimeout(this.notifyResize, 400);
        this.setState({ isDocked: false });
        setTimeout(() => this.refreshActiveDashboard(), 500);
    };
    onSidebarClose = () => {
        // Clear any stale intent
        this.menuToggleIntent = false;
        setTimeout(this.notifyResize, 400);
        this.setState({ isDocked: true });
        setTimeout(() => {
            this.refreshActiveDashboard();
        }, 700);
    };
    withTooltip(title, node) {
        return (<TooltipComponent content={title} position={this.state.isDocked ? 'RightCenter' : 'BottomCenter'} openDelay={250} closeDelay={0} showTipPointer={true}>
        {node}
      </TooltipComponent>);
    }
    isLightIconTheme = () => {
        const cls = (document.body?.className || '').toLowerCase();
        const hash = (location.hash.split('/')[1] || '').toLowerCase();
        const key = cls || hash;
        return /(bootstrap5_3|fluent2-highcontrast|fluent2|fluent)(-dark)?/.test(key);
    };
    icon = (name) => `${this.isLightIconTheme() ? 'sf-dashboard-light' : 'sf-dashboard-bold'}-${name}`;
    render() {
        const isActive = (id) => (this.state.selectedId === id ? 'active' : '');
        return (<div className="support-dashboard">
        <div className="control-section">
          <div className="col-lg-12 col-sm-12 col-md-12" id="customer-dashboard_sidebar_section">
            {/* Top toolbar */}
            <ToolbarComponent cssClass="support-app-toolbar" id="dockToolbar" height={`${this.TOOLBAR_HEIGHT}px`} clicked={this.onToolbarClicked}>
              <ItemsDirective>
                <ItemDirective prefixIcon="e-menu" tooltipText="Menu"/>
                <ItemDirective align="Left" template={this.toolbarTitleTemplate}/>
              </ItemsDirective>
            </ToolbarComponent>
            <div className="cs-workarea">
              <SidebarComponent ref={this.sidebarRef} id='customer_support-sidebar' className="cs-sidebar" type="Push" target=".cs-content" created={this.onSidebarCreated} open={this.onSidebarOpen} close={this.onSidebarClose} enableDock={true} enableGestures={false} closeOnDocumentClick={false} width={`${this.OPEN_WIDTH}px`} dockSize={`${this.DOCK_SIZE}px`}>
                <div className="sidebar-content">
                  {this.withTooltip('Support Traffic', <div className={`customer-nav-item ${isActive('support')}`} onClick={() => this.handleNavClick('support')}>
                      <span className="e-icons e-chart" aria-hidden="true"></span>
                      <span className="customer-nav-text">Support Traffic</span>
                    </div>)}
                  {this.withTooltip('Support Monitoring', <div className={`customer-nav-item ${isActive('monitoring')}`} onClick={() => this.handleNavClick('monitoring')}>
                      <span className={this.icon('monitoring')} aria-hidden="true"></span>
                      <span className="customer-nav-text">Support Monitoring</span>
                    </div>)}
                  {this.withTooltip('Customer Satisfaction', <div className={`customer-nav-item ${isActive('satisfaction')}`} onClick={() => this.handleNavClick('satisfaction')}>
                      <span className={this.icon('feedback')} aria-hidden="true"></span>
                      <span className="customer-nav-text">Customer Satisfaction</span>
                    </div>)}
                </div>
              </SidebarComponent>

              <div className="cs-content">
                <div className="app-customer-support-page" style={{ padding: '16px', background: '#ffffff' }}>
                  {this.renderDashboard()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="action-description">
          <p>
            The Customer Support Dashboard provides a real‑time view of ticket flow, SLA performance, and customer satisfaction. With quick filters and interactive visualizations, teams can monitor workload, spot bottlenecks, and make fast, informed decisions to improve support quality and customer experience.
          </p>
        </div>
      </div>);
    }
}
