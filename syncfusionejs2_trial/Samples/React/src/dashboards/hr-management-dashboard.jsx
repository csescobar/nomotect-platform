import * as React from 'react';
import { useRef } from 'react';
import { SampleBase } from '../common/sample-base';
import * as rawData from './hr-management-dashboard.json';
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';
import { SidebarComponent, ToolbarComponent, ItemDirective, ItemsDirective } from '@syncfusion/ej2-react-navigations';
import './hr-management-dashboard.css';
import { CheckBoxSelection, Inject, MultiSelectComponent, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject as ChartInject, StackingColumnSeries, Category, Legend, Tooltip, DataLabel, BarSeries, ColumnSeries, SplineAreaSeries, LineSeries, Crosshair, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Filter, Inject as GridInject, ExcelExport, PdfExport, VirtualScroll, Toolbar as GridToolbar, ColumnChooser } from '@syncfusion/ej2-react-grids';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './dashboard-bold-icon.css';
import './dashboard-light-icon.css';
const data = rawData;
// Ensure data has required structure with defaults
const safeData = {
    employees: data?.employees || [],
    // expose employeeDetails (some datasets use this key)
    employeeDetails: data?.employeeDetails || [],
    finance: data?.finance || [],
    recruitment: data?.recruitment || []
};
const onChartLoad = (args) => {
    let selectedTheme = location.hash.split('/')[1] || 'Material';
    // Build the chart theme once
    const themeForChart = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/contrast/i, 'Contrast')
        .replace(/-dark/i, 'Dark');
    args.chart.theme = themeForChart;
    // Apply high-contrast data label fill safely
    if (selectedTheme.toLowerCase() === 'highcontrast') {
        const series = args.chart.series;
        if (Array.isArray(series) && series.length) {
            const s0 = series[0];
            const s1 = series[1];
            if (s0?.marker?.dataLabel)
                s0.marker.dataLabel.fill = '#000000';
            if (s1?.marker?.dataLabel)
                s1.marker.dataLabel.fill = '#000000';
        }
    }
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
// Helper: extract numeric experience from "X years Y months" format
function getNumericExperience(expStr) {
    if (typeof expStr === 'number')
        return expStr;
    if (typeof expStr === 'string') {
        const match = expStr.match(/(\d+)\s+years?/);
        return match ? parseInt(match[1], 10) : 0;
    }
    return 0;
}
function experienceBucket(yrs) {
    return yrs < 1 ? '0 - 1 Years' : yrs < 3 ? '1 - 3 Years' : yrs < 5 ? '3 - 5 Years' : yrs < 7 ? '5 - 7 Years' : '7+ Years';
}
const headerWithTooltip = (label) => {
    return () => (<div title={label} style={{ display: 'inline-block', cursor: 'default' }}>{label}</div>);
};
const Overview = () => {
    const uniqueEmployees = React.useMemo(() => {
        const seen = new Set();
        const unique = [];
        (safeData.employees || []).forEach((e) => {
            if (!seen.has(e.employeeId)) {
                seen.add(e.employeeId);
                unique.push(e);
            }
        });
        return unique;
    }, []);
    const allDepartments = React.useMemo(() => {
        const set = new Set();
        uniqueEmployees.forEach(e => set.add(e.department));
        return Array.from(set).sort();
    }, [uniqueEmployees]);
    const [departments, setDepartments] = React.useState(allDepartments);
    const effectiveDepartments = departments.length ? departments : allDepartments;
    const OverviewRef = useRef(null);
    const gridRef = React.useRef(null);
    const workFormatChartRef = React.useRef(null);
    const tenureChartRef = React.useRef(null);
    const genderExperienceMainRef = React.useRef(null);
    const genderExperienceDrillRef = React.useRef(null);
    const designationChartRef = React.useRef(null);
    React.useEffect(() => {
        let timer;
        const refreshAll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                OverviewRef.current?.refresh();
                workFormatChartRef.current?.refresh();
                tenureChartRef.current?.refresh();
                genderExperienceDrillRef.current?.refresh();
                genderExperienceMainRef.current?.refresh();
                designationChartRef.current?.refresh();
                designationChartRef.current?.refresh();
                gridRef.current?.refresh();
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
    const cellSpacing = [10, 10];
    // Active employees as of today (used across Overview)
    const today = React.useMemo(() => new Date(), []);
    const activeEmployeesToday = React.useMemo(() => {
        // Build a set of employeeIds that have any relieveDate across all records
        const relieved = new Set();
        (safeData.employees || []).forEach((e) => { if (e && e.relieveDate && e.employeeId)
            relieved.add(e.employeeId); });
        // Iterate deduplicated uniqueEmployees (smaller) and include those active as of today
        const seen = new Set();
        const list = [];
        uniqueEmployees.forEach((e) => {
            if (!e || !e.employeeId)
                return;
            if (!effectiveDepartments.includes(e.department))
                return;
            if (relieved.has(e.employeeId))
                return;
            const join = e.joiningDate ? new Date(e.joiningDate) : null;
            if (join && join <= today && !seen.has(e.employeeId)) {
                seen.add(e.employeeId);
                list.push(e);
            }
        });
        return { count: seen.size, list };
    }, [uniqueEmployees, effectiveDepartments, today]);
    const filteredEmployees = React.useMemo(() => activeEmployeesToday.list, [activeEmployeesToday]);
    const workFormatData = React.useMemo(() => {
        const map = {};
        filteredEmployees.forEach(e => {
            if (!map[e.department])
                map[e.department] = { x: e.department, 'In Office': 0, 'Work From Home': 0 };
            const format = e.workFormat?.toLowerCase() || '';
            if (format === 'in office' || format === 'office') {
                map[e.department]['In Office'] += 1;
            }
            else if (format === 'work from home' || format === 'wfh' || format === 'remote') {
                map[e.department]['Work From Home'] += 1;
            }
        });
        return Object.values(map);
    }, [filteredEmployees]);
    const experienceData = React.useMemo(() => {
        const map = {};
        filteredEmployees.forEach(e => {
            const numericExp = getNumericExperience(e.experienceYears);
            const bucket = experienceBucket(numericExp);
            if (!map[bucket])
                map[bucket] = { x: bucket, female: 0, male: 0 };
            if (e.gender === 'Female')
                map[bucket].female += 1;
            else
                map[bucket].male += 1;
        });
        // keep fixed bucket order
        const order = ['0 - 1 Years', '1 - 3 Years', '3 - 5 Years', '5 - 7 Years', '7+ Years'];
        return order.map(k => map[k] || { x: k, female: 0, male: 0 });
    }, [filteredEmployees]);
    const employeeData = React.useMemo(() => {
        return filteredEmployees
            .sort((a, b) => a.employeeId.localeCompare(b.employeeId))
            .map((e, i) => ({
            srno: i + 1,
            employeeId: e.employeeId,
            name: e.employeeName,
            department: e.department,
            designation: e.designation,
            employmentType: e.employmentType,
            workFormat: e.workFormat,
            experience: e.experienceYears,
            email: e.email,
            joiningDate: new Date(e.joiningDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
        }));
    }, [filteredEmployees]);
    // kpi counts (Overview uses only active employees today)
    const totalEmployees = activeEmployeesToday.count;
    const maleCount = React.useMemo(() => filteredEmployees.filter((e) => e.gender === 'Male').length, [filteredEmployees]);
    const femaleCount = React.useMemo(() => filteredEmployees.filter((e) => e.gender === 'Female').length, [filteredEmployees]);
    const confirmedCount = React.useMemo(() => filteredEmployees.filter((e) => e.employmentType === 'Confirmed').length, [filteredEmployees]);
    const unconfirmedCount = totalEmployees - confirmedCount;
    // Count ALL relieved employees (across all years) - for reference
    const allRelievedEmployees = React.useMemo(() => {
        const seen = new Set();
        const relievedMap = new Map();
        // First pass: find all employees with relieveDate
        (safeData.employees || []).forEach((e) => {
            if (e.relieveDate && !relievedMap.has(e.employeeId)) {
                relievedMap.set(e.employeeId, { relieveDate: e.relieveDate, department: e.department });
            }
        });
        // Count only those in selected departments
        relievedMap.forEach((info, empId) => {
            if (effectiveDepartments.includes(info.department)) {
                seen.add(empId);
            }
        });
        return seen.size;
    }, [effectiveDepartments]);
    const separationsLast12 = React.useMemo(() => {
        let count = 0;
        const seen = new Set();
        const startOf2025 = new Date('2025-01-01');
        const endOf2025 = new Date('2025-12-31T23:59:59');
        // Build a map of employees with relieveDate and their info
        const relievedMap = new Map();
        (safeData.employees || []).forEach((e) => {
            if (e.relieveDate && !relievedMap.has(e.employeeId)) {
                relievedMap.set(e.employeeId, { relieveDate: e.relieveDate, department: e.department });
            }
        });
        // Count only those relieved in 2025 AND in selected departments
        relievedMap.forEach((info, empId) => {
            if (seen.has(empId))
                return;
            if (!effectiveDepartments.includes(info.department))
                return;
            seen.add(empId);
            const rel = new Date(info.relieveDate);
            if (rel >= startOf2025 && rel <= endOf2025)
                count += 1;
        });
        return count;
    }, [effectiveDepartments]);
    // Count unique hires in 2025 (de-duplicated by employeeId)
    const hiresIn2025 = React.useMemo(() => {
        const seen = new Set();
        (safeData.employees || []).forEach((e) => {
            if (!effectiveDepartments.includes(e.department))
                return;
            const j = e.joiningDate ? new Date(e.joiningDate) : null;
            if (j && j.getFullYear() === 2025 && e.employeeId)
                seen.add(e.employeeId);
        });
        return seen.size;
    }, [effectiveDepartments]);
    const netHeadcountYTD = React.useMemo(() => hiresIn2025 - separationsLast12, [hiresIn2025, separationsLast12]);
    // Employees active at the beginning of 2025 (used for attrition rate calculation)
    // Filtered by selected departments
    const employeesActiveAt2025Start = React.useMemo(() => {
        const asOf = new Date('2025-01-01');
        let count = 0;
        (safeData.employees || []).forEach((e) => {
            if (!effectiveDepartments.includes(e.department))
                return;
            const join = e.joiningDate ? new Date(e.joiningDate) : null;
            const rel = e.relieveDate ? new Date(e.relieveDate) : null;
            if (join && join > asOf)
                return; // joined after start
            if (rel && rel < asOf)
                return; // relieved before start
            count += 1;
        });
        return count;
    }, [effectiveDepartments]);
    // Filtered by selected departments
    const employeesActiveAt2025End = React.useMemo(() => {
        const asOf = new Date('2025-12-31T23:59:59');
        let count = 0;
        (safeData.employees || []).forEach((e) => {
            if (!effectiveDepartments.includes(e.department))
                return;
            const join = e.joiningDate ? new Date(e.joiningDate) : null;
            const rel = e.relieveDate ? new Date(e.relieveDate) : null;
            if (join && join > asOf)
                return; // joined after end
            if (rel && rel < asOf)
                return; // relieved before end
            count += 1;
        });
        return count;
    }, [effectiveDepartments]);
    // Average headcount for 2025
    // Average = (Employees at start of year + Employees at end of year) / 2
    const averageHeadcount = React.useMemo(() => {
        return Math.round((employeesActiveAt2025Start + employeesActiveAt2025End) / 2);
    }, [employeesActiveAt2025Start, employeesActiveAt2025End]);
    // Count employees who were present at any point during 2025 (include those relieved during 2025)
    const employeesPresentIn2025 = React.useMemo(() => {
        const start = new Date('2025-01-01');
        const end = new Date('2025-12-31T23:59:59');
        const seen = new Set();
        (safeData.employees || []).forEach((e) => {
            if (!effectiveDepartments.includes(e.department))
                return;
            const join = e.joiningDate ? new Date(e.joiningDate) : null;
            const rel = e.relieveDate ? new Date(e.relieveDate) : null;
            if (join && join > end)
                return; // joined after 2025
            if (rel && rel < start)
                return; // relieved before 2025
            seen.add(e.employeeId);
        });
        return seen.size;
    }, [effectiveDepartments]);
    const totalEmployeesDisplay = React.useMemo(() => employeesPresentIn2025, [employeesPresentIn2025]);
    const DepartmentItems = React.useMemo(() => allDepartments.map(d => ({ text: d, value: d })), [allDepartments]);
    const TotalEmployeeCard = () => {
        return (<div className="hr-kpi-card">
                <div className="hr-kpi-label">Total Employee</div>
                <div className="hr-kpi-value">{totalEmployeesDisplay}</div>
            </div>);
    };
    const NetHeadcountPanel = () => {
        const net = netHeadcountYTD || 0;
        const hires = hiresIn2025 || 0;
        const exits = separationsLast12 || 0;
        const prevYear = (safeData.employees || []).filter((e) => {
            const j = e.joiningDate ? new Date(e.joiningDate) : null;
            return j && j.getFullYear() === 2024 && effectiveDepartments.includes(e.department);
        }).length;
        const headcountGrowth = React.useMemo(() => {
            // compare hires this year vs previous year (simple proxy for growth badge)
            const diff = hires - prevYear;
            const pct = prevYear ? (diff / prevYear) * 100 : (hires ? 100 : 0);
            return { pct: Number.isFinite(pct) ? pct : 0, positive: diff >= 0, prevYear };
        }, [hires, safeData.employees, effectiveDepartments]);
        return (<div className='e-card hr-kpi-card netcount hr-kpi-netcount'>
                <div className='e-card-content hr-kpi-card-content hr-kpi-netcount__content'>
                    <div>
                        <div className='hr-kpi-label hr-kpi-netcount__title'> Net Head Count Change</div>
                        <div className='hr-kpi-netcount__row'> </div>
                        <div className='hr-kpi-value hr-kpi-netcount__value'> </div>
                    </div>
                    <div className='hr-kpi-netcount__bottom'>
                        <div className='hr-kpi-netcount__grid'>
                            <div className='hr-kpi-netcount__left'>
                                <div>
                                    <div className='hr-kpi-netcount__left-row'>
                                        <span className='hr-kpi-netcount__label'>New Hires</span>
                                        <span className="hr-kpi-value1 hr-kpi-netcount__number">{hires}</span>
                                    </div>
                                    <div className='hr-kpi-netcount__left-row'>
                                        <span className='hr-kpi-netcount__label'>Relievers</span>
                                        <span className="hr-kpi-value1 hr-kpi-netcount__number">{exits}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='hr-kpi-netcount__divider'></div>
                            <div className='hr-kpi-netcount__right'>
                                <div className='hr-kpi-netcount__right-inner'>
                                    <div className='hr-kpi-netcount__net'>{net}</div>
                                    <span className={`hr-kpi-netcount__badge ${headcountGrowth.positive ? 'positive' : 'negative'}`}>
                                        <span className='hr-kpi-netcount__pct'>{headcountGrowth.positive ? '▲' : '▼'} {Math.abs(headcountGrowth.pct).toFixed(1)}%
                                            <span>vs 2024</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    };
    const GenderCard = () => {
        return (<div className="hr-kpi-card with-divider">
                <div className="hr-kpi-block">
                    <div className="hr-kpi-label">Male</div>
                    <div className="hr-kpi-value">{maleCount}</div>
                </div>
                <div className="hr-kpi-block">
                    <div className="hr-kpi-label">Female</div>
                    <div className="hr-kpi-value">{femaleCount}</div>
                </div>
            </div>);
    };
    // Department-wise tenure distribution by ranges
    const tenureBuckets = ['1-3', '3-6', '6-9', '9-12'];
    const tenureBucketLabel = (years) => {
        if (years >= 1 && years < 3)
            return '1-3';
        if (years >= 3 && years < 6)
            return '3-6';
        if (years >= 6 && years < 9)
            return '6-9';
        if (years >= 9 && years < 12)
            return '9-12';
        return null; // outside requested ranges
    };
    const tenureByDeptBucketData = React.useMemo(() => {
        const map = {};
        filteredEmployees.forEach((e) => {
            const dept = e.department;
            const join = new Date(e.joiningDate);
            const yearsExact = (today.getTime() - join.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
            const label = tenureBucketLabel(yearsExact);
            if (!label)
                return; // skip outside ranges
            if (!map[dept]) {
                map[dept] = { x: dept };
                tenureBuckets.forEach(b => map[dept][b] = 0);
            }
            map[dept][label] += 1;
        });
        // convert counts to percentages per department so stacked 100 works logically
        Object.values(map).forEach((row) => {
            const total = tenureBuckets.reduce((s, b) => s + (row[b] || 0), 0);
            if (total > 0) {
                tenureBuckets.forEach(b => {
                    row[b] = Math.round(((row[b] || 0) / total) * 100);
                });
            }
        });
        return Object.values(map).sort((a, b) => String(a.x).localeCompare(String(b.x)));
    }, [filteredEmployees, today]);
    const created = () => {
        setTimeout(() => {
            // Refresh Dashboard Layout
            OverviewRef.current?.refresh();
            if (workFormatChartRef.current) {
                workFormatChartRef.current.refresh();
            }
            if (tenureChartRef.current) {
                tenureChartRef.current.refresh();
            }
            if (genderExperienceMainRef.current) {
                genderExperienceMainRef.current.refresh();
            }
            if (designationChartRef.current) {
                designationChartRef.current.refresh();
            }
            if (gridRef.current) {
                gridRef.current.refresh();
            }
        }, 500);
    };
    const EmployeeWorkFormatChart = () => (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
            <ChartComponent ref={workFormatChartRef} id="work-format-chart" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ lineStyle: { width: 0 } }} legendSettings={{ visible: true }} tooltip={{ enable: true }} chartArea={{ border: { width: 0 } }} height={"100%"} width={"100%"} load={onChartLoad}>
                <ChartInject services={[StackingColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective type='StackingColumn' name='In Office' xName='x' yName='In Office' dataSource={workFormatData} fill='#61764B' animation={{ enable: false }}/>
                    <SeriesDirective type='StackingColumn' name='Work From Home' xName='x' yName='Work From Home' dataSource={workFormatData} fill='#AA8B56' cornerRadius={{ topLeft: 5, topRight: 5 }} animation={{ enable: false }}/>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>);
    const TenureRatioDeptChart = () => {
        const tenureColors = {
            '1-3': '#E5B299',
            '3-6': "#B4846C",
            '6-9': '#9FC088',
            '9-12': '#AA8B56',
        };
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
                <ChartComponent ref={tenureChartRef} id="tenure-by-dept-buckets" primaryXAxis={{ valueType: 'Category', labelIntersectAction: 'Wrap', majorGridLines: { width: 0 } }} primaryYAxis={{ labelFormat: '{value}%', lineStyle: { width: 0 } }} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true, shared: true, format: '${series.name}: ${point.y}' }} chartArea={{ border: { width: 0 } }} load={onChartLoad}>
                    <ChartInject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
                    <SeriesCollectionDirective>
                        {tenureBuckets.map((b) => (<SeriesDirective key={b} type='Column' name={`${b} yrs`} xName='x' yName={b} dataSource={tenureByDeptBucketData} marker={{ dataLabel: { visible: false } }} fill={tenureColors[b]} cornerRadius={{ topLeft: 4, topRight: 4 }} animation={{ enable: false }}/>))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    };
    const GenderExperienceChart = () => {
        // Local drill-down state scoped to this chart to avoid re-rendering the whole dashboard
        const [drillDownSelection, setDrillDownSelection] = React.useState(null);
        // Drill-down: count employees per department for selected experience and gender (local memo)
        const drillDownDesignationData = React.useMemo(() => {
            if (!drillDownSelection)
                return [];
            const { experience, gender } = drillDownSelection;
            const targetGender = String(gender || '').toLowerCase();
            const targetExp = String(experience || '').trim().toLowerCase();
            const map = {};
            filteredEmployees.forEach(e => {
                const numericExp = getNumericExperience(e.experienceYears);
                const bucket = experienceBucket(numericExp);
                const eg = String(e.gender || '').toLowerCase();
                const bucketLower = String(bucket || '').trim().toLowerCase();
                if (bucketLower === targetExp && eg === targetGender) {
                    map[e.department] = (map[e.department] || 0) + 1;
                }
            });
            return Object.entries(map).map(([x, y]) => ({ x, y })).sort((a, b) => String(a.x).localeCompare(String(b.x)));
        }, [drillDownSelection, filteredEmployees]);
        // ensure the drill chart instance re-renders when drill data is available
        if (drillDownSelection) {
            // Drill-down view: show employee count per department for selected experience and gender
            return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                    <div className='drillcontent' style={{ marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' }}>
                        <button onClick={() => setDrillDownSelection(null)} style={{ marginLeft: 10, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 }}>
                            Back
                        </button>
                    </div>
                    <ChartComponent key={`drill-${drillDownSelection?.gender ?? ''}-${drillDownSelection?.experience ?? ''}`} ref={genderExperienceDrillRef} id="gender-experience-drill-chart" height="100%" width="100%" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }} primaryYAxis={{ majorGridLines: { width: 0 }, lineStyle: { width: 0 } }} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true, shared: true, }} chartArea={{ border: { width: 0 } }} load={onChartLoad}>
                        <ChartInject services={[ColumnSeries, Category, Tooltip, Legend]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective type='Column' name='Employee Count' xName='x' yName='y' dataSource={drillDownDesignationData} fill='#87805E' cornerRadius={{ topLeft: 4, topRight: 4 }} animation={{ enable: false }}/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>);
        }
        // Main view: Gender and Experience distribution
        const handleChartClick = (args) => {
            // Extract experience bucket and series name (gender) from click event
            const rawX = args?.point?.x ?? args?.pointX ?? args?.point?.xValue ?? args?.point?.category;
            const rawSeries = args?.series?.name ?? args?.seriesName ?? args?.series?.startSeries?.name;
            const xValue = rawX != null ? String(rawX).trim() : null;
            const seriesName = rawSeries != null ? String(rawSeries).trim() : null;
            if (xValue && seriesName) {
                // Normalize to the format used in buckets and gender casing
                const normalizedExp = String(xValue).trim();
                const normalizedGender = String(seriesName).trim().charAt(0).toUpperCase() + String(seriesName).trim().slice(1).toLowerCase();
                setDrillDownSelection({ experience: normalizedExp, gender: normalizedGender });
            }
        };
        const onGenderExperienceAxisClick = (args) => {
            // Normalize axis-label clicks to behave like pointClick
            const targetId = String(args?.target ?? args?.event?.target?.id ?? '');
            let labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    const el = document.getElementById(targetId);
                    labelText = (el?.textContent || '').toString().trim();
                }
                else {
                    const el = typeof args?.target === 'string' ? document.getElementById(args.target) : args?.target;
                    labelText = (el?.textContent || el?.innerText || '')?.toString().trim();
                }
            }
            catch (e) { /* ignore */ }
            if (!labelText)
                return;
            // Data source: experienceData is used by both series
            const ds = experienceData || [];
            let row = ds.find(r => String(r.x) === labelText) || null;
            if (!row)
                return;
            // choose gender based on which series has value (prefer Female)
            let chosenGender = 'Female';
            try {
                if ((Number(row.female) || 0) > 0)
                    chosenGender = 'Female';
                else if ((Number(row.male) || 0) > 0)
                    chosenGender = 'Male';
            }
            catch (e) { }
            try {
                genderExperienceMainRef.current?.tooltipModule?.hide?.();
            }
            catch (e) { }
            setTimeout(() => setDrillDownSelection({ experience: String(row.x), gender: chosenGender }), 60);
        };
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
                {/* <div style={{ fontSize: 11, color: '#64748b', marginBottom: 8 }}>Click on a bar to drill down</div> */}
                <ChartComponent ref={genderExperienceMainRef} id="gender-experience-chart" height="100%" width="100%" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ lineStyle: { width: 0 } }} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true, format: '${series.name}: ${point.y}' }} chartArea={{ border: { width: 0 } }} pointRender={(args) => {
                args.point.style = 'cursor: pointer;';
            }} pointClick={handleChartClick} chartMouseClick={onGenderExperienceAxisClick} load={onChartLoad}>
                    <ChartInject services={[BarSeries, Category, Legend, Tooltip, DataLabel]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective type='Bar' name='Female' xName='x' yName='female' dataSource={experienceData} fill='#AA8B56' cornerRadius={{ topRight: 5, bottomRight: 5 }} animation={{ enable: false }}/>
                        <SeriesDirective type='Bar' name='Male' xName='x' yName='male' dataSource={experienceData} fill='#815B5B' cornerRadius={{ topRight: 5, bottomRight: 5 }} animation={{ enable: false }}/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    };
    const DesignationDetailsChart = () => {
        const [selectedDept, setSelectedDept] = React.useState(null);
        const deptTotals = React.useMemo(() => {
            const map = {};
            filteredEmployees.forEach(e => {
                const d = e.department || 'Unknown';
                map[d] = (map[d] || 0) + 1;
            });
            return Object.entries(map).map(([x, y]) => ({ x, y })).sort((a, b) => String(a.x).localeCompare(String(b.x)));
        }, [filteredEmployees]);
        const designationForDept = React.useMemo(() => {
            if (!selectedDept)
                return [];
            const map = {};
            filteredEmployees.forEach(e => {
                const d = e.department || 'Unknown';
                if (d === selectedDept) {
                    const des = e.designation || 'Unknown';
                    map[des] = (map[des] || 0) + 1;
                }
            });
            return Object.entries(map).map(([x, y]) => ({ x, y })).sort((a, b) => b.y - a.y || String(a.x).localeCompare(String(b.x)));
        }, [selectedDept, filteredEmployees]);
        if (selectedDept) {
            return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                    <div className='drillcontent' style={{ marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' }}>
                        {/* Designations in {selectedDept} */}
                        <button onClick={() => setSelectedDept(null)} style={{ marginLeft: 12, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 }}>
                            Back
                        </button>
                    </div>
                    <ChartComponent load={onChartLoad} key={`designation-drill-${selectedDept}`} id="designation-drill" ref={designationChartRef} height="100%" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }} primaryYAxis={{ majorGridLines: { width: 0 }, lineStyle: { width: 0 } }} legendSettings={{ visible: false }} tooltip={{ enable: true, format: '${point.x}: ${point.y}' }} chartArea={{ border: { width: 0 } }}>
                        <ChartInject services={[ColumnSeries, Category, Tooltip, Legend, DataLabel]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective type="Column" xName="x" yName="y" dataSource={designationForDept} fill={'#AA8B56'} columnWidth={0.6} dataLabel={{ visible: true, position: 'Top', format: '${point.y}', font: { color: '#374151', size: '11px' } }} marker={{ visible: true }} animation={{ enable: false }}/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>);
        }
        // Top-level: show one bar per department
        const handleDeptClick = (args) => {
            const rawX = args?.point?.x ?? args?.point?.category ?? args?.point?.xValue ?? args?.pointX;
            const xValue = rawX != null ? String(rawX).trim() : null;
            if (xValue)
                setSelectedDept(xValue);
        };
        const onDesignationXAxisClick = (args) => {
            const targetId = String(args?.target ?? args?.event?.target?.id ?? '');
            let labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    const el = document.getElementById(targetId);
                    labelText = (el?.textContent || '').toString().trim();
                }
                else {
                    const el = typeof args?.target === 'string' ? document.getElementById(args.target) : args?.target;
                    labelText = (el?.textContent || el?.innerText || '')?.toString().trim();
                }
            }
            catch (e) { }
            if (!labelText)
                return;
            // data source for top-level is deptTotals
            const ds = deptTotals || [];
            const row = ds.find(r => String(r.x) === labelText) || null;
            if (!row)
                return;
            try {
                designationChartRef.current?.tooltipModule?.hide?.();
            }
            catch (e) { }
            setTimeout(() => setSelectedDept(String(row.x)), 60);
        };
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
                {/* <div style={{ fontSize: 11, color: '#64748b', marginBottom: 8 }}>Click on a bar to drilldown</div> */}
                <ChartComponent id="designation-dept-overview" ref={designationChartRef} height="100%" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }} primaryYAxis={{ lineStyle: { width: 0 } }} legendSettings={{ visible: false }} tooltip={{ enable: true, format: '${point.x}: ${point.y}' }} chartArea={{ border: { width: 0 } }} pointRender={(args) => { args.point.style = 'cursor: pointer;'; }} pointClick={handleDeptClick} chartMouseClick={onDesignationXAxisClick} load={onChartLoad}>
                    <ChartInject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective type="Column" xName="x" yName="y" dataSource={deptTotals} fill={'#736C4D'} columnWidth={0.6} dataLabel={{ visible: true, position: 'Top', format: '${point.y}', font: { color: '#374151', size: '11px' } }} animation={{ enable: false }}/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    };
    const EmployeeDetailsGrid = () => {
        function toolbarClick(args) {
            switch (args.item.id) {
                case 'employee-grid_pdfexport':
                    gridRef.current?.pdfExport();
                    break;
                case 'employee-grid_excelexport':
                    gridRef.current?.excelExport();
                    break;
            }
        }
        const toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                <GridComponent id="employee-grid" ref={gridRef} dataSource={employeeData} allowPaging={false} showColumnChooser={true} enableVirtualization={true} rowHeight={56} allowTextWrap={true} allowResizing={true} allowSorting={true} allowMultiSorting={true} allowExcelExport={true} allowPdfExport={true} width={'100%'} height={'100%'} toolbar={toolBarOptions} toolbarClick={toolbarClick}>
                    <GridInject services={[VirtualScroll, Sort, Filter, ExcelExport, PdfExport, GridToolbar, Page, Sort, ColumnChooser]}/>
                    <ColumnsDirective>
                        <ColumnDirective field='employeeId' headerText='Employee ID' headerTemplate={headerWithTooltip("Employee ID")} width='120' clipMode='EllipsisWithTooltip' textAlign='Right'/>
                        <ColumnDirective field='name' headerText='Employee Name' headerTemplate={headerWithTooltip("Employee Name")} width='200' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='department' headerText='Department' headerTemplate={headerWithTooltip("Department")} width='160' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='designation' headerText='Designation' headerTemplate={headerWithTooltip("Designation")} width='220' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='workFormat' headerText='Work Type' headerTemplate={headerWithTooltip("Work Type")} width='120' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='experience' headerText='Experience (Yrs)' headerTemplate={headerWithTooltip("Experience (Yrs)")} textAlign='Center' width='140' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='joiningDate' headerText='Date of Joining' headerTemplate={headerWithTooltip("Date of Joining")} width='140' clipMode='EllipsisWithTooltip' textAlign='Right'/>
                        <ColumnDirective field='email' headerText='Email ID' headerTemplate={headerWithTooltip("Email ID")} width='240' clipMode='EllipsisWithTooltip'/>

                    </ColumnsDirective>
                </GridComponent>
            </div>);
    };
    return (<div id='container'>
            <div className="e-card cs-toolbar">
                <div className="cs-toolbar-left">
                    <h4 className="cs-title">Overview</h4>
                </div>
                <div className="cs-toolbar-right">
                    <MultiSelectComponent id="Department-multiselect" dataSource={DepartmentItems} fields={{ text: 'text', value: 'value' }} placeholder="All" mode="CheckBox" showSelectAll={true} selectAllText="All" unSelectAllText="Clear All" showDropDownIcon={true} enableSelectionOrder={true} value={departments || []} change={(e) => setDepartments(e.value || [])} width={180}>
                        <Inject services={[CheckBoxSelection]}/>
                    </MultiSelectComponent>

                </div>
            </div>
            <DashboardLayoutComponent ref={OverviewRef} id="analytic_dashboard" showGridLines={false} cellAspectRatio={100 / 90} cellSpacing={cellSpacing} columns={8} created={created} allowDragging={false} mediaQuery="(max-width:950px)">
                <PanelsDirective>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={TotalEmployeeCard}></PanelDirective>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={GenderCard}></PanelDirective>
                    <PanelDirective sizeX={4} sizeY={1} row={0} col={4} content={NetHeadcountPanel}/>
                    <PanelDirective sizeX={8} sizeY={3} row={3} col={0} header={'<div> Work Mode Distribution </div>'} content={EmployeeWorkFormatChart}/>
                    <PanelDirective sizeX={4} sizeY={4} row={5} col={0} header={'Employee Tenure Breakdown'} content={TenureRatioDeptChart}/>
                    <PanelDirective sizeX={4} sizeY={4} row={5} col={4} header={'<div> Gender and Experience </div>'} content={GenderExperienceChart}/>
                    <PanelDirective sizeX={8} sizeY={4} row={9} col={5} header={'<div> Designation Details </div>'} content={DesignationDetailsChart}/>
                    <PanelDirective sizeX={8} sizeY={4} row={14} col={0} header={'Employee Details'} content={EmployeeDetailsGrid}/>
                </PanelsDirective>
            </DashboardLayoutComponent>
        </div>);
};
const Finance = (props) => {
    const propSelectedMonths = props?.selectedMonths;
    const propSelectedYear = props?.selectedYear;
    const onPropMonthChange = props?.onMonthChange;
    const onPropYearChange = props?.onYearChange;
    React.useEffect(() => {
        let timer;
        const refreshAll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                FinanceDashboardRef.current?.refresh();
                payRollBreakref.current?.refresh();
                payrollByTypeRef.current?.refresh();
                payrollProfitRef.current?.refresh();
                payrollByDeptRef.current?.refresh();
                payrollYoYRef.current?.refresh();
                salaryOvertimeRef.current?.refresh();
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
    const payRollBreakref = React.useRef(null);
    const payrollByTypeRef = React.useRef(null);
    const payrollProfitRef = React.useRef(null);
    const payrollByDeptRef = React.useRef(null);
    const payrollYoYRef = React.useRef(null);
    const salaryOvertimeRef = React.useRef(null);
    const FinanceDashboardRef = React.useRef(null);
    const cellSpacing = [10, 10];
    // Get unique employees and departments
    const uniqueEmployees = React.useMemo(() => {
        const seen = new Set();
        const unique = [];
        (safeData.employees || []).forEach((e) => {
            if (!seen.has(e.employeeId)) {
                seen.add(e.employeeId);
                unique.push(e);
            }
        });
        return unique;
    }, []);
    const allDepartments = React.useMemo(() => {
        const set = new Set();
        uniqueEmployees.forEach(e => set.add(e.department));
        return Array.from(set).sort();
    }, [uniqueEmployees]);
    const [departments, setDepartments] = React.useState(allDepartments);
    const effectiveDepartments = departments.length ? departments : allDepartments;
    // Use employees data for payroll, finance data only for Revenue and Month/Year
    const employeeData = (safeData?.employees || []);
    const employeeDetails = (safeData?.employeeDetails || []);
    const financeRows = (safeData?.finance || []);
    const totalPayroll = () => {
        return (<div className="hr-kpi-card">
                <div className="hr-kpi-label">Total Payroll (Net)</div>
                <div className="hr-kpi-value">{formatCurrency(payrollCost)}
                </div>
            </div>);
    };
    const payrollAccuracy = () => {
        return (<div className="hr-kpi-card">
                <div className="hr-kpi-label">Payroll Accuracy
                </div>
                <div className="hr-kpi-value">{`${payrollAccuracyPct.toFixed(2)}%`}
                </div>
            </div>);
    };
    const taxCompliance = () => {
        return (<div className="hr-kpi-card">
                <div className="hr-kpi-label">Tax Compliance
                </div>
                <div className="hr-kpi-value">{taxCompliancePct == null ? '--' : `${taxCompliancePct.toFixed(2)}%`}
                </div>
            </div>);
    };
    const totalDeduction = () => {
        return (<div className="hr-kpi-card">
                <div className="hr-kpi-label"> Total Deduction</div>
                <div className="hr-kpi-value">{totalLOPCostFinance == null ? '--' : formatCurrency(Math.round(totalLOPCostFinance))}
                </div>
            </div>);
    };
    // Merge department/employeeId from master `employees` into `employeeDetails` rows
    // so payroll calculations use department from master and salary/leave from details.
    const mergedPayrollRows = React.useMemo(() => {
        const empMap = new Map();
        (safeData.employees || []).forEach((e) => { if (e && e.employeeId)
            empMap.set(e.employeeId, e); });
        return (employeeDetails || []).map((d) => {
            const emp = empMap.get(d.employeeId) || {};
            return {
                ...d,
                department: d.department || emp.department,
                employeeId: d.employeeId || emp.employeeId,
                employeeName: d.employeeName || emp.employeeName || emp.name
            };
        });
    }, [safeData.employees, employeeDetails]);
    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthNameToLower = (monthName) => monthName.toLowerCase().substring(0, 3);
    // Get unique months (prefer finance data if present; otherwise derive from employee records for 2025)
    const uniqueMonths = React.useMemo(() => {
        const seen = new Set();
        const order = [];
        if (financeRows && financeRows.length) {
            financeRows.filter((r) => String(r.Year || r.year) === '2025').forEach((r) => {
                const monthVal = r.Month || r.month;
                if (monthVal && !seen.has(monthVal)) {
                    seen.add(monthVal);
                    order.push(monthVal);
                }
            });
        }
        else {
            // derive from employeeDetails; employee months are lowercase 3-letter (e.g. 'jan')
            const cap = (m) => m ? (m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()) : m;
            employeeDetails.filter((e) => String(e.year) === '2025').forEach((e) => {
                const monthName = cap(e.month);
                if (!seen.has(monthName)) {
                    seen.add(monthName);
                    order.push(monthName);
                }
            });
        }
        return order.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
    }, [financeRows, employeeDetails]);
    const [localSelectedMonths, setLocalSelectedMonths] = React.useState([]);
    const [localSelectedYear, setLocalSelectedYear] = React.useState(propSelectedYear ?? 2025);
    const selectedMonths = propSelectedMonths !== undefined ? propSelectedMonths : localSelectedMonths;
    const setSelectedMonths = propSelectedMonths !== undefined ? (m) => onPropMonthChange?.(m) : setLocalSelectedMonths;
    const selectedYear = propSelectedYear !== undefined ? propSelectedYear : localSelectedYear;
    const setSelectedYear = propSelectedYear !== undefined ? (y) => onPropYearChange?.(y) : setLocalSelectedYear;
    const activeMonths = React.useMemo(() => (selectedMonths && selectedMonths.length ? selectedMonths.slice().sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)) : uniqueMonths), [selectedMonths, uniqueMonths]);
    // Ensure the month selector initializes when uniqueMonths becomes available
    React.useEffect(() => {
        if (propSelectedMonths === undefined) {
            if ((!localSelectedMonths || localSelectedMonths.length === 0) && uniqueMonths && uniqueMonths.length) {
                setLocalSelectedMonths(uniqueMonths.slice());
            }
        }
    }, [uniqueMonths, propSelectedMonths]);
    // Filter employee payroll data by selected months/departments and year
    // Match employee month (lowercase 3-letter) with finance month
    const filteredEmployeePayroll = React.useMemo(() => {
        const monthSet = new Set(activeMonths.map(m => monthNameToLower(m)));
        return mergedPayrollRows.filter(e => String(e.year) === String(selectedYear) &&
            monthSet.has(String(e.month)) &&
            effectiveDepartments.includes(e.department));
    }, [mergedPayrollRows, activeMonths, effectiveDepartments, selectedYear]);
    // Shared holiday set and working-days helper to avoid repeated computation
    const holidaySetMemo = React.useMemo(() => {
        const s = new Set();
        const raw = safeData.holidays;
        if (Array.isArray(raw)) {
            raw.forEach((h) => {
                const dt = new Date(h);
                if (!isNaN(dt.getTime()))
                    s.add(dt.toISOString().slice(0, 10));
            });
        }
        return s;
    }, [safeData]);
    const workingDaysCacheRef = React.useRef(new Map());
    const getWorkingDaysInMonth = React.useCallback((year, monthZeroBased) => {
        const key = `${year}-${monthZeroBased}`;
        const cache = workingDaysCacheRef.current;
        if (cache.has(key))
            return cache.get(key);
        const daysInMonth = new Date(year, monthZeroBased + 1, 0).getDate();
        let count = 0;
        for (let d = 1; d <= daysInMonth; d++) {
            const dt = new Date(year, monthZeroBased, d);
            const wk = dt.getDay();
            if (wk === 0 || wk === 6)
                continue;
            const iso = dt.toISOString().slice(0, 10);
            if (holidaySetMemo.has(iso))
                continue;
            count += 1;
        }
        const result = count || daysInMonth;
        cache.set(key, result);
        return result;
    }, [holidaySetMemo]);
    // Total LOP Cost for Finance view: sum of per-day salary for LOP days filtered by selected year/months
    const totalLOPCostFinance = React.useMemo(() => {
        let total = 0;
        if (!mergedPayrollRows || !mergedPayrollRows.length)
            return total;
        // Use shared working days helper (memoized below) to avoid recomputing holidays/days repeatedly
        const workingDaysInMonth = getWorkingDaysInMonth;
        (mergedPayrollRows || []).forEach((rec) => {
            const salary = Number(rec.salary) || 0;
            const computed = Array.isArray(rec.computedLeaveStatus) ? rec.computedLeaveStatus : [];
            computed.forEach((item) => {
                if (!item || !item.isLOP)
                    return;
                const d = new Date(item.date);
                if (isNaN(d.getTime()))
                    return;
                // filter by selected year if set
                if (selectedYear && Number(selectedYear) !== d.getFullYear())
                    return;
                // filter by selected months if provided (selectedMonths are capitalized like 'Jan')
                if (selectedMonths && selectedMonths.length > 0) {
                    const m = d.toLocaleString('en-US', { month: 'short' });
                    if (!selectedMonths.includes(m))
                        return;
                }
                const workDays = workingDaysInMonth(d.getFullYear(), d.getMonth());
                const perDay = workDays > 0 ? salary / workDays : 0;
                total += perDay;
            });
        });
        return total;
    }, [mergedPayrollRows, selectedYear, selectedMonths, getWorkingDaysInMonth]);
    const annualGrossByEmp = React.useMemo(() => {
        const m = new Map();
        (mergedPayrollRows || [])
            .filter((r) => String(r.year) === String(selectedYear) && effectiveDepartments.includes(r.department))
            .forEach((r) => {
            const monthlyGross = (Number(r.salary) || 0) + (Number(r.overtimePayment) || 0) + (Number(r.allowance) || 0) + (Number(r.hike) || 0) + (Number(r.benefits) || 0);
            const id = r.employeeId || '';
            m.set(id, (m.get(id) || 0) + monthlyGross);
        });
        return m;
    }, [mergedPayrollRows, selectedYear, effectiveDepartments]);
    const annualTaxByEmp = React.useMemo(() => {
        const m = new Map();
        annualGrossByEmp.forEach((annualGross, empId) => {
            const taxableIncome = Math.max(0, (annualGross || 0) - 50000);
            const tax = Math.round(taxableIncome * 0.1);
            m.set(empId, tax);
        });
        return m;
    }, [annualGrossByEmp]);
    // Helper: compute net components for a payroll row (salary after LOP, PF, tax; plus other pays)
    const computeNetComponents = React.useCallback((e) => {
        const salary = Number(e.salary) || 0;
        const overtime = Number(e.overtimePayment) || 0;
        const allowance = Number(e.allowance) || 0;
        const hike = Number(e.hike) || 0;
        const benefits = Number(e.benefits) || 0;
        const others = Number(e.others) || 0;
        // month index helper (expects e.month like 'jan')
        const monthOrderLocal = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const rowYear = Number(e.year) || new Date().getFullYear();
        const monthStr = (e.month || '').toString().toLowerCase().slice(0, 3);
        const monthIdx = Math.max(0, monthOrderLocal.indexOf(monthStr));
        // Use shared working-days helper to avoid recomputing
        const workDays = getWorkingDaysInMonth(rowYear, monthIdx);
        // LOP deduction: sum per-day salary for LOP entries that fall in the same month/year
        const computed = Array.isArray(e.computedLeaveStatus) ? e.computedLeaveStatus : [];
        let lopDeduct = 0;
        computed.forEach((item) => {
            if (!item || !item.isLOP)
                return;
            const d = new Date(item.date);
            if (isNaN(d.getTime()))
                return;
            if (d.getFullYear() === rowYear && d.getMonth() === monthIdx) {
                const perDay = workDays > 0 ? (salary / workDays) : 0;
                lopDeduct += perDay;
            }
        });
        // PF deduction: per-row override or default 12%
        const pfPctRaw = Number(e.pfPercent ?? e.pfDeductionPercent ?? 12);
        const pfPct = isNaN(pfPctRaw) ? 0.12 : (pfPctRaw / 100);
        const taxableSalary = Math.max(0, salary - lopDeduct);
        const pfDeduct = Math.round(taxableSalary * pfPct);
        const netSalary = taxableSalary - pfDeduct;
        // Monthly gross for allocation
        const monthlyGross = salary + overtime + allowance + hike + benefits;
        const annualGross = annualGrossByEmp.get(e.employeeId || '') || 0;
        const annualTax = annualTaxByEmp.get(e.employeeId || '') || 0;
        const monthlyTax = annualGross > 0 ? Math.round((monthlyGross / annualGross) * annualTax) : 0;
        const netTotal = netSalary - monthlyTax + overtime + allowance + hike + benefits + others;
        return { netSalary, overtime, allowance, hike, benefits, others, pfDeduct, lopDeduct, monthlyTax, annualTax, netTotal };
    }, [annualGrossByEmp, annualTaxByEmp, getWorkingDaysInMonth]);
    // Calculate net payroll cost (salary after LOP and PF + other pays)
    const payrollCost = React.useMemo(() => {
        return filteredEmployeePayroll.reduce((sum, e) => {
            const comps = computeNetComponents(e);
            return sum + (comps.netTotal || 0);
        }, 0);
    }, [filteredEmployeePayroll, computeNetComponents]);
    // Tax compliance: percent of payroll rows with tax amount present (>0)
    const taxCompliancePct = React.useMemo(() => {
        const rows = filteredEmployeePayroll || [];
        if (!rows.length)
            return null;
        let withTax = 0;
        rows.forEach((e) => {
            const reportedTax = Number(e.tax || e.taxWithheld || e.tds || e.incomeTax || e.taxDeduction || 0) || 0;
            const comps = computeNetComponents(e);
            const computedMonthlyTax = comps?.monthlyTax || 0;
            const taxAmt = reportedTax > 0 ? reportedTax : computedMonthlyTax;
            if (taxAmt > 0)
                withTax += 1;
        });
        return rows.length ? (withTax / rows.length) * 100 : null;
    }, [filteredEmployeePayroll, computeNetComponents]);
    // --- Monthly & Department LOP aggregations ---
    const { monthlyLOPCostSeries, deptLOPCostByMonth } = React.useMemo(() => {
        const monthMap = new Map();
        const deptMonthMap = {};
        const workingDaysInMonth = getWorkingDaysInMonth;
        (mergedPayrollRows || []).forEach((rec) => {
            const salary = Number(rec.salary) || 0;
            const computed = Array.isArray(rec.computedLeaveStatus) ? rec.computedLeaveStatus : [];
            computed.forEach((item) => {
                if (!item || !item.isLOP)
                    return;
                const d = new Date(item.date);
                if (isNaN(d.getTime()))
                    return;
                // filter by selected year/months
                if (selectedYear && Number(selectedYear) !== d.getFullYear())
                    return;
                if (selectedMonths && selectedMonths.length > 0) {
                    const m = d.toLocaleString('en-US', { month: 'short' });
                    if (!selectedMonths.includes(m))
                        return;
                }
                const key = Date.UTC(d.getFullYear(), d.getMonth(), 1);
                const workDays = workingDaysInMonth(d.getFullYear(), d.getMonth());
                const perDay = workDays > 0 ? salary / workDays : 0;
                monthMap.set(key, (monthMap.get(key) || 0) + perDay);
                if (!deptMonthMap[key])
                    deptMonthMap[key] = new Map();
                const dept = rec.department || 'Unknown';
                deptMonthMap[key].set(dept, (deptMonthMap[key].get(dept) || 0) + perDay);
            });
        });
        const monthsArr = Array.from(monthMap.entries()).map(([k, v]) => ({ dt: k, value: v }));
        monthsArr.sort((a, b) => a.dt - b.dt);
        // Add MoM % change and cumulative to the series
        let cumulative = 0;
        const monthlyLOPCostSeries = monthsArr.map((m, idx, arr) => {
            const prev = idx > 0 ? arr[idx - 1].value : null;
            const momPct = prev === null || prev === 0 ? null : ((m.value - prev) / prev) * 100;
            cumulative += m.value;
            const yRounded = Math.round(m.value);
            const momFmt = momPct === null ? '-' : `${Math.round(momPct)}%`;
            const cumRounded = Math.round(cumulative);
            return {
                x: new Date(m.dt).toLocaleString('en-US', { month: 'short', year: 'numeric' }),
                y: m.value,
                dt: m.dt,
                momPct,
                cumulative,
                yFmt: formatCurrency(yRounded),
                momFmt,
                cumFmt: formatCurrency(cumRounded)
            };
        });
        const deptLOPCostByMonth = {};
        Object.keys(deptMonthMap).forEach(k => {
            const keyNum = Number(k);
            const m = deptMonthMap[keyNum];
            const arr = [];
            Array.from(m.entries()).forEach(([dept, cost]) => arr.push({ department: dept, cost }));
            arr.sort((a, b) => b.cost - a.cost);
            deptLOPCostByMonth[keyNum] = arr;
        });
        return { monthlyLOPCostSeries, deptLOPCostByMonth };
    }, [mergedPayrollRows, selectedYear, selectedMonths, getWorkingDaysInMonth]);
    // Payroll accuracy from employees data (based on payroll error count)
    const payrollAccuracyPct = React.useMemo(() => {
        const totalEmp = filteredEmployeePayroll.length;
        const errorCount = filteredEmployeePayroll.reduce((sum, e) => sum + (e.payrollErrorCount || 0), 0);
        return totalEmp ? (1 - (errorCount / totalEmp)) * 100 : 0;
    }, [filteredEmployeePayroll]);
    // Payroll by Department (from employees data)
    const payrollByDept = React.useMemo(() => {
        const map = {};
        filteredEmployeePayroll.forEach(e => {
            const comps = computeNetComponents(e);
            map[e.department] = (map[e.department] || 0) + (comps.netTotal || 0);
        });
        return Object.entries(map).map(([x, y]) => ({ x, y, yFmt: formatCurrency(y) }));
    }, [filteredEmployeePayroll]);
    // Payroll vs Revenue across months (Revenue from finance, Payroll from employees)
    const payrollVsProfit = React.useMemo(() => {
        const result = [];
        activeMonths.forEach(m => {
            const monthLower = monthNameToLower(m);
            // Get revenue from finance data (sum across all departments for this month)
            const revenue = (financeRows && financeRows.length)
                ? financeRows.filter((r) => String(r.Year || r.year) === String(selectedYear) && ((r.Month || r.month) === m)).reduce((sum, r) => sum + ((r.Revenue || r.revenue) || 0), 0)
                : 0;
            // Get payroll from merged payroll rows (employeeDetails + dept from employees)
            const payroll = mergedPayrollRows
                .filter(e => String(e.year) === String(selectedYear) && String(e.month) === monthLower && effectiveDepartments.includes(e.department))
                .reduce((sum, e) => sum + ((computeNetComponents(e).netTotal) || 0), 0);
            const profit = revenue - payroll;
            result.push({ x: m, payroll, profit });
        });
        return result;
    }, [financeRows, mergedPayrollRows, activeMonths, effectiveDepartments, selectedYear]);
    // Salary vs Hike % by department (from employees data)
    const salaryVsOvertime = React.useMemo(() => {
        const agg = {};
        filteredEmployeePayroll.forEach(e => {
            if (!agg[e.department])
                agg[e.department] = { salary: 0, overtimepayment: 0 };
            const comps = computeNetComponents(e);
            agg[e.department].salary += comps.netSalary || 0; // salary after LOP & PF
            agg[e.department].overtimepayment += comps.overtime || 0;
        });
        const result = Object.entries(agg).map(([dept, v]) => {
            const total = v.salary + v.overtimepayment;
            // compute with one decimal to avoid tiny overtime rounding to 0
            const salaryPct = total ? Math.round((v.salary / total) * 1000) / 10 : 0;
            const overtimePct = total ? Math.round((v.overtimepayment / total) * 1000) / 10 : 0;
            return { x: dept, salaryPct, overtimePct, raw: v };
        });
        return result;
    }, [filteredEmployeePayroll]);
    // Formatters for chart labels
    function formatCurrency(n) {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0, notation: 'compact' }).format(n ?? 0);
    }
    const currencyCompact = React.useMemo(() => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 0
    }), []);
    const onAxisLabelMillions = (args) => {
        if (args?.axis?.orientation === 'Horizontal') {
            args.text = currencyCompact.format(Number(args.value || 0));
        }
    };
    const formatYAxisDollar = (args) => {
        if (args.axis?.name === 'primaryYAxis') {
            const v = Number(args.value || 0);
            args.text = formatCurrency(v);
        }
    };
    const onPercentageDataLabelText = (args) => {
        const id = args.series?.chart?.element?.id;
        if (id === 'salary-overtime' || id === 'tenure-by-dept' || id === 'tenure-by-dept-buckets') {
            args.text = `${args.point?.y}%`;
        }
    };
    const onFormattedDataLabelText = (args) => {
        // Called for data label text rendering across charts
        const chartId = args.series?.chart?.element?.id || args.chart?.element?.id;
        if (!args.point)
            return;
        const val = Number(args.point?.y || 0);
        // For payroll charts, show whole currency values (no decimals)
        if (chartId === 'payroll-by-dept' || chartId === 'payroll-by-type' || chartId === 'payroll-type-dept') {
            args.text = args.point?.yFmt ?? formatCurrency(Math.round(val));
            return;
        }
        // Fallback: if consumer provided a preformatted value, use it
        if (args.point?.yFmt) {
            args.text = args.point.yFmt;
        }
    };
    const onCurrencyTooltip = (args) => {
        const y = Number(args?.point?.y ?? 0);
        const x = String(args?.point?.x ?? '');
        const series = String(args?.series?.name ?? '');
        args.text = series ? `${x} : ${formatCurrency(y)}` : `${x}: ${formatCurrency(y)}`;
    };
    const yearOptions = [2023, 2024, 2025];
    const payrollTypes = React.useMemo(() => ['Salary', 'Overtime', 'Allowance', 'Hike', 'Benefits'], []);
    const payrollTotalsByType = React.useMemo(() => {
        const totals = { Salary: 0, Overtime: 0, Allowance: 0, Hike: 0, Benefits: 0 };
        (filteredEmployeePayroll || []).forEach(e => {
            const comps = computeNetComponents(e);
            totals.Salary += comps.netSalary || 0;
            totals.Overtime += comps.overtime || 0;
            totals.Allowance += comps.allowance || 0;
            totals.Hike += comps.hike || 0;
            totals.Benefits += comps.benefits || 0;
        });
        return payrollTypes.map(t => ({ x: t, y: totals[t] || 0, yFmt: formatCurrency(Math.round(totals[t] || 0)) }));
    }, [filteredEmployeePayroll, computeNetComponents, payrollTypes]);
    const payrollDeptBreakdown = React.useCallback((type) => {
        const map = {};
        (filteredEmployeePayroll || []).forEach(e => {
            const comps = computeNetComponents(e);
            const dept = e.department || 'Unknown';
            let val = 0;
            if (type === 'Salary')
                val = comps.netSalary || 0;
            else if (type === 'Overtime')
                val = comps.overtime || 0;
            else if (type === 'Allowance')
                val = comps.allowance || 0;
            else if (type === 'Hike')
                val = comps.hike || 0;
            else if (type === 'Benefits')
                val = comps.benefits || 0;
            map[dept] = (map[dept] || 0) + val;
        });
        return Object.entries(map).map(([department, value]) => ({ x: department, y: value, yFmt: formatCurrency(Math.round(value)) })).sort((a, b) => b.y - a.y);
    }, [filteredEmployeePayroll, computeNetComponents]);
    const PayrollBreakdownChart = () => {
        // Local drill state to avoid re-rendering the whole Finance/dashboard
        const [payrollDrillType, setPayrollDrillType] = React.useState(null);
        const onPayrollXAxisClick = (args) => {
            // Ignore clicks on the Y-axis labels — only X-axis should trigger drill
            if (args?.axis?.orientation === 'Vertical')
                return;
            const targetId = String(args?.target ?? args?.event?.target?.id ?? '');
            let labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    const el = document.getElementById(targetId);
                    labelText = (el?.textContent || '').toString().trim();
                }
                else {
                    const el = typeof args?.target === 'string' ? document.getElementById(args.target) : args?.target;
                    labelText = (el?.textContent || el?.innerText || '')?.toString().trim();
                }
            }
            catch (e) { }
            if (!labelText)
                return;
            // Data source from chart ref (fallback to current computed totals)
            const ds = payrollByTypeRef.current?.series?.[0]?.dataSource || payrollTotalsByType || [];
            const row = ds.find((p) => String(p?.x) === labelText) || null;
            if (!row)
                return;
            try {
                payrollByTypeRef.current?.tooltipModule?.hide?.();
            }
            catch (e) { }
            setTimeout(() => setPayrollDrillType(String(row.x)), 60);
        };
        // Keep a stable wrapper so Panel DOM doesn't change and cause DashboardLayout issues.
        const deptData = payrollDrillType ? payrollDeptBreakdown(payrollDrillType) : [];
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
                <div>
                    {payrollDrillType ? (<div style={{ marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' }}>
                            <button onClick={() => {
                    setPayrollDrillType(null);
                    try {
                        payrollByTypeRef.current?.tooltipModule?.hide?.();
                    }
                    catch (e) { }
                    setTimeout(() => { payrollByTypeRef.current?.refresh?.(); payRollBreakref.current?.refresh?.(); }, 80);
                }} style={{ marginLeft: 10, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 }}>
                                Back
                            </button>
                        </div>) : null}
                </div>

                {payrollDrillType ? (<ChartComponent ref={payRollBreakref} id={`payroll-type-dept`} height={'100%'} width={'100%'} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', edgeLabelPlacement: 'Shift', labelStyle: { textOverflow: 'Wrap' } }} primaryYAxis={{ majorGridLines: { width: 0 }, lineStyle: { width: 0 } }} legendSettings={{ visible: false }} tooltip={{ enable: true }} chartArea={{ border: { width: 0 } }} margin={{ left: 0, right: 0, top: 0, bottom: 20 }} axisLabelRender={formatYAxisDollar} textRender={onFormattedDataLabelText} tooltipRender={onCurrencyTooltip} load={onChartLoad}>
                        <ChartInject services={[ColumnSeries, Category, Tooltip, Legend]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective type='Column' dataSource={deptData} xName='x' yName='y' name={payrollDrillType} fill='#87805E' cornerRadius={{ topLeft: 4, topRight: 4 }} marker={{ dataLabel: { visible: true, position: 'Outer' } }} animation={{ enable: false }}/>
                        </SeriesCollectionDirective>
                    </ChartComponent>) : (<ChartComponent ref={payrollByTypeRef} id="payroll-by-type" height={'100%'} width={'100%'} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', edgeLabelPlacement: 'Shift', labelStyle: { textOverflow: 'Wrap' } }} primaryYAxis={{ lineStyle: { width: 0 } }} legendSettings={{ visible: false }} tooltip={{ enable: true, format: '${series.name}: ${point.y}' }} chartArea={{ border: { width: 0 } }} margin={{ left: 0, right: 0, top: 0, bottom: 20 }} axisLabelRender={formatYAxisDollar} pointRender={(args) => { args.point.style = 'cursor: pointer;'; }} textRender={onFormattedDataLabelText} tooltipRender={onCurrencyTooltip} chartMouseClick={onPayrollXAxisClick} load={onChartLoad} pointClick={(args) => { setPayrollDrillType(args.point.x); }}>
                        <ChartInject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective type='Column' dataSource={payrollTotalsByType} xName='x' yName='y' name='Amount' fill='#736C4D' marker={{ dataLabel: { visible: true, position: 'Outer' } }} dataLabel={{ visible: true, position: 'Top', template: '${point.yFmt}' }} animation={{ enable: false }}/>
                        </SeriesCollectionDirective>
                    </ChartComponent>)}
            </div>);
    };
    const PayrollProfitChart = () => (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
            <ChartComponent ref={payrollProfitRef} id="payroll-profit" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ labelFormat: '${value}', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' } }} axisLabelRender={formatYAxisDollar} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true }} chartArea={{ border: { width: 0 } }} background='transparent' crosshair={{ enable: true, lineType: 'Vertical' }} load={onChartLoad} tooltipRender={onCurrencyTooltip}>
                <ChartInject services={[SplineAreaSeries, Category, Legend, Tooltip, DataLabel, Crosshair]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective type='SplineArea' name='Payroll' xName='x' yName='payroll' dataSource={payrollVsProfit} marker={{ visible: true, width: 8, height: 8 }} fill="#285430" opacity={0.3} border={{ width: 2.75, color: '#285430' }} animation={{ enable: false }}/>
                    <SeriesDirective type='SplineArea' name='Net Profit' xName='x' yName='profit' dataSource={payrollVsProfit} marker={{ visible: true, width: 8, height: 8 }} fill="#B4846C" opacity={0.1} border={{ width: 2.75, color: '#B4846C' }} animation={{ enable: false }}/>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>);
    const PayrollByDeptChart = () => (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
            <ChartComponent ref={payrollByDeptRef} id="payroll-by-dept" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, interval: 1, labelIntersectAction: 'Rotate45', labelStyle: { textOverflow: 'Wrap' } }} primaryYAxis={{ labelFormat: '{value}', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' }, labelIntersectAction: 'Rotate45' }} legendSettings={{ visible: false }} tooltip={{ enable: true }} chartArea={{ border: { width: 0 } }} axisLabelRender={onAxisLabelMillions} textRender={onFormattedDataLabelText} tooltipRender={onCurrencyTooltip} load={onChartLoad} margin={{ left: 0, right: 0, top: 0, bottom: 20 }}>
                <ChartInject services={[BarSeries, Category, Legend, Tooltip, DataLabel]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective type='Bar' name='Department Cost' xName='x' yName='y' dataSource={payrollByDept} fill='#B4846C' cornerRadius={{ topRight: 6, bottomRight: 6 }} marker={{ dataLabel: { visible: true, position: 'Outer' } }} dataLabel={{ visible: true, position: 'Outer', font: { size: '11px' }, template: '${point.yFmt}' }} animation={{ enable: false }}/>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>);
    const SalaryOvertimeChart = () => (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
            <ChartComponent ref={salaryOvertimeRef} id="salary-overtime" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }} primaryYAxis={{ labelFormat: '{value}%', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' }, labelIntersectAction: 'Wrap' }} legendSettings={{ visible: true, position: 'Bottom' }} tooltip={{ enable: true, shared: true, format: '${series.name}: ${point.y}' }} chartArea={{ border: { width: 0 } }} textRender={onPercentageDataLabelText} palettes={["#2563EB", "#F43F5E"]} load={onChartLoad}>
                <ChartInject services={[StackingColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective type='StackingColumn' name='Salary %' xName='x' yName='salaryPct' dataSource={salaryVsOvertime} fill='#AA8B56' animation={{ enable: false }}/>
                    <SeriesDirective type='StackingColumn' name='OverTime Payment %' xName='x' yName='overtimePct' dataSource={salaryVsOvertime} fill='#7D8F69' cornerRadius={{ topLeft: 6, topRight: 6 }} animation={{ enable: false }}/>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>);
    // Payroll Year-over-Year Growth (percent) for selected months
    const payrollYoYGrowth = React.useMemo(() => {
        const prevYear = String(Number(selectedYear) - 1);
        const monthLowerList = activeMonths.map(m => monthNameToLower(m));
        // helper to compute payroll total for a given year and month (lowercase 3-letter)
        function payrollFor(year, monthLower) {
            return mergedPayrollRows
                .filter(e => String(e.year) === String(year) && String(e.month) === monthLower && effectiveDepartments.includes(e.department))
                .reduce((sum, e) => sum + ((computeNetComponents(e).netTotal) || 0), 0);
        }
        // per-month YoY (compare each selected month with same month previous year)
        const perMonth = monthLowerList.map((ml, idx) => {
            const monthLabel = activeMonths[idx];
            const cur = payrollFor(String(selectedYear), ml);
            const prev = payrollFor(prevYear, ml);
            const yoy = prev ? ((cur - prev) / prev) * 100 : null;
            return { x: monthLabel, y: yoy, cur, prev };
        });
        // aggregate across selected months (sum selected months for both years)
        const sumCur = perMonth.reduce((s, p) => s + (p.cur || 0), 0);
        const sumPrev = perMonth.reduce((s, p) => s + (p.prev || 0), 0);
        const aggregateYoY = sumPrev ? ((sumCur - sumPrev) / sumPrev) * 100 : null;
        return { perMonth, aggregateYoY };
    }, [mergedPayrollRows, activeMonths, selectedYear, effectiveDepartments]);
    const PayrollYoYGrowthChart = () => (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
            <ChartComponent load={onChartLoad} ref={payrollYoYRef} id="payroll-yoy" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', interval: 1 }} primaryYAxis={{ labelFormat: '{value}%', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' } }} legendSettings={{ visible: false }} tooltip={{ enable: true, shared: true, format: '${point.y}' }} chartArea={{ border: { width: 0 } }} background='transparent' palettes={["#285430"]} crosshair={{ enable: true, lineType: 'Vertical' }}>
                <ChartInject services={[LineSeries, Category, Legend, Tooltip, DataLabel, Crosshair]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective type='Line' name='YoY Growth' xName='x' yName='y' dataSource={payrollYoYGrowth.perMonth.map(p => ({ x: p.x, y: p.y ?? 0 }))} marker={{ visible: true, width: 8, height: 8 }} dataLabel={{ visible: true, format: '{value}%', position: 'Top' }} animation={{ enable: false }}/>
                </SeriesCollectionDirective>
            </ChartComponent>

        </div>);
    return (<div id='container'>
            <div className="e-card cs-toolbar">
                <div className="cs-toolbar-left">
                    <h4 className="cs-title">Finance & Payroll</h4>
                </div>
                <div className="cs-toolbar-right">
                    <MultiSelectComponent id="Month-multiselect" dataSource={uniqueMonths} fields={{ text: 'text', value: 'value' }} placeholder="All" mode="CheckBox" showSelectAll={true} selectAllText="All" unSelectAllText="Clear All" showDropDownIcon={true} enableSelectionOrder={true} value={selectedMonths || []} change={(e) => setSelectedMonths(e.value || [])} width={180}>
                        <Inject services={[CheckBoxSelection]}/>
                    </MultiSelectComponent>
                    <DropDownListComponent id="Year-dropdown" dataSource={yearOptions} fields={{ text: 'text', value: 'value' }} value={selectedYear} change={(e) => setSelectedYear(e.value)} width={180}/>
                    {/* <div> </div> */}
                </div>
            </div>
            <DashboardLayoutComponent id="finance_dashboard" ref={FinanceDashboardRef} showGridLines={false} cellAspectRatio={100 / 85} cellSpacing={cellSpacing} columns={8} allowDragging={false} mediaQuery="(max-width:950px)">
                <PanelsDirective>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={totalPayroll}/>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={payrollAccuracy}/>\
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={taxCompliance}/>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={totalDeduction}/>
                    <PanelDirective sizeX={8} sizeY={3} row={1} col={0} header={'<div> Payroll BreakDown'} content={PayrollBreakdownChart}/>
                    <PanelDirective sizeX={4} sizeY={3} row={4} col={0} header={'<div>Payroll YoY Growth</div>'} content={PayrollYoYGrowthChart}/>
                    <PanelDirective sizeX={4} sizeY={3} row={4} col={4} header={'<div>Payroll Vs Net Profit</div>'} content={PayrollProfitChart}/>
                    <PanelDirective sizeX={4} sizeY={3} row={7} col={0} header={'<div>Department Cost Share </div>'} content={PayrollByDeptChart}/>
                    <PanelDirective sizeX={4} sizeY={3} row={7} col={4} header={'<div>Salary and OverTime Payment</div>'} content={SalaryOvertimeChart}/>
                </PanelsDirective>
            </DashboardLayoutComponent>
        </div>);
};
const Recruitment = (props) => {
    const cellSpacing = [10, 10];
    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const propSelectedMonths = props?.selectedMonths;
    const propSelectedYear = props?.selectedYear;
    const onPropMonthChange = props?.onMonthChange;
    const onPropYearChange = props?.onYearChange;
    const [localSelectedMonths, setLocalSelectedMonths] = React.useState(monthOrder);
    const [localSelectedYear, setLocalSelectedYear] = React.useState(propSelectedYear ?? 2025);
    const selectedMonths = propSelectedMonths !== undefined ? propSelectedMonths : localSelectedMonths;
    const setSelectedMonths = propSelectedMonths !== undefined ? (m) => onPropMonthChange?.(m) : setLocalSelectedMonths;
    const selectedYear = propSelectedYear !== undefined ? propSelectedYear : localSelectedYear;
    const setSelectedYear = propSelectedYear !== undefined ? (y) => onPropYearChange?.(y) : setLocalSelectedYear;
    const hiringFunnelMainRef = React.useRef(null);
    const hiringFunnelDrillRef = React.useRef(null);
    const recruitmentOpeningsRef = React.useRef(null);
    const applicantSourceRef = React.useRef(null); // AccumulationChartComponent
    const applicationByDeptRef = React.useRef(null);
    const offerDeclinedRef = React.useRef(null); // AccumulationChartComponent
    const recruitmentGridRef = React.useRef(null);
    const recruitmentDashboardRef = React.useRef(null);
    // Get recruitment data from JSON
    React.useEffect(() => {
        let timer;
        const refreshAll = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                recruitmentDashboardRef.current?.refresh();
                hiringFunnelDrillRef.current?.refresh();
                recruitmentOpeningsRef.current?.refresh();
                applicantSourceRef.current?.refresh();
                applicationByDeptRef.current?.refresh();
                offerDeclinedRef.current?.refresh();
                recruitmentGridRef.current?.refresh();
                hiringFunnelMainRef.current?.refresh();
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
    const recruitmentData = React.useMemo(() => safeData?.recruitment || [], []);
    // Pre-parse statusHistory dates and normalized status to avoid repeated Date parsing
    const recruitmentParsed = React.useMemo(() => {
        return (recruitmentData || []).map((app) => {
            const parsed = (Array.isArray(app.statusHistory) ? app.statusHistory.slice() : []).map((h) => {
                const dateObj = h && h.date ? new Date(h.date) : null;
                const year = dateObj && !isNaN(dateObj.getTime()) ? dateObj.getFullYear() : null;
                const monthShort = dateObj && !isNaN(dateObj.getTime()) ? dateObj.toLocaleString('en-US', { month: 'short' }) : null;
                return {
                    ...h,
                    dateObj,
                    year,
                    monthShort,
                    statusLower: String(h?.status || '').toLowerCase()
                };
            }).sort((a, b) => {
                const ta = a?.dateObj ? a.dateObj.getTime() : 0;
                const tb = b?.dateObj ? b.dateObj.getTime() : 0;
                return ta - tb;
            });
            return { ...app, statusHistoryParsed: parsed };
        });
    }, [recruitmentData]);
    // Get unique years and months from recruitment data
    const uniqueYears = React.useMemo(() => {
        const years = new Set();
        recruitmentParsed.forEach((app) => {
            app.statusHistoryParsed?.forEach((h) => {
                if (h?.year)
                    years.add(h.year);
            });
        });
        return Array.from(years).sort((a, b) => a - b);
    }, [recruitmentParsed]);
    const uniqueMonths = React.useMemo(() => {
        const months = new Set();
        recruitmentParsed.forEach((app) => {
            app.statusHistoryParsed?.forEach((h) => {
                if (h?.monthShort)
                    months.add(h.monthShort);
            });
        });
        return Array.from(months).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
    }, [recruitmentParsed]);
    const activeMonths = selectedMonths && selectedMonths.length > 0 ? selectedMonths : uniqueMonths;
    // Filter applications by selected months and year
    const filteredApplications = React.useMemo(() => {
        return recruitmentParsed.filter((app) => {
            return app.statusHistoryParsed?.some((h) => {
                return h?.year === Number(selectedYear) && activeMonths.includes(h?.monthShort);
            });
        });
    }, [recruitmentParsed, selectedMonths, selectedYear, activeMonths]);
    // Calculate kpis
    const totalApplicants = filteredApplications.length;
    const hiredApplications = filteredApplications.filter((app) => app.statusHistoryParsed?.some((h) => h.statusLower === 'hired'));
    const totalHired = hiredApplications.length;
    const offeredApplications = filteredApplications.filter((app) => app.statusHistoryParsed?.some((h) => h.statusLower === 'offered'));
    const totalOffered = offeredApplications.length;
    const avgTimeToHire = React.useMemo(() => {
        let totalDays = 0;
        let count = 0;
        hiredApplications.forEach((app) => {
            const applied = (app.statusHistoryParsed || []).find((h) => h.statusLower === 'applied');
            const hired = (app.statusHistoryParsed || []).find((h) => h.statusLower === 'hired');
            const appliedDate = applied?.dateObj;
            const hiredDate = hired?.dateObj;
            if (appliedDate && hiredDate) {
                const days = Math.floor((hiredDate.getTime() - appliedDate.getTime()) / (1000 * 60 * 60 * 24));
                totalDays += days;
                count++;
            }
        });
        return count > 0 ? Math.round(totalDays / count) : 0;
    }, [hiredApplications]);
    const offerAcceptanceRate = totalOffered > 0 ? Math.round((totalHired / totalOffered) * 100) : 0;
    const hireConversionRate = totalApplicants > 0 ? Math.round((totalHired / totalApplicants) * 100) : 0;
    // Hiring Funnel - count by stage
    const hiringFunnelData = React.useMemo(() => {
        const stages = ['Applied', 'shortlisted', 'interviewed', 'offered', 'Hired'];
        const stageCounts = {};
        stages.forEach(stage => {
            const sl = stage.toLowerCase();
            stageCounts[stage] = filteredApplications.filter((app) => (app.statusHistoryParsed || []).some((h) => h.statusLower === sl)).length;
        });
        return stages.map(stage => ({
            x: stage.charAt(0).toUpperCase() + stage.slice(1),
            y: stageCounts[stage] || 0
        }));
    }, [filteredApplications]);
    // Applicant count by source
    const applicantBySourceData = React.useMemo(() => {
        const sourceMap = new Map();
        filteredApplications.forEach((app) => {
            const source = app.source || 'Unknown';
            sourceMap.set(source, (sourceMap.get(source) || 0) + 1);
        });
        return Array.from(sourceMap).map(([source, count]) => ({ x: source, y: count }));
    }, [filteredApplications]);
    // Application count by department - Opening vs Filled
    const applicationByDeptData = React.useMemo(() => {
        const deptStats = {};
        filteredApplications.forEach((app) => {
            const dept = app.department || 'Unknown';
            if (!deptStats[dept])
                deptStats[dept] = { opening: 0, filled: 0 };
            const offeredStatus = (app.statusHistoryParsed || []).find((h) => h.statusLower === 'offered');
            if (offeredStatus) {
                deptStats[dept].opening++;
                const offeredIndex = (app.statusHistoryParsed || []).indexOf(offeredStatus);
                const hasHired = (app.statusHistoryParsed || []).slice(offeredIndex + 1).some((h) => h.statusLower === 'hired');
                if (hasHired)
                    deptStats[dept].filled++;
            }
        });
        return Object.entries(deptStats).map(([dept, stats]) => ({ x: dept, opening: stats.opening, filled: stats.filled }));
    }, [filteredApplications]);
    // Recruitment details grid (table view)
    const RecruitmentDetailsGrid = () => {
        const recruitmentGridData = React.useMemo(() => {
            // Only include applications that have an "offered" status and were not hired afterwards (declined after offer)
            const offeredButDeclined = (filteredApplications || []).filter((app) => {
                const history = (app.statusHistory || []).slice().sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                const offeredEntry = history.find((h) => String(h.status || '').toLowerCase() === 'offered');
                if (!offeredEntry)
                    return false;
                const offeredIndex = history.indexOf(offeredEntry);
                const hasHiredAfter = history.slice(offeredIndex + 1).some((h) => String(h.status || '').toLowerCase() === 'hired');
                return !hasHiredAfter;
            });
            return offeredButDeclined.map((app) => {
                const history = (app.statusHistory || []).slice().sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                const first = history[0] || {};
                const last = history[history.length - 1] || {};
                const appliedDate = (history.find((h) => h.status?.toLowerCase() === 'applied') || first).date;
                const offeredEntry = history.find((h) => String(h.status || '').toLowerCase() === 'offered');
                const declinedCategory = offeredEntry?.declinedCategory || offeredEntry?.declineReason || '';
                const suggestionsRaw = offeredEntry?.declinedReason || offeredEntry?.declineReasonSuggestions || null;
                let declinedReason = '';
                if (Array.isArray(suggestionsRaw)) {
                    declinedReason = suggestionsRaw.join('; ');
                }
                else if (suggestionsRaw && typeof suggestionsRaw === 'object') {
                    declinedReason = Object.entries(suggestionsRaw).map(([cat, arr]) => `${cat}: ${Array.isArray(arr) ? arr.join(', ') : String(arr)}`).join(' | ');
                }
                else if (typeof suggestionsRaw === 'string') {
                    declinedReason = suggestionsRaw;
                }
                return {
                    applicationId: app.applicationId || app.applicationId || app.id || '',
                    candidateName: app.candidateName || app.name || '',
                    position: app.position || app.positionTitle || '',
                    department: app.department || 'Unknown',
                    source: app.source || 'Unknown',
                    currentStatus: last.status || '',
                    appliedDate: appliedDate || first.date || '',
                    lastUpdate: last.date || '',
                    declinedCategory,
                    declinedReason
                };
            });
        }, [filteredApplications]);
        function toolbarClick(args) {
            switch (args.item.id) {
                case 'recruitment-grid_pdfexport':
                    recruitmentGridRef.current?.pdfExport();
                    break;
                case 'recruitment-grid_excelexport':
                    recruitmentGridRef.current?.excelExport();
                    break;
            }
        }
        const toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                <GridComponent id="recruitment-grid" ref={recruitmentGridRef} dataSource={recruitmentGridData} allowPaging={false} showColumnChooser={true} enableVirtualization={true} rowHeight={56} allowTextWrap={true} allowResizing={true} allowSorting={true} allowMultiSorting={true} allowPdfExport={true} allowExcelExport={true} width={'100%'} height={'100%'} toolbar={toolBarOptions} toolbarClick={toolbarClick}>
                    <GridInject services={[VirtualScroll, Sort, Filter, ExcelExport, PdfExport, GridToolbar, Page, Sort, ColumnChooser]}/>
                    <ColumnsDirective>
                        <ColumnDirective field='applicationId' headerText='Application ID' headerTemplate={headerWithTooltip("Application ID")} width='120' clipMode='EllipsisWithTooltip' textAlign='Left'/>
                        <ColumnDirective field='position' headerText='Position' headerTemplate={headerWithTooltip("Position")} width='180' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='department' headerText='Department' headerTemplate={headerWithTooltip("Department")} width='160' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='source' headerText='Source' headerTemplate={headerWithTooltip("Source")} width='140' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='declinedCategory' headerText='Declined Category' headerTemplate={headerWithTooltip("Declined Category")} width='220' clipMode='EllipsisWithTooltip'/>
                        <ColumnDirective field='declinedReason' headerText='Declined Reason' headerTemplate={headerWithTooltip("Declined Reason")} width='320' clipMode='EllipsisWithTooltip'/>
                    </ColumnsDirective>
                </GridComponent>
            </div>);
    };
    const yearOptions = uniqueYears.map(y => ({ text: String(y), value: y }));
    const monthOptions = uniqueMonths.map(m => ({ text: m, value: m }));
    const Candidateskpi = () => (<div className="hr-kpi-card">
            <div className="hr-kpi-label">Total Applicants</div>
            <div className="hr-kpi-value">{totalApplicants}</div>
        </div>);
    const TimeToHirekpi = () => (<div className="hr-kpi-card">
            <div className="hr-kpi-label">Time to Hire</div>
            <div className="hr-kpi-value">{avgTimeToHire} days</div>
        </div>);
    const OfferAcceptanceRatekpi = () => (<div className="hr-kpi-card">
            <div className="hr-kpi-label">Offer Acceptance Rate</div>
            <div className="hr-kpi-value">{offerAcceptanceRate}%</div>
        </div>);
    const HireConversionRate = () => (<div className="hr-kpi-card">
            <div className="hr-kpi-label">Hire Conversion Rate</div>
            <div className="hr-kpi-value">{hireConversionRate}%</div>
        </div>);
    // Hiring Funnel Chart - Horizontal Bars with drill-to-department
    const HiringFunnelChart = () => {
        const [drillStage, setDrillStage] = React.useState(null);
        const deptDataForStage = React.useMemo(() => {
            if (!drillStage)
                return [];
            const map = {};
            (filteredApplications || []).forEach((app) => {
                const hasStage = Array.isArray(app.statusHistory) && app.statusHistory.some((h) => String(h.status || '').toLowerCase() === String(drillStage).toLowerCase());
                if (hasStage) {
                    const dept = app.department || 'Unknown';
                    map[dept] = (map[dept] || 0) + 1;
                }
            });
            return Object.entries(map).map(([x, y]) => ({ x, y })).sort((a, b) => b.y - a.y || String(a.x).localeCompare(String(b.x)));
        }, [drillStage, filteredApplications]);
        if (drillStage) {
            return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                    <div className='drillcontent' style={{ marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' }}>
                        <button onClick={() => setDrillStage(null)} style={{ marginLeft: 10, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 }}>
                            Back
                        </button>
                    </div>
                    <ChartComponent key={`hiring-funnel-drill-${drillStage}`} ref={hiringFunnelDrillRef} id={`hiring-funnel-drill-${drillStage}`} height={'100%'} width={'100%'} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }} primaryYAxis={{ majorGridLines: { width: 0 }, lineStyle: { width: 0 } }} legendSettings={{ visible: false }} tooltip={{ enable: true, shared: true }} chartArea={{ border: { width: 0 } }} load={onChartLoad}>
                        <ChartInject services={[ColumnSeries, Category, Legend, Tooltip]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective type='Column' dataSource={deptDataForStage} xName='x' yName='y' name='Candidates' fill='#87805E' cornerRadius={{ topLeft: 4, topRight: 4 }} animation={{ enable: false }}/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>);
        }
        const handleFunnelClick = (args) => {
            const rawX = args?.point?.x ?? args?.point?.category ?? args?.point?.xValue ?? args?.pointX;
            const xValue = rawX != null ? String(rawX).trim() : null;
            if (!xValue)
                return;
            // Hide tooltip if present to avoid tooltip appending to an unmounted DOM
            try {
                const chartInst = hiringFunnelMainRef.current;
                if (chartInst) {
                    // preferred API
                    if (chartInst.tooltipModule && typeof chartInst.tooltipModule.hide === 'function')
                        chartInst.tooltipModule.hide();
                    // fallback
                    if (typeof chartInst.hideTooltip === 'function')
                        chartInst.hideTooltip();
                }
            }
            catch (e) { /* ignore */ }
            // Small delay to ensure tooltip DOM is removed before unmounting the chart
            setTimeout(() => setDrillStage(xValue), 80);
        };
        const onHiringFunnelYAxisClick = (args) => {
            // Normalize axis-label clicks to behave like pointClick (y-axis labels only elsewhere handled by geometry)
            const targetId = String(args?.target ?? args?.event?.target?.id ?? '');
            let labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    const el = document.getElementById(targetId);
                    labelText = (el?.textContent || '').toString().trim();
                }
                else {
                    const el = typeof args?.target === 'string' ? document.getElementById(args.target) : args?.target;
                    labelText = (el?.textContent || el?.innerText || '')?.toString().trim();
                }
            }
            catch (e) { /* ignore */ }
            if (!labelText)
                return;
            const ds = hiringFunnelData || [];
            const row = ds.find(r => String(r.x) === labelText) || null;
            if (!row)
                return;
            try {
                hiringFunnelMainRef.current?.tooltipModule?.hide?.();
            }
            catch (e) { }
            setTimeout(() => setDrillStage(String(row.x)), 60);
        };
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
                <ChartComponent load={onChartLoad} ref={hiringFunnelMainRef} id="hiring-funnel" primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ lineStyle: { width: 0 }, edgeLabelPlacement: 'Shift' }} tooltip={{ enable: true, format: '${point.x}: ${point.y}' }} legendSettings={{ visible: false }} chartArea={{ border: { width: 0 } }} height={'100%'} pointRender={(args) => { args.point.style = 'cursor: pointer;'; }} pointClick={handleFunnelClick} chartMouseClick={onHiringFunnelYAxisClick}>
                    <ChartInject services={[BarSeries, Category, Legend, Tooltip, DataLabel]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={hiringFunnelData} xName="x" yName="y" name="Candidates" type="Bar" fill="#AA8B56" cornerRadius={{ topRight: 6, bottomRight: 6 }} marker={{ dataLabel: { visible: true, position: 'Outer' } }} animation={{ enable: false }}/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    };
    const applicantBySourceDataColored = React.useMemo(() => {
        const palette = ['#736C4D', '#E5B299', '#7D5A50', '#B4846C', '#285430'];
        return (applicantBySourceData || []).map((d, i) => ({ ...d, color: palette[i % palette.length] }));
    }, [applicantBySourceData]);
    const ApplicantBySourceChart = () => {
        // Guard: if no data, show placeholder
        if (!(applicantBySourceDataColored && applicantBySourceDataColored.length)) {
            return <div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>No applicant source data for selected filters</div>;
        }
        return (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
                <AccumulationChartComponent ref={applicantSourceRef} id="pie-applicant-source" tooltip={{ enable: true, format: '${point.x}: ${point.y}' }} legendSettings={{ visible: true, position: 'Bottom' }} height={'100%'} load={onAccumulationLoad}>
                    <ChartInject services={[AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]}/>
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective dataSource={applicantBySourceDataColored} xName="x" yName="y" name="Applicants" type="Pie" borderRadius={3} border={{ width: 2, color: '#ffffff' }} pointColorMapping="color" dataLabel={{ visible: true, position: 'Outside', name: 'y' }} animation={{ enable: false }}/>
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>);
    };
    // Application Count by Department - Opening vs Filled
    const ApplicationByDeptChart = () => (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
            <ChartComponent load={onChartLoad} ref={applicationByDeptRef} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }} primaryYAxis={{ lineStyle: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ visible: true }} chartArea={{ border: { width: 0 } }} height={'100%'}>
                <ChartInject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={applicationByDeptData} xName="x" yName="opening" name="Opening" type="Column" fill="#7D8F69" cornerRadius={{ topLeft: 4, topRight: 4 }} marker={{ dataLabel: { visible: true, position: 'Top' } }} animation={{ enable: false }}/>
                    <SeriesDirective dataSource={applicationByDeptData} xName="x" yName="filled" name="Filled" type="Column" fill="#9FC088" cornerRadius={{ topLeft: 4, topRight: 4 }} marker={{ dataLabel: { visible: true, position: 'Top' } }} animation={{ enable: false }}/>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>);
    // Offer Declined Reason Chart
    const offerDeclinedReasonData = React.useMemo(() => {
        const declinedReasons = {};
        filteredApplications.forEach((app) => {
            // Check if application has "offered" status
            const offeredStatus = app.statusHistory?.find((h) => h.status?.toLowerCase() === 'offered');
            if (offeredStatus) {
                // Check if there's a "hired" status after "offered"
                const offeredIndex = app.statusHistory?.indexOf(offeredStatus);
                const hasHired = app.statusHistory?.slice(offeredIndex + 1).some((h) => h.status?.toLowerCase() === 'hired');
                if (!hasHired) {
                    const reason = offeredStatus.declinedCategory || offeredStatus.declineReason || offeredStatus.declinedReason || '';
                    if (reason) {
                        declinedReasons[reason] = (declinedReasons[reason] || 0) + 1;
                    }
                }
            }
        });
        return Object.entries(declinedReasons).map(([reason, count]) => ({ x: reason, y: count }));
    }, [filteredApplications]);
    const OfferDeclinedReasonChart = () => (<div style={{ width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' }}>
            {(() => {
            const palette = ['#285430', '#AA8B56', '#87805E', '#B4846C'];
            const pieDataColored = (offerDeclinedReasonData || []).map((d, i) => ({ ...d, color: palette[i % palette.length] }));
            // Guard: don't render when empty
            if (!pieDataColored || pieDataColored.length === 0) {
                return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>No declined-offer reasons for selected filters</div>;
            }
            return (<AccumulationChartComponent ref={offerDeclinedRef} id="donut-offer-declined" tooltip={{ enable: true, format: '${point.x}: ${point.y}' }} legendSettings={{ visible: true, position: 'Bottom' }} height={'100%'} load={onAccumulationLoad}>
                        <ChartInject services={[AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]}/>
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective dataSource={pieDataColored} pointColorMapping="color" xName="x" yName="y" name="Declined" type="Pie" radius="100%" innerRadius="60%" explode={true} explodeOffset="10%" dataLabel={{ visible: true, position: 'Outside', connectorStyle: { length: '10px' }, name: 'y' }} animation={{ enable: false }} borderRadius={10} border={{ width: 4, color: '#ffffff' }}/>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>);
        })()}
        </div>);
    const create = () => {
        setTimeout(() => {
            recruitmentDashboardRef.current?.refresh();
        }, 500);
    };
    return (<div id='container'>
            <div className="e-card cs-toolbar">
                <div className="cs-toolbar-left">
                    <h4 className="cs-title">Recruitment</h4>
                </div>
                <div className="cs-toolbar-right">
                    <MultiSelectComponent id="Month-multiselect" dataSource={monthOptions} fields={{ text: 'text', value: 'value' }} placeholder="All" mode="CheckBox" showSelectAll={true} selectAllText="All" unSelectAllText="Clear All" showDropDownIcon={true} enableSelectionOrder={true} value={selectedMonths || []} change={(e) => setSelectedMonths(e.value || [])} width={180}>
                        <Inject services={[CheckBoxSelection]}/>
                    </MultiSelectComponent>
                    <DropDownListComponent id="Year-dropdown" dataSource={yearOptions} fields={{ text: 'text', value: 'value' }} value={selectedYear} change={(e) => setSelectedYear(e.value)} width={180}/>

                </div>
            </div>
            <DashboardLayoutComponent ref={recruitmentDashboardRef} created={create} showGridLines={false} cellAspectRatio={100 / 85} cellSpacing={cellSpacing} columns={8} allowDragging={false} mediaQuery="(max-width:950px)">
                <PanelsDirective>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={Candidateskpi}/>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={TimeToHirekpi}/>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={OfferAcceptanceRatekpi}/>
                    <PanelDirective sizeX={2} sizeY={1} row={0} col={6} content={HireConversionRate}/>
                    <PanelDirective sizeX={4} sizeY={3} row={1} col={0} header={'<div>Recruitment Funnel</div>'} content={HiringFunnelChart}/>
                    <PanelDirective sizeX={4} sizeY={3} row={1} col={4} header={'<div>Applicant Count by Source</div>'} content={ApplicantBySourceChart}/>
                    <PanelDirective sizeX={3} sizeY={3} row={4} col={0} header={'<div>Offer Declined Reason</div>'} content={OfferDeclinedReasonChart}/>
                    <PanelDirective sizeX={5} sizeY={3} row={4} col={4} header={'<div>Opening Vs Filling of Position </div>'} content={ApplicationByDeptChart}/>
                    <PanelDirective sizeX={8} sizeY={4} row={8} col={0} header={'<div>Offer Declined Applications Details</div>'} content={RecruitmentDetailsGrid}/>
                </PanelsDirective>
            </DashboardLayoutComponent>
        </div>);
};
const TABS = {
    OVERVIEW: 'Overview',
    FINANCE: 'Finance & Payroll',
    RECRUITMENT: 'Recruitment'
};
const notifyResize = () => window.dispatchEvent(new Event('sidebar-toggled'));
const onSidebarOpen = () => {
    setTimeout(notifyResize, 400);
    setTimeout(() => {
        const el = document.getElementById('analytic_dashboard');
        el?.ej2_instances?.[0]?.refresh?.(); // calls Syncfusion component refresh if present
    }, 500);
};
const onSidebarClose = () => {
    setTimeout(notifyResize, 400);
    setTimeout(() => {
        const el = document.getElementById('analytic_dashboard');
        el?.ej2_instances?.[0]?.refresh?.(); // calls Syncfusion component refresh if present
    }, 500);
};
const folderEle = '<div class= "e-folder"><div class="e-Menu">HR Management Dashboard </div></div>';
export class HRManagementDashboard extends SampleBase {
    dashboardObj = null;
    sidebarobj = null;
    toolbarCliked = (args) => {
        if (args.item.tooltipText == "Menu") {
            this.sidebarobj?.toggle();
        }
    };
    onSidebarCreated = () => {
        if (this.sidebarobj) {
            this.sidebarobj?.hide();
        }
    };
    constructor(props) {
        super(props);
        this.state = { activeTab: TABS.OVERVIEW, selectedYear: 2025, selectedMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], isDocked: true };
    }
    onYearChange = (y) => this.setState({ selectedYear: y });
    onMonthChange = (months) => this.setState({ selectedMonths: months });
    renderDashboard = () => {
        const { selectedYear, selectedMonths, activeTab } = this.state;
        const commonProps = {
            selectedYear,
            selectedMonths,
            onYearChange: this.onYearChange,
            onMonthChange: this.onMonthChange
        };
        switch (activeTab) {
            case TABS.OVERVIEW:
                return <Overview />;
            case TABS.FINANCE:
                return <Finance {...commonProps}/>;
            case TABS.RECRUITMENT:
                return <Recruitment {...commonProps}/>;
            default:
                return <Overview />;
        }
    };
    withTooltip(title, node) {
        return (<TooltipComponent content={title} position={'RightCenter'} openDelay={250} closeDelay={0} showTipPointer={true}>
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
        const { activeTab } = this.state;
        return (<div>
                <div className="control-section">
                    <div className="overall_hr_management">
                        <div>
                            <ToolbarComponent cssClass="toolbar" id="dockToolbar" clicked={this.toolbarCliked} height="50px">
                                <ItemsDirective>
                                    <ItemDirective prefixIcon="e-menu" tooltipText="Menu"></ItemDirective>
                                    <ItemDirective template={folderEle}></ItemDirective>
                                </ItemsDirective>
                            </ToolbarComponent>
                        </div>
                        <div id="main-content" className="dockmaincontent">
                            <div>
                                <div className="app-hr-management-page" style={{ padding: '16px', background: '#ffffff' }}>
                                    {this.renderDashboard()}
                                </div>
                            </div>
                        </div>
                        <SidebarComponent id="hr-sidebar" ref={(element) => (this.sidebarobj = element)} className="dockSidebar" width="240px" dockSize="60px" target=".dockmaincontent" enableDock={true} type="Push" open={onSidebarOpen} close={onSidebarClose} created={this.onSidebarCreated}>
                            {this.withTooltip('Overview', <div className={`nav-item ${activeTab === TABS.OVERVIEW ? 'active' : ''}`} onClick={() => this.setState({ activeTab: TABS.OVERVIEW })}>
                                    <span className="e-icons e-home" aria-hidden="true"></span>
                                    <span className="nav-text">Overview</span>
                                </div>)}
                            {this.withTooltip('Finance & Payroll', <div className={`nav-item ${activeTab === TABS.FINANCE ? 'active' : ''}`} onClick={() => this.setState({ activeTab: TABS.FINANCE })}>
                                    <span className={this.icon('payroll')} aria-hidden="true"></span>
                                    <span className="nav-text">Finance & Payroll</span>
                                </div>)}
                            {this.withTooltip('Recruitment', <div className={`nav-item ${activeTab === TABS.RECRUITMENT ? 'active' : ''}`} onClick={() => this.setState({ activeTab: TABS.RECRUITMENT })}>
                                    <span className={this.icon('requirement')} aria-hidden="true"></span>
                                    <span className="nav-text">Recruitment</span>
                                </div>)}
                        </SidebarComponent>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        The HR Management Dashboard provides a comprehensive view of workforce analytics, payroll insights, and recruitment pipeline performance. It delivers real-time intelligence across employee demographics, compensation trends, departmental productivity, and hiring metrics. With interactive filters and dynamic visualizations, HR teams can monitor KPIs, analyze new joiners, track hiring progress, and optimize payroll accuracy. The dashboard seamlessly integrates employee lifecycle data, financial payroll metrics, and recruitment funnel analytics into one unified platform.
                    </p>
                </div>
            </div>);
    }
}
