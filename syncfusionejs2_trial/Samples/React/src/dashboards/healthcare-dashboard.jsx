import * as React from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { useMemo, useRef, useState } from 'react';
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from "@syncfusion/ej2-react-layouts";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, Legend as ChartLegend, PieSeries, AccumulationTooltip, SeriesCollectionDirective, AccumulationDataLabel, ChartComponent, ColumnSeries, Category, SeriesDirective, Tooltip, DataLabel, SplineAreaSeries, Inject, BarSeries, PolarSeries, Crosshair, SparklineComponent, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject as GridInject, Page, Sort, Filter as GridFilter, Resize as GridResize, Group, RowDD, Toolbar, ExcelExport, Aggregate, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, PdfExport } from '@syncfusion/ej2-react-grids';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, GaugeTooltip, Annotations, RangesDirective, RangeDirective, Legend as CircularGaugeLegend } from '@syncfusion/ej2-react-circulargauge';
import { LinearGaugeComponent, Inject as LGInject, AxesDirective as LGAxesDirective, AxisDirective as LGAxisDirective, PointersDirective as LGPointersDirective, PointerDirective as LGPointerDirective, RangesDirective as LGRangesDirective, RangeDirective as LGRangeDirective, Annotations as LGAnnotations, AnnotationsDirective as LGAnnotationsDirective, AnnotationDirective as LGAnnotationDirective } from '@syncfusion/ej2-react-lineargauge';
import { MapsComponent, LayersDirective, LayerDirective, Inject as MapsInject, MapsTooltip, Zoom as MapsZoom, Legend as MapsLegend, Selection as MapsSelection, Highlight as MapsHighlight } from '@syncfusion/ej2-react-maps';
import { SampleBase } from "../common/sample-base";
import './healthcare-dashboard.css';
import * as HealthCareData from './healthcare-dashboard.json';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
const HealthCare = HealthCareData;
export const items = [
    { id: 'Overview', text: 'Overview Analysis', iconCss: 'e-icons e-home' },
    { id: 'Product-Performance', text: 'Product Performance', iconCss: 'e-icons e-chart' },
    { id: 'Regional-Insights', text: 'Regional and Channel', iconCss: 'e-icons e-location' },
    { id: 'Customer', text: 'Customer Analysis', iconCss: 'e-icons e-people' },
];
const formatCurrency = (n) => {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2, notation: "compact" }).format(n ?? 0);
};
const onChartLoad = (args) => {
    let selectedTheme = location.hash.split('/')[1] || 'Material';
    const themeForChart = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/contrast/i, 'Contrast')
        .replace(/-dark/i, 'Dark');
    args.chart.theme = themeForChart;
};
const onAccumulationLoad = (args) => {
    const themeKey = location.hash.split('/')[1] || 'Material';
    const selectedTheme = (themeKey.charAt(0).toUpperCase() + themeKey.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
        .replace(/-highContrast/i, 'HighContrast');
    args.accumulation.theme = selectedTheme;
    const isDark = /dark/i.test(themeKey)
        || /dark/i.test(String(selectedTheme))
        || /high-?contrast/i.test(themeKey)
        || /high-?contrast/i.test(String(selectedTheme));
    if (isDark && Array.isArray(args.accumulation?.series)) {
        args.accumulation.series.forEach((s) => {
            const width = s?.border?.width ?? 1;
            s.border = { color: '#000000', width };
        });
    }
};
const headerWithTooltip = (label) => {
    return () => (<div title={label} style={{ display: 'inline-block', cursor: 'default' }}>{label}</div>);
};
const onCurrencyVerticalAxis = (args) => {
    if (args?.axis?.orientation === 'Vertical') {
        args.text = formatCurrency(Number(args.value || 0));
    }
};
const onCurrencyHorizontalAxis = (args) => {
    if (args?.axis?.orientation === 'Horizontal') {
        args.text = formatCurrency(Number(args.value || 0));
    }
};
const onLabelText = (args) => {
    const y = args.point?.y ?? 0;
    args.text = formatCurrency(y);
};
const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const sparklinePalette = ["#05B3DA", "#E77A16", "#9204EA", "#6200EE", "#B1212D", "#82C100"];
const Dashboard1 = ({ selectedYear, selectedMonth, onYearChange, onMonthChange }) => {
    const OverviewRef = React.useRef(null);
    const monthRef = useRef(null);
    const salesTrendChartRef = useRef(null);
    const breakdownChartRef = useRef(null);
    const departmentChartRef = useRef(null);
    const categoryChartRef = useRef(null);
    const topProductChartRef = useRef(null);
    const totalRevenueRef = useRef(null);
    const years = [2023, 2024, 2025];
    const months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 }
    ];
    React.useEffect(() => {
        let timer;
        const refreshAll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                OverviewRef.current?.refresh();
                salesTrendChartRef.current?.refresh();
                categoryChartRef.current?.refresh();
                topProductChartRef.current?.refresh();
                breakdownChartRef.current?.refresh();
                departmentChartRef.current?.refresh();
                totalRevenueRef.current?.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return () => {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    const onCreated = (e) => {
        breakdownChartRef.current?.refresh();
        departmentChartRef.current?.refresh();
        setTimeout(() => {
            OverviewRef.current?.refresh();
        }, 500);
    };
    // Data accessors
    const getTotalRevenue = (year, month) => {
        const rows = HealthCare.salesData.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((sum, r) => sum + (r.TotalRevenue ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.TotalRevenue ?? 0;
    };
    const getTotalOrders = (year, month) => {
        const rows = HealthCare.salesData.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((sum, r) => sum + (r.TotalOrder ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.TotalOrder ?? 0;
    };
    const getAveragePerOrder = (year, month) => {
        const rows = HealthCare.salesData.filter((r) => r.Year === year);
        if (month === 0) {
            const average = getTotalRevenue(year, month) / getTotalOrders(year, month);
            return average;
        }
        const row = rows.find((r) => r.Month === month);
        return row?.AvgPerOrder ?? 0;
    };
    const getGrossProfit = (year, month) => {
        const rows = HealthCare.salesData.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((sum, r) => sum + (r.GrossProfitUSD ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.GrossProfitUSD ?? 0;
    };
    const getNetProfit = (year, month) => {
        const rows = HealthCare.salesData.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((sum, r) => sum + (r.NetProfitUSD ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.NetProfitUSD ?? 0;
    };
    const getOperationalExpense = (year, month) => {
        const rows = HealthCare.salesData.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((sum, r) => sum + (r.OprExpenses ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.OprExpenses ?? 0;
    };
    const getCogs = (year, month) => {
        const rows = HealthCare.salesData.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((sum, r) => sum + (r.cogsUSD ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.cogsUSD ?? 0;
    };
    const totalRevenueSpark = React.useMemo(() => {
        const YEARS = [2023, 2024, 2025];
        return YEARS.map((yy) => ({ x: String(yy), y: getTotalRevenue(yy, 0) }));
    }, []);
    const kpis = React.useMemo(() => {
        const y = selectedYear;
        const m = selectedMonth;
        return {
            totalRevenue: getTotalRevenue(y, m),
            totalOrder: getTotalOrders(y, m),
            avgPerOrder: Math.round(getAveragePerOrder(y, m)),
            grossProfit: getGrossProfit(y, m),
            netProfit: getNetProfit(y, m),
            opEx: getOperationalExpense(y, m),
            cogs: getCogs(y, m)
        };
    }, [selectedYear, selectedMonth]);
    const revenueGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getTotalRevenue(selectedYear, selectedMonth);
        const previous = selectedMonth === 0 ? getTotalRevenue(previousYear, 0) : getTotalRevenue(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const orderGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getTotalOrders(selectedYear, selectedMonth);
        const previous = selectedMonth === 0 ? getTotalOrders(previousYear, 0) : getTotalOrders(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const avgGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getAveragePerOrder(selectedYear, selectedMonth);
        let previous = 0;
        if (selectedMonth === 0) {
            const prevTotalRev = getTotalRevenue(previousYear, 0);
            const prevTotalOrders = getTotalOrders(previousYear, 0);
            previous = prevTotalOrders ? prevTotalRev / prevTotalOrders : 0;
        }
        else {
            previous = getAveragePerOrder(previousYear, selectedMonth);
        }
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const grossGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getGrossProfit(selectedYear, selectedMonth);
        const previous = selectedMonth === 0 ? getGrossProfit(previousYear, 0) : getGrossProfit(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const cogsGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getCogs(selectedYear, selectedMonth);
        const previous = selectedMonth === 0 ? getCogs(previousYear, 0) : getCogs(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const netGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getNetProfit(selectedYear, selectedMonth);
        const previous = selectedMonth === 0 ? getNetProfit(previousYear, 0) : getNetProfit(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const opExGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getOperationalExpense(selectedYear, selectedMonth);
        const previous = selectedMonth === 0 ? getOperationalExpense(previousYear, 0) : getOperationalExpense(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    // KPI tiles
    const TotalRevenue = () => <div className="kpi-total-card">
      <div className="spark-container">
        <div className="card-label">Total Revenue</div>
        <div className="card-totalvalue">{formatCurrency(kpis.totalRevenue)}</div>
        <div className="growth-indicator">
          <span style={{ color: revenueGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
            {revenueGrowth.positive ? '▲' : '▼'} {Math.abs(revenueGrowth.percentage).toFixed(1)}%
          </span>
          <span className="growth-indicator-label">
            vs {selectedMonth === 0
            ? revenueGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${revenueGrowth.previousYear}`}
          </span>
        </div>
      </div>
      <div className="spark-content">
        <div>
          <SparklineComponent id="total-responses-spark" ref={totalRevenueRef} type="Pie" dataSource={totalRevenueSpark} xName="x" yName="y" valueType="Category" width="100%" height="85px" lineWidth={2} tooltipSettings={{ visible: true, format: 'Year: ${x}<br/>Revenue: ${y}' }} palette={sparklinePalette}>
            <Inject services={[SparklineTooltip]}/>
          </SparklineComponent>
        </div>
      </div>
    </div>;
    const TotalOrder = () => <div id='main-div'>
      <div id='title-card'>Total Order</div>
      <div id='card-value'>{kpis.totalOrder}</div>
      <div className="growth-indicator">
        <span style={{ color: orderGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {orderGrowth.positive ? '▲' : '▼'} {Math.abs(orderGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? orderGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${orderGrowth.previousYear}`}
        </span>
      </div>
    </div>;
    const AveragePerOrder = () => <div id='main-div'>
      <div id='title-card'>Average Per Order</div>
      <div id='card-value'>{formatCurrency(kpis.avgPerOrder)}</div>
      <div className="growth-indicator">
        <span style={{ color: avgGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {avgGrowth.positive ? '▲' : '▼'} {Math.abs(avgGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? avgGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${avgGrowth.previousYear}`}
        </span>
      </div>
    </div>;
    const GrossProfit = () => <div id='main-div'>
      <div id='title-card'>Gross Profit</div>
      <div id='card-value'>{formatCurrency(kpis.grossProfit)}</div>
      <div className="growth-indicator">
        <span style={{ color: grossGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {grossGrowth.positive ? '▲' : '▼'} {Math.abs(grossGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? grossGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${grossGrowth.previousYear}`}
        </span>
      </div>
    </div>;
    const NetProfit = () => <div id='main-div'>
      <div id='title-card'>Net Profit</div>
      <div id='card-value'>{formatCurrency(kpis.netProfit)}</div>
      <div className="growth-indicator">
        <span style={{ color: netGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {netGrowth.positive ? '▲' : '▼'} {Math.abs(netGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? netGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${netGrowth.previousYear}`}
        </span>
      </div>
    </div>;
    const OperationalExpenses = () => <div id='main-div'>
      <div id='title-card'>Operational Expenses</div>
      <div id='card-value'>{formatCurrency(kpis.opEx)}</div>
      <div className="growth-indicator">
        <span style={{ color: opExGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {opExGrowth.positive ? '▲' : '▼'} {Math.abs(opExGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? opExGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${opExGrowth.previousYear}`}
        </span>
      </div>
    </div>;
    const Cogs = () => <div id='main-div'>
      <div id='title-card'>Cost of Goods Sold</div>
      <div id='card-value'>{formatCurrency(kpis.cogs)}</div>
      <div className="growth-indicator">
        <span style={{ color: cogsGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {cogsGrowth.positive ? '▲' : '▼'} {Math.abs(cogsGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? cogsGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${cogsGrowth.previousYear}`}
        </span>
      </div>
    </div>;
    // Filter content uses global handlers and values
    const filterContent = () => (<div className='dropdown-filter'>
      <div className='dropdown-minwidth'>
        <DropDownListComponent dataSource={years} value={selectedYear} placeholder="Select year" change={onYearChange} popupHeight="200px" width={100}/>
      </div>
      <div className='dropdown-minwidth'>
        <DropDownListComponent ref={monthRef} dataSource={months} fields={{ text: 'text', value: 'value' }} value={selectedMonth} placeholder="Select month" change={onMonthChange} popupHeight="240px" width={140}/>
      </div>
    </div>);
    const salesTrend = React.useCallback(() => {
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const buildSeries = (year) => {
            const rows = HealthCare.salesData.filter((r) => Number(r.Year) === Number(year));
            const byMonth = new Map();
            rows.forEach(r => {
                const index = Number(r.MonthIndex ?? r.Month ?? 0);
                if (index >= 1 && index <= 12)
                    byMonth.set(index, r);
            });
            return MONTHS.map((m, i) => {
                const value = byMonth.get(i + 1);
                return { x: m, y: value ? Number(value.TotalRevenue ?? 0) : null };
            });
        };
        const previousYear = selectedYear - 1;
        const previousSeries = buildSeries(previousYear);
        const currentSeries = buildSeries(selectedYear);
        const hasPreviousData = previousSeries.some(p => p.y !== null);
        const onTrendTooltip = (args) => {
            const y = Number(args?.point?.y ?? 0);
            const x = String(args?.point?.x ?? '');
            const name = String(args?.series?.name ?? '');
            args.text = `<b>${name}</b><br/>${x} : <b>${formatCurrency(y)}</b>`;
        };
        return (<div className='layout-container'>
        <ChartComponent id="sales-trend-spline-area" ref={salesTrendChartRef} enableAnimation={false} load={onChartLoad} primaryXAxis={{
                valueType: 'Category',
                majorGridLines: { width: 0 },
                labelIntersectAction: 'Trim',
                labelStyle: { size: '11px' }
            }} primaryYAxis={{
                labelFormat: '${value}',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                majorGridLines: { width: 0 }
            }} chartArea={{ border: { width: 0 } }} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true, header: '' }} tooltipRender={onTrendTooltip} crosshair={{ enable: true, lineType: 'Vertical' }} width="100%" height="100%" axisLabelRender={onCurrencyVerticalAxis}>
          <Inject services={[SplineAreaSeries, Category, Tooltip, ChartLegend, Crosshair]}/>
          <SeriesCollectionDirective>
            {hasPreviousData && (<SeriesDirective type="SplineArea" dataSource={previousSeries} xName="x" yName="y" name={`${previousYear} Revenue`} opacity={0.5} border={{ width: 2, color: '#028A02' }} fill="#028A02" marker={{ visible: true, width: 7, height: 7, shape: 'Circle' }} animation={{ enable: false }}/>)}
            <SeriesDirective type="SplineArea" dataSource={currentSeries} xName="x" yName="y" name={`${selectedYear} Revenue`} opacity={0.5} border={{ width: 2, color: '#EFF48E' }} fill="#EFF48E" marker={{ visible: true, width: 8, height: 8, shape: 'Triangle' }} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    }, [selectedYear]);
    const RevenueBreakdown = () => {
        const roundTo2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
        const onTrendTooltip = (args) => {
            const x = String(args?.point?.x ?? '');
            const name = String(args?.series?.name ?? '');
            const pct = Number(args?.point?.percentage);
            const val = Number.isFinite(pct) ? pct : Number(args?.point?.y ?? 0);
            args.text = `<b>${name}</b><br/>${x} : <b>${val.toFixed(2)}%</b>`;
        };
        const buildData = () => {
            const rowsForYear = HealthCare.salesData.filter((r) => r.Year === selectedYear);
            if (!rowsForYear.length)
                return [];
            let values;
            if (selectedMonth === 0) {
                const count = rowsForYear.length;
                const sums = rowsForYear.reduce((acc, r) => {
                    acc.COGSPct += r.COGSPct ?? 0;
                    acc.TaxPct += r.TaxPct ?? 0;
                    acc.OpExPct += r.OpExPct ?? 0;
                    acc.NetProfitPct += r.NetProfitPct ?? 0;
                    return acc;
                }, { COGSPct: 0, TaxPct: 0, OpExPct: 0, NetProfitPct: 0 });
                values = {
                    COGSPct: roundTo2(sums.COGSPct / count),
                    TaxPct: roundTo2(sums.TaxPct / count),
                    OpExPct: roundTo2(sums.OpExPct / count),
                    NetProfitPct: roundTo2(sums.NetProfitPct / count)
                };
            }
            else {
                const row = rowsForYear.find(r => r.Month === selectedMonth);
                values = {
                    COGSPct: roundTo2(row?.COGSPct ?? 0),
                    TaxPct: roundTo2(row?.TaxPct ?? 0),
                    OpExPct: roundTo2(row?.OpExPct ?? 0),
                    NetProfitPct: roundTo2(row?.NetProfitPct ?? 0)
                };
            }
            const points = [
                { x: 'COGS', y: +values.COGSPct, color: '#028A02' },
                { x: 'Tax', y: +values.TaxPct, color: '#CDC733' },
                { x: 'OpEx', y: +values.OpExPct, color: '#14C38E' },
                { x: 'Net Profit', y: +values.NetProfitPct, color: '#77E4D4' }
            ].map(p => ({
                ...p,
                text: `${p.y.toFixed(2)}%`
            }));
            return points;
        };
        const data = buildData();
        const isYearly = selectedMonth === 0;
        const onPercentageTextRender = (args) => {
            const pct = args?.point?.percentage;
            if (pct != null)
                args.text = `${pct.toFixed(2)}%`;
        };
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
        <AccumulationChartComponent id="revenue-breakdown-donut" ref={breakdownChartRef} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} // keep it simple; no format/template
         tooltipRender={onTrendTooltip} enableSmartLabels={true} center={{ x: '50%', y: '50%' }} width="100%" height="100%" load={onAccumulationLoad} textRender={onPercentageTextRender}>
          <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={data} xName="x" yName="y" pointColorMapping="color" innerRadius="50%" // makes it a donut
         startAngle={0} endAngle={360} explode={false} name={isYearly ? `Average ${selectedYear}` : `${selectedYear} - ${months[selectedMonth].text}`} dataLabel={{
                visible: true,
                // Use the pre-formatted "text" field to avoid template issues
                name: 'text',
                position: 'Outside',
                connectorStyle: { length: '10px', width: 1 },
                border: { width: 0 }
            }} animation={{ enable: false }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    const RevenueByTopProduct = () => {
        const dataSource = HealthCare.ProductPerformance || [];
        if (!Array.isArray(dataSource) || dataSource.length === 0) {
            return <div style={{ padding: 15 }}>No ProductPerformance data</div>;
        }
        const getMonthShort = (m) => monthShort[Math.max(0, Math.min(11, m - 1))] || '';
        const monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        const revenueOfRow = (r) => {
            const revenue = Number(r?.RevenueUSD);
            if (!isNaN(revenue) && isFinite(revenue))
                return revenue;
            const price = Number(r?.FixedPriceUSD ?? 0);
            const units = Number(r?.UnitsSold ?? 0);
            const total = price * units;
            return isNaN(total) || !isFinite(total) ? 0 : Math.round(total);
        };
        const buildData = () => {
            const yearRows = dataSource.filter((r) => Number(r.Year) === Number(selectedYear));
            if (!yearRows.length)
                return [];
            if (selectedMonth !== 0) {
                const monthRows = yearRows.filter((r) => Number(r.Month) === Number(selectedMonth) && Number(r.RankInCategoryMonth) === 1);
                const byCategory = new Map();
                monthRows.forEach(r => {
                    const category = String(r.Category);
                    const currency = byCategory.get(category);
                    if (!currency || revenueOfRow(r) > revenueOfRow(currency))
                        byCategory.set(category, r);
                });
                const points = Array.from(byCategory.values()).map((r) => ({
                    x: String(r.Category),
                    y: revenueOfRow(r),
                    product: String(r.Product),
                    month: Number(r.Month)
                }));
                points.sort((a, b) => a.x.localeCompare(b.x));
                return points;
            }
            else {
                const rank1 = yearRows.filter((r) => Number(r.RankInCategoryMonth) === 1);
                const bestByCategory = new Map();
                rank1.forEach(r => {
                    const category = String(r.Category);
                    const revenue = revenueOfRow(r);
                    const bestCategory = bestByCategory.get(category);
                    if (!bestCategory || revenue > bestCategory.revenue)
                        bestByCategory.set(category, { row: r, revenue });
                });
                const points = Array.from(bestByCategory.values()).map(({ row, revenue }) => ({
                    x: String(row.Category),
                    y: revenue,
                    product: String(row.Product),
                    month: Number(row.Month)
                }));
                points.sort((a, b) => a.x.localeCompare(b.x));
                return points;
            }
        };
        const data = buildData();
        const onTooltip = (args) => {
            const index = Number(args?.point?.index ?? -1);
            const data = args.series?.dataSource ?? [];
            const row = Array.isArray(data) && index >= 0 ? data[index] : null;
            const x = String(row?.x ?? '');
            const y = Number(row?.y ?? 0);
            const product = String(row?.product ?? '');
            const month = Number(row?.month ?? 0);
            const monthText = month ? ` (${getMonthShort(month)})` : '';
            const seriesName = args.series?.name ?? '';
            args.text = `<b>${seriesName}</b><br/><b>${x}${monthText}</b><br/><b>${product}:</b> <b>${formatCurrency(y)}</b>`;
        };
        return (<div className='layout-container'>
        <ChartComponent id="top-product-revenue-line" ref={topProductChartRef} load={onChartLoad} axisLabelRender={onCurrencyVerticalAxis} primaryXAxis={{
                valueType: 'Category',
                majorGridLines: { width: 0 },
                labelIntersectAction: 'Wrap',
                labelStyle: { size: '11px' },
            }} primaryYAxis={{
                labelFormat: 'c0',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                majorGridLines: { width: 0 },
            }} chartArea={{ border: { width: 0 } }} legendSettings={{ visible: false }} tooltip={{ enable: true, header: "" }} tooltipRender={onTooltip} width="100%" height="100%">
          <Inject services={[ColumnSeries, Category, Tooltip, CircularGaugeLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective type="Column" dataSource={data} xName="x" yName="y" name={selectedMonth === 0 ? `Top Product by Category (Best Month) • ${selectedYear}` : `${selectedYear} - ${monthName}`} width={3} marker={{ visible: true, width: 8, height: 8 }} fill='#14C38E' cornerRadius={{ topLeft: 14, topRight: 14 }} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    const RevenueByCategory = () => {
        const dataSource = HealthCare.categoryRevenue[0];
        const categoryKeys = Object.keys(dataSource).filter(k => k !== 'Id' && k !== 'Year' && k !== 'Month');
        const buildData = () => {
            const rowsForYear = HealthCare.categoryRevenue.filter((r) => r.Year === selectedYear);
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                const monthsCount = rowsForYear.length; // typically 12
                const sums = {};
                categoryKeys.forEach(k => (sums[k] = 0));
                rowsForYear.forEach((r) => {
                    categoryKeys.forEach(k => {
                        sums[k] += Number(r[k] ?? 0);
                    });
                });
                return categoryKeys.map(k => ({ x: k, y: sums[k] / monthsCount })).sort((a, b) => b.y - a.y);
            }
            else {
                const row = rowsForYear.find((r) => r.Month === selectedMonth);
                if (!row)
                    return [];
                return categoryKeys.map((k) => ({ x: k, y: row[k] })).sort((a, b) => b.y - a.y);
            }
        };
        const data = buildData();
        const onTrendTooltip = (args) => {
            const y = Number(args?.point?.y ?? 0);
            const x = String(args?.point?.x ?? '');
            const name = String(args?.series?.name ?? '');
            args.text = `<b>${x}</b><br/>${name} : <b>${formatCurrency(y)}</b>`;
        };
        const onLabelText = (args) => {
            const y = args.point?.y ?? 0;
            args.text = formatCurrency(y);
        };
        return (<div className="layout-container">
        <ChartComponent id="category-revenue-bar" ref={categoryChartRef} load={onChartLoad} axisLabelRender={onCurrencyHorizontalAxis} primaryXAxis={{
                valueType: 'Category',
                majorGridLines: { width: 0 },
                labelIntersectAction: 'Trim',
                labelStyle: { size: '11px' }
            }} primaryYAxis={{
                labelFormat: 'c0',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                majorGridLines: { width: 0 },
            }} chartArea={{ border: { width: 0 } }} margin={{ left: 10, right: 10, top: 10, bottom: 10 }} tooltip={{ enable: true, shared: false }} textRender={onLabelText} legendSettings={{ visible: false }} tooltipRender={onTrendTooltip} width="100%" height="100%">
          <Inject services={[BarSeries, Category, Tooltip, DataLabel, ChartLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective type="Bar" dataSource={data} xName="x" yName="y" name={selectedMonth === 0 ? `Average (${selectedYear})` : `${selectedYear} - ${months[selectedMonth].text}`} marker={{ visible: true, width: 8, height: 8, dataLabel: { visible: true, position: 'Outer' } }} cornerRadius={{ topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }} fill="#E48900" opacity={0.85} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    const DepartmentRevenue = () => {
        const DEPT_KEYS = ['HospitalsUSD', 'PharmaciesUSD', 'DistributorsUSD', 'Self CareUSD', 'OthersUSD'];
        const departmentData = HealthCare.DepartmentRevenue || [];
        if (!departmentData.length) {
            return <div style={{ padding: 15 }}>No department revenue data</div>;
        }
        const monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        const roundTo2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
        const COLOR_BY_DEPT = {
            HospitalsUSD: "#E48900",
            PharmaciesUSD: "#028A02",
            DistributorsUSD: "#77E4D4",
            "Self CareUSD": "#14C38E",
            OthersUSD: "#F7EC09",
        };
        const buildData = () => {
            const rowsForYear = departmentData.filter((r) => r.Year === selectedYear);
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                const count = rowsForYear.length;
                const sums = { HospitalsUSD: 0, PharmaciesUSD: 0, DistributorsUSD: 0, "Self CareUSD": 0, OthersUSD: 0 };
                rowsForYear.forEach((r) => {
                    DEPT_KEYS.forEach(k => {
                        sums[k] += Number(r[k] ?? 0);
                    });
                });
                return DEPT_KEYS.map(k => ({ x: k, y: roundTo2(sums[k] / count), color: COLOR_BY_DEPT[k] })).sort((a, b) => b.y - a.y);
            }
            else {
                const row = rowsForYear.find((r) => {
                    const m = r.Month;
                    return (typeof m === 'string' && m === monthName) || (typeof m === 'number' && m === selectedMonth);
                });
                if (!row)
                    return [];
                return DEPT_KEYS
                    .map(k => ({ x: k, y: roundTo2(Number(row[k] ?? 0)), color: COLOR_BY_DEPT[k] }))
                    .sort((a, b) => b.y - a.y);
            }
        };
        const data = buildData();
        const isYearly = selectedMonth === 0;
        const onTextRender = (args) => {
            const y = Number(args.point?.y ?? 0);
            args.text = formatCurrency(y);
        };
        const onTooltipRender = (args) => {
            const y = Number(args.point?.y ?? 0);
            const x = String(args.point?.x ?? '');
            const name = args.series?.name ?? '';
            args.text = `<b>${name}</b><br/>${x}: <b>${formatCurrency(y)}</b>`;
        };
        return (<div style={{ width: '100%', height: '100%', padding: 15, paddingTop: 0, boxSizing: 'border-box' }}>
        <AccumulationChartComponent id="department-revenue-pie" ref={departmentChartRef} load={onAccumulationLoad} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} tooltipRender={onTooltipRender} textRender={onTextRender} enableSmartLabels={true} width="100%" height="100%">
          <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={data} xName="x" yName="y" pointColorMapping="color" startAngle={0} endAngle={360} explode={false} name={isYearly ? `Average ${selectedYear}` : `${selectedYear} - ${monthName}`} dataLabel={{ visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }} animation={{ enable: false }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    return (<div className='Container'>
      <div className='e-card layout-header'>
        <div className='layout-title'>Overview</div>
        <div>{filterContent()}</div>
      </div>
      <div>
        <DashboardLayoutComponent ref={OverviewRef} id="dashboard_default" style={{ height: '85vh', width: '100%' }} columns={8} cellAspectRatio={90 / 100} cellSpacing={[10, 10]} allowResizing={false} allowDragging={false} mediaQuery='max-width:950px' created={onCreated}>
          <PanelsDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={TotalRevenue}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={TotalOrder}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={AveragePerOrder}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={Cogs}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={1} col={0} content={NetProfit}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={2} col={0} content={GrossProfit}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={3} col={0} content={OperationalExpenses}></PanelDirective>
            <PanelDirective sizeX={6} sizeY={3} row={1} col={2} header="<div>Sales Trend Analysis</div>" content={salesTrend}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={4} col={0} header="<div>Revenue Breakdown</div>" content={RevenueBreakdown}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={4} col={4} header="<div>Revenue by Top Products</div>" content={RevenueByTopProduct}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={7} col={0} header="<div>Revenue by Category</div>" content={RevenueByCategory}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={7} col={4} header="<div>Revenue by Department</div>" content={DepartmentRevenue}></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>
    </div>);
};
const Dashboard2 = ({ selectedYear, selectedMonth, onYearChange, onMonthChange }) => {
    const monthRef = useRef(null);
    const gridInstance = useRef(null);
    const topSoldChartref = useRef(null);
    const leastSoldChartRef = useRef(null);
    const productRef = React.useRef(null);
    const categories = [
        "Wellness & Personal Care",
        "Home Healthcare Essentials",
        "Personal Protective Equipment (PPE)",
        "Baby & Mother Care",
        "Fitness & Monitoring",
        "Eye Care",
        "Dental Care"
    ];
    const years = [2023, 2024, 2025];
    const months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 }
    ];
    React.useEffect(() => {
        let timer;
        const refreshAll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                productRef.current?.refresh();
                gridInstance.current?.refresh();
                topSoldChartref.current?.refresh();
                leastSoldChartRef.current?.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return () => {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const categoryOptions = categories.map(c => ({ text: c, value: c }));
    // Categories content: DropDown for categories (synchronous)
    const onCategoryChange = (e) => {
        const value = String(e.value ?? '');
        setSelectedCategory(value);
    };
    const totalRevenueForCategory = useMemo(() => {
        const rows = HealthCare.categoryRevenue || [];
        const rowsForYear = rows.filter((r) => Number(r.Year) === Number(selectedYear));
        if (!rowsForYear.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum the selected category across all months in the selected year
            return rowsForYear.reduce((accumulation, row) => {
                const value = Number(row?.[selectedCategory] ?? 0);
                return accumulation + (isNaN(value) ? 0 : value);
            }, 0);
        }
        else {
            // Specific month value for the selected category
            const monthRow = rowsForYear.find((r) => Number(r.Month) === Number(selectedMonth));
            const value = Number(monthRow?.[selectedCategory] ?? 0);
            return isNaN(value) ? 0 : value;
        }
    }, [selectedCategory, selectedYear, selectedMonth]);
    const totalUnitsSoldForCategory = useMemo(() => {
        const rows = HealthCare.ProductPerformance || [];
        const rowsForYearCategory = rows.filter((r) => Number(r.Year) === Number(selectedYear) && String(r.Category) === String(selectedCategory));
        if (!rowsForYearCategory.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum across all months in the selected year
            return rowsForYearCategory.reduce((accumulation, r) => accumulation + (Number(r.UnitsSold ?? 0) || 0), 0);
        }
        else {
            // Sum for specific month (there are multiple products per category)
            const monthRows = rowsForYearCategory.filter((r) => Number(r.Month) === Number(selectedMonth));
            return monthRows.reduce((accumulation, r) => accumulation + (Number(r.UnitsSold ?? 0) || 0), 0);
        }
    }, [selectedCategory, selectedYear, selectedMonth]);
    const cogsByCategory = useMemo(() => {
        const data = HealthCare.salesDataByCategory || [];
        if (!Array.isArray(data) || data.length === 0)
            return 0;
        // Normalize COGS amount (USD) field
        const getCogs = (r) => {
            const v = Number(r?.COGSUSD ?? r?.CogsUSD ?? r?.COGS_Usd ?? r?.cogsUSD ?? r?.COGS ?? 0);
            return isNaN(v) || !isFinite(v) ? 0 : v;
        };
        // Filter by selected Year + Category
        const rowsForYearCat = data.filter((r) => Number(r?.Year) === Number(selectedYear) &&
            String(r?.Category) === String(selectedCategory));
        if (!rowsForYearCat.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum COGS across all months in the selected year
            const sum = rowsForYearCat.reduce((accumulation, r) => accumulation + getCogs(r), 0);
            return Math.round(sum);
        }
        // Specific month (accept numeric, short name, or MonthName)
        const mShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, selectedMonth - 1)] || '';
        const row = rowsForYearCat.find((r) => Number(r?.Month) === Number(selectedMonth) ||
            String(r?.Month).toLowerCase() === mShort.toLowerCase() ||
            String(r?.MonthName).toLowerCase() === mShort.toLowerCase());
        return Math.round(getCogs(row || {}));
    }, [selectedCategory, selectedYear, selectedMonth]);
    const netProfitByCategory = useMemo(() => {
        const data = HealthCare.salesDataByCategory || [];
        if (!Array.isArray(data) || data.length === 0)
            return 0;
        // Normalize Net Profit (USD) field
        const getNetProfit = (r) => {
            const value = Number(r?.Net_Profit ?? 0);
            return isNaN(value) || !isFinite(value) ? 0 : value;
        };
        // Filter by selected Year + Category
        const rowsForYearCategory = data.filter((r) => Number(r?.Year) === Number(selectedYear) &&
            String(r?.Category) === String(selectedCategory));
        if (!rowsForYearCategory.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum Net Profit across all months in the selected year
            const sum = rowsForYearCategory.reduce((accumulation, r) => accumulation + getNetProfit(r), 0);
            return Math.round(sum);
        }
        // Specific month (accept numeric, short name, or MonthName)
        const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, selectedMonth - 1)] || '';
        const row = rowsForYearCategory.find((r) => Number(r?.Month) === Number(selectedMonth) ||
            String(r?.Month).toLowerCase() === monthShort.toLowerCase() ||
            String(r?.MonthName).toLowerCase() === monthShort.toLowerCase());
        return Math.round(getNetProfit(row || {}));
    }, [selectedCategory, selectedYear, selectedMonth]);
    const RevenueGrowth = useMemo(() => {
        const previousYear = Number(selectedYear) - 1;
        const rows = HealthCare.categoryRevenue || [];
        const rowspreviousYear = rows.filter((r) => Number(r.Year) === previousYear);
        let previousValue = 0;
        if (selectedMonth === 0) {
            previousValue = rowspreviousYear.reduce((accumulation, row) => {
                const value = Number(row?.[selectedCategory] ?? 0);
                return accumulation + (isNaN(value) ? 0 : value);
            }, 0);
        }
        else {
            const previousRow = rowspreviousYear.find((r) => Number(r.Month) === Number(selectedMonth));
            const value = Number(previousRow?.[selectedCategory] ?? 0);
            previousValue = isNaN(value) ? 0 : value;
        }
        const currentValue = Number(totalRevenueForCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear };
        }
        const percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, totalRevenueForCategory]);
    const unitsSoldGrowth = useMemo(() => {
        const previousYear = Number(selectedYear) - 1;
        const rows = HealthCare.ProductPerformance || [];
        const rowspreviousYear = rows.filter((r) => Number(r.Year) === previousYear && String(r.Category) === String(selectedCategory));
        let previousValue = 0;
        if (selectedMonth === 0) {
            // Sum across all months for previous year
            previousValue = rowspreviousYear.reduce((accumulation, r) => accumulation + (Number(r.UnitsSold ?? 0) || 0), 0);
        }
        else {
            // Sum for the same month in previous year
            const monthRowsPrevious = rowspreviousYear.filter((r) => Number(r.Month) === Number(selectedMonth));
            previousValue = monthRowsPrevious.reduce((accumulation, r) => accumulation + (Number(r.UnitsSold ?? 0) || 0), 0);
        }
        const currentValue = Number(totalUnitsSoldForCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear };
        }
        const percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, totalUnitsSoldForCategory]);
    const categoryCOGSGrowth = useMemo(() => {
        const previousYear = Number(selectedYear) - 1;
        const rows = HealthCare.salesDataByCategory || [];
        const rowspreviousYear = rows.filter((r) => Number(r.Year) === previousYear && String(r.Category) === String(selectedCategory));
        let previousValue = 0;
        if (selectedMonth === 0) {
            // Sum across all months for previous year
            previousValue = rowspreviousYear.reduce((accumulation, r) => accumulation + (Number(r.COGS ?? 0) || 0), 0);
        }
        else {
            // Sum for the same month in previous year
            const rowPreviousMonth = rowspreviousYear.filter((r) => Number(r.Month) === Number(selectedMonth));
            previousValue = rowPreviousMonth.reduce((accumulation, r) => accumulation + (Number(r.COGS ?? 0) || 0), 0);
        }
        const currentValue = Number(cogsByCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear };
        }
        const percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, cogsByCategory]);
    const NetProfitGrowth = useMemo(() => {
        const previousYear = Number(selectedYear) - 1;
        const rows = HealthCare.salesDataByCategory || [];
        const rowspreviousYear = rows.filter((r) => Number(r.Year) === previousYear && String(r.Category) === String(selectedCategory));
        let previousValue = 0;
        if (selectedMonth === 0) {
            // Sum across all months for previous year
            previousValue = rowspreviousYear.reduce((accumulation, r) => accumulation + (Number(r.Net_Profit ?? 0) || 0), 0);
        }
        else {
            // Sum for the same month in previous year
            const rowPreviousMonth = rowspreviousYear.filter((r) => Number(r.Month) === Number(selectedMonth));
            previousValue = rowPreviousMonth.reduce((accumulation, r) => accumulation + (Number(r.Net_Profit ?? 0) || 0), 0);
        }
        const currentValue = Number(netProfitByCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear };
        }
        const percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, netProfitByCategory]);
    // KPI content functions (synchronous)
    const totalRevenueContent = () => (<div id="main-div">
      <div id='title-card'>Total Revenue</div>
      <div id='card-value'>{formatCurrency(totalRevenueForCategory)}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
        <span style={{
            color: RevenueGrowth.positive ? '#16a34a' : '#dc2626',
            fontWeight: 600
        }}>
          {RevenueGrowth.positive ? '▲' : '▼'} {Math.abs(RevenueGrowth.percentage).toFixed(1)}%
        </span>
        <span style={{ fontSize: 12, color: '#6b7280' }}>
          vs {selectedMonth === 0
            ? RevenueGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${RevenueGrowth.previousYear}`}
        </span>
      </div>
    </div>);
    const unitsSoldContent = () => (<div id="main-div">
      <div id='title-card'>Total Units Sold</div>
      <div id='card-value'>{numberFormatter.format(totalUnitsSoldForCategory)}</div>
      <div className="growth-indicator">
        <span style={{ color: unitsSoldGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {unitsSoldGrowth.positive ? '▲' : '▼'} {Math.abs(unitsSoldGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? unitsSoldGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${unitsSoldGrowth.previousYear}`}
        </span>
      </div>
    </div>);
    const categoryCOGS = () => (<div id="main-div">
      <div id='title-card'>Category COGS</div>
      <div id='card-value'>{formatCurrency(cogsByCategory)}</div>
      <div className="growth-indicator">
        <span style={{ color: categoryCOGSGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {categoryCOGSGrowth.positive ? '▲' : '▼'} {Math.abs(categoryCOGSGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? categoryCOGSGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${categoryCOGSGrowth.previousYear}`}
        </span>
      </div>
    </div>);
    const NetProftByCateogoryContent = () => (<div id="main-div">
      <div id='title-card'>Net Profit</div>
      <div id='card-value'>{formatCurrency(netProfitByCategory)}</div>
      <div className="growth-indicator">
        <span style={{ color: NetProfitGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {NetProfitGrowth.positive ? '▲' : '▼'} {Math.abs(NetProfitGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? NetProfitGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${NetProfitGrowth.previousYear}`}
        </span>
      </div>
    </div>);
    // Filters content (year + month)
    const filterContent = () => (<div className="dropdown-filter">
      <div className='dropdown-minwidth'>
        <DropDownListComponent dataSource={categoryOptions} fields={{ text: 'text', value: 'value' }} value={selectedCategory} placeholder="Select category" change={onCategoryChange} popupHeight="240px" width="250px"/>
      </div>
      <div className='dropdown-minwidth'>
        <DropDownListComponent dataSource={years} value={selectedYear} placeholder="Select year" change={onYearChange} popupHeight="200px" width={100}/>
      </div>
      <div className='dropdown-minwidth'>
        <DropDownListComponent ref={monthRef} dataSource={months} fields={{ text: 'text', value: 'value' }} value={selectedMonth} placeholder="Select month" change={onMonthChange} popupHeight="240px" width={140}/>
      </div>
    </div>);
    const TopSoldContent = () => {
        const [drillInfo, setDrillInfo] = useState(null);
        const drillPieRef = useRef(null);
        const onBarPointClick = (args) => {
            const point = args?.point;
            const dataSource = args?.series?.dataSource;
            const index = Number(point?.index ?? -1);
            const row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            if (!row)
                return;
            const abandoned = Math.max(0, Math.min(100, Number(row.abandoned ?? 0)));
            const converted = Math.max(0, 100 - abandoned);
            setDrillInfo({ product: String(row.x), abandoned, converted });
        };
        const buildTop5Products = () => {
            const dataSource = HealthCare.ProductPerformance || [];
            const filteredDataSource = dataSource.filter((r) => Number(r.Year) === Number(selectedYear) && String(r.Category) === String(selectedCategory));
            if (!filteredDataSource.length)
                return [];
            // If month === 0: aggregate by product across all months in the year and pick top 5 by RevenueUSD
            if (selectedMonth === 0) {
                const byProduct = new Map();
                filteredDataSource.forEach((r) => {
                    const key = String(r.Product);
                    const rev = Number(r.RevenueUSD ?? 0) || 0;
                    const units = Number(r.UnitsSold ?? 0) || 0;
                    const abandonedPercentage = Number(r.AbandonedCartPercentage ?? 0) || 0;
                    const current = byProduct.get(key);
                    if (current) {
                        current.y += rev;
                        current.unitsSold += units;
                        current.abandonedSum += abandonedPercentage;
                        current.count += 1;
                    }
                    else {
                        byProduct.set(key, { x: key, y: rev, unitsSold: units, abandonedSum: abandonedPercentage, count: 1 });
                    }
                });
                return Array.from(byProduct.values())
                    .map(p => ({ x: p.x, y: p.y ? Math.round(p.y) : 0, unitsSold: p.unitsSold, abandoned: p.count ? Math.round(p.abandonedSum / p.count) : 0 }))
                    .sort((a, b) => b.y - a.y)
                    .slice(0, 5);
            }
            // Specific month: include only RankInCategoryMonth 1–5 (top 5 by rank)
            const monthRows = filteredDataSource.filter((r) => Number(r.Month) === Number(selectedMonth));
            const filtered = monthRows
                .filter((r) => {
                const rank = Number(r.RankInCategoryMonth ?? 0);
                return rank >= 1 && rank <= 5;
            })
                .sort((a, b) => Number(a.RankInCategoryMonth ?? 999) - Number(b.RankInCategoryMonth ?? 999));
            return filtered.map((r) => ({
                x: String(r.Product),
                y: (() => {
                    const revenue = Number(r.RevenueUSD);
                    if (!isNaN(revenue) && isFinite(revenue))
                        return revenue;
                    const price = Number(r.FixedPriceUSD ?? 0);
                    const units = Number(r.UnitsSold ?? 0);
                    const total = price * units;
                    return isNaN(total) || !isFinite(total) ? 0 : Math.round(total);
                })(),
                unitsSold: Number(r.UnitsSold ?? 0) || 0,
                abandoned: Number(r.AbandonedCartPercentage ?? 0) || 0,
            }));
        };
        const onPercentageTextRender = (args) => {
            const pct = args?.point?.percentage;
            if (pct != null)
                args.text = `${pct.toFixed(0)}%`; // percentage only
        };
        const onTrendTooltip = (args) => {
            const x = String(args?.point?.x ?? '');
            const pct = Number(args?.point?.percentage);
            const val = Number.isFinite(pct) ? pct : Number(args?.point?.y ?? 0);
            args.text = `${x} : <b>${val.toFixed(2)}%</b>`;
        };
        if (drillInfo) {
            const data = [
                { x: 'Abandoned Cart', y: drillInfo.abandoned, color: '#EF5350', text: `${drillInfo.abandoned.toFixed(0)}%` },
                { x: 'Converted Cart', y: drillInfo.converted, color: '#66BB6A', text: `${drillInfo.converted.toFixed(0)}%` },
            ];
            return (<div className='drilldown-layout-container'>
          <div className="button-container">
            <ButtonComponent onClick={() => setDrillInfo(null)} cssClass="e-flat" content="Back" style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid #e5e7eb', cursor: 'pointer' }}/>
            <div className="drilldown-label">{drillInfo.product} • Abandoned vs Converted</div>
          </div>
          <div style={{ height: '100%', minHeight: 0 }}>
            <AccumulationChartComponent id="top-product-drill-pie" load={onAccumulationLoad} ref={drillPieRef} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} enableSmartLabels={true} width="100%" height="100%" enableAnimation={false} textRender={onPercentageTextRender} tooltipRender={onTrendTooltip}>
              <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data} xName="x" yName="y" pointColorMapping="color" innerRadius="45%" dataLabel={{ visible: true, name: 'text', position: 'Outside', connectorStyle: { length: '10px', width: 1 } }} animation={{ enable: false }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>
        </div>);
        }
        const data = buildTop5Products();
        const onXAxisClick = (args) => {
            const targetId = String(args?.target ?? args?.event?.target?.id ?? '');
            if (!targetId)
                return;
            // Data source from chart ref (fallback to current render data)
            const dataSource = topSoldChartref.current?.series?.[0]?.dataSource || data;
            // Prefer index from axis label id to avoid trimmed text mismatches
            let row = null;
            if (targetId.includes('_AxisLabel_')) {
                const match = targetId.match(/_AxisLabel_(\d+)/);
                const index = match ? parseInt(match[1], 10) : -1;
                if (index >= 0 && Array.isArray(dataSource) && dataSource[index]) {
                    row = dataSource[index];
                }
                else {
                    // Fallback: match by label text if id parsing failed
                    const element = document.getElementById(targetId);
                    const labelText = (element?.textContent || '').trim();
                    if (labelText && Array.isArray(dataSource)) {
                        row = dataSource.find((p) => String(p?.x) === labelText) || null;
                    }
                }
            }
            if (!row)
                return;
            const abandoned = Math.max(0, Math.min(100, Number(row.abandoned ?? 0)));
            const converted = Math.max(0, 100 - abandoned);
            setDrillInfo({ product: String(row.x), abandoned, converted });
        };
        const onTopTooltip = (args) => {
            const y = Number(args.point?.y ?? 0);
            const x = String(args.point?.x ?? '');
            const index = Number(args.point?.index ?? -1);
            const dataSource = args.series?.dataSource ?? [];
            const row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            const units = Number(row?.unitsSold ?? 0);
            const unitsText = isNaN(units) ? '' : ` • Units Sold: ${numberFormatter.format(units)}`;
            args.text = `${x}: ${formatCurrency(y)}${unitsText}`;
        };
        return (<div className='layout-container'>
        <ChartComponent id="top-sold-bar" ref={topSoldChartref} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Trim', labelStyle: { size: '11px' } }} primaryYAxis={{ majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, header: '' }} tooltipRender={onTopTooltip} pointClick={onBarPointClick} textRender={onLabelText} width="100%" height="100%" enableAnimation={false} load={onChartLoad} chartMouseClick={onXAxisClick} axisLabelRender={onCurrencyHorizontalAxis} legendSettings={{ visible: false }}>
          <Inject services={[BarSeries, Category, Tooltip, DataLabel, ChartLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective type="Bar" dataSource={data} xName="x" yName="y" marker={{ visible: true, width: 8, height: 8, dataLabel: { visible: true, position: 'Outer' } }} cornerRadius={{ topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }} opacity={0.9} fill='#14C38E' animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    const LeastSoldContent = () => {
        const [leastDrillInfo, setLeastDrillInfo] = useState(null);
        const leastPieRef = useRef(null);
        const onLeastBarPointClick = (args) => {
            const point = args?.point;
            const dataSource = args?.series?.dataSource;
            const index = Number(point?.index ?? -1);
            const row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            if (!row)
                return;
            const abandoned = Math.max(0, Math.min(100, Number(row.abandoned ?? 0)));
            const converted = Math.max(0, 100 - abandoned);
            setLeastDrillInfo({ product: String(row.x), abandoned, converted });
        };
        const buildLeast5Products = () => {
            const dataSource = HealthCare.ProductPerformance || [];
            const filteredDataSource = dataSource.filter((r) => Number(r.Year) === Number(selectedYear) && String(r.Category) === String(selectedCategory));
            if (!filteredDataSource.length)
                return [];
            // For month=0: aggregate by product across all months and pick bottom 5 by RevenueUSD
            if (selectedMonth === 0) {
                const byProduct = new Map();
                filteredDataSource.forEach((r) => {
                    const product = String(r.Product);
                    const revenue = Number(r.RevenueUSD ?? 0) || 0;
                    const units = Number(r.UnitsSold ?? 0) || 0;
                    const abandonedPercentage = Number(r.AbandonedCartPercentage ?? 0) || 0;
                    const current = byProduct.get(product);
                    if (current) {
                        current.y += revenue;
                        current.unitsSold += units;
                        current.abandonedSum += abandonedPercentage;
                        current.count += 1;
                    }
                    else {
                        byProduct.set(product, { x: product, y: revenue, unitsSold: units, abandonedSum: abandonedPercentage, count: 1 });
                    }
                });
                return Array.from(byProduct.values())
                    .map(p => ({ x: p.x, y: p.y ? Math.round(p.y) : 0, unitsSold: p.unitsSold, abandoned: p.count ? Math.round(p.abandonedSum / p.count) : 0 }))
                    .sort((a, b) => a.y - b.y)
                    .slice(0, 5);
            }
            // Specific month: include only RankInCategoryMonth 11–15 (least 5 by rank bucket)
            const monthRows = filteredDataSource.filter((r) => Number(r.Month) === Number(selectedMonth));
            const filtered = monthRows
                .filter((r) => {
                const rank = Number(r.RankInCategoryMonth ?? 0);
                return rank >= 11 && rank <= 15;
            })
                .sort((a, b) => Number(a.RankInCategoryMonth ?? 999) - Number(b.RankInCategoryMonth ?? 999));
            return filtered.map((r) => ({
                x: String(r.Product),
                y: (() => {
                    const revenue = Number(r.RevenueUSD);
                    if (!isNaN(revenue) && isFinite(revenue))
                        return revenue;
                    const price = Number(r.FixedPriceUSD ?? 0);
                    const units = Number(r.UnitsSold ?? 0);
                    const total = price * units;
                    return isNaN(total) || !isFinite(total) ? 0 : Math.round(total);
                })(),
                unitsSold: Number(r.UnitsSold ?? 0) || 0,
                abandoned: Number(r.AbandonedCartPercentage ?? 0) || 0,
            }));
        };
        const onXAxisClick = (args) => {
            const targetId = String(args?.target ?? args?.event?.target?.id ?? '');
            if (!targetId)
                return;
            // Data source from chart ref (fallback to current render data)
            const dataSource = leastSoldChartRef.current?.series?.[0]?.dataSource || data;
            // Prefer index from axis label id to avoid trimmed text mismatches
            let row = null;
            if (targetId.includes('_AxisLabel_')) {
                const match = targetId.match(/_AxisLabel_(\d+)/);
                const index = match ? parseInt(match[1], 10) : -1;
                if (index >= 0 && Array.isArray(dataSource) && dataSource[index]) {
                    row = dataSource[index];
                }
                else {
                    // Fallback: match by label text if id parsing failed
                    const element = document.getElementById(targetId);
                    const labelText = (element?.textContent || '').trim();
                    if (labelText && Array.isArray(dataSource)) {
                        row = dataSource.find((p) => String(p?.x) === labelText) || null;
                    }
                }
            }
            if (!row)
                return;
            const abandoned = Math.max(0, Math.min(100, Number(row.abandoned ?? 0)));
            const converted = Math.max(0, 100 - abandoned);
            setLeastDrillInfo({ product: String(row.x), abandoned, converted });
        };
        const onPercentageTextRender = (args) => {
            const pct = args?.point?.percentage;
            if (pct != null)
                args.text = `${pct.toFixed(0)}%`; // percentage only
        };
        const onTrendTooltip = (args) => {
            const x = String(args?.point?.x ?? '');
            const pct = Number(args?.point?.percentage);
            const val = Number.isFinite(pct) ? pct : Number(args?.point?.y ?? 0);
            args.text = `${x} : <b>${val.toFixed(2)}%</b>`;
        };
        if (leastDrillInfo) {
            const data = [
                { x: 'Abandoned Cart', y: leastDrillInfo.abandoned, color: '#EF5350', text: `${leastDrillInfo.abandoned.toFixed(0)}%` },
                { x: 'Converted Cart', y: leastDrillInfo.converted, color: '#66BB6A', text: `${leastDrillInfo.converted.toFixed(0)}%` },
            ];
            return (<div className='drilldown-layout-container'>
          <div className="button-container">
            <ButtonComponent onClick={() => setLeastDrillInfo(null)} cssClass="e-flat" content="Back" style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid #e5e7eb', cursor: 'pointer' }}/>
            <div className="drilldown-label">{leastDrillInfo.product} • Abandoned vs Converted</div>
          </div>
          <div style={{ height: '100%', minHeight: 0 }}>
            <AccumulationChartComponent id="least-product-drill-pie" load={onAccumulationLoad} ref={leastPieRef} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} enableSmartLabels={true} width="100%" height="100%" enableAnimation={false} textRender={onPercentageTextRender} tooltipRender={onTrendTooltip}>
              <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data} xName="x" yName="y" pointColorMapping="color" innerRadius="60%" animation={{ enable: false }} dataLabel={{ visible: true, name: 'text', position: 'Outside', connectorStyle: { length: '10px', width: 1 } }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>
        </div>);
        }
        const data = buildLeast5Products();
        const onLeastTooltip = (args) => {
            const x = String(args.point?.x ?? '');
            const revenue = Number(args.point?.y ?? 0);
            const index = Number(args.point?.index ?? -1);
            const dataSource = args.series?.dataSource ?? [];
            const row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            const units = Number(row?.unitsSold ?? 0);
            const unitsText = isNaN(units) ? '' : ` • Units Sold: ${numberFormatter.format(units)}`;
            args.text = `${x}: ${formatCurrency(revenue)}${unitsText}`;
        };
        return (<div className='layout-container'>
        <ChartComponent id="least-sold-column" ref={leastSoldChartRef} load={onChartLoad} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', labelStyle: { size: '11px' } }} primaryYAxis={{ majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, header: '' }} tooltipRender={onLeastTooltip} pointClick={onLeastBarPointClick} textRender={onLabelText} width="100%" height="100%" enableAnimation={false} chartMouseClick={onXAxisClick} axisLabelRender={onCurrencyVerticalAxis} legendSettings={{ visible: false }}>
          <Inject services={[ColumnSeries, Category, Tooltip, DataLabel, ChartLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective type="Column" dataSource={data} xName="x" yName="y" marker={{ visible: true, width: 8, height: 8, dataLabel: { visible: true, position: 'Outer' } }} cornerRadius={{ topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }} opacity={0.9} fill='#C5D8A4' animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    const productDetailsContent = () => {
        const dataSource = HealthCare.ProductPerformance || [];
        const monthName = (n) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, n - 1)] || '';
        // Build filtered rows based on selected filters
        const rows = dataSource.filter((r) => {
            const matchesYear = Number(r.Year) === Number(selectedYear);
            const matchesCategory = String(r.Category) === String(selectedCategory);
            const matchesMonth = selectedMonth === 0 || Number(r.Month) === Number(selectedMonth);
            return matchesYear && matchesCategory && matchesMonth;
        }).map((r) => ({
            MonthName: r.MonthName ?? monthName(Number(r.Month) || 0),
            ProductID: r.ProductID,
            Product: r.Product,
            FixedPriceUSD: Number(r.FixedPriceUSD ?? 0),
            UnitsSold: Number(r.UnitsSold ?? 0),
            RevenueUSD: Number(r.RevenueUSD ?? (Number(r.FixedPriceUSD ?? 0) * Number(r.UnitsSold ?? 0))),
            Rating: Number(r.Rating ?? 0)
        }));
        // Sum for plain number
        const sumFooterTemplate = (props) => {
            return <span style={{ fontWeight: 600 }}>Total: {props.Sum?.toLocaleString()}</span>;
        };
        // Sum for currency
        const currencySumFooterTemplate = (props) => {
            const value = Number(props.Sum || 0);
            return (<span style={{ fontWeight: 600 }}>
          Total: {value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
        </span>);
        };
        function toolbarClick(args) {
            switch (args.item.id) {
                case 'productDetailsContent_pdfexport':
                    gridInstance.current?.pdfExport();
                    break;
                case 'productDetailsContent_excelexport':
                    gridInstance.current?.excelExport();
                    break;
            }
        }
        const ratingTemplate = (props) => (<div className='rating'>
        <RatingComponent cssClass={'healthcare-custom-rating'} value={Number(props?.Rating || 0)} readOnly={true}/>
      </div>);
        const toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
        return (<div className="layout-container">
        <GridComponent ref={gridInstance} id="productDetailsContent" dataSource={rows} allowPaging={false} enableVirtualMaskRow={true} allowSorting={true} allowResizing={true} allowFiltering={true} allowMultiSorting={true} width={'100%'} height={'100%'} allowGrouping={true} allowExcelExport={true} allowPdfExport={true} toolbar={toolBarOptions} toolbarClick={toolbarClick} filterSettings={{ type: 'Menu' }}>
          <ColumnsDirective>
            <ColumnDirective field="MonthName" headerText="Month" headerTemplate={headerWithTooltip("Month")} width={110} textAlign="Left"/>
            <ColumnDirective field="ProductID" headerText="Product ID" headerTemplate={headerWithTooltip("Product ID")} width={130} textAlign="Left"/>
            <ColumnDirective field="Product" headerText="Product Name" headerTemplate={headerWithTooltip("Product Name")} minWidth={160} width={200} textAlign="Left"/>
            <ColumnDirective field="FixedPriceUSD" headerText="Fixed Price (USD)" headerTemplate={headerWithTooltip("Fixed Price (USD)")} textAlign="Right" format="C0" width={170}/>
            <ColumnDirective field="UnitsSold" headerText="Units Sold" headerTemplate={headerWithTooltip("Unit Sold")} textAlign="Right" format="N0" width={120}/>
            <ColumnDirective field="RevenueUSD" headerText="Revenue (USD)" headerTemplate={headerWithTooltip("Revenue (USD)")} textAlign="Right" format="C0" width={150}/>
            <ColumnDirective headerText="Rating" headerTemplate={headerWithTooltip("Rating")} width={140} template={ratingTemplate} textAlign="Center"/>
          </ColumnsDirective>
          {/* ===== Aggregates (Sum) ===== */}
          <AggregatesDirective>
            <AggregateDirective>
              <AggregateColumnsDirective>
                {/* Sum UnitsSold */}
                <AggregateColumnDirective field="UnitsSold" type="Sum" footerTemplate={sumFooterTemplate}/>
                {/* Sum RevenueUSD as currency */}
                <AggregateColumnDirective field="RevenueUSD" type="Sum" footerTemplate={currencySumFooterTemplate}/>
              </AggregateColumnsDirective>
            </AggregateDirective>
          </AggregatesDirective>
          <GridInject services={[Page, Sort, GridResize, GridFilter, Group, RowDD, Toolbar, ExcelExport, PdfExport, Aggregate]}/>
        </GridComponent>
      </div>);
    };
    return (<div className="Container">
      <div className='e-card layout-header'>
        <div className='layout-title'>Product Performance Analysis</div>
        <div>{filterContent()}</div>
      </div>
      <div>
        <DashboardLayoutComponent id="dashboard_performance" ref={productRef} style={{ height: '85vh', width: '100%', zIndex: 1 }} columns={8} cellAspectRatio={1} cellSpacing={[10, 10]} allowResizing={false} allowDragging={false} mediaQuery="(max-width:950px)">
          <PanelsDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={totalRevenueContent}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={unitsSoldContent}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={categoryCOGS}></PanelDirective>
            <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={NetProftByCateogoryContent}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={1} col={0} header="<div>Top Sold Product</div>" content={TopSoldContent}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={1} col={4} header="<div>Least Sold Product</div>" content={LeastSoldContent}></PanelDirective>
            <PanelDirective sizeX={8} sizeY={4} row={4} col={0} header="<div>Product Details - All Categories</div>" content={productDetailsContent}></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>
    </div>);
};
export let unCountries = [
    { Country: 'India', Status: 'In-Active' },
    { Country: 'United States', Status: 'In-Active' },
    { Country: 'South Africa', Status: 'In-Active' },
    { Country: 'United Kingdom', Status: 'In-Active' },
    { Country: 'Australia', Status: 'In-Active' }
];
const Dashboard3 = ({ selectedYear, selectedMonth, onYearChange, onMonthChange }) => {
    const monthRef = useRef(null);
    const categories = ["United States", "United Kingdom", "South Africa", "India", "Australia"];
    const [selectedCountry, setSelectedCountry] = useState(categories[0]);
    const years = [2023, 2024, 2025];
    const categoryOptions = categories.map(c => ({ text: c, value: c }));
    const mapRef = React.useRef(null);
    const regionRef = React.useRef(null);
    const ontimeGaugeRef = useRef(null);
    const defectChartref = useRef(null);
    const distributorChartRef = useRef(null);
    const SalesDistributionChartRef = useRef(null);
    const channelChartRef = useRef(null);
    React.useEffect(() => {
        let timer;
        const refreshAll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                regionRef.current?.refresh();
                channelChartRef.current?.refresh();
                SalesDistributionChartRef.current?.refresh();
                distributorChartRef.current?.refresh();
                defectChartref.current?.refresh();
                ontimeGaugeRef.current?.refresh();
                mapRef.current?.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return () => {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    const months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 }
    ];
    const filterContent = () => (<div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingLeft: 12, paddingRight: 12 }}>
      <div className='dropdown-minwidth'>
        <DropDownListComponent dataSource={categoryOptions} fields={{ text: 'text', value: 'value' }} value={selectedCountry} placeholder="Select category" change={(e) => setSelectedCountry(String(e.value ?? categories[0]))} popupHeight="240px" width={180}/>
      </div>
      <div className='dropdown-minwidth'>
        <DropDownListComponent dataSource={years} value={selectedYear} placeholder="Select year" change={onYearChange} popupHeight="200px" width={100}/>
      </div>
      <div className='dropdown-minwidth'>
        <DropDownListComponent ref={monthRef} dataSource={months} fields={{ text: 'text', value: 'value' }} value={selectedMonth} placeholder="Select month" change={onMonthChange} popupHeight="240px" width={140}/>
      </div>
    </div>);
    const Mapload = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/contrast/i, 'Contrast').replace(/-dark/i, "Dark").replace(/-highContrast/i, 'HighContrast');
    };
    const SalesByRegion = () => {
        // Regions available in data
        const regions = ['United States', 'United Kingdom', 'India', 'South Africa', 'Australia'];
        const getMonthShort = (m) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
        const [worldData, setWorldData] = React.useState(null);
        React.useEffect(() => {
            let alive = true;
            fetch('https://cdn.syncfusion.com/maps/map-data/world-map.json')
                .then(r => r.json())
                .then(d => { if (alive)
                setWorldData(d); })
                .catch(() => setWorldData(null));
            return () => { alive = false; };
        }, []);
        // Compute revenue per region for selected year/month
        const revenueByRegion = React.useMemo(() => {
            const dataSource = HealthCare.SalesByRegion || [];
            const rowsForYear = dataSource.filter(r => Number(r.Year) === Number(selectedYear));
            const result = { 'United States': 0, 'United Kingdom': 0, 'India': 0, 'South Africa': 0, 'Australia': 0 };
            if (!rowsForYear.length)
                return result;
            if (selectedMonth === 0) {
                rowsForYear.forEach(r => {
                    regions.forEach(region => {
                        const value = Number(r[region] ?? 0);
                        if (!isNaN(value) && isFinite(value))
                            result[region] += value;
                    });
                });
            }
            else {
                const monthShort = getMonthShort(selectedMonth);
                const row = rowsForYear.find(r => String(r.Month) === monthShort);
                if (row) {
                    regions.forEach(region => {
                        const value = Number(row[region] ?? 0);
                        result[region] = isNaN(value) || !isFinite(value) ? 0 : value;
                    });
                }
            }
            return result;
        }, [selectedYear, selectedMonth]);
        // Map 'region' label to shape name in world map
        const shapeNameByRegion = {
            'United States': 'United States',
            'United Kingdom': 'United Kingdom',
            'India': 'India',
            'Australia': 'Australia',
            'South Africa': 'South Africa'
        };
        // Build a quick lookup for tooltips: shapeName -> revenue
        const revenueByShape = React.useMemo(() => {
            const map = {};
            Object.entries(shapeNameByRegion).forEach(([region, shape]) => {
                const revenue = revenueByRegion[region] ?? 0;
                if (Array.isArray(shape)) {
                    shape.forEach(s => { map[s] = revenue; });
                }
                else if (shape) {
                    map[shape] = revenue;
                }
            });
            return map;
        }, [revenueByRegion]);
        const title = selectedMonth === 0 ? `All Months • ${selectedYear}` : `${selectedYear} - ${getMonthShort(selectedMonth)}`;
        const onTooltip = (args) => {
            const name = (args?.content);
            const revenue = revenueByShape[name] ?? 0;
            args.content = [`<b>${name}</b><br/>${title}<br/>Revenue: <b>${formatCurrency(revenue)}</b>`];
        };
        // Customize legend text to show: "<Country> - <Revenue>" and hide the inactive bucket
        const onLegendRendering = (args) => {
            const txt = String(args?.legendText ?? args?.text ?? '').toLowerCase();
            if (txt.includes('in-active')) {
                args.cancel = true;
                return;
            }
            if (txt.includes('active')) {
                const revenue = Number(revenueByRegion[selectedCountry] ?? 0);
                const label = `${selectedCountry} - ${formatCurrency(revenue)}`;
                if ('legendText' in args)
                    args.legendText = label;
                if ('text' in args)
                    args.text = label;
            }
        };
        const mapDataSource = React.useMemo(() => {
            return unCountries.map((row) => ({
                ...row,
                Status: String(row.Country) === String(selectedCountry) ? 'Active' : 'In-Active'
            }));
        }, [selectedCountry]);
        const mapKey = `${selectedCountry}-${selectedYear}-${selectedMonth}`;
        return (<div className="map-container">
        {!worldData ? (<div>Loading map…</div>) : (<MapsComponent key={mapKey} ref={mapRef} id="sales-by-region-map" height={'100%'} width={'100%'} background="transparent" tooltipDisplayMode="MouseMove" tooltipRender={onTooltip} legendSettings={{ visible: true, position: 'Bottom' }} legendRendering={onLegendRendering} load={Mapload}>
            <MapsInject services={[MapsTooltip, MapsZoom, MapsLegend, MapsSelection, MapsHighlight]}/>
            <LayersDirective>
              <LayerDirective dataSource={mapDataSource} shapeData={worldData} shapeDataPath="Country" shapePropertyPath="name" shapeSettings={{
                    fill: '#E5E5E5',
                    colorMapping: [
                        {
                            value: 'In-Active',
                            color: '#E48900'
                        },
                        {
                            color: '#028A02',
                            value: 'Active'
                        }
                    ],
                    colorValuePath: 'Status'
                }} tooltipSettings={{ visible: true, valuePath: 'Country' }}/>
            </LayersDirective>
          </MapsComponent>)}
      </div>);
    };
    const OnTimeDeliveryRate = () => {
        const getMonthShort = (m) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
        const value = React.useMemo(() => {
            const dataSource = HealthCare.SupplierAndDistributor || [];
            if (!Array.isArray(dataSource) || dataSource.length === 0)
                return 0;
            const byCountry = dataSource[0] || {};
            const rows = Array.isArray(byCountry?.[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return 0;
            const rowsForYear = rows.filter(r => Number(r?.year) === Number(selectedYear));
            if (!rowsForYear.length)
                return 0;
            if (selectedMonth === 0) {
                const sum = rowsForYear.reduce((accumulation, r) => accumulation + (Number(r?.on_time_rate ?? 0) || 0), 0);
                const average = sum / rowsForYear.length;
                return Math.round(average);
            }
            else {
                const monthShort = getMonthShort(selectedMonth);
                const row = rowsForYear.find(r => String(r?.month) === monthShort);
                const value = Number(row?.on_time_rate ?? 0);
                return isNaN(value) || !isFinite(value) ? 0 : value;
            }
        }, [selectedYear, selectedMonth, selectedCountry]);
        const onGaugeLoad = (args) => {
            let selectedTheme = location.hash.split('/')[1] || 'Material';
            const computed = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
                .replace(/-dark/i, 'Dark')
                .replace(/-high/i, 'High')
                .replace(/contrast/i, 'Contrast')
                .replace(/5\.3/i, '5');
            if (args && args.gauge) {
                args.gauge.theme = computed;
            }
        };
        return (<div className='layout-container'>
        <LinearGaugeComponent id="on-time-gauge" ref={ontimeGaugeRef} load={onGaugeLoad} orientation="Horizontal" container={{ width: 24, type: 'RoundedRectangle' }} width={'100%'} height={'100%'}>
          <LGInject services={[LGAnnotations]}/>
          <LGAxesDirective>
            <LGAxisDirective minimum={0} maximum={100} labelStyle={{ font: { size: '12px' } }}>
              <LGRangesDirective>
                <LGRangeDirective start={0} end={70} color="#FF3B30"/>
                <LGRangeDirective start={70} end={85} color="#FFE700"/>
                <LGRangeDirective start={85} end={100} color="#1DC060"/>
              </LGRangesDirective>
              <LGPointersDirective>
                <LGPointerDirective value={value} type="Bar" color="#4b88ae"/>
              </LGPointersDirective>
            </LGAxisDirective>
          </LGAxesDirective>
          <LGAnnotationsDirective>
            <LGAnnotationDirective content={`<div style="font-weight:600;font-size:16px;line-height:1;">${value}%</div>`} x={0} y={-15} zIndex="1" horizontalAlignment="Center" verticalAlignment="Far"/>
          </LGAnnotationsDirective>
        </LinearGaugeComponent>
      </div>);
    };
    const DefectContent = () => {
        const suppliers = ['Supplier_1', 'Supplier_2', 'Supplier_3', 'Supplier_4', 'Supplier_5'];
        const getMonthShort = (m) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
        const data = React.useMemo(() => {
            const dataSource = HealthCare.SupplierAndDistributor || [];
            const byCountry = dataSource[0] || {};
            const rows = Array.isArray(byCountry?.[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return suppliers.map(s => ({ x: s, y: 0 }));
            const rowsForYear = rows.filter(r => Number(r?.year) === Number(selectedYear));
            if (!rowsForYear.length)
                return suppliers.map(s => ({ x: s, y: 0 }));
            if (selectedMonth === 0) {
                // Average across all months in the selected year
                return suppliers.map(s => {
                    const sum = rowsForYear.reduce((accumulation, r) => accumulation + (Number(r?.[s] ?? 0) || 0), 0);
                    const average = rowsForYear.length ? sum / rowsForYear.length : 0;
                    return { x: s, y: Math.round(average) };
                });
            }
            else {
                const monthShort = getMonthShort(selectedMonth);
                const row = rowsForYear.find(r => String(r?.month) === monthShort);
                return suppliers.map(s => ({ x: s, y: Number(row?.[s] ?? 0) || 0 }));
            }
        }, [selectedCountry, selectedYear, selectedMonth]);
        const onTooltip = (args) => {
            const name = selectedMonth === 0 ? `All Months • ${selectedYear}` : `${selectedYear} - ${getMonthShort(selectedMonth)}`;
            const x = String(args?.point?.x ?? '');
            const y = Number(args?.point?.y ?? 0);
            args.text = `<b>${x}</b><br/>${name}<br/>Defect: <b>${y}%</b>`;
        };
        const onLabelText = (args) => {
            const y = Number(args?.point?.y ?? 0);
            args.text = `${y}%`;
        };
        return (<div className='layout-container'>
        <ChartComponent id="defect-by-supplier" ref={defectChartref} load={onChartLoad} primaryXAxis={{
                valueType: 'Category',
                majorGridLines: { width: 2 },
                labelIntersectAction: 'Rotate45',
                labelStyle: { size: '11px' },
            }} primaryYAxis={{
                title: 'Defect (%)',
                labelFormat: '{value}%',
                lineStyle: { width: 0 },
                majorGridLines: { width: 2 },
            }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, header: '' }} tooltipRender={onTooltip} textRender={onLabelText} width="100%" height="100%" enableAnimation={false} legendSettings={{ visible: false }}>
          <Inject services={[PolarSeries, BarSeries, Category, Tooltip, DataLabel, ChartLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective type="Polar" drawType='Column' dataSource={data} xName="x" yName="y" marker={{ dataLabel: { visible: true, position: 'Outer', font: { size: '10px' } } }} columnSpacing={0.2} fill='#FED049' cornerRadius={{ bottomRight: 10, topRight: 10 }} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    const DistributorContent = () => {
        const DISTRIBUTORS = ['distributor 1', 'distributor 2', 'distributor 3', 'distributor 4', 'distributor 5'];
        const getMonthShort = (m) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
        const data = React.useMemo(() => {
            const src = HealthCare.SupplierAndDistributor || [];
            const byCountry = src[0] || {};
            const rows = Array.isArray(byCountry?.[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length) {
                return {
                    share: DISTRIBUTORS.map((_, i) => ({ x: `Distributor ${i + 1}`, y: 0 })),
                    ontime: DISTRIBUTORS.map((_, i) => ({ x: `Distributor ${i + 1}`, y: 0 })),
                };
            }
            const rowsForYear = rows.filter(r => Number(r?.year) === Number(selectedYear));
            if (!rowsForYear.length) {
                return {
                    share: DISTRIBUTORS.map((_, i) => ({ x: `Distributor ${i + 1}`, y: 0 })),
                    ontime: DISTRIBUTORS.map((_, i) => ({ x: `Distributor ${i + 1}`, y: 0 })),
                };
            }
            if (selectedMonth === 0) {
                // Average across all months in the selected year for each distributor metric
                const count = rowsForYear.length;
                const share = DISTRIBUTORS.map((key, i) => {
                    const sum = rowsForYear.reduce((acc, r) => acc + Number(r?.[key]?.[0]?.distributor_share_pct ?? 0), 0);
                    const avg = count ? Math.round((sum / count) * 100) / 100 : 0;
                    return { x: `Distributor ${i + 1}`, y: Math.round(avg) };
                });
                const ontime = DISTRIBUTORS.map((key, i) => {
                    const sum = rowsForYear.reduce((acc, r) => acc + Number(r?.[key]?.[0]?.on_time_contribution_pct ?? 0), 0);
                    const avg = count ? Math.round((sum / count) * 100) / 100 : 0;
                    return { x: `Distributor ${i + 1}`, y: Math.round(avg) };
                });
                return { share, ontime };
            }
            // Specific month
            const mShort = getMonthShort(selectedMonth);
            const row = rowsForYear.find(r => String(r?.month) === mShort);
            if (!row) {
                return {
                    share: DISTRIBUTORS.map((_, i) => ({ x: `Distributor ${i + 1}`, y: 0 })),
                    ontime: DISTRIBUTORS.map((_, i) => ({ x: `Distributor ${i + 1}`, y: 0 })),
                };
            }
            const share = DISTRIBUTORS.map((key, i) => ({
                x: `Distributor ${i + 1}`,
                y: Number(row?.[key]?.[0]?.distributor_share_pct ?? 0) || 0,
            }));
            const ontime = DISTRIBUTORS.map((key, i) => ({
                x: `Distributor ${i + 1}`,
                y: Number(row?.[key]?.[0]?.on_time_contribution_pct ?? 0) || 0,
            }));
            return { share, ontime };
        }, [selectedCountry, selectedYear, selectedMonth]);
        const onTooltip = (args) => {
            const x = String(args.point?.x ?? '');
            const y = Number(args.point?.y ?? 0);
            const name = String(args.series?.name ?? '');
            args.text = `<b>${x}</b><br/>${name}: <b>${y}%</b>`;
        };
        const onLabelText = (args) => {
            const y = Number(args?.point?.y ?? 0);
            args.text = `${y}%`;
        };
        return (<div className="layout-container">
        <ChartComponent id="distributor-analysis" ref={distributorChartRef} load={onChartLoad} primaryXAxis={{
                valueType: 'Category',
                labelIntersectAction: 'Rotate45',
                labelStyle: { size: '11px' },
                interval: 1
            }} primaryYAxis={{
                labelFormat: '{value}%',
                lineStyle: { width: 0 },
                majorGridLines: { width: 2 },
                labelStyle: { color: 'transparent' },
            }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, enableHighlight: true, header: '' }} tooltipRender={onTooltip} textRender={onLabelText} width="100%" height="100%" legendSettings={{ position: 'Bottom', visible: true }}>
          <Inject services={[ColumnSeries, Category, Tooltip, DataLabel, ChartLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective type="Column" name="On-Time Contribution %" groupName="Distributor" dataSource={data.ontime} xName="x" yName="y" fill="#f7dfbbff" columnWidth={0.7} columnSpacing={0.15} marker={{ dataLabel: { visible: true, position: 'Outer', font: { size: '10px' } } }} animation={{ enable: false }}/>
            <SeriesDirective type="Column" name="Distributor Share %" groupName="Distributor" dataSource={data.share} xName="x" yName="y" fill="#14C38E" columnWidth={0.35} columnSpacing={0.15} marker={{ dataLabel: { visible: true, position: 'Outer', font: { size: '10px' } } }} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    const SalesDistribution = () => {
        const getMonthShort = (m) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
        const distributorColors = ['#EFF48E', '#E48900', '#CDC733', '#14C38E', '#028A02'];
        const ratingColorMap = {
            'Hospitals': distributorColors[0],
            'Pharmacies': distributorColors[1],
            'Self Care': distributorColors[2],
            'Distributors': distributorColors[3],
            'Others': distributorColors[4]
        };
        const data = React.useMemo(() => {
            const dataSource = HealthCare.SupplierAndDistributor || [];
            const byCountry = dataSource[0] || {};
            const rows = Array.isArray(byCountry?.[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return [];
            const rowsForYear = rows.filter(r => Number(r?.year) === Number(selectedYear));
            if (!rowsForYear.length)
                return [];
            const keys = ['hospital_usd', 'pharmacies_usd', 'selfcare_usd', 'distributor_usd', 'others_usd'];
            const labels = {
                hospital_usd: 'Hospitals',
                pharmacies_usd: 'Pharmacies',
                selfcare_usd: 'Self Care',
                distributor_usd: 'Distributors',
                others_usd: 'Others'
            };
            if (selectedMonth === 0) {
                const sums = {
                    hospital_usd: 0,
                    pharmacies_usd: 0,
                    selfcare_usd: 0,
                    distributor_usd: 0,
                    others_usd: 0
                };
                rowsForYear.forEach(r => {
                    keys.forEach(k => {
                        const value = Number(r?.[k] ?? 0);
                        if (!isNaN(value) && isFinite(value))
                            sums[k] += value;
                    });
                });
                return keys.map(k => ({ x: labels[k], y: Math.round(sums[k]) }));
            }
            else {
                const monthShort = getMonthShort(selectedMonth);
                const row = rowsForYear.find(r => String(r?.month) === monthShort);
                if (!row)
                    return [];
                return keys.map(k => ({ x: labels[k], y: Number(row?.[k] ?? 0) || 0 }));
            }
        }, [selectedCountry, selectedYear, selectedMonth]);
        const coloredData = React.useMemo(() => {
            return (data || []).map(d => ({
                ...d,
                color: ratingColorMap[d.x] ?? '#999999'
            }));
        }, [data]);
        const onTooltip = (args) => {
            const x = String(args?.point?.x ?? '');
            const y = Number(args?.point?.y ?? 0);
            const title = selectedMonth === 0 ? `All Months • ${selectedYear}` : `${selectedYear} - ${getMonthShort(selectedMonth)}`;
            args.text = `<b>${title}</b><br/>${x}: <b>${formatCurrency(y)}</b>`;
        };
        const onLabelText = (args) => {
            const y = Number(args?.point?.y ?? 0);
            args.text = formatCurrency(y);
        };
        return (<div className='layout-container'>
        <AccumulationChartComponent id="sales-distribution-pie" load={onAccumulationLoad} ref={SalesDistributionChartRef} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} tooltipRender={onTooltip} textRender={onLabelText} enableSmartLabels={true} center={{ x: '50%', y: '50%' }} width="100%" height="100%">
          <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective type="Pie" dataSource={coloredData} xName="x" yName="y" startAngle={0} endAngle={360} explode={false} pointColorMapping="color" dataLabel={{ visible: true, name: 'x', position: 'Outside', connectorStyle: { length: '10px', width: 1 } }} animation={{ enable: false }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    const ChannelContent = () => {
        const ChannelColors = ['#F7EC09', '#14C38E', '#CDC733', '#77E4D4', '#E48900', '#EFF48E'];
        const getMonthShort = (m) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
        const KEYS = ['Direct_visit', 'Instagram', 'Facebook', 'youtube', 'twitter', 'google_ads'];
        const LABELS = {
            Direct_visit: 'Direct Visit',
            Instagram: 'Instagram',
            Facebook: 'Facebook',
            youtube: 'YouTube',
            twitter: 'Twitter',
            google_ads: 'Google Ads'
        };
        // Fixed color mapping per channel label → color
        const channelColorMap = {
            'Direct Visit': ChannelColors[1],
            'Instagram': ChannelColors[0],
            'Facebook': ChannelColors[2],
            'YouTube': ChannelColors[3],
            'Twitter': ChannelColors[4],
            'Google Ads': ChannelColors[5],
        };
        const data = React.useMemo(() => {
            const dataSource = HealthCare.SupplierAndDistributor || [];
            const byCountry = dataSource[0] || {};
            const rows = Array.isArray(byCountry?.[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return [];
            const rowsForYear = rows.filter(r => Number(r?.year) === Number(selectedYear));
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                const sums = {
                    Direct_visit: 0,
                    Instagram: 0,
                    Facebook: 0,
                    youtube: 0,
                    twitter: 0,
                    google_ads: 0
                };
                rowsForYear.forEach(r => {
                    KEYS.forEach(k => {
                        const value = Number(r?.[k] ?? 0);
                        if (!isNaN(value) && isFinite(value))
                            sums[k] += value;
                    });
                });
                return KEYS.map(k => ({ x: LABELS[k], y: Math.round(sums[k]) }));
            }
            else {
                const monthShort = getMonthShort(selectedMonth);
                const row = rowsForYear.find(r => String(r?.month) === monthShort);
                if (!row)
                    return [];
                return KEYS.map(k => ({ x: LABELS[k], y: Number(row?.[k] ?? 0) || 0 }));
            }
        }, [selectedCountry, selectedYear, selectedMonth]);
        const coloredData = React.useMemo(() => {
            return (data || []).map(d => ({
                ...d,
                color: channelColorMap[d.x] ?? '#9E9E9E'
            }));
        }, [data]);
        const onTooltip = (args) => {
            const x = String(args?.point?.x ?? '');
            const y = Number(args?.point?.y ?? 0);
            const title = selectedMonth === 0
                ? `All Months • ${selectedYear}`
                : `${selectedYear} - ${getMonthShort(selectedMonth)}`;
            args.text = `<b>${title}</b><br/>${x}: <b>${formatCurrency(y)}</b>`;
        };
        const onLabelText = (args) => {
            const y = Number(args?.point?.y ?? 0);
            args.text = formatCurrency(y);
        };
        return (<div className='layout-container'>
        <AccumulationChartComponent id="channel-donut" ref={channelChartRef} load={onAccumulationLoad} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} tooltipRender={onTooltip} textRender={onLabelText} enableSmartLabels={true} center={{ x: '50%', y: '50%' }} width="100%" height="100%">
          <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective type="Pie" dataSource={coloredData} xName="x" yName="y" pointColorMapping="color" innerRadius="60%" startAngle={0} endAngle={360} explode={false} animation={{ enable: false }} dataLabel={{ visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    return (<div className="Container">
      <div className='e-card layout-header'>
        <div className='layout-title'>Regional and Channel Analysis</div>
        <div>{filterContent()}</div>
      </div>
      <div>
        <DashboardLayoutComponent id="dashboard_chart" ref={regionRef} style={{ height: '85vh', width: '100%', zIndex: 1 }} columns={8} cellAspectRatio={1} cellSpacing={[10, 10]} allowResizing={false} allowDragging={false} mediaQuery="(max-width:950px)">
          <PanelsDirective>
            <PanelDirective sizeX={4} sizeY={3} row={0} col={0} header="<div>Sales by Channel</div>" content={ChannelContent}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={2} row={3} col={4} header="<div>On Time Delivery Analysis</div>" content={OnTimeDeliveryRate}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={3} col={0} header="<div>Supplier's Defect Analysis</div>" content={DefectContent}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={6} col={4} header="<div>Top Distributors</div>" content={DistributorContent}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={3} row={6} col={0} header="<div>Sales Distribution</div>" content={SalesDistribution}></PanelDirective>
            <PanelDirective sizeX={4} sizeY={4} row={0} col={4} header="<div>Sales by Region</div>" content={SalesByRegion}></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>

    </div>);
};
const Dashboard4 = ({ selectedYear, selectedMonth, onYearChange, onMonthChange }) => {
    const cellSpacing = [10, 10];
    const monthRef = useRef(null);
    const ratingRef = useRef(null);
    const paymentChartRef = useRef(null);
    const returnChartRef = useRef(null);
    const soldVsReturnChartRef = useRef(null);
    const conversionGaugeRef = useRef(null);
    const customerRef = useRef(null);
    const totalCustomerRef = useRef(null);
    const years = [2023, 2024, 2025];
    const months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 },
    ];
    React.useEffect(() => {
        let timer;
        const refreshAll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                customerRef.current?.refresh();
                ratingRef.current?.refresh();
                paymentChartRef.current?.refresh();
                returnChartRef.current?.refresh();
                soldVsReturnChartRef.current?.refresh();
                conversionGaugeRef.current?.refresh();
                totalCustomerRef.current?.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return () => {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    const onCreated = (e) => {
        setTimeout(() => {
            customerRef.current?.refresh();
        }, 500);
    };
    const getMonthShort = (m) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
    const getNewVisitors = (year, month) => {
        const rows = HealthCare.CustomerInfo.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((s, r) => s + (r.NewVisitors ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.NewVisitors ?? 0;
    };
    const getConvertedVisitors = (year, month) => {
        const rows = HealthCare.CustomerInfo.filter((r) => r.Year === year);
        if (month === 0)
            return rows.reduce((s, r) => s + (r.ConvertedCustomer ?? 0), 0);
        const row = rows.find((r) => r.Month === month);
        return row?.ConvertedCustomer ?? 0;
    };
    const getTotalCustomer = (year, month) => {
        const initialCustomerValue = 1850;
        const sum = HealthCare.CustomerInfo.reduce((accumulation, item) => {
            const include = item.Year < year || (item.Year === year && (month === 0 ? true : item.Month <= month));
            return include ? accumulation + (item.ConvertedCustomer ?? 0) : accumulation;
        }, 0);
        return initialCustomerValue + sum;
    };
    const getCustomerLoyality = (year, month) => {
        const rowsForYear = HealthCare.CustomerInfo?.filter((r) => r.Year === year) ?? [];
        if (!rowsForYear.length)
            return 0;
        // Helper to compute the score for a single row
        const score = (r) => {
            const total = Number(r.TotalOrder ?? 0);
            const converted = Number(r.ConvertedCustomer ?? 0);
            return (total - converted) / 10;
        };
        if (month === 0) {
            // Average across all months available for the year
            const sum = rowsForYear.reduce((accumulation, r) => accumulation + score(r), 0);
            const average = sum / rowsForYear.length;
            return Math.round(average * 100) / 100;
        }
        else {
            // CustomerInfo uses numeric Month (1..12)
            const row = rowsForYear.find((r) => r.Month === month);
            if (!row)
                return 0;
            const val = score(row);
            return Math.round(val * 100) / 100;
        }
    };
    const totalCustGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getTotalCustomer(selectedYear, selectedMonth);
        const previous = getTotalCustomer(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const newCustGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getConvertedVisitors(selectedYear, selectedMonth);
        const previous = getConvertedVisitors(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const newVisitorGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getNewVisitors(selectedYear, selectedMonth);
        const previous = getNewVisitors(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const loyaltyGrowth = React.useMemo(() => {
        const previousYear = selectedYear - 1;
        const current = getCustomerLoyality(selectedYear, selectedMonth);
        const previous = getCustomerLoyality(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear };
        const percentage = ((current - previous) / previous) * 100;
        return { percentage, positive: percentage >= 0, previousYear };
    }, [selectedYear, selectedMonth]);
    const totalCustomerSpark = React.useMemo(() => {
        const YEARS = [2023, 2024, 2025];
        return YEARS.map((yy) => ({ x: String(yy), y: getTotalCustomer(yy, 0) }));
    }, []);
    const totalCustomer = () => <div className="kpi-total-card">
      <div className="spark-container">
        <div className="card-label">Total Customer</div>
        <div className="card-totalvalue">{kpis.totalCustomer}</div>
        <div className="growth-indicator">
          <span style={{ color: totalCustGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
            {totalCustGrowth.positive ? '▲' : '▼'} {Math.abs(totalCustGrowth.percentage).toFixed(1)}%
          </span>
          <span className="growth-indicator-label">
            vs {selectedMonth === 0
            ? totalCustGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${totalCustGrowth.previousYear}`}
          </span>
        </div>
      </div>
      <div style={{ height: '50%' }}>
        {/* Sparkline: monthly counts for selected year */}
        <div>
          <SparklineComponent id="total-customer-spark" ref={totalCustomerRef} type="Pie" dataSource={totalCustomerSpark} xName="x" yName="y" valueType="Category" width="60px" height="85px" lineWidth={2} palette={sparklinePalette} tooltipSettings={{ visible: true, format: 'Year: ${x}<br/>Customer: ${y}' }}>
            <Inject services={[SparklineTooltip]}/>
          </SparklineComponent>
        </div>
      </div>
    </div>;
    const newVisitors = () => (<div id="main-div">
      <div id='title-card'>New Visitors</div>
      <div id="card-value">{kpis.newVisitors}</div>
      <div className="growth-indicator">
        <span style={{ color: newVisitorGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {newVisitorGrowth.positive ? '▲' : '▼'} {Math.abs(newVisitorGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? newVisitorGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${newVisitorGrowth.previousYear}`}
        </span>
      </div>
    </div>);
    const customerLoyality = () => (<div id="main-div">
      <div id='title-card'>Customer Loyality Score</div>
      <div id="card-value">{kpis.customerLoyality}</div>
      <div className="growth-indicator">
        <span style={{ color: loyaltyGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {loyaltyGrowth.positive ? '▲' : '▼'} {Math.abs(loyaltyGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? loyaltyGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${loyaltyGrowth.previousYear}`}
        </span>
      </div>
    </div>);
    const newCustomers = () => (<div id="main-div">
      <div id='title-card'>New Customers</div>
      <div id="card-value">{kpis.newCustomers}</div>
      <div className="growth-indicator">
        <span style={{ color: newCustGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
          {newCustGrowth.positive ? '▲' : '▼'} {Math.abs(newCustGrowth.percentage).toFixed(1)}%
        </span>
        <span className="growth-indicator-label">
          vs {selectedMonth === 0
            ? newCustGrowth.previousYear
            : `${months.find(m => m.value === selectedMonth)?.text} ${newCustGrowth.previousYear}`}
        </span>
      </div>
    </div>);
    const kpis = React.useMemo(() => {
        const year = selectedYear;
        const month = selectedMonth;
        return {
            totalCustomer: getTotalCustomer(year, month),
            newVisitors: getNewVisitors(year, month),
            customerLoyality: getCustomerLoyality(year, month),
            newCustomers: getConvertedVisitors(year, month)
        };
    }, [selectedYear, selectedMonth]);
    const filterContent = () => (<div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingLeft: 12, paddingRight: 12 }}>
      <div className='dropdown-minwidth'>
        <DropDownListComponent dataSource={years} value={selectedYear} placeholder="Select year" change={onYearChange} popupHeight="200px" width={100}/>
      </div>
      <div className='dropdown-minwidth'>
        <DropDownListComponent ref={monthRef} dataSource={months} fields={{ text: 'text', value: 'value' }} value={selectedMonth} placeholder="Select month" change={onMonthChange} popupHeight="240px" width={140}/>
      </div>
    </div>);
    const RatingInfo = () => {
        const dataSource = HealthCare?.RatingInfo || [];
        if (!dataSource.length) {
            return <div style={{ padding: 15 }}>No rating data</div>;
        }
        const RatingInfoColors = ['#F7EC09', '#14C38E', '#CDC733', '#77E4D4', '#E48900', '#EFF48E'];
        const STAR_KEYS = ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star', 'No Ratings'];
        const colorByStar = {
            '5 Star': RatingInfoColors[0],
            '4 Star': RatingInfoColors[1],
            '3 Star': RatingInfoColors[2],
            '2 Star': RatingInfoColors[3],
            '1 Star': RatingInfoColors[4],
            'No Ratings': RatingInfoColors[5],
        };
        const monthShort = selectedMonth === 0 ? null : getMonthShort(selectedMonth);
        const rowsForYear = dataSource.filter(r => Number(r?.Year) === Number(selectedYear));
        const data = (() => {
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                const sums = {};
                STAR_KEYS.forEach(k => (sums[k] = 0));
                rowsForYear.forEach(r => {
                    STAR_KEYS.forEach(k => {
                        sums[k] += Number(r?.[k] ?? 0);
                    });
                });
                return STAR_KEYS.map(k => ({ x: k, y: sums[k] }));
            }
            else {
                const row = rowsForYear.find(r => String(r?.Month).toLowerCase() === String(monthShort).toLowerCase());
                if (!row)
                    return [];
                return STAR_KEYS.map(k => ({ x: k, y: Number(row?.[k] ?? 0) }));
            }
        })();
        const coloredData = data.map(d => ({
            ...d,
            color: colorByStar[d.x] ?? '#999999'
        }));
        const onLabelText = (args) => {
            const y = Number(args.point?.y ?? 0);
            args.text = String(y);
        };
        const onTooltip = (args) => {
            const x = String(args.point?.x ?? '');
            const y = Number(args.point?.y ?? 0);
            const name = selectedMonth === 0 ? `All Months • ${selectedYear}` : `${selectedYear} - ${monthShort}`;
            args.text = `<b>${name}</b><br/>${x}: <b>${y}</b>`;
        };
        const seriesName = selectedMonth === 0 ? `All Months • ${selectedYear}` : `${selectedYear} - ${monthShort}`;
        return (<div className='layout-container'>
        <AccumulationChartComponent id="ratings-donut" ref={ratingRef} load={onAccumulationLoad} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} tooltipRender={onTooltip} textRender={onLabelText} enableSmartLabels={true} center={{ x: '50%', y: '50%' }} width="100%" height="100%">
          <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={coloredData} xName="x" yName="y" pointColorMapping="color" innerRadius="60%" startAngle={0} endAngle={360} explode={false} name={seriesName} dataLabel={{ visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }} animation={{ enable: false }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    const PaymentMethods = () => {
        const dataSource = HealthCare?.PaymentMethods || [];
        if (!dataSource.length) {
            return <div style={{ padding: 15 }}>No payment methods data</div>;
        }
        const PaymentColors = ['#EFF48E', '#E48900', '#CDC733', '#14C38E', '#028A02', '#77E4D4'];
        const KEYS = ['Credit Card', 'Debit Card', 'Digital Wallet', 'Mobile Payment', 'Cash', 'Others'];
        const colorByPayment = {
            'Credit Card': PaymentColors[0],
            'Debit Card': PaymentColors[1],
            'Digital Wallet': PaymentColors[2],
            'Mobile Payment': PaymentColors[3],
            'Cash': PaymentColors[4],
            'Others': PaymentColors[5],
        };
        const monthShort = selectedMonth === 0 ? null : getMonthShort(selectedMonth);
        const data = (() => {
            const rowsForYear = dataSource.filter(r => Number(r?.Year) === Number(selectedYear));
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                const sums = {};
                KEYS.forEach(k => (sums[k] = 0));
                rowsForYear.forEach(r => {
                    KEYS.forEach(k => {
                        sums[k] += Number(r?.[k] ?? 0);
                    });
                });
                return KEYS.map(k => ({ x: k, y: sums[k] }));
            }
            else {
                const row = rowsForYear.find(r => String(r?.Month).toLowerCase() === String(monthShort).toLowerCase());
                if (!row)
                    return [];
                return KEYS.map(k => ({ x: k, y: Number(row?.[k] ?? 0) }));
            }
        })();
        const coloredData = data.map(d => ({
            ...d,
            color: colorByPayment[d.x] ?? '#999999'
        }));
        const onLabelText = (args) => {
            const y = Number(args.point?.y ?? 0);
            args.text = formatCurrency(y);
        };
        const onTooltip = (args) => {
            const x = String(args.point?.x ?? '');
            const y = Number(args.point?.y ?? 0);
            const title = selectedMonth === 0 ? `All Months • ${selectedYear}` : `${selectedYear} - ${monthShort}`;
            args.text = `<b>${title}</b><br/>${x}: <b>${formatCurrency(y)}</b>`;
        };
        const seriesName = selectedMonth === 0 ? `All Months • ${selectedYear}` : `${selectedYear} - ${monthShort}`;
        return (<div className='layout-container'>
        <AccumulationChartComponent id="payment-methods-donut" load={onAccumulationLoad} ref={paymentChartRef} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} tooltipRender={onTooltip} textRender={onLabelText} enableSmartLabels={true} center={{ x: '50%', y: '50%' }} width="100%" height="100%">
          <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={coloredData} xName="x" yName="y" startAngle={0} endAngle={360} explode={false} name={seriesName} pointColorMapping='color' dataLabel={{ visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }} animation={{ enable: false }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>);
    };
    const returnMethod = () => {
        // Return reasons we care about (exact keys from JSON)
        const REASONS = [
            'Defective or Damaged Product',
            'Wrong Item Shipped',
            'Size or Fit Issues',
            "Product Doesn't Match Description",
            'Late Delivery',
            'Product Performance Issues',
            'Packaging Dissatisfaction'
        ];
        const dataSource = HealthCare.ReturnInfo || [];
        if (!dataSource.length) {
            return <div style={{ padding: 15 }}>No return reason data</div>;
        }
        const monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        // Build chart data
        const buildData = () => {
            const rowsForYear = dataSource.filter((r) => r.Year === selectedYear);
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                // Average across all available months for the selected year
                const count = rowsForYear.length;
                const sums = {
                    'Defective or Damaged Product': 0,
                    'Wrong Item Shipped': 0,
                    'Size or Fit Issues': 0,
                    "Product Doesn't Match Description": 0,
                    'Late Delivery': 0,
                    'Product Performance Issues': 0,
                    'Packaging Dissatisfaction': 0
                };
                rowsForYear.forEach((r) => {
                    REASONS.forEach((k) => {
                        sums[k] += Number(r[k] ?? 0);
                    });
                });
                return REASONS
                    .map((k) => ({ x: k, y: +(sums[k] / count).toFixed(2) })) // average and keep 2 decimals
                    .sort((a, b) => b.y - a.y);
            }
            else {
                // Specific month
                const row = rowsForYear.find((r) => r.Month === monthName);
                if (!row)
                    return [];
                return REASONS
                    .map((k) => ({ x: k, y: +Number(row[k] ?? 0).toFixed(2) }))
                    .sort((a, b) => b.y - a.y);
            }
        };
        const data = buildData();
        // Format data labels as percentages
        const onLabelText = (args) => {
            const y = args.point?.y ?? 0;
            args.text = `${Number(y).toFixed(2)}%`;
        };
        return (<div className='layout-container'>
        <ChartComponent id="return-reasons-bar" ref={returnChartRef} load={onChartLoad} primaryXAxis={{
                valueType: 'Category',
                majorGridLines: { width: 0 },
                labelIntersectAction: 'Trim',
                labelStyle: { size: '11px' }
            }} primaryYAxis={{
                labelFormat: '{value}',
                minimum: 0,
                maximum: 100,
                interval: 10,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            }} chartArea={{ border: { width: 0 } }} margin={{ left: 10, right: 10, top: 10, bottom: 10 }} tooltip={{ enable: true, header: '' }} tooltipRender={(args) => {
                const p = args.point;
                const reason = String(p?.x ?? '');
                const y = Number(p?.y ?? 0);
                args.text = `<b>${reason}</b><br/>${y.toFixed(2)}%`;
            }} textRender={onLabelText} legendSettings={{ visible: false }} width="100%" height="100%">
          <Inject services={[BarSeries, Category, Tooltip, DataLabel, ChartLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective type="Bar" dataSource={data} xName="x" yName="y" name={selectedMonth === 0
                ? `Avg Return Reasons • ${selectedYear}`
                : `${selectedYear} - ${monthName}`} marker={{ dataLabel: { visible: true, position: 'Outer' } }} cornerRadius={{ topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }} opacity={0.9} fill="#61c5ceff" animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    const conversionRate = () => {
        const onGaugeLoad = (args) => {
            let selectedTheme = location.hash.split('/')[1] || 'Material';
            const computed = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
                .replace(/-dark/i, 'Dark')
                .replace(/-high/i, 'High')
                .replace(/contrast/i, 'Contrast')
                .replace(/5\.3/i, '5');
            if (args && args.gauge) {
                args.gauge.theme = computed;
            }
        };
        const getConversionRate = (year, month) => {
            const rows = HealthCare.CustomerInfo?.filter((r) => r.Year === year) ?? [];
            if (!rows.length)
                return 0;
            if (month === 0) {
                const average = rows.reduce((sum, r) => sum + Number(r.ConversionRate ?? 0), 0) /
                    rows.length;
                return Math.round(average * 100) / 100; // 2 decimals
            }
            else {
                const row = rows.find((r) => r.Month === month);
                const val = Number(row?.ConversionRate ?? 0);
                return Math.round(val * 100) / 100;
            }
        };
        const value = getConversionRate(selectedYear, selectedMonth);
        const valueText = `${value.toFixed(2)}%`;
        const annotation = `<div style="font-size:16px;margin-top:5px;font-family:inherit;">${valueText}</div>`;
        return (<div className="gauge-center">
        <CircularGaugeComponent id="nps-gauge" ref={conversionGaugeRef} background="transparent" height="100%" width="100%" centerX="50%" centerY="70%" allowMargin={false} tooltip={{ enable: true }} load={onGaugeLoad} legendSettings={{ visible: true, position: 'Bottom', width: '70%', textStyle: { fontFamily: 'inherit', size: '12px' } }}>
          <Inject services={[Annotations, GaugeTooltip, CircularGaugeLegend]}/>
          <AxesDirective>
            <AxisDirective startAngle={270} endAngle={90} radius="100%" minimum={0} maximum={100} majorTicks={{ width: 1.5, height: 12, interval: 20, offset: 35 }} lineStyle={{ width: 0 }} minorTicks={{ width: 0 }} labelStyle={{ font: { size: '14px', fontFamily: 'inherit' }, position: 'Outside', offset: -40 }}>
              <AnnotationsDirective>
                <AnnotationDirective content={annotation} angle={0} radius="-25%" zIndex="1"/>
              </AnnotationsDirective>
              <PointersDirective>
                <PointerDirective value={value} radius="70%" pointerWidth={5} needleEndWidth={2} cap={{ radius: 8, border: { width: 2 } }}/>
              </PointersDirective>
              <RangesDirective>
                <RangeDirective start={0} end={40} radius="80%" color="#FF3B30" startWidth={40} endWidth={40} legendText="Poor"/>
                <RangeDirective start={40} end={60} radius="80%" color="#EFA006" startWidth={40} endWidth={40} legendText="Fair"/>
                <RangeDirective start={60} end={75} radius="80%" color="#FFE700" startWidth={40} endWidth={40} legendText="Good"/>
                <RangeDirective start={75} end={100} radius="80%" color="#1DC060" startWidth={40} endWidth={40} legendText="Excellent"/>
              </RangesDirective>
            </AxisDirective>
          </AxesDirective>
        </CircularGaugeComponent>
      </div>);
    };
    const SoldVsReturnTrend = () => {
        const src = HealthCare?.ReturnInfo || [];
        if (!src.length) {
            return <div style={{ padding: 15 }}>No return data</div>;
        }
        const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        let soldSeries = [];
        let returnSeries = [];
        const rowsForYear = src.filter(r => Number(r.Year) === Number(selectedYear));
        if (selectedMonth === 0) {
            // All months for the year
            const rows = rowsForYear.slice(); // already ordered by month in your data
            soldSeries = rows.map(r => ({ x: String(r.Month), y: Number(r.SoldPct ?? 0) }));
            returnSeries = rows.map(r => ({ x: String(r.Month), y: Number(r.ReturnPct ?? 0) }));
        }
        else {
            // One month only (two bars)
            const row = rowsForYear.find(r => String(r.Month) === monthName);
            if (row) {
                soldSeries = [{ x: String(row.Month), y: Number(row.SoldPct ?? 0) }];
                returnSeries = [{ x: String(row.Month), y: Number(row.ReturnPct ?? 0) }];
            }
        }
        // Format data-label text as percentages
        const onDataLabelText = (args) => {
            const y = Number(args.point?.y ?? 0);
            args.text = `${y.toFixed(0)}%`;
        };
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
        <ChartComponent id="sold-vs-return-trend" ref={soldVsReturnChartRef} load={onChartLoad} primaryXAxis={{
                valueType: 'Category',
                labelIntersectAction: 'Trim',
                majorGridLines: { width: 0 },
                labelStyle: { size: '11px' }
            }} primaryYAxis={{
                minimum: 0,
                maximum: 100,
                interval: 20,
                labelFormat: '{value}%',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                majorGridLines: { width: 1 }
            }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, header: '' }} legendSettings={{ visible: true, position: 'Bottom' }} width="100%" height="100%" textRender={onDataLabelText}>
          <Inject services={[ColumnSeries, Category, Tooltip, DataLabel, ChartLegend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective name="Sold %" type="Column" dataSource={soldSeries} xName="x" yName="y" fill="#CDC733" marker={{ dataLabel: { visible: true, position: 'Outer' } }} animation={{ enable: false }}/>
            <SeriesDirective name="Return %" type="Column" dataSource={returnSeries} xName="x" yName="y" fill="#E48900" marker={{ dataLabel: { visible: true, position: 'Outer' } }} animation={{ enable: false }}/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>);
    };
    return (<div>
      <div className="Container">
        <div className='e-card layout-header'>
          <div className='layout-title'>Customer Analysis</div>
          <div>{filterContent()}</div>
        </div>
        <div>
          <DashboardLayoutComponent id="dashboard_customer" ref={customerRef} style={{ height: '85vh', width: '100%', zIndex: 1 }} columns={8} cellAspectRatio={90 / 100} cellSpacing={cellSpacing} allowResizing={false} allowDragging={false} mediaQuery="(max-width:950px)" created={onCreated}>
            <PanelsDirective>
              <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={totalCustomer}></PanelDirective>
              <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={newVisitors}></PanelDirective>
              <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={newCustomers}></PanelDirective>
              <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={customerLoyality}></PanelDirective>
              <PanelDirective sizeX={8} sizeY={3} row={2} col={0} header="<div>Sold vs Return Analysis</div>" content={SoldVsReturnTrend}></PanelDirective>
              <PanelDirective sizeX={4} sizeY={3} row={5} col={0} header="<div>Conversion Rate</div>" content={conversionRate}></PanelDirective>
              <PanelDirective sizeX={4} sizeY={3} row={5} col={4} header="<div>Reason for Return</div>" content={returnMethod}></PanelDirective>
              <PanelDirective sizeX={4} sizeY={3} row={8} col={0} header="<div>Customer Satisfaction Analysis</div>" content={RatingInfo}></PanelDirective>
              <PanelDirective sizeX={4} sizeY={3} row={8} col={4} header="<div>Transactional Sources</div>" content={PaymentMethods}></PanelDirective>
            </PanelsDirective>
          </DashboardLayoutComponent>
        </div>
      </div>
    </div>);
};
export class HealthcareDashboard extends SampleBase {
    sidebarRef;
    TOOLBAR_HEIGHT = 50;
    DOCK_SIZE = 60;
    OPEN_WIDTH = 240;
    allowSidebarOpen = false;
    constructor(props) {
        super(props);
        this.sidebarRef = React.createRef();
        this.state = {
            selectedId: 'Overview',
            selectedYear: 2025,
            selectedMonth: 0,
            isDocked: true,
        };
    }
    onSidebarCreated = () => {
        if (this.sidebarRef.current) {
            this.sidebarRef.current.hide(); // ensure hidden
        }
    };
    onYearChange = (e) => {
        const newYear = Number(e.value);
        if (!Number.isNaN(newYear)) {
            this.setState({
                selectedYear: newYear,
                selectedMonth: 0,
            });
        }
    };
    onMonthChange = (e) => {
        const newMonth = Number(e.value);
        if (!Number.isNaN(newMonth)) {
            this.setState({ selectedMonth: newMonth });
        }
    };
    titleTemplate = '<div class="dashboard-title">Healthcare Sales Dashboard</div>';
    onToolbarClicked = (args) => {
        if (args.item.tooltipText === 'Menu') {
            this.allowSidebarOpen = true;
            this.sidebarRef.current?.toggle();
        }
    };
    notifyResize = () => window.dispatchEvent(new Event('sidebar-toggled'));
    onSidebarOpen = () => {
        // Block any auto-open that wasn’t triggered by the Menu click
        if (!this.allowSidebarOpen) {
            this.sidebarRef.current?.hide();
            return;
        }
        // Reset the flag immediately after a valid open
        this.allowSidebarOpen = false;
        setTimeout(this.notifyResize, 400);
        this.setState({ isDocked: false });
        setTimeout(() => {
            const el = document.getElementById('dashboard_default');
            el?.ej2_instances?.[0]?.refresh?.();
        }, 500);
    };
    onSidebarClose = () => {
        this.allowSidebarOpen = false;
        setTimeout(this.notifyResize, 400);
        this.setState({ isDocked: true });
        setTimeout(() => {
            const el = document.getElementById('dashboard_default');
            el?.ej2_instances?.[0]?.refresh?.();
        }, 700);
    };
    renderDashboard = () => {
        const { selectedId, selectedYear, selectedMonth } = this.state;
        const commonProps = {
            selectedYear,
            selectedMonth,
            onYearChange: this.onYearChange,
            onMonthChange: this.onMonthChange
        };
        switch (selectedId) {
            case 'Overview':
                return <Dashboard1 {...commonProps}/>;
            case 'Product-Performance':
                return <Dashboard2 {...commonProps}/>;
            case 'Regional-Insights':
                return <Dashboard3 {...commonProps}/>;
            case 'Customer':
                return <Dashboard4 {...commonProps}/>;
            default:
                return <Dashboard1 {...commonProps}/>;
        }
    };
    withTooltip(title, node) {
        return (<TooltipComponent content={title} position={this.state.isDocked ? 'RightCenter' : 'BottomCenter'} openDelay={250} closeDelay={0} showTipPointer={true}>
        {node}
      </TooltipComponent>);
    }
    render() {
        const isActive = (id) => (this.state.selectedId === id ? 'active' : '');
        return (<div>
        <div className="control-section">
          <div className="hc-root">
            <div className='dockToolbar'>
              <ToolbarComponent cssClass="dockToolbar" id="dockToolbar" height={`${this.TOOLBAR_HEIGHT}px`} clicked={this.onToolbarClicked}>
                <ItemsDirective>
                  <ItemDirective prefixIcon="e-menu" tooltipText="Menu"/>
                  <ItemDirective template={this.titleTemplate}/>
                </ItemsDirective>
              </ToolbarComponent>
            </div>
            <div className="hc-workarea">
              <SidebarComponent id="dockHealthcareSideDash" ref={this.sidebarRef} enableDock={true} width={`${this.OPEN_WIDTH}px`} dockSize={`${this.DOCK_SIZE}px`} closeOnDocumentClick={false} enableGestures={false} className="cs-sidebar" type="Push" target=".hc-content" open={this.onSidebarOpen} close={this.onSidebarClose} created={this.onSidebarCreated}>
                <div className="sidebar-content">
                  {this.withTooltip('Overview Analysis', <div className={`hc-nav-item ${isActive('Overview')}`} onClick={() => this.setState({ selectedId: 'Overview' })}>
                      <span className="e-icons e-home" aria-hidden="true"></span>
                      <span className="hc-nav-text">Overview Analysis</span>
                    </div>)}
                  {this.withTooltip('Product Performance', <div className={`hc-nav-item ${isActive('Product-Performance')}`} onClick={() => this.setState({ selectedId: 'Product-Performance' })}>
                      <span className="e-icons e-chart" aria-hidden="true"></span>
                      <span className="hc-nav-text">Product Performance</span>
                    </div>)}
                  {this.withTooltip('Regional and Channel', <div className={`hc-nav-item ${isActive('Regional-Insights')}`} onClick={() => this.setState({ selectedId: 'Regional-Insights' })}>
                      <span className="e-icons e-location" aria-hidden="true"></span>
                      <span className="hc-nav-text">Regional and Channel</span>
                    </div>)}
                  {this.withTooltip('Customer Analysis', <div className={`hc-nav-item ${isActive('Customer')}`} onClick={() => this.setState({ selectedId: 'Customer' })}>
                      <span className="e-icons e-people" aria-hidden="true"></span>
                      <span className="hc-nav-text">Customer Analysis</span>
                    </div>)}
                </div>
              </SidebarComponent>
              <div className="hc-content">
                <div className="healthcare-page" style={{ padding: '16px', background: '#ffffff' }}>
                  {this.renderDashboard()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="action-description">
          <p>
            The Health Care Sales Analytics Dashboard provides a complete view of revenue, product performance, customer behavior, and operational efficiency. It delivers real‑time insights into sales trends, category growth, regional performance, and customer engagement. With interactive filters and intuitive visualizations, teams can easily explore KPIs, identify opportunities, and make data‑driven decisions. Built specifically for healthcare retail and distribution, it transforms complex datasets into clear, actionable intelligence.
          </p>
        </div>
      </div>);
    }
}
