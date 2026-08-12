"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HRManagementDashboard = void 0;
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var rawData = require("./hr-management-dashboard.json");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
require("./hr-management-dashboard.css");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
require("./dashboard-bold-icon.css");
require("./dashboard-light-icon.css");
var data = rawData;
// Ensure data has required structure with defaults
var safeData = {
    employees: (data === null || data === void 0 ? void 0 : data.employees) || [],
    // expose employeeDetails (some datasets use this key)
    employeeDetails: ((_a = data) === null || _a === void 0 ? void 0 : _a.employeeDetails) || [],
    finance: (data === null || data === void 0 ? void 0 : data.finance) || [],
    recruitment: (data === null || data === void 0 ? void 0 : data.recruitment) || []
};
var onChartLoad = function (args) {
    var _a, _b;
    var selectedTheme = location.hash.split('/')[1] || 'Material';
    // Build the chart theme once
    var themeForChart = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/contrast/i, 'Contrast')
        .replace(/-dark/i, 'Dark');
    args.chart.theme = themeForChart;
    // Apply high-contrast data label fill safely
    if (selectedTheme.toLowerCase() === 'highcontrast') {
        var series = args.chart.series;
        if (Array.isArray(series) && series.length) {
            var s0 = series[0];
            var s1 = series[1];
            if ((_a = s0 === null || s0 === void 0 ? void 0 : s0.marker) === null || _a === void 0 ? void 0 : _a.dataLabel)
                s0.marker.dataLabel.fill = '#000000';
            if ((_b = s1 === null || s1 === void 0 ? void 0 : s1.marker) === null || _b === void 0 ? void 0 : _b.dataLabel)
                s1.marker.dataLabel.fill = '#000000';
        }
    }
};
var onAccumulationLoad = function (args) {
    var _a;
    var themeKey = location.hash.split('/')[1] || 'Material';
    var selectedTheme = (themeKey.charAt(0).toUpperCase() + themeKey.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
        .replace(/-highContrast/i, 'HighContrast');
    args.accumulation.theme = selectedTheme;
    var isDark = /dark/i.test(themeKey)
        || /dark/i.test(String(selectedTheme))
        || /high-?contrast/i.test(themeKey)
        || /high-?contrast/i.test(String(selectedTheme));
    if (isDark && Array.isArray((_a = args.accumulation) === null || _a === void 0 ? void 0 : _a.series)) {
        args.accumulation.series.forEach(function (s) {
            var _a, _b;
            var width = (_b = (_a = s === null || s === void 0 ? void 0 : s.border) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 1;
            s.border = { color: '#000000', width: width };
        });
    }
};
// Helper: extract numeric experience from "X years Y months" format
function getNumericExperience(expStr) {
    if (typeof expStr === 'number')
        return expStr;
    if (typeof expStr === 'string') {
        var match = expStr.match(/(\d+)\s+years?/);
        return match ? parseInt(match[1], 10) : 0;
    }
    return 0;
}
function experienceBucket(yrs) {
    return yrs < 1 ? '0 - 1 Years' : yrs < 3 ? '1 - 3 Years' : yrs < 5 ? '3 - 5 Years' : yrs < 7 ? '5 - 7 Years' : '7+ Years';
}
var headerWithTooltip = function (label) {
    return function () { return (React.createElement("div", { title: label, style: { display: 'inline-block', cursor: 'default' } }, label)); };
};
var Overview = function () {
    var uniqueEmployees = React.useMemo(function () {
        var seen = new Set();
        var unique = [];
        (safeData.employees || []).forEach(function (e) {
            if (!seen.has(e.employeeId)) {
                seen.add(e.employeeId);
                unique.push(e);
            }
        });
        return unique;
    }, []);
    var allDepartments = React.useMemo(function () {
        var set = new Set();
        uniqueEmployees.forEach(function (e) { return set.add(e.department); });
        return Array.from(set).sort();
    }, [uniqueEmployees]);
    var _a = React.useState(allDepartments), departments = _a[0], setDepartments = _a[1];
    var effectiveDepartments = departments.length ? departments : allDepartments;
    var OverviewRef = (0, react_1.useRef)(null);
    var gridRef = React.useRef(null);
    var workFormatChartRef = React.useRef(null);
    var tenureChartRef = React.useRef(null);
    var genderExperienceMainRef = React.useRef(null);
    var genderExperienceDrillRef = React.useRef(null);
    var designationChartRef = React.useRef(null);
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_a = OverviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = workFormatChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = tenureChartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = genderExperienceDrillRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = genderExperienceMainRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = designationChartRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = designationChartRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
                (_h = gridRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return function () {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    var cellSpacing = [10, 10];
    // Active employees as of today (used across Overview)
    var today = React.useMemo(function () { return new Date(); }, []);
    var activeEmployeesToday = React.useMemo(function () {
        // Build a set of employeeIds that have any relieveDate across all records
        var relieved = new Set();
        (safeData.employees || []).forEach(function (e) { if (e && e.relieveDate && e.employeeId)
            relieved.add(e.employeeId); });
        // Iterate deduplicated uniqueEmployees (smaller) and include those active as of today
        var seen = new Set();
        var list = [];
        uniqueEmployees.forEach(function (e) {
            if (!e || !e.employeeId)
                return;
            if (!effectiveDepartments.includes(e.department))
                return;
            if (relieved.has(e.employeeId))
                return;
            var join = e.joiningDate ? new Date(e.joiningDate) : null;
            if (join && join <= today && !seen.has(e.employeeId)) {
                seen.add(e.employeeId);
                list.push(e);
            }
        });
        return { count: seen.size, list: list };
    }, [uniqueEmployees, effectiveDepartments, today]);
    var filteredEmployees = React.useMemo(function () { return activeEmployeesToday.list; }, [activeEmployeesToday]);
    var workFormatData = React.useMemo(function () {
        var map = {};
        filteredEmployees.forEach(function (e) {
            var _a;
            if (!map[e.department])
                map[e.department] = { x: e.department, 'In Office': 0, 'Work From Home': 0 };
            var format = ((_a = e.workFormat) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
            if (format === 'in office' || format === 'office') {
                map[e.department]['In Office'] += 1;
            }
            else if (format === 'work from home' || format === 'wfh' || format === 'remote') {
                map[e.department]['Work From Home'] += 1;
            }
        });
        return Object.values(map);
    }, [filteredEmployees]);
    var experienceData = React.useMemo(function () {
        var map = {};
        filteredEmployees.forEach(function (e) {
            var numericExp = getNumericExperience(e.experienceYears);
            var bucket = experienceBucket(numericExp);
            if (!map[bucket])
                map[bucket] = { x: bucket, female: 0, male: 0 };
            if (e.gender === 'Female')
                map[bucket].female += 1;
            else
                map[bucket].male += 1;
        });
        // keep fixed bucket order
        var order = ['0 - 1 Years', '1 - 3 Years', '3 - 5 Years', '5 - 7 Years', '7+ Years'];
        return order.map(function (k) { return map[k] || { x: k, female: 0, male: 0 }; });
    }, [filteredEmployees]);
    var employeeData = React.useMemo(function () {
        return filteredEmployees
            .sort(function (a, b) { return a.employeeId.localeCompare(b.employeeId); })
            .map(function (e, i) { return ({
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
        }); });
    }, [filteredEmployees]);
    // kpi counts (Overview uses only active employees today)
    var totalEmployees = activeEmployeesToday.count;
    var maleCount = React.useMemo(function () { return filteredEmployees.filter(function (e) { return e.gender === 'Male'; }).length; }, [filteredEmployees]);
    var femaleCount = React.useMemo(function () { return filteredEmployees.filter(function (e) { return e.gender === 'Female'; }).length; }, [filteredEmployees]);
    var confirmedCount = React.useMemo(function () { return filteredEmployees.filter(function (e) { return e.employmentType === 'Confirmed'; }).length; }, [filteredEmployees]);
    var unconfirmedCount = totalEmployees - confirmedCount;
    // Count ALL relieved employees (across all years) - for reference
    var allRelievedEmployees = React.useMemo(function () {
        var seen = new Set();
        var relievedMap = new Map();
        // First pass: find all employees with relieveDate
        (safeData.employees || []).forEach(function (e) {
            if (e.relieveDate && !relievedMap.has(e.employeeId)) {
                relievedMap.set(e.employeeId, { relieveDate: e.relieveDate, department: e.department });
            }
        });
        // Count only those in selected departments
        relievedMap.forEach(function (info, empId) {
            if (effectiveDepartments.includes(info.department)) {
                seen.add(empId);
            }
        });
        return seen.size;
    }, [effectiveDepartments]);
    var separationsLast12 = React.useMemo(function () {
        var count = 0;
        var seen = new Set();
        var startOf2025 = new Date('2025-01-01');
        var endOf2025 = new Date('2025-12-31T23:59:59');
        // Build a map of employees with relieveDate and their info
        var relievedMap = new Map();
        (safeData.employees || []).forEach(function (e) {
            if (e.relieveDate && !relievedMap.has(e.employeeId)) {
                relievedMap.set(e.employeeId, { relieveDate: e.relieveDate, department: e.department });
            }
        });
        // Count only those relieved in 2025 AND in selected departments
        relievedMap.forEach(function (info, empId) {
            if (seen.has(empId))
                return;
            if (!effectiveDepartments.includes(info.department))
                return;
            seen.add(empId);
            var rel = new Date(info.relieveDate);
            if (rel >= startOf2025 && rel <= endOf2025)
                count += 1;
        });
        return count;
    }, [effectiveDepartments]);
    // Count unique hires in 2025 (de-duplicated by employeeId)
    var hiresIn2025 = React.useMemo(function () {
        var seen = new Set();
        (safeData.employees || []).forEach(function (e) {
            if (!effectiveDepartments.includes(e.department))
                return;
            var j = e.joiningDate ? new Date(e.joiningDate) : null;
            if (j && j.getFullYear() === 2025 && e.employeeId)
                seen.add(e.employeeId);
        });
        return seen.size;
    }, [effectiveDepartments]);
    var netHeadcountYTD = React.useMemo(function () { return hiresIn2025 - separationsLast12; }, [hiresIn2025, separationsLast12]);
    // Employees active at the beginning of 2025 (used for attrition rate calculation)
    // Filtered by selected departments
    var employeesActiveAt2025Start = React.useMemo(function () {
        var asOf = new Date('2025-01-01');
        var count = 0;
        (safeData.employees || []).forEach(function (e) {
            if (!effectiveDepartments.includes(e.department))
                return;
            var join = e.joiningDate ? new Date(e.joiningDate) : null;
            var rel = e.relieveDate ? new Date(e.relieveDate) : null;
            if (join && join > asOf)
                return; // joined after start
            if (rel && rel < asOf)
                return; // relieved before start
            count += 1;
        });
        return count;
    }, [effectiveDepartments]);
    // Filtered by selected departments
    var employeesActiveAt2025End = React.useMemo(function () {
        var asOf = new Date('2025-12-31T23:59:59');
        var count = 0;
        (safeData.employees || []).forEach(function (e) {
            if (!effectiveDepartments.includes(e.department))
                return;
            var join = e.joiningDate ? new Date(e.joiningDate) : null;
            var rel = e.relieveDate ? new Date(e.relieveDate) : null;
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
    var averageHeadcount = React.useMemo(function () {
        return Math.round((employeesActiveAt2025Start + employeesActiveAt2025End) / 2);
    }, [employeesActiveAt2025Start, employeesActiveAt2025End]);
    // Count employees who were present at any point during 2025 (include those relieved during 2025)
    var employeesPresentIn2025 = React.useMemo(function () {
        var start = new Date('2025-01-01');
        var end = new Date('2025-12-31T23:59:59');
        var seen = new Set();
        (safeData.employees || []).forEach(function (e) {
            if (!effectiveDepartments.includes(e.department))
                return;
            var join = e.joiningDate ? new Date(e.joiningDate) : null;
            var rel = e.relieveDate ? new Date(e.relieveDate) : null;
            if (join && join > end)
                return; // joined after 2025
            if (rel && rel < start)
                return; // relieved before 2025
            seen.add(e.employeeId);
        });
        return seen.size;
    }, [effectiveDepartments]);
    var totalEmployeesDisplay = React.useMemo(function () { return employeesPresentIn2025; }, [employeesPresentIn2025]);
    var DepartmentItems = React.useMemo(function () { return allDepartments.map(function (d) { return ({ text: d, value: d }); }); }, [allDepartments]);
    var TotalEmployeeCard = function () {
        return (React.createElement("div", { className: "hr-kpi-card" },
            React.createElement("div", { className: "hr-kpi-label" }, "Total Employee"),
            React.createElement("div", { className: "hr-kpi-value" }, totalEmployeesDisplay)));
    };
    var NetHeadcountPanel = function () {
        var net = netHeadcountYTD || 0;
        var hires = hiresIn2025 || 0;
        var exits = separationsLast12 || 0;
        var prevYear = (safeData.employees || []).filter(function (e) {
            var j = e.joiningDate ? new Date(e.joiningDate) : null;
            return j && j.getFullYear() === 2024 && effectiveDepartments.includes(e.department);
        }).length;
        var headcountGrowth = React.useMemo(function () {
            // compare hires this year vs previous year (simple proxy for growth badge)
            var diff = hires - prevYear;
            var pct = prevYear ? (diff / prevYear) * 100 : (hires ? 100 : 0);
            return { pct: Number.isFinite(pct) ? pct : 0, positive: diff >= 0, prevYear: prevYear };
        }, [hires, safeData.employees, effectiveDepartments]);
        return (React.createElement("div", { className: 'e-card hr-kpi-card netcount hr-kpi-netcount' },
            React.createElement("div", { className: 'e-card-content hr-kpi-card-content hr-kpi-netcount__content' },
                React.createElement("div", null,
                    React.createElement("div", { className: 'hr-kpi-label hr-kpi-netcount__title' }, " Net Head Count Change"),
                    React.createElement("div", { className: 'hr-kpi-netcount__row' }, " "),
                    React.createElement("div", { className: 'hr-kpi-value hr-kpi-netcount__value' }, " ")),
                React.createElement("div", { className: 'hr-kpi-netcount__bottom' },
                    React.createElement("div", { className: 'hr-kpi-netcount__grid' },
                        React.createElement("div", { className: 'hr-kpi-netcount__left' },
                            React.createElement("div", null,
                                React.createElement("div", { className: 'hr-kpi-netcount__left-row' },
                                    React.createElement("span", { className: 'hr-kpi-netcount__label' }, "New Hires"),
                                    React.createElement("span", { className: "hr-kpi-value1 hr-kpi-netcount__number" }, hires)),
                                React.createElement("div", { className: 'hr-kpi-netcount__left-row' },
                                    React.createElement("span", { className: 'hr-kpi-netcount__label' }, "Relievers"),
                                    React.createElement("span", { className: "hr-kpi-value1 hr-kpi-netcount__number" }, exits)))),
                        React.createElement("div", { className: 'hr-kpi-netcount__divider' }),
                        React.createElement("div", { className: 'hr-kpi-netcount__right' },
                            React.createElement("div", { className: 'hr-kpi-netcount__right-inner' },
                                React.createElement("div", { className: 'hr-kpi-netcount__net' }, net),
                                React.createElement("span", { className: "hr-kpi-netcount__badge ".concat(headcountGrowth.positive ? 'positive' : 'negative') },
                                    React.createElement("span", { className: 'hr-kpi-netcount__pct' },
                                        headcountGrowth.positive ? '▲' : '▼',
                                        " ",
                                        Math.abs(headcountGrowth.pct).toFixed(1),
                                        "%",
                                        React.createElement("span", null, "vs 2024"))))))))));
    };
    var GenderCard = function () {
        return (React.createElement("div", { className: "hr-kpi-card with-divider" },
            React.createElement("div", { className: "hr-kpi-block" },
                React.createElement("div", { className: "hr-kpi-label" }, "Male"),
                React.createElement("div", { className: "hr-kpi-value" }, maleCount)),
            React.createElement("div", { className: "hr-kpi-block" },
                React.createElement("div", { className: "hr-kpi-label" }, "Female"),
                React.createElement("div", { className: "hr-kpi-value" }, femaleCount))));
    };
    // Department-wise tenure distribution by ranges
    var tenureBuckets = ['1-3', '3-6', '6-9', '9-12'];
    var tenureBucketLabel = function (years) {
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
    var tenureByDeptBucketData = React.useMemo(function () {
        var map = {};
        filteredEmployees.forEach(function (e) {
            var dept = e.department;
            var join = new Date(e.joiningDate);
            var yearsExact = (today.getTime() - join.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
            var label = tenureBucketLabel(yearsExact);
            if (!label)
                return; // skip outside ranges
            if (!map[dept]) {
                map[dept] = { x: dept };
                tenureBuckets.forEach(function (b) { return map[dept][b] = 0; });
            }
            map[dept][label] += 1;
        });
        // convert counts to percentages per department so stacked 100 works logically
        Object.values(map).forEach(function (row) {
            var total = tenureBuckets.reduce(function (s, b) { return s + (row[b] || 0); }, 0);
            if (total > 0) {
                tenureBuckets.forEach(function (b) {
                    row[b] = Math.round(((row[b] || 0) / total) * 100);
                });
            }
        });
        return Object.values(map).sort(function (a, b) { return String(a.x).localeCompare(String(b.x)); });
    }, [filteredEmployees, today]);
    var created = function () {
        setTimeout(function () {
            var _a;
            // Refresh Dashboard Layout
            (_a = OverviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
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
    var EmployeeWorkFormatChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
        React.createElement(ej2_react_charts_1.ChartComponent, { ref: workFormatChartRef, id: "work-format-chart", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: { lineStyle: { width: 0 } }, legendSettings: { visible: true }, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, height: "100%", width: "100%", load: onChartLoad },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'StackingColumn', name: 'In Office', xName: 'x', yName: 'In Office', dataSource: workFormatData, fill: '#61764B', animation: { enable: false } }),
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'StackingColumn', name: 'Work From Home', xName: 'x', yName: 'Work From Home', dataSource: workFormatData, fill: '#AA8B56', cornerRadius: { topLeft: 5, topRight: 5 }, animation: { enable: false } }))))); };
    var TenureRatioDeptChart = function () {
        var tenureColors = {
            '1-3': '#E5B299',
            '3-6': "#B4846C",
            '6-9': '#9FC088',
            '9-12': '#AA8B56',
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.ChartComponent, { ref: tenureChartRef, id: "tenure-by-dept-buckets", primaryXAxis: { valueType: 'Category', labelIntersectAction: 'Wrap', majorGridLines: { width: 0 } }, primaryYAxis: { labelFormat: '{value}%', lineStyle: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true, shared: true, format: '${series.name}: ${point.y}' }, chartArea: { border: { width: 0 } }, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null, tenureBuckets.map(function (b) { return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: b, type: 'Column', name: "".concat(b, " yrs"), xName: 'x', yName: b, dataSource: tenureByDeptBucketData, marker: { dataLabel: { visible: false } }, fill: tenureColors[b], cornerRadius: { topLeft: 4, topRight: 4 }, animation: { enable: false } })); })))));
    };
    var GenderExperienceChart = function () {
        var _a, _b;
        // Local drill-down state scoped to this chart to avoid re-rendering the whole dashboard
        var _c = React.useState(null), drillDownSelection = _c[0], setDrillDownSelection = _c[1];
        // Drill-down: count employees per department for selected experience and gender (local memo)
        var drillDownDesignationData = React.useMemo(function () {
            if (!drillDownSelection)
                return [];
            var experience = drillDownSelection.experience, gender = drillDownSelection.gender;
            var targetGender = String(gender || '').toLowerCase();
            var targetExp = String(experience || '').trim().toLowerCase();
            var map = {};
            filteredEmployees.forEach(function (e) {
                var numericExp = getNumericExperience(e.experienceYears);
                var bucket = experienceBucket(numericExp);
                var eg = String(e.gender || '').toLowerCase();
                var bucketLower = String(bucket || '').trim().toLowerCase();
                if (bucketLower === targetExp && eg === targetGender) {
                    map[e.department] = (map[e.department] || 0) + 1;
                }
            });
            return Object.entries(map).map(function (_a) {
                var x = _a[0], y = _a[1];
                return ({ x: x, y: y });
            }).sort(function (a, b) { return String(a.x).localeCompare(String(b.x)); });
        }, [drillDownSelection, filteredEmployees]);
        // ensure the drill chart instance re-renders when drill data is available
        if (drillDownSelection) {
            // Drill-down view: show employee count per department for selected experience and gender
            return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' } },
                React.createElement("div", { className: 'drillcontent', style: { marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' } },
                    React.createElement("button", { onClick: function () { return setDrillDownSelection(null); }, style: { marginLeft: 10, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 } }, "Back")),
                React.createElement(ej2_react_charts_1.ChartComponent, { key: "drill-".concat((_a = drillDownSelection === null || drillDownSelection === void 0 ? void 0 : drillDownSelection.gender) !== null && _a !== void 0 ? _a : '', "-").concat((_b = drillDownSelection === null || drillDownSelection === void 0 ? void 0 : drillDownSelection.experience) !== null && _b !== void 0 ? _b : ''), ref: genderExperienceDrillRef, id: "gender-experience-drill-chart", height: "100%", width: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }, primaryYAxis: { majorGridLines: { width: 0 }, lineStyle: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true, shared: true, }, chartArea: { border: { width: 0 } }, load: onChartLoad },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Legend] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Column', name: 'Employee Count', xName: 'x', yName: 'y', dataSource: drillDownDesignationData, fill: '#87805E', cornerRadius: { topLeft: 4, topRight: 4 }, animation: { enable: false } })))));
        }
        // Main view: Gender and Experience distribution
        var handleChartClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            // Extract experience bucket and series name (gender) from click event
            var rawX = (_e = (_c = (_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : args === null || args === void 0 ? void 0 : args.pointX) !== null && _c !== void 0 ? _c : (_d = args === null || args === void 0 ? void 0 : args.point) === null || _d === void 0 ? void 0 : _d.xValue) !== null && _e !== void 0 ? _e : (_f = args === null || args === void 0 ? void 0 : args.point) === null || _f === void 0 ? void 0 : _f.category;
            var rawSeries = (_j = (_h = (_g = args === null || args === void 0 ? void 0 : args.series) === null || _g === void 0 ? void 0 : _g.name) !== null && _h !== void 0 ? _h : args === null || args === void 0 ? void 0 : args.seriesName) !== null && _j !== void 0 ? _j : (_l = (_k = args === null || args === void 0 ? void 0 : args.series) === null || _k === void 0 ? void 0 : _k.startSeries) === null || _l === void 0 ? void 0 : _l.name;
            var xValue = rawX != null ? String(rawX).trim() : null;
            var seriesName = rawSeries != null ? String(rawSeries).trim() : null;
            if (xValue && seriesName) {
                // Normalize to the format used in buckets and gender casing
                var normalizedExp = String(xValue).trim();
                var normalizedGender = String(seriesName).trim().charAt(0).toUpperCase() + String(seriesName).trim().slice(1).toLowerCase();
                setDrillDownSelection({ experience: normalizedExp, gender: normalizedGender });
            }
        };
        var onGenderExperienceAxisClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            // Normalize axis-label clicks to behave like pointClick
            var targetId = String((_d = (_a = args === null || args === void 0 ? void 0 : args.target) !== null && _a !== void 0 ? _a : (_c = (_b = args === null || args === void 0 ? void 0 : args.event) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '');
            var labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    var el = document.getElementById(targetId);
                    labelText = ((el === null || el === void 0 ? void 0 : el.textContent) || '').toString().trim();
                }
                else {
                    var el = typeof (args === null || args === void 0 ? void 0 : args.target) === 'string' ? document.getElementById(args.target) : args === null || args === void 0 ? void 0 : args.target;
                    labelText = (_e = ((el === null || el === void 0 ? void 0 : el.textContent) || (el === null || el === void 0 ? void 0 : el.innerText) || '')) === null || _e === void 0 ? void 0 : _e.toString().trim();
                }
            }
            catch (e) { /* ignore */ }
            if (!labelText)
                return;
            // Data source: experienceData is used by both series
            var ds = experienceData || [];
            var row = ds.find(function (r) { return String(r.x) === labelText; }) || null;
            if (!row)
                return;
            // choose gender based on which series has value (prefer Female)
            var chosenGender = 'Female';
            try {
                if ((Number(row.female) || 0) > 0)
                    chosenGender = 'Female';
                else if ((Number(row.male) || 0) > 0)
                    chosenGender = 'Male';
            }
            catch (e) { }
            try {
                (_h = (_g = (_f = genderExperienceMainRef.current) === null || _f === void 0 ? void 0 : _f.tooltipModule) === null || _g === void 0 ? void 0 : _g.hide) === null || _h === void 0 ? void 0 : _h.call(_g);
            }
            catch (e) { }
            setTimeout(function () { return setDrillDownSelection({ experience: String(row.x), gender: chosenGender }); }, 60);
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.ChartComponent, { ref: genderExperienceMainRef, id: "gender-experience-chart", height: "100%", width: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: { lineStyle: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true, format: '${series.name}: ${point.y}' }, chartArea: { border: { width: 0 } }, pointRender: function (args) {
                    args.point.style = 'cursor: pointer;';
                }, pointClick: handleChartClick, chartMouseClick: onGenderExperienceAxisClick, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Bar', name: 'Female', xName: 'x', yName: 'female', dataSource: experienceData, fill: '#AA8B56', cornerRadius: { topRight: 5, bottomRight: 5 }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Bar', name: 'Male', xName: 'x', yName: 'male', dataSource: experienceData, fill: '#815B5B', cornerRadius: { topRight: 5, bottomRight: 5 }, animation: { enable: false } })))));
    };
    var DesignationDetailsChart = function () {
        var _a = React.useState(null), selectedDept = _a[0], setSelectedDept = _a[1];
        var deptTotals = React.useMemo(function () {
            var map = {};
            filteredEmployees.forEach(function (e) {
                var d = e.department || 'Unknown';
                map[d] = (map[d] || 0) + 1;
            });
            return Object.entries(map).map(function (_a) {
                var x = _a[0], y = _a[1];
                return ({ x: x, y: y });
            }).sort(function (a, b) { return String(a.x).localeCompare(String(b.x)); });
        }, [filteredEmployees]);
        var designationForDept = React.useMemo(function () {
            if (!selectedDept)
                return [];
            var map = {};
            filteredEmployees.forEach(function (e) {
                var d = e.department || 'Unknown';
                if (d === selectedDept) {
                    var des = e.designation || 'Unknown';
                    map[des] = (map[des] || 0) + 1;
                }
            });
            return Object.entries(map).map(function (_a) {
                var x = _a[0], y = _a[1];
                return ({ x: x, y: y });
            }).sort(function (a, b) { return b.y - a.y || String(a.x).localeCompare(String(b.x)); });
        }, [selectedDept, filteredEmployees]);
        if (selectedDept) {
            return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' } },
                React.createElement("div", { className: 'drillcontent', style: { marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' } },
                    React.createElement("button", { onClick: function () { return setSelectedDept(null); }, style: { marginLeft: 12, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 } }, "Back")),
                React.createElement(ej2_react_charts_1.ChartComponent, { load: onChartLoad, key: "designation-drill-".concat(selectedDept), id: "designation-drill", ref: designationChartRef, height: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }, primaryYAxis: { majorGridLines: { width: 0 }, lineStyle: { width: 0 } }, legendSettings: { visible: false }, tooltip: { enable: true, format: '${point.x}: ${point.y}' }, chartArea: { border: { width: 0 } } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Legend, ej2_react_charts_1.DataLabel] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", xName: "x", yName: "y", dataSource: designationForDept, fill: '#AA8B56', columnWidth: 0.6, dataLabel: { visible: true, position: 'Top', format: '${point.y}', font: { color: '#374151', size: '11px' } }, marker: { visible: true }, animation: { enable: false } })))));
        }
        // Top-level: show one bar per department
        var handleDeptClick = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var rawX = (_f = (_d = (_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.category) !== null && _d !== void 0 ? _d : (_e = args === null || args === void 0 ? void 0 : args.point) === null || _e === void 0 ? void 0 : _e.xValue) !== null && _f !== void 0 ? _f : args === null || args === void 0 ? void 0 : args.pointX;
            var xValue = rawX != null ? String(rawX).trim() : null;
            if (xValue)
                setSelectedDept(xValue);
        };
        var onDesignationXAxisClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var targetId = String((_d = (_a = args === null || args === void 0 ? void 0 : args.target) !== null && _a !== void 0 ? _a : (_c = (_b = args === null || args === void 0 ? void 0 : args.event) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '');
            var labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    var el = document.getElementById(targetId);
                    labelText = ((el === null || el === void 0 ? void 0 : el.textContent) || '').toString().trim();
                }
                else {
                    var el = typeof (args === null || args === void 0 ? void 0 : args.target) === 'string' ? document.getElementById(args.target) : args === null || args === void 0 ? void 0 : args.target;
                    labelText = (_e = ((el === null || el === void 0 ? void 0 : el.textContent) || (el === null || el === void 0 ? void 0 : el.innerText) || '')) === null || _e === void 0 ? void 0 : _e.toString().trim();
                }
            }
            catch (e) { }
            if (!labelText)
                return;
            // data source for top-level is deptTotals
            var ds = deptTotals || [];
            var row = ds.find(function (r) { return String(r.x) === labelText; }) || null;
            if (!row)
                return;
            try {
                (_h = (_g = (_f = designationChartRef.current) === null || _f === void 0 ? void 0 : _f.tooltipModule) === null || _g === void 0 ? void 0 : _g.hide) === null || _h === void 0 ? void 0 : _h.call(_g);
            }
            catch (e) { }
            setTimeout(function () { return setSelectedDept(String(row.x)); }, 60);
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "designation-dept-overview", ref: designationChartRef, height: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }, primaryYAxis: { lineStyle: { width: 0 } }, legendSettings: { visible: false }, tooltip: { enable: true, format: '${point.x}: ${point.y}' }, chartArea: { border: { width: 0 } }, pointRender: function (args) { args.point.style = 'cursor: pointer;'; }, pointClick: handleDeptClick, chartMouseClick: onDesignationXAxisClick, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", xName: "x", yName: "y", dataSource: deptTotals, fill: '#736C4D', columnWidth: 0.6, dataLabel: { visible: true, position: 'Top', format: '${point.y}', font: { color: '#374151', size: '11px' } }, animation: { enable: false } })))));
    };
    var EmployeeDetailsGrid = function () {
        function toolbarClick(args) {
            var _a, _b;
            switch (args.item.id) {
                case 'employee-grid_pdfexport':
                    (_a = gridRef.current) === null || _a === void 0 ? void 0 : _a.pdfExport();
                    break;
                case 'employee-grid_excelexport':
                    (_b = gridRef.current) === null || _b === void 0 ? void 0 : _b.excelExport();
                    break;
            }
        }
        var toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' } },
            React.createElement(ej2_react_grids_1.GridComponent, { id: "employee-grid", ref: gridRef, dataSource: employeeData, allowPaging: false, showColumnChooser: true, enableVirtualization: true, rowHeight: 56, allowTextWrap: true, allowResizing: true, allowSorting: true, allowMultiSorting: true, allowExcelExport: true, allowPdfExport: true, width: '100%', height: '100%', toolbar: toolBarOptions, toolbarClick: toolbarClick },
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Page, ej2_react_grids_1.Sort, ej2_react_grids_1.ColumnChooser] }),
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'employeeId', headerText: 'Employee ID', headerTemplate: headerWithTooltip("Employee ID"), width: '120', clipMode: 'EllipsisWithTooltip', textAlign: 'Right' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'name', headerText: 'Employee Name', headerTemplate: headerWithTooltip("Employee Name"), width: '200', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'department', headerText: 'Department', headerTemplate: headerWithTooltip("Department"), width: '160', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'designation', headerText: 'Designation', headerTemplate: headerWithTooltip("Designation"), width: '220', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'workFormat', headerText: 'Work Type', headerTemplate: headerWithTooltip("Work Type"), width: '120', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'experience', headerText: 'Experience (Yrs)', headerTemplate: headerWithTooltip("Experience (Yrs)"), textAlign: 'Center', width: '140', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'joiningDate', headerText: 'Date of Joining', headerTemplate: headerWithTooltip("Date of Joining"), width: '140', clipMode: 'EllipsisWithTooltip', textAlign: 'Right' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'email', headerText: 'Email ID', headerTemplate: headerWithTooltip("Email ID"), width: '240', clipMode: 'EllipsisWithTooltip' })))));
    };
    return (React.createElement("div", { id: 'container' },
        React.createElement("div", { className: "e-card cs-toolbar" },
            React.createElement("div", { className: "cs-toolbar-left" },
                React.createElement("h4", { className: "cs-title" }, "Overview")),
            React.createElement("div", { className: "cs-toolbar-right" },
                React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "Department-multiselect", dataSource: DepartmentItems, fields: { text: 'text', value: 'value' }, placeholder: "All", mode: "CheckBox", showSelectAll: true, selectAllText: "All", unSelectAllText: "Clear All", showDropDownIcon: true, enableSelectionOrder: true, value: departments || [], change: function (e) { return setDepartments(e.value || []); }, width: 180 },
                    React.createElement(ej2_react_dropdowns_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] })))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: OverviewRef, id: "analytic_dashboard", showGridLines: false, cellAspectRatio: 100 / 90, cellSpacing: cellSpacing, columns: 8, created: created, allowDragging: false, mediaQuery: "(max-width:950px)" },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: TotalEmployeeCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: GenderCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 1, row: 0, col: 4, content: NetHeadcountPanel }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 3, col: 0, header: '<div> Work Mode Distribution </div>', content: EmployeeWorkFormatChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 4, row: 5, col: 0, header: 'Employee Tenure Breakdown', content: TenureRatioDeptChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 4, row: 5, col: 4, header: '<div> Gender and Experience </div>', content: GenderExperienceChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 9, col: 5, header: '<div> Designation Details </div>', content: DesignationDetailsChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 14, col: 0, header: 'Employee Details', content: EmployeeDetailsGrid })))));
};
var Finance = function (props) {
    var propSelectedMonths = props === null || props === void 0 ? void 0 : props.selectedMonths;
    var propSelectedYear = props === null || props === void 0 ? void 0 : props.selectedYear;
    var onPropMonthChange = props === null || props === void 0 ? void 0 : props.onMonthChange;
    var onPropYearChange = props === null || props === void 0 ? void 0 : props.onYearChange;
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = FinanceDashboardRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = payRollBreakref.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = payrollByTypeRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = payrollProfitRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = payrollByDeptRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = payrollYoYRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = salaryOvertimeRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return function () {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    var payRollBreakref = React.useRef(null);
    var payrollByTypeRef = React.useRef(null);
    var payrollProfitRef = React.useRef(null);
    var payrollByDeptRef = React.useRef(null);
    var payrollYoYRef = React.useRef(null);
    var salaryOvertimeRef = React.useRef(null);
    var FinanceDashboardRef = React.useRef(null);
    var cellSpacing = [10, 10];
    // Get unique employees and departments
    var uniqueEmployees = React.useMemo(function () {
        var seen = new Set();
        var unique = [];
        (safeData.employees || []).forEach(function (e) {
            if (!seen.has(e.employeeId)) {
                seen.add(e.employeeId);
                unique.push(e);
            }
        });
        return unique;
    }, []);
    var allDepartments = React.useMemo(function () {
        var set = new Set();
        uniqueEmployees.forEach(function (e) { return set.add(e.department); });
        return Array.from(set).sort();
    }, [uniqueEmployees]);
    var _a = React.useState(allDepartments), departments = _a[0], setDepartments = _a[1];
    var effectiveDepartments = departments.length ? departments : allDepartments;
    // Use employees data for payroll, finance data only for Revenue and Month/Year
    var employeeData = ((safeData === null || safeData === void 0 ? void 0 : safeData.employees) || []);
    var employeeDetails = ((safeData === null || safeData === void 0 ? void 0 : safeData.employeeDetails) || []);
    var financeRows = ((safeData === null || safeData === void 0 ? void 0 : safeData.finance) || []);
    var totalPayroll = function () {
        return (React.createElement("div", { className: "hr-kpi-card" },
            React.createElement("div", { className: "hr-kpi-label" }, "Total Payroll (Net)"),
            React.createElement("div", { className: "hr-kpi-value" }, formatCurrency(payrollCost))));
    };
    var payrollAccuracy = function () {
        return (React.createElement("div", { className: "hr-kpi-card" },
            React.createElement("div", { className: "hr-kpi-label" }, "Payroll Accuracy"),
            React.createElement("div", { className: "hr-kpi-value" }, "".concat(payrollAccuracyPct.toFixed(2), "%"))));
    };
    var taxCompliance = function () {
        return (React.createElement("div", { className: "hr-kpi-card" },
            React.createElement("div", { className: "hr-kpi-label" }, "Tax Compliance"),
            React.createElement("div", { className: "hr-kpi-value" }, taxCompliancePct == null ? '--' : "".concat(taxCompliancePct.toFixed(2), "%"))));
    };
    var totalDeduction = function () {
        return (React.createElement("div", { className: "hr-kpi-card" },
            React.createElement("div", { className: "hr-kpi-label" }, " Total Deduction"),
            React.createElement("div", { className: "hr-kpi-value" }, totalLOPCostFinance == null ? '--' : formatCurrency(Math.round(totalLOPCostFinance)))));
    };
    // Merge department/employeeId from master `employees` into `employeeDetails` rows
    // so payroll calculations use department from master and salary/leave from details.
    var mergedPayrollRows = React.useMemo(function () {
        var empMap = new Map();
        (safeData.employees || []).forEach(function (e) { if (e && e.employeeId)
            empMap.set(e.employeeId, e); });
        return (employeeDetails || []).map(function (d) {
            var emp = empMap.get(d.employeeId) || {};
            return __assign(__assign({}, d), { department: d.department || emp.department, employeeId: d.employeeId || emp.employeeId, employeeName: d.employeeName || emp.employeeName || emp.name });
        });
    }, [safeData.employees, employeeDetails]);
    var monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthNameToLower = function (monthName) { return monthName.toLowerCase().substring(0, 3); };
    // Get unique months (prefer finance data if present; otherwise derive from employee records for 2025)
    var uniqueMonths = React.useMemo(function () {
        var seen = new Set();
        var order = [];
        if (financeRows && financeRows.length) {
            financeRows.filter(function (r) { return String(r.Year || r.year) === '2025'; }).forEach(function (r) {
                var monthVal = r.Month || r.month;
                if (monthVal && !seen.has(monthVal)) {
                    seen.add(monthVal);
                    order.push(monthVal);
                }
            });
        }
        else {
            // derive from employeeDetails; employee months are lowercase 3-letter (e.g. 'jan')
            var cap_1 = function (m) { return m ? (m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()) : m; };
            employeeDetails.filter(function (e) { return String(e.year) === '2025'; }).forEach(function (e) {
                var monthName = cap_1(e.month);
                if (!seen.has(monthName)) {
                    seen.add(monthName);
                    order.push(monthName);
                }
            });
        }
        return order.sort(function (a, b) { return monthOrder.indexOf(a) - monthOrder.indexOf(b); });
    }, [financeRows, employeeDetails]);
    var _b = React.useState([]), localSelectedMonths = _b[0], setLocalSelectedMonths = _b[1];
    var _c = React.useState(propSelectedYear !== null && propSelectedYear !== void 0 ? propSelectedYear : 2025), localSelectedYear = _c[0], setLocalSelectedYear = _c[1];
    var selectedMonths = propSelectedMonths !== undefined ? propSelectedMonths : localSelectedMonths;
    var setSelectedMonths = propSelectedMonths !== undefined ? function (m) { return onPropMonthChange === null || onPropMonthChange === void 0 ? void 0 : onPropMonthChange(m); } : setLocalSelectedMonths;
    var selectedYear = propSelectedYear !== undefined ? propSelectedYear : localSelectedYear;
    var setSelectedYear = propSelectedYear !== undefined ? function (y) { return onPropYearChange === null || onPropYearChange === void 0 ? void 0 : onPropYearChange(y); } : setLocalSelectedYear;
    var activeMonths = React.useMemo(function () { return (selectedMonths && selectedMonths.length ? selectedMonths.slice().sort(function (a, b) { return monthOrder.indexOf(a) - monthOrder.indexOf(b); }) : uniqueMonths); }, [selectedMonths, uniqueMonths]);
    // Ensure the month selector initializes when uniqueMonths becomes available
    React.useEffect(function () {
        if (propSelectedMonths === undefined) {
            if ((!localSelectedMonths || localSelectedMonths.length === 0) && uniqueMonths && uniqueMonths.length) {
                setLocalSelectedMonths(uniqueMonths.slice());
            }
        }
    }, [uniqueMonths, propSelectedMonths]);
    // Filter employee payroll data by selected months/departments and year
    // Match employee month (lowercase 3-letter) with finance month
    var filteredEmployeePayroll = React.useMemo(function () {
        var monthSet = new Set(activeMonths.map(function (m) { return monthNameToLower(m); }));
        return mergedPayrollRows.filter(function (e) {
            return String(e.year) === String(selectedYear) &&
                monthSet.has(String(e.month)) &&
                effectiveDepartments.includes(e.department);
        });
    }, [mergedPayrollRows, activeMonths, effectiveDepartments, selectedYear]);
    // Shared holiday set and working-days helper to avoid repeated computation
    var holidaySetMemo = React.useMemo(function () {
        var s = new Set();
        var raw = safeData.holidays;
        if (Array.isArray(raw)) {
            raw.forEach(function (h) {
                var dt = new Date(h);
                if (!isNaN(dt.getTime()))
                    s.add(dt.toISOString().slice(0, 10));
            });
        }
        return s;
    }, [safeData]);
    var workingDaysCacheRef = React.useRef(new Map());
    var getWorkingDaysInMonth = React.useCallback(function (year, monthZeroBased) {
        var key = "".concat(year, "-").concat(monthZeroBased);
        var cache = workingDaysCacheRef.current;
        if (cache.has(key))
            return cache.get(key);
        var daysInMonth = new Date(year, monthZeroBased + 1, 0).getDate();
        var count = 0;
        for (var d = 1; d <= daysInMonth; d++) {
            var dt = new Date(year, monthZeroBased, d);
            var wk = dt.getDay();
            if (wk === 0 || wk === 6)
                continue;
            var iso = dt.toISOString().slice(0, 10);
            if (holidaySetMemo.has(iso))
                continue;
            count += 1;
        }
        var result = count || daysInMonth;
        cache.set(key, result);
        return result;
    }, [holidaySetMemo]);
    // Total LOP Cost for Finance view: sum of per-day salary for LOP days filtered by selected year/months
    var totalLOPCostFinance = React.useMemo(function () {
        var total = 0;
        if (!mergedPayrollRows || !mergedPayrollRows.length)
            return total;
        // Use shared working days helper (memoized below) to avoid recomputing holidays/days repeatedly
        var workingDaysInMonth = getWorkingDaysInMonth;
        (mergedPayrollRows || []).forEach(function (rec) {
            var salary = Number(rec.salary) || 0;
            var computed = Array.isArray(rec.computedLeaveStatus) ? rec.computedLeaveStatus : [];
            computed.forEach(function (item) {
                if (!item || !item.isLOP)
                    return;
                var d = new Date(item.date);
                if (isNaN(d.getTime()))
                    return;
                // filter by selected year if set
                if (selectedYear && Number(selectedYear) !== d.getFullYear())
                    return;
                // filter by selected months if provided (selectedMonths are capitalized like 'Jan')
                if (selectedMonths && selectedMonths.length > 0) {
                    var m = d.toLocaleString('en-US', { month: 'short' });
                    if (!selectedMonths.includes(m))
                        return;
                }
                var workDays = workingDaysInMonth(d.getFullYear(), d.getMonth());
                var perDay = workDays > 0 ? salary / workDays : 0;
                total += perDay;
            });
        });
        return total;
    }, [mergedPayrollRows, selectedYear, selectedMonths, getWorkingDaysInMonth]);
    var annualGrossByEmp = React.useMemo(function () {
        var m = new Map();
        (mergedPayrollRows || [])
            .filter(function (r) { return String(r.year) === String(selectedYear) && effectiveDepartments.includes(r.department); })
            .forEach(function (r) {
            var monthlyGross = (Number(r.salary) || 0) + (Number(r.overtimePayment) || 0) + (Number(r.allowance) || 0) + (Number(r.hike) || 0) + (Number(r.benefits) || 0);
            var id = r.employeeId || '';
            m.set(id, (m.get(id) || 0) + monthlyGross);
        });
        return m;
    }, [mergedPayrollRows, selectedYear, effectiveDepartments]);
    var annualTaxByEmp = React.useMemo(function () {
        var m = new Map();
        annualGrossByEmp.forEach(function (annualGross, empId) {
            var taxableIncome = Math.max(0, (annualGross || 0) - 50000);
            var tax = Math.round(taxableIncome * 0.1);
            m.set(empId, tax);
        });
        return m;
    }, [annualGrossByEmp]);
    // Helper: compute net components for a payroll row (salary after LOP, PF, tax; plus other pays)
    var computeNetComponents = React.useCallback(function (e) {
        var _a, _b;
        var salary = Number(e.salary) || 0;
        var overtime = Number(e.overtimePayment) || 0;
        var allowance = Number(e.allowance) || 0;
        var hike = Number(e.hike) || 0;
        var benefits = Number(e.benefits) || 0;
        var others = Number(e.others) || 0;
        // month index helper (expects e.month like 'jan')
        var monthOrderLocal = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        var rowYear = Number(e.year) || new Date().getFullYear();
        var monthStr = (e.month || '').toString().toLowerCase().slice(0, 3);
        var monthIdx = Math.max(0, monthOrderLocal.indexOf(monthStr));
        // Use shared working-days helper to avoid recomputing
        var workDays = getWorkingDaysInMonth(rowYear, monthIdx);
        // LOP deduction: sum per-day salary for LOP entries that fall in the same month/year
        var computed = Array.isArray(e.computedLeaveStatus) ? e.computedLeaveStatus : [];
        var lopDeduct = 0;
        computed.forEach(function (item) {
            if (!item || !item.isLOP)
                return;
            var d = new Date(item.date);
            if (isNaN(d.getTime()))
                return;
            if (d.getFullYear() === rowYear && d.getMonth() === monthIdx) {
                var perDay = workDays > 0 ? (salary / workDays) : 0;
                lopDeduct += perDay;
            }
        });
        // PF deduction: per-row override or default 12%
        var pfPctRaw = Number((_b = (_a = e.pfPercent) !== null && _a !== void 0 ? _a : e.pfDeductionPercent) !== null && _b !== void 0 ? _b : 12);
        var pfPct = isNaN(pfPctRaw) ? 0.12 : (pfPctRaw / 100);
        var taxableSalary = Math.max(0, salary - lopDeduct);
        var pfDeduct = Math.round(taxableSalary * pfPct);
        var netSalary = taxableSalary - pfDeduct;
        // Monthly gross for allocation
        var monthlyGross = salary + overtime + allowance + hike + benefits;
        var annualGross = annualGrossByEmp.get(e.employeeId || '') || 0;
        var annualTax = annualTaxByEmp.get(e.employeeId || '') || 0;
        var monthlyTax = annualGross > 0 ? Math.round((monthlyGross / annualGross) * annualTax) : 0;
        var netTotal = netSalary - monthlyTax + overtime + allowance + hike + benefits + others;
        return { netSalary: netSalary, overtime: overtime, allowance: allowance, hike: hike, benefits: benefits, others: others, pfDeduct: pfDeduct, lopDeduct: lopDeduct, monthlyTax: monthlyTax, annualTax: annualTax, netTotal: netTotal };
    }, [annualGrossByEmp, annualTaxByEmp, getWorkingDaysInMonth]);
    // Calculate net payroll cost (salary after LOP and PF + other pays)
    var payrollCost = React.useMemo(function () {
        return filteredEmployeePayroll.reduce(function (sum, e) {
            var comps = computeNetComponents(e);
            return sum + (comps.netTotal || 0);
        }, 0);
    }, [filteredEmployeePayroll, computeNetComponents]);
    // Tax compliance: percent of payroll rows with tax amount present (>0)
    var taxCompliancePct = React.useMemo(function () {
        var rows = filteredEmployeePayroll || [];
        if (!rows.length)
            return null;
        var withTax = 0;
        rows.forEach(function (e) {
            var reportedTax = Number(e.tax || e.taxWithheld || e.tds || e.incomeTax || e.taxDeduction || 0) || 0;
            var comps = computeNetComponents(e);
            var computedMonthlyTax = (comps === null || comps === void 0 ? void 0 : comps.monthlyTax) || 0;
            var taxAmt = reportedTax > 0 ? reportedTax : computedMonthlyTax;
            if (taxAmt > 0)
                withTax += 1;
        });
        return rows.length ? (withTax / rows.length) * 100 : null;
    }, [filteredEmployeePayroll, computeNetComponents]);
    // --- Monthly & Department LOP aggregations ---
    var _d = React.useMemo(function () {
        var monthMap = new Map();
        var deptMonthMap = {};
        var workingDaysInMonth = getWorkingDaysInMonth;
        (mergedPayrollRows || []).forEach(function (rec) {
            var salary = Number(rec.salary) || 0;
            var computed = Array.isArray(rec.computedLeaveStatus) ? rec.computedLeaveStatus : [];
            computed.forEach(function (item) {
                if (!item || !item.isLOP)
                    return;
                var d = new Date(item.date);
                if (isNaN(d.getTime()))
                    return;
                // filter by selected year/months
                if (selectedYear && Number(selectedYear) !== d.getFullYear())
                    return;
                if (selectedMonths && selectedMonths.length > 0) {
                    var m = d.toLocaleString('en-US', { month: 'short' });
                    if (!selectedMonths.includes(m))
                        return;
                }
                var key = Date.UTC(d.getFullYear(), d.getMonth(), 1);
                var workDays = workingDaysInMonth(d.getFullYear(), d.getMonth());
                var perDay = workDays > 0 ? salary / workDays : 0;
                monthMap.set(key, (monthMap.get(key) || 0) + perDay);
                if (!deptMonthMap[key])
                    deptMonthMap[key] = new Map();
                var dept = rec.department || 'Unknown';
                deptMonthMap[key].set(dept, (deptMonthMap[key].get(dept) || 0) + perDay);
            });
        });
        var monthsArr = Array.from(monthMap.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return ({ dt: k, value: v });
        });
        monthsArr.sort(function (a, b) { return a.dt - b.dt; });
        // Add MoM % change and cumulative to the series
        var cumulative = 0;
        var monthlyLOPCostSeries = monthsArr.map(function (m, idx, arr) {
            var prev = idx > 0 ? arr[idx - 1].value : null;
            var momPct = prev === null || prev === 0 ? null : ((m.value - prev) / prev) * 100;
            cumulative += m.value;
            var yRounded = Math.round(m.value);
            var momFmt = momPct === null ? '-' : "".concat(Math.round(momPct), "%");
            var cumRounded = Math.round(cumulative);
            return {
                x: new Date(m.dt).toLocaleString('en-US', { month: 'short', year: 'numeric' }),
                y: m.value,
                dt: m.dt,
                momPct: momPct,
                cumulative: cumulative,
                yFmt: formatCurrency(yRounded),
                momFmt: momFmt,
                cumFmt: formatCurrency(cumRounded)
            };
        });
        var deptLOPCostByMonth = {};
        Object.keys(deptMonthMap).forEach(function (k) {
            var keyNum = Number(k);
            var m = deptMonthMap[keyNum];
            var arr = [];
            Array.from(m.entries()).forEach(function (_a) {
                var dept = _a[0], cost = _a[1];
                return arr.push({ department: dept, cost: cost });
            });
            arr.sort(function (a, b) { return b.cost - a.cost; });
            deptLOPCostByMonth[keyNum] = arr;
        });
        return { monthlyLOPCostSeries: monthlyLOPCostSeries, deptLOPCostByMonth: deptLOPCostByMonth };
    }, [mergedPayrollRows, selectedYear, selectedMonths, getWorkingDaysInMonth]), monthlyLOPCostSeries = _d.monthlyLOPCostSeries, deptLOPCostByMonth = _d.deptLOPCostByMonth;
    // Payroll accuracy from employees data (based on payroll error count)
    var payrollAccuracyPct = React.useMemo(function () {
        var totalEmp = filteredEmployeePayroll.length;
        var errorCount = filteredEmployeePayroll.reduce(function (sum, e) { return sum + (e.payrollErrorCount || 0); }, 0);
        return totalEmp ? (1 - (errorCount / totalEmp)) * 100 : 0;
    }, [filteredEmployeePayroll]);
    // Payroll by Department (from employees data)
    var payrollByDept = React.useMemo(function () {
        var map = {};
        filteredEmployeePayroll.forEach(function (e) {
            var comps = computeNetComponents(e);
            map[e.department] = (map[e.department] || 0) + (comps.netTotal || 0);
        });
        return Object.entries(map).map(function (_a) {
            var x = _a[0], y = _a[1];
            return ({ x: x, y: y, yFmt: formatCurrency(y) });
        });
    }, [filteredEmployeePayroll]);
    // Payroll vs Revenue across months (Revenue from finance, Payroll from employees)
    var payrollVsProfit = React.useMemo(function () {
        var result = [];
        activeMonths.forEach(function (m) {
            var monthLower = monthNameToLower(m);
            // Get revenue from finance data (sum across all departments for this month)
            var revenue = (financeRows && financeRows.length)
                ? financeRows.filter(function (r) { return String(r.Year || r.year) === String(selectedYear) && ((r.Month || r.month) === m); }).reduce(function (sum, r) { return sum + ((r.Revenue || r.revenue) || 0); }, 0)
                : 0;
            // Get payroll from merged payroll rows (employeeDetails + dept from employees)
            var payroll = mergedPayrollRows
                .filter(function (e) { return String(e.year) === String(selectedYear) && String(e.month) === monthLower && effectiveDepartments.includes(e.department); })
                .reduce(function (sum, e) { return sum + ((computeNetComponents(e).netTotal) || 0); }, 0);
            var profit = revenue - payroll;
            result.push({ x: m, payroll: payroll, profit: profit });
        });
        return result;
    }, [financeRows, mergedPayrollRows, activeMonths, effectiveDepartments, selectedYear]);
    // Salary vs Hike % by department (from employees data)
    var salaryVsOvertime = React.useMemo(function () {
        var agg = {};
        filteredEmployeePayroll.forEach(function (e) {
            if (!agg[e.department])
                agg[e.department] = { salary: 0, overtimepayment: 0 };
            var comps = computeNetComponents(e);
            agg[e.department].salary += comps.netSalary || 0; // salary after LOP & PF
            agg[e.department].overtimepayment += comps.overtime || 0;
        });
        var result = Object.entries(agg).map(function (_a) {
            var dept = _a[0], v = _a[1];
            var total = v.salary + v.overtimepayment;
            // compute with one decimal to avoid tiny overtime rounding to 0
            var salaryPct = total ? Math.round((v.salary / total) * 1000) / 10 : 0;
            var overtimePct = total ? Math.round((v.overtimepayment / total) * 1000) / 10 : 0;
            return { x: dept, salaryPct: salaryPct, overtimePct: overtimePct, raw: v };
        });
        return result;
    }, [filteredEmployeePayroll]);
    // Formatters for chart labels
    function formatCurrency(n) {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0, notation: 'compact' }).format(n !== null && n !== void 0 ? n : 0);
    }
    var currencyCompact = React.useMemo(function () { return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 0
    }); }, []);
    var onAxisLabelMillions = function (args) {
        var _a;
        if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.orientation) === 'Horizontal') {
            args.text = currencyCompact.format(Number(args.value || 0));
        }
    };
    var formatYAxisDollar = function (args) {
        var _a;
        if (((_a = args.axis) === null || _a === void 0 ? void 0 : _a.name) === 'primaryYAxis') {
            var v = Number(args.value || 0);
            args.text = formatCurrency(v);
        }
    };
    var onPercentageDataLabelText = function (args) {
        var _a, _b, _c, _d;
        var id = (_c = (_b = (_a = args.series) === null || _a === void 0 ? void 0 : _a.chart) === null || _b === void 0 ? void 0 : _b.element) === null || _c === void 0 ? void 0 : _c.id;
        if (id === 'salary-overtime' || id === 'tenure-by-dept' || id === 'tenure-by-dept-buckets') {
            args.text = "".concat((_d = args.point) === null || _d === void 0 ? void 0 : _d.y, "%");
        }
    };
    var onFormattedDataLabelText = function (args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        // Called for data label text rendering across charts
        var chartId = ((_c = (_b = (_a = args.series) === null || _a === void 0 ? void 0 : _a.chart) === null || _b === void 0 ? void 0 : _b.element) === null || _c === void 0 ? void 0 : _c.id) || ((_e = (_d = args.chart) === null || _d === void 0 ? void 0 : _d.element) === null || _e === void 0 ? void 0 : _e.id);
        if (!args.point)
            return;
        var val = Number(((_f = args.point) === null || _f === void 0 ? void 0 : _f.y) || 0);
        // For payroll charts, show whole currency values (no decimals)
        if (chartId === 'payroll-by-dept' || chartId === 'payroll-by-type' || chartId === 'payroll-type-dept') {
            args.text = (_h = (_g = args.point) === null || _g === void 0 ? void 0 : _g.yFmt) !== null && _h !== void 0 ? _h : formatCurrency(Math.round(val));
            return;
        }
        // Fallback: if consumer provided a preformatted value, use it
        if ((_j = args.point) === null || _j === void 0 ? void 0 : _j.yFmt) {
            args.text = args.point.yFmt;
        }
    };
    var onCurrencyTooltip = function (args) {
        var _a, _b, _c, _d, _e, _f;
        var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
        var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
        var series = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
        args.text = series ? "".concat(x, " : ").concat(formatCurrency(y)) : "".concat(x, ": ").concat(formatCurrency(y));
    };
    var yearOptions = [2023, 2024, 2025];
    var payrollTypes = React.useMemo(function () { return ['Salary', 'Overtime', 'Allowance', 'Hike', 'Benefits']; }, []);
    var payrollTotalsByType = React.useMemo(function () {
        var totals = { Salary: 0, Overtime: 0, Allowance: 0, Hike: 0, Benefits: 0 };
        (filteredEmployeePayroll || []).forEach(function (e) {
            var comps = computeNetComponents(e);
            totals.Salary += comps.netSalary || 0;
            totals.Overtime += comps.overtime || 0;
            totals.Allowance += comps.allowance || 0;
            totals.Hike += comps.hike || 0;
            totals.Benefits += comps.benefits || 0;
        });
        return payrollTypes.map(function (t) { return ({ x: t, y: totals[t] || 0, yFmt: formatCurrency(Math.round(totals[t] || 0)) }); });
    }, [filteredEmployeePayroll, computeNetComponents, payrollTypes]);
    var payrollDeptBreakdown = React.useCallback(function (type) {
        var map = {};
        (filteredEmployeePayroll || []).forEach(function (e) {
            var comps = computeNetComponents(e);
            var dept = e.department || 'Unknown';
            var val = 0;
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
        return Object.entries(map).map(function (_a) {
            var department = _a[0], value = _a[1];
            return ({ x: department, y: value, yFmt: formatCurrency(Math.round(value)) });
        }).sort(function (a, b) { return b.y - a.y; });
    }, [filteredEmployeePayroll, computeNetComponents]);
    var PayrollBreakdownChart = function () {
        // Local drill state to avoid re-rendering the whole Finance/dashboard
        var _a = React.useState(null), payrollDrillType = _a[0], setPayrollDrillType = _a[1];
        var onPayrollXAxisClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            // Ignore clicks on the Y-axis labels — only X-axis should trigger drill
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.orientation) === 'Vertical')
                return;
            var targetId = String((_e = (_b = args === null || args === void 0 ? void 0 : args.target) !== null && _b !== void 0 ? _b : (_d = (_c = args === null || args === void 0 ? void 0 : args.event) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.id) !== null && _e !== void 0 ? _e : '');
            var labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    var el = document.getElementById(targetId);
                    labelText = ((el === null || el === void 0 ? void 0 : el.textContent) || '').toString().trim();
                }
                else {
                    var el = typeof (args === null || args === void 0 ? void 0 : args.target) === 'string' ? document.getElementById(args.target) : args === null || args === void 0 ? void 0 : args.target;
                    labelText = (_f = ((el === null || el === void 0 ? void 0 : el.textContent) || (el === null || el === void 0 ? void 0 : el.innerText) || '')) === null || _f === void 0 ? void 0 : _f.toString().trim();
                }
            }
            catch (e) { }
            if (!labelText)
                return;
            // Data source from chart ref (fallback to current computed totals)
            var ds = ((_j = (_h = (_g = payrollByTypeRef.current) === null || _g === void 0 ? void 0 : _g.series) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.dataSource) || payrollTotalsByType || [];
            var row = ds.find(function (p) { return String(p === null || p === void 0 ? void 0 : p.x) === labelText; }) || null;
            if (!row)
                return;
            try {
                (_m = (_l = (_k = payrollByTypeRef.current) === null || _k === void 0 ? void 0 : _k.tooltipModule) === null || _l === void 0 ? void 0 : _l.hide) === null || _m === void 0 ? void 0 : _m.call(_l);
            }
            catch (e) { }
            setTimeout(function () { return setPayrollDrillType(String(row.x)); }, 60);
        };
        // Keep a stable wrapper so Panel DOM doesn't change and cause DashboardLayout issues.
        var deptData = payrollDrillType ? payrollDeptBreakdown(payrollDrillType) : [];
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement("div", null, payrollDrillType ? (React.createElement("div", { style: { marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' } },
                React.createElement("button", { onClick: function () {
                        var _a, _b, _c;
                        setPayrollDrillType(null);
                        try {
                            (_c = (_b = (_a = payrollByTypeRef.current) === null || _a === void 0 ? void 0 : _a.tooltipModule) === null || _b === void 0 ? void 0 : _b.hide) === null || _c === void 0 ? void 0 : _c.call(_b);
                        }
                        catch (e) { }
                        setTimeout(function () { var _a, _b, _c, _d; (_b = (_a = payrollByTypeRef.current) === null || _a === void 0 ? void 0 : _a.refresh) === null || _b === void 0 ? void 0 : _b.call(_a); (_d = (_c = payRollBreakref.current) === null || _c === void 0 ? void 0 : _c.refresh) === null || _d === void 0 ? void 0 : _d.call(_c); }, 80);
                    }, style: { marginLeft: 10, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 } }, "Back"))) : null),
            payrollDrillType ? (React.createElement(ej2_react_charts_1.ChartComponent, { ref: payRollBreakref, id: "payroll-type-dept", height: '100%', width: '100%', primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', edgeLabelPlacement: 'Shift', labelStyle: { textOverflow: 'Wrap' } }, primaryYAxis: { majorGridLines: { width: 0 }, lineStyle: { width: 0 } }, legendSettings: { visible: false }, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, margin: { left: 0, right: 0, top: 0, bottom: 20 }, axisLabelRender: formatYAxisDollar, textRender: onFormattedDataLabelText, tooltipRender: onCurrencyTooltip, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Column', dataSource: deptData, xName: 'x', yName: 'y', name: payrollDrillType, fill: '#87805E', cornerRadius: { topLeft: 4, topRight: 4 }, marker: { dataLabel: { visible: true, position: 'Outer' } }, animation: { enable: false } })))) : (React.createElement(ej2_react_charts_1.ChartComponent, { ref: payrollByTypeRef, id: "payroll-by-type", height: '100%', width: '100%', primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', edgeLabelPlacement: 'Shift', labelStyle: { textOverflow: 'Wrap' } }, primaryYAxis: { lineStyle: { width: 0 } }, legendSettings: { visible: false }, tooltip: { enable: true, format: '${series.name}: ${point.y}' }, chartArea: { border: { width: 0 } }, margin: { left: 0, right: 0, top: 0, bottom: 20 }, axisLabelRender: formatYAxisDollar, pointRender: function (args) { args.point.style = 'cursor: pointer;'; }, textRender: onFormattedDataLabelText, tooltipRender: onCurrencyTooltip, chartMouseClick: onPayrollXAxisClick, load: onChartLoad, pointClick: function (args) { setPayrollDrillType(args.point.x); } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Column', dataSource: payrollTotalsByType, xName: 'x', yName: 'y', name: 'Amount', fill: '#736C4D', marker: { dataLabel: { visible: true, position: 'Outer' } }, dataLabel: { visible: true, position: 'Top', template: '${point.yFmt}' }, animation: { enable: false } }))))));
    };
    var PayrollProfitChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
        React.createElement(ej2_react_charts_1.ChartComponent, { ref: payrollProfitRef, id: "payroll-profit", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: { labelFormat: '${value}', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' } }, axisLabelRender: formatYAxisDollar, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, background: 'transparent', crosshair: { enable: true, lineType: 'Vertical' }, load: onChartLoad, tooltipRender: onCurrencyTooltip },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineAreaSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Crosshair] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'SplineArea', name: 'Payroll', xName: 'x', yName: 'payroll', dataSource: payrollVsProfit, marker: { visible: true, width: 8, height: 8 }, fill: "#285430", opacity: 0.3, border: { width: 2.75, color: '#285430' }, animation: { enable: false } }),
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'SplineArea', name: 'Net Profit', xName: 'x', yName: 'profit', dataSource: payrollVsProfit, marker: { visible: true, width: 8, height: 8 }, fill: "#B4846C", opacity: 0.1, border: { width: 2.75, color: '#B4846C' }, animation: { enable: false } }))))); };
    var PayrollByDeptChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
        React.createElement(ej2_react_charts_1.ChartComponent, { ref: payrollByDeptRef, id: "payroll-by-dept", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, interval: 1, labelIntersectAction: 'Rotate45', labelStyle: { textOverflow: 'Wrap' } }, primaryYAxis: { labelFormat: '{value}', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' }, labelIntersectAction: 'Rotate45' }, legendSettings: { visible: false }, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, axisLabelRender: onAxisLabelMillions, textRender: onFormattedDataLabelText, tooltipRender: onCurrencyTooltip, load: onChartLoad, margin: { left: 0, right: 0, top: 0, bottom: 20 } },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Bar', name: 'Department Cost', xName: 'x', yName: 'y', dataSource: payrollByDept, fill: '#B4846C', cornerRadius: { topRight: 6, bottomRight: 6 }, marker: { dataLabel: { visible: true, position: 'Outer' } }, dataLabel: { visible: true, position: 'Outer', font: { size: '11px' }, template: '${point.yFmt}' }, animation: { enable: false } }))))); };
    var SalaryOvertimeChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
        React.createElement(ej2_react_charts_1.ChartComponent, { ref: salaryOvertimeRef, id: "salary-overtime", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }, primaryYAxis: { labelFormat: '{value}%', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' }, labelIntersectAction: 'Wrap' }, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true, shared: true, format: '${series.name}: ${point.y}' }, chartArea: { border: { width: 0 } }, textRender: onPercentageDataLabelText, palettes: ["#2563EB", "#F43F5E"], load: onChartLoad },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'StackingColumn', name: 'Salary %', xName: 'x', yName: 'salaryPct', dataSource: salaryVsOvertime, fill: '#AA8B56', animation: { enable: false } }),
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'StackingColumn', name: 'OverTime Payment %', xName: 'x', yName: 'overtimePct', dataSource: salaryVsOvertime, fill: '#7D8F69', cornerRadius: { topLeft: 6, topRight: 6 }, animation: { enable: false } }))))); };
    // Payroll Year-over-Year Growth (percent) for selected months
    var payrollYoYGrowth = React.useMemo(function () {
        var prevYear = String(Number(selectedYear) - 1);
        var monthLowerList = activeMonths.map(function (m) { return monthNameToLower(m); });
        // helper to compute payroll total for a given year and month (lowercase 3-letter)
        function payrollFor(year, monthLower) {
            return mergedPayrollRows
                .filter(function (e) { return String(e.year) === String(year) && String(e.month) === monthLower && effectiveDepartments.includes(e.department); })
                .reduce(function (sum, e) { return sum + ((computeNetComponents(e).netTotal) || 0); }, 0);
        }
        // per-month YoY (compare each selected month with same month previous year)
        var perMonth = monthLowerList.map(function (ml, idx) {
            var monthLabel = activeMonths[idx];
            var cur = payrollFor(String(selectedYear), ml);
            var prev = payrollFor(prevYear, ml);
            var yoy = prev ? ((cur - prev) / prev) * 100 : null;
            return { x: monthLabel, y: yoy, cur: cur, prev: prev };
        });
        // aggregate across selected months (sum selected months for both years)
        var sumCur = perMonth.reduce(function (s, p) { return s + (p.cur || 0); }, 0);
        var sumPrev = perMonth.reduce(function (s, p) { return s + (p.prev || 0); }, 0);
        var aggregateYoY = sumPrev ? ((sumCur - sumPrev) / sumPrev) * 100 : null;
        return { perMonth: perMonth, aggregateYoY: aggregateYoY };
    }, [mergedPayrollRows, activeMonths, selectedYear, effectiveDepartments]);
    var PayrollYoYGrowthChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
        React.createElement(ej2_react_charts_1.ChartComponent, { load: onChartLoad, ref: payrollYoYRef, id: "payroll-yoy", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', interval: 1 }, primaryYAxis: { labelFormat: '{value}%', lineStyle: { width: 0 }, majorGridLines: { width: 1, color: '#e6eef3' } }, legendSettings: { visible: false }, tooltip: { enable: true, shared: true, format: '${point.y}' }, chartArea: { border: { width: 0 } }, background: 'transparent', palettes: ["#285430"], crosshair: { enable: true, lineType: 'Vertical' } },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Crosshair] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Line', name: 'YoY Growth', xName: 'x', yName: 'y', dataSource: payrollYoYGrowth.perMonth.map(function (p) { var _a; return ({ x: p.x, y: (_a = p.y) !== null && _a !== void 0 ? _a : 0 }); }), marker: { visible: true, width: 8, height: 8 }, dataLabel: { visible: true, format: '{value}%', position: 'Top' }, animation: { enable: false } }))))); };
    return (React.createElement("div", { id: 'container' },
        React.createElement("div", { className: "e-card cs-toolbar" },
            React.createElement("div", { className: "cs-toolbar-left" },
                React.createElement("h4", { className: "cs-title" }, "Finance & Payroll")),
            React.createElement("div", { className: "cs-toolbar-right" },
                React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "Month-multiselect", dataSource: uniqueMonths, fields: { text: 'text', value: 'value' }, placeholder: "All", mode: "CheckBox", showSelectAll: true, selectAllText: "All", unSelectAllText: "Clear All", showDropDownIcon: true, enableSelectionOrder: true, value: selectedMonths || [], change: function (e) { return setSelectedMonths(e.value || []); }, width: 180 },
                    React.createElement(ej2_react_dropdowns_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] })),
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "Year-dropdown", dataSource: yearOptions, fields: { text: 'text', value: 'value' }, value: selectedYear, change: function (e) { return setSelectedYear(e.value); }, width: 180 }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { id: "finance_dashboard", ref: FinanceDashboardRef, showGridLines: false, cellAspectRatio: 100 / 85, cellSpacing: cellSpacing, columns: 8, allowDragging: false, mediaQuery: "(max-width:950px)" },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: totalPayroll }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: payrollAccuracy }),
                "\\",
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: taxCompliance }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: totalDeduction }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 1, col: 0, header: '<div> Payroll BreakDown', content: PayrollBreakdownChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 4, col: 0, header: '<div>Payroll YoY Growth</div>', content: PayrollYoYGrowthChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 4, col: 4, header: '<div>Payroll Vs Net Profit</div>', content: PayrollProfitChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 7, col: 0, header: '<div>Department Cost Share </div>', content: PayrollByDeptChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 7, col: 4, header: '<div>Salary and OverTime Payment</div>', content: SalaryOvertimeChart })))));
};
var Recruitment = function (props) {
    var cellSpacing = [10, 10];
    var monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var propSelectedMonths = props === null || props === void 0 ? void 0 : props.selectedMonths;
    var propSelectedYear = props === null || props === void 0 ? void 0 : props.selectedYear;
    var onPropMonthChange = props === null || props === void 0 ? void 0 : props.onMonthChange;
    var onPropYearChange = props === null || props === void 0 ? void 0 : props.onYearChange;
    var _a = React.useState(monthOrder), localSelectedMonths = _a[0], setLocalSelectedMonths = _a[1];
    var _b = React.useState(propSelectedYear !== null && propSelectedYear !== void 0 ? propSelectedYear : 2025), localSelectedYear = _b[0], setLocalSelectedYear = _b[1];
    var selectedMonths = propSelectedMonths !== undefined ? propSelectedMonths : localSelectedMonths;
    var setSelectedMonths = propSelectedMonths !== undefined ? function (m) { return onPropMonthChange === null || onPropMonthChange === void 0 ? void 0 : onPropMonthChange(m); } : setLocalSelectedMonths;
    var selectedYear = propSelectedYear !== undefined ? propSelectedYear : localSelectedYear;
    var setSelectedYear = propSelectedYear !== undefined ? function (y) { return onPropYearChange === null || onPropYearChange === void 0 ? void 0 : onPropYearChange(y); } : setLocalSelectedYear;
    var hiringFunnelMainRef = React.useRef(null);
    var hiringFunnelDrillRef = React.useRef(null);
    var recruitmentOpeningsRef = React.useRef(null);
    var applicantSourceRef = React.useRef(null); // AccumulationChartComponent
    var applicationByDeptRef = React.useRef(null);
    var offerDeclinedRef = React.useRef(null); // AccumulationChartComponent
    var recruitmentGridRef = React.useRef(null);
    var recruitmentDashboardRef = React.useRef(null);
    // Get recruitment data from JSON
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_a = recruitmentDashboardRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = hiringFunnelDrillRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = recruitmentOpeningsRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = applicantSourceRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = applicationByDeptRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = offerDeclinedRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = recruitmentGridRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
                (_h = hiringFunnelMainRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return function () {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    var recruitmentData = React.useMemo(function () { return (safeData === null || safeData === void 0 ? void 0 : safeData.recruitment) || []; }, []);
    // Pre-parse statusHistory dates and normalized status to avoid repeated Date parsing
    var recruitmentParsed = React.useMemo(function () {
        return (recruitmentData || []).map(function (app) {
            var parsed = (Array.isArray(app.statusHistory) ? app.statusHistory.slice() : []).map(function (h) {
                var dateObj = h && h.date ? new Date(h.date) : null;
                var year = dateObj && !isNaN(dateObj.getTime()) ? dateObj.getFullYear() : null;
                var monthShort = dateObj && !isNaN(dateObj.getTime()) ? dateObj.toLocaleString('en-US', { month: 'short' }) : null;
                return __assign(__assign({}, h), { dateObj: dateObj, year: year, monthShort: monthShort, statusLower: String((h === null || h === void 0 ? void 0 : h.status) || '').toLowerCase() });
            }).sort(function (a, b) {
                var ta = (a === null || a === void 0 ? void 0 : a.dateObj) ? a.dateObj.getTime() : 0;
                var tb = (b === null || b === void 0 ? void 0 : b.dateObj) ? b.dateObj.getTime() : 0;
                return ta - tb;
            });
            return __assign(__assign({}, app), { statusHistoryParsed: parsed });
        });
    }, [recruitmentData]);
    // Get unique years and months from recruitment data
    var uniqueYears = React.useMemo(function () {
        var years = new Set();
        recruitmentParsed.forEach(function (app) {
            var _a;
            (_a = app.statusHistoryParsed) === null || _a === void 0 ? void 0 : _a.forEach(function (h) {
                if (h === null || h === void 0 ? void 0 : h.year)
                    years.add(h.year);
            });
        });
        return Array.from(years).sort(function (a, b) { return a - b; });
    }, [recruitmentParsed]);
    var uniqueMonths = React.useMemo(function () {
        var months = new Set();
        recruitmentParsed.forEach(function (app) {
            var _a;
            (_a = app.statusHistoryParsed) === null || _a === void 0 ? void 0 : _a.forEach(function (h) {
                if (h === null || h === void 0 ? void 0 : h.monthShort)
                    months.add(h.monthShort);
            });
        });
        return Array.from(months).sort(function (a, b) { return monthOrder.indexOf(a) - monthOrder.indexOf(b); });
    }, [recruitmentParsed]);
    var activeMonths = selectedMonths && selectedMonths.length > 0 ? selectedMonths : uniqueMonths;
    // Filter applications by selected months and year
    var filteredApplications = React.useMemo(function () {
        return recruitmentParsed.filter(function (app) {
            var _a;
            return (_a = app.statusHistoryParsed) === null || _a === void 0 ? void 0 : _a.some(function (h) {
                return (h === null || h === void 0 ? void 0 : h.year) === Number(selectedYear) && activeMonths.includes(h === null || h === void 0 ? void 0 : h.monthShort);
            });
        });
    }, [recruitmentParsed, selectedMonths, selectedYear, activeMonths]);
    // Calculate kpis
    var totalApplicants = filteredApplications.length;
    var hiredApplications = filteredApplications.filter(function (app) { var _a; return (_a = app.statusHistoryParsed) === null || _a === void 0 ? void 0 : _a.some(function (h) { return h.statusLower === 'hired'; }); });
    var totalHired = hiredApplications.length;
    var offeredApplications = filteredApplications.filter(function (app) { var _a; return (_a = app.statusHistoryParsed) === null || _a === void 0 ? void 0 : _a.some(function (h) { return h.statusLower === 'offered'; }); });
    var totalOffered = offeredApplications.length;
    var avgTimeToHire = React.useMemo(function () {
        var totalDays = 0;
        var count = 0;
        hiredApplications.forEach(function (app) {
            var applied = (app.statusHistoryParsed || []).find(function (h) { return h.statusLower === 'applied'; });
            var hired = (app.statusHistoryParsed || []).find(function (h) { return h.statusLower === 'hired'; });
            var appliedDate = applied === null || applied === void 0 ? void 0 : applied.dateObj;
            var hiredDate = hired === null || hired === void 0 ? void 0 : hired.dateObj;
            if (appliedDate && hiredDate) {
                var days = Math.floor((hiredDate.getTime() - appliedDate.getTime()) / (1000 * 60 * 60 * 24));
                totalDays += days;
                count++;
            }
        });
        return count > 0 ? Math.round(totalDays / count) : 0;
    }, [hiredApplications]);
    var offerAcceptanceRate = totalOffered > 0 ? Math.round((totalHired / totalOffered) * 100) : 0;
    var hireConversionRate = totalApplicants > 0 ? Math.round((totalHired / totalApplicants) * 100) : 0;
    // Hiring Funnel - count by stage
    var hiringFunnelData = React.useMemo(function () {
        var stages = ['Applied', 'shortlisted', 'interviewed', 'offered', 'Hired'];
        var stageCounts = {};
        stages.forEach(function (stage) {
            var sl = stage.toLowerCase();
            stageCounts[stage] = filteredApplications.filter(function (app) {
                return (app.statusHistoryParsed || []).some(function (h) { return h.statusLower === sl; });
            }).length;
        });
        return stages.map(function (stage) { return ({
            x: stage.charAt(0).toUpperCase() + stage.slice(1),
            y: stageCounts[stage] || 0
        }); });
    }, [filteredApplications]);
    // Applicant count by source
    var applicantBySourceData = React.useMemo(function () {
        var sourceMap = new Map();
        filteredApplications.forEach(function (app) {
            var source = app.source || 'Unknown';
            sourceMap.set(source, (sourceMap.get(source) || 0) + 1);
        });
        return Array.from(sourceMap).map(function (_a) {
            var source = _a[0], count = _a[1];
            return ({ x: source, y: count });
        });
    }, [filteredApplications]);
    // Application count by department - Opening vs Filled
    var applicationByDeptData = React.useMemo(function () {
        var deptStats = {};
        filteredApplications.forEach(function (app) {
            var dept = app.department || 'Unknown';
            if (!deptStats[dept])
                deptStats[dept] = { opening: 0, filled: 0 };
            var offeredStatus = (app.statusHistoryParsed || []).find(function (h) { return h.statusLower === 'offered'; });
            if (offeredStatus) {
                deptStats[dept].opening++;
                var offeredIndex = (app.statusHistoryParsed || []).indexOf(offeredStatus);
                var hasHired = (app.statusHistoryParsed || []).slice(offeredIndex + 1).some(function (h) { return h.statusLower === 'hired'; });
                if (hasHired)
                    deptStats[dept].filled++;
            }
        });
        return Object.entries(deptStats).map(function (_a) {
            var dept = _a[0], stats = _a[1];
            return ({ x: dept, opening: stats.opening, filled: stats.filled });
        });
    }, [filteredApplications]);
    // Recruitment details grid (table view)
    var RecruitmentDetailsGrid = function () {
        var recruitmentGridData = React.useMemo(function () {
            // Only include applications that have an "offered" status and were not hired afterwards (declined after offer)
            var offeredButDeclined = (filteredApplications || []).filter(function (app) {
                var history = (app.statusHistory || []).slice().sort(function (a, b) { return new Date(a.date).getTime() - new Date(b.date).getTime(); });
                var offeredEntry = history.find(function (h) { return String(h.status || '').toLowerCase() === 'offered'; });
                if (!offeredEntry)
                    return false;
                var offeredIndex = history.indexOf(offeredEntry);
                var hasHiredAfter = history.slice(offeredIndex + 1).some(function (h) { return String(h.status || '').toLowerCase() === 'hired'; });
                return !hasHiredAfter;
            });
            return offeredButDeclined.map(function (app) {
                var history = (app.statusHistory || []).slice().sort(function (a, b) { return new Date(a.date).getTime() - new Date(b.date).getTime(); });
                var first = history[0] || {};
                var last = history[history.length - 1] || {};
                var appliedDate = (history.find(function (h) { var _a; return ((_a = h.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'applied'; }) || first).date;
                var offeredEntry = history.find(function (h) { return String(h.status || '').toLowerCase() === 'offered'; });
                var declinedCategory = (offeredEntry === null || offeredEntry === void 0 ? void 0 : offeredEntry.declinedCategory) || (offeredEntry === null || offeredEntry === void 0 ? void 0 : offeredEntry.declineReason) || '';
                var suggestionsRaw = (offeredEntry === null || offeredEntry === void 0 ? void 0 : offeredEntry.declinedReason) || (offeredEntry === null || offeredEntry === void 0 ? void 0 : offeredEntry.declineReasonSuggestions) || null;
                var declinedReason = '';
                if (Array.isArray(suggestionsRaw)) {
                    declinedReason = suggestionsRaw.join('; ');
                }
                else if (suggestionsRaw && typeof suggestionsRaw === 'object') {
                    declinedReason = Object.entries(suggestionsRaw).map(function (_a) {
                        var cat = _a[0], arr = _a[1];
                        return "".concat(cat, ": ").concat(Array.isArray(arr) ? arr.join(', ') : String(arr));
                    }).join(' | ');
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
                    declinedCategory: declinedCategory,
                    declinedReason: declinedReason
                };
            });
        }, [filteredApplications]);
        function toolbarClick(args) {
            var _a, _b;
            switch (args.item.id) {
                case 'recruitment-grid_pdfexport':
                    (_a = recruitmentGridRef.current) === null || _a === void 0 ? void 0 : _a.pdfExport();
                    break;
                case 'recruitment-grid_excelexport':
                    (_b = recruitmentGridRef.current) === null || _b === void 0 ? void 0 : _b.excelExport();
                    break;
            }
        }
        var toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' } },
            React.createElement(ej2_react_grids_1.GridComponent, { id: "recruitment-grid", ref: recruitmentGridRef, dataSource: recruitmentGridData, allowPaging: false, showColumnChooser: true, enableVirtualization: true, rowHeight: 56, allowTextWrap: true, allowResizing: true, allowSorting: true, allowMultiSorting: true, allowPdfExport: true, allowExcelExport: true, width: '100%', height: '100%', toolbar: toolBarOptions, toolbarClick: toolbarClick },
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Page, ej2_react_grids_1.Sort, ej2_react_grids_1.ColumnChooser] }),
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'applicationId', headerText: 'Application ID', headerTemplate: headerWithTooltip("Application ID"), width: '120', clipMode: 'EllipsisWithTooltip', textAlign: 'Left' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'position', headerText: 'Position', headerTemplate: headerWithTooltip("Position"), width: '180', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'department', headerText: 'Department', headerTemplate: headerWithTooltip("Department"), width: '160', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'source', headerText: 'Source', headerTemplate: headerWithTooltip("Source"), width: '140', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'declinedCategory', headerText: 'Declined Category', headerTemplate: headerWithTooltip("Declined Category"), width: '220', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'declinedReason', headerText: 'Declined Reason', headerTemplate: headerWithTooltip("Declined Reason"), width: '320', clipMode: 'EllipsisWithTooltip' })))));
    };
    var yearOptions = uniqueYears.map(function (y) { return ({ text: String(y), value: y }); });
    var monthOptions = uniqueMonths.map(function (m) { return ({ text: m, value: m }); });
    var Candidateskpi = function () { return (React.createElement("div", { className: "hr-kpi-card" },
        React.createElement("div", { className: "hr-kpi-label" }, "Total Applicants"),
        React.createElement("div", { className: "hr-kpi-value" }, totalApplicants))); };
    var TimeToHirekpi = function () { return (React.createElement("div", { className: "hr-kpi-card" },
        React.createElement("div", { className: "hr-kpi-label" }, "Time to Hire"),
        React.createElement("div", { className: "hr-kpi-value" },
            avgTimeToHire,
            " days"))); };
    var OfferAcceptanceRatekpi = function () { return (React.createElement("div", { className: "hr-kpi-card" },
        React.createElement("div", { className: "hr-kpi-label" }, "Offer Acceptance Rate"),
        React.createElement("div", { className: "hr-kpi-value" },
            offerAcceptanceRate,
            "%"))); };
    var HireConversionRate = function () { return (React.createElement("div", { className: "hr-kpi-card" },
        React.createElement("div", { className: "hr-kpi-label" }, "Hire Conversion Rate"),
        React.createElement("div", { className: "hr-kpi-value" },
            hireConversionRate,
            "%"))); };
    // Hiring Funnel Chart - Horizontal Bars with drill-to-department
    var HiringFunnelChart = function () {
        var _a = React.useState(null), drillStage = _a[0], setDrillStage = _a[1];
        var deptDataForStage = React.useMemo(function () {
            if (!drillStage)
                return [];
            var map = {};
            (filteredApplications || []).forEach(function (app) {
                var hasStage = Array.isArray(app.statusHistory) && app.statusHistory.some(function (h) { return String(h.status || '').toLowerCase() === String(drillStage).toLowerCase(); });
                if (hasStage) {
                    var dept = app.department || 'Unknown';
                    map[dept] = (map[dept] || 0) + 1;
                }
            });
            return Object.entries(map).map(function (_a) {
                var x = _a[0], y = _a[1];
                return ({ x: x, y: y });
            }).sort(function (a, b) { return b.y - a.y || String(a.x).localeCompare(String(b.x)); });
        }, [drillStage, filteredApplications]);
        if (drillStage) {
            return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' } },
                React.createElement("div", { className: 'drillcontent', style: { marginBottom: 10, fontSize: 12, fontWeight: 'bold', color: '#374151' } },
                    React.createElement("button", { onClick: function () { return setDrillStage(null); }, style: { marginLeft: 10, padding: '4px 8px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11 } }, "Back")),
                React.createElement(ej2_react_charts_1.ChartComponent, { key: "hiring-funnel-drill-".concat(drillStage), ref: hiringFunnelDrillRef, id: "hiring-funnel-drill-".concat(drillStage), height: '100%', width: '100%', primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }, primaryYAxis: { majorGridLines: { width: 0 }, lineStyle: { width: 0 } }, legendSettings: { visible: false }, tooltip: { enable: true, shared: true }, chartArea: { border: { width: 0 } }, load: onChartLoad },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Column', dataSource: deptDataForStage, xName: 'x', yName: 'y', name: 'Candidates', fill: '#87805E', cornerRadius: { topLeft: 4, topRight: 4 }, animation: { enable: false } })))));
        }
        var handleFunnelClick = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var rawX = (_f = (_d = (_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.category) !== null && _d !== void 0 ? _d : (_e = args === null || args === void 0 ? void 0 : args.point) === null || _e === void 0 ? void 0 : _e.xValue) !== null && _f !== void 0 ? _f : args === null || args === void 0 ? void 0 : args.pointX;
            var xValue = rawX != null ? String(rawX).trim() : null;
            if (!xValue)
                return;
            // Hide tooltip if present to avoid tooltip appending to an unmounted DOM
            try {
                var chartInst = hiringFunnelMainRef.current;
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
            setTimeout(function () { return setDrillStage(xValue); }, 80);
        };
        var onHiringFunnelYAxisClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            // Normalize axis-label clicks to behave like pointClick (y-axis labels only elsewhere handled by geometry)
            var targetId = String((_d = (_a = args === null || args === void 0 ? void 0 : args.target) !== null && _a !== void 0 ? _a : (_c = (_b = args === null || args === void 0 ? void 0 : args.event) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '');
            var labelText = '';
            try {
                if (targetId && targetId.includes('_AxisLabel_')) {
                    var el = document.getElementById(targetId);
                    labelText = ((el === null || el === void 0 ? void 0 : el.textContent) || '').toString().trim();
                }
                else {
                    var el = typeof (args === null || args === void 0 ? void 0 : args.target) === 'string' ? document.getElementById(args.target) : args === null || args === void 0 ? void 0 : args.target;
                    labelText = (_e = ((el === null || el === void 0 ? void 0 : el.textContent) || (el === null || el === void 0 ? void 0 : el.innerText) || '')) === null || _e === void 0 ? void 0 : _e.toString().trim();
                }
            }
            catch (e) { /* ignore */ }
            if (!labelText)
                return;
            var ds = hiringFunnelData || [];
            var row = ds.find(function (r) { return String(r.x) === labelText; }) || null;
            if (!row)
                return;
            try {
                (_h = (_g = (_f = hiringFunnelMainRef.current) === null || _f === void 0 ? void 0 : _f.tooltipModule) === null || _g === void 0 ? void 0 : _g.hide) === null || _h === void 0 ? void 0 : _h.call(_g);
            }
            catch (e) { }
            setTimeout(function () { return setDrillStage(String(row.x)); }, 60);
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.ChartComponent, { load: onChartLoad, ref: hiringFunnelMainRef, id: "hiring-funnel", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: { lineStyle: { width: 0 }, edgeLabelPlacement: 'Shift' }, tooltip: { enable: true, format: '${point.x}: ${point.y}' }, legendSettings: { visible: false }, chartArea: { border: { width: 0 } }, height: '100%', pointRender: function (args) { args.point.style = 'cursor: pointer;'; }, pointClick: handleFunnelClick, chartMouseClick: onHiringFunnelYAxisClick },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: hiringFunnelData, xName: "x", yName: "y", name: "Candidates", type: "Bar", fill: "#AA8B56", cornerRadius: { topRight: 6, bottomRight: 6 }, marker: { dataLabel: { visible: true, position: 'Outer' } }, animation: { enable: false } })))));
    };
    var applicantBySourceDataColored = React.useMemo(function () {
        var palette = ['#736C4D', '#E5B299', '#7D5A50', '#B4846C', '#285430'];
        return (applicantBySourceData || []).map(function (d, i) { return (__assign(__assign({}, d), { color: palette[i % palette.length] })); });
    }, [applicantBySourceData]);
    var ApplicantBySourceChart = function () {
        // Guard: if no data, show placeholder
        if (!(applicantBySourceDataColored && applicantBySourceDataColored.length)) {
            return React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' } }, "No applicant source data for selected filters");
        }
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { ref: applicantSourceRef, id: "pie-applicant-source", tooltip: { enable: true, format: '${point.x}: ${point.y}' }, legendSettings: { visible: true, position: 'Bottom' }, height: '100%', load: onAccumulationLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationTooltip] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: applicantBySourceDataColored, xName: "x", yName: "y", name: "Applicants", type: "Pie", borderRadius: 3, border: { width: 2, color: '#ffffff' }, pointColorMapping: "color", dataLabel: { visible: true, position: 'Outside', name: 'y' }, animation: { enable: false } })))));
    };
    // Application Count by Department - Opening vs Filled
    var ApplicationByDeptChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
        React.createElement(ej2_react_charts_1.ChartComponent, { load: onChartLoad, ref: applicationByDeptRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap' }, primaryYAxis: { lineStyle: { width: 0 } }, tooltip: { enable: true }, legendSettings: { visible: true }, chartArea: { border: { width: 0 } }, height: '100%' },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: applicationByDeptData, xName: "x", yName: "opening", name: "Opening", type: "Column", fill: "#7D8F69", cornerRadius: { topLeft: 4, topRight: 4 }, marker: { dataLabel: { visible: true, position: 'Top' } }, animation: { enable: false } }),
                React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: applicationByDeptData, xName: "x", yName: "filled", name: "Filled", type: "Column", fill: "#9FC088", cornerRadius: { topLeft: 4, topRight: 4 }, marker: { dataLabel: { visible: true, position: 'Top' } }, animation: { enable: false } }))))); };
    // Offer Declined Reason Chart
    var offerDeclinedReasonData = React.useMemo(function () {
        var declinedReasons = {};
        filteredApplications.forEach(function (app) {
            var _a, _b, _c;
            // Check if application has "offered" status
            var offeredStatus = (_a = app.statusHistory) === null || _a === void 0 ? void 0 : _a.find(function (h) { var _a; return ((_a = h.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'offered'; });
            if (offeredStatus) {
                // Check if there's a "hired" status after "offered"
                var offeredIndex = (_b = app.statusHistory) === null || _b === void 0 ? void 0 : _b.indexOf(offeredStatus);
                var hasHired = (_c = app.statusHistory) === null || _c === void 0 ? void 0 : _c.slice(offeredIndex + 1).some(function (h) { var _a; return ((_a = h.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'hired'; });
                if (!hasHired) {
                    var reason = offeredStatus.declinedCategory || offeredStatus.declineReason || offeredStatus.declinedReason || '';
                    if (reason) {
                        declinedReasons[reason] = (declinedReasons[reason] || 0) + 1;
                    }
                }
            }
        });
        return Object.entries(declinedReasons).map(function (_a) {
            var reason = _a[0], count = _a[1];
            return ({ x: reason, y: count });
        });
    }, [filteredApplications]);
    var OfferDeclinedReasonChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } }, (function () {
        var palette = ['#285430', '#AA8B56', '#87805E', '#B4846C'];
        var pieDataColored = (offerDeclinedReasonData || []).map(function (d, i) { return (__assign(__assign({}, d), { color: palette[i % palette.length] })); });
        // Guard: don't render when empty
        if (!pieDataColored || pieDataColored.length === 0) {
            return React.createElement("div", { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' } }, "No declined-offer reasons for selected filters");
        }
        return (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { ref: offerDeclinedRef, id: "donut-offer-declined", tooltip: { enable: true, format: '${point.x}: ${point.y}' }, legendSettings: { visible: true, position: 'Bottom' }, height: '100%', load: onAccumulationLoad },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationTooltip] }),
            React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: pieDataColored, pointColorMapping: "color", xName: "x", yName: "y", name: "Declined", type: "Pie", radius: "100%", innerRadius: "60%", explode: true, explodeOffset: "10%", dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px' }, name: 'y' }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } }))));
    })())); };
    var create = function () {
        setTimeout(function () {
            var _a;
            (_a = recruitmentDashboardRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }, 500);
    };
    return (React.createElement("div", { id: 'container' },
        React.createElement("div", { className: "e-card cs-toolbar" },
            React.createElement("div", { className: "cs-toolbar-left" },
                React.createElement("h4", { className: "cs-title" }, "Recruitment")),
            React.createElement("div", { className: "cs-toolbar-right" },
                React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "Month-multiselect", dataSource: monthOptions, fields: { text: 'text', value: 'value' }, placeholder: "All", mode: "CheckBox", showSelectAll: true, selectAllText: "All", unSelectAllText: "Clear All", showDropDownIcon: true, enableSelectionOrder: true, value: selectedMonths || [], change: function (e) { return setSelectedMonths(e.value || []); }, width: 180 },
                    React.createElement(ej2_react_dropdowns_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] })),
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "Year-dropdown", dataSource: yearOptions, fields: { text: 'text', value: 'value' }, value: selectedYear, change: function (e) { return setSelectedYear(e.value); }, width: 180 }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: recruitmentDashboardRef, created: create, showGridLines: false, cellAspectRatio: 100 / 85, cellSpacing: cellSpacing, columns: 8, allowDragging: false, mediaQuery: "(max-width:950px)" },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: Candidateskpi }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: TimeToHirekpi }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: OfferAcceptanceRatekpi }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: HireConversionRate }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 0, header: '<div>Recruitment Funnel</div>', content: HiringFunnelChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 4, header: '<div>Applicant Count by Source</div>', content: ApplicantBySourceChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 4, col: 0, header: '<div>Offer Declined Reason</div>', content: OfferDeclinedReasonChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 4, col: 4, header: '<div>Opening Vs Filling of Position </div>', content: ApplicationByDeptChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 8, col: 0, header: '<div>Offer Declined Applications Details</div>', content: RecruitmentDetailsGrid })))));
};
var TABS = {
    OVERVIEW: 'Overview',
    FINANCE: 'Finance & Payroll',
    RECRUITMENT: 'Recruitment'
};
var notifyResize = function () { return window.dispatchEvent(new Event('sidebar-toggled')); };
var onSidebarOpen = function () {
    setTimeout(notifyResize, 400);
    setTimeout(function () {
        var _a, _b, _c, _d;
        var el = document.getElementById('analytic_dashboard');
        (_d = (_c = (_b = (_a = el) === null || _a === void 0 ? void 0 : _a.ej2_instances) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.refresh) === null || _d === void 0 ? void 0 : _d.call(_c); // calls Syncfusion component refresh if present
    }, 500);
};
var onSidebarClose = function () {
    setTimeout(notifyResize, 400);
    setTimeout(function () {
        var _a, _b, _c, _d;
        var el = document.getElementById('analytic_dashboard');
        (_d = (_c = (_b = (_a = el) === null || _a === void 0 ? void 0 : _a.ej2_instances) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.refresh) === null || _d === void 0 ? void 0 : _d.call(_c); // calls Syncfusion component refresh if present
    }, 500);
};
var folderEle = '<div class= "e-folder"><div class="e-Menu">HR Management Dashboard </div></div>';
var HRManagementDashboard = /** @class */ (function (_super) {
    __extends(HRManagementDashboard, _super);
    function HRManagementDashboard(props) {
        var _this = _super.call(this, props) || this;
        _this.dashboardObj = null;
        _this.sidebarobj = null;
        _this.toolbarCliked = function (args) {
            var _a;
            if (args.item.tooltipText == "Menu") {
                (_a = _this.sidebarobj) === null || _a === void 0 ? void 0 : _a.toggle();
            }
        };
        _this.onSidebarCreated = function () {
            var _a;
            if (_this.sidebarobj) {
                (_a = _this.sidebarobj) === null || _a === void 0 ? void 0 : _a.hide();
            }
        };
        _this.onYearChange = function (y) { return _this.setState({ selectedYear: y }); };
        _this.onMonthChange = function (months) { return _this.setState({ selectedMonths: months }); };
        _this.renderDashboard = function () {
            var _a = _this.state, selectedYear = _a.selectedYear, selectedMonths = _a.selectedMonths, activeTab = _a.activeTab;
            var commonProps = {
                selectedYear: selectedYear,
                selectedMonths: selectedMonths,
                onYearChange: _this.onYearChange,
                onMonthChange: _this.onMonthChange
            };
            switch (activeTab) {
                case TABS.OVERVIEW:
                    return React.createElement(Overview, null);
                case TABS.FINANCE:
                    return React.createElement(Finance, __assign({}, commonProps));
                case TABS.RECRUITMENT:
                    return React.createElement(Recruitment, __assign({}, commonProps));
                default:
                    return React.createElement(Overview, null);
            }
        };
        _this.isLightIconTheme = function () {
            var _a;
            var cls = (((_a = document.body) === null || _a === void 0 ? void 0 : _a.className) || '').toLowerCase();
            var hash = (location.hash.split('/')[1] || '').toLowerCase();
            var key = cls || hash;
            return /(bootstrap5_3|fluent2-highcontrast|fluent2|fluent)(-dark)?/.test(key);
        };
        _this.icon = function (name) {
            return "".concat(_this.isLightIconTheme() ? 'sf-dashboard-light' : 'sf-dashboard-bold', "-").concat(name);
        };
        _this.state = { activeTab: TABS.OVERVIEW, selectedYear: 2025, selectedMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], isDocked: true };
        return _this;
    }
    HRManagementDashboard.prototype.withTooltip = function (title, node) {
        return (React.createElement(ej2_react_popups_1.TooltipComponent, { content: title, position: 'RightCenter', openDelay: 250, closeDelay: 0, showTipPointer: true }, node));
    };
    HRManagementDashboard.prototype.render = function () {
        var _this = this;
        var activeTab = this.state.activeTab;
        return (React.createElement("div", null,
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "overall_hr_management" },
                    React.createElement("div", null,
                        React.createElement(ej2_react_navigations_1.ToolbarComponent, { cssClass: "toolbar", id: "dockToolbar", clicked: this.toolbarCliked, height: "50px" },
                            React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-menu", tooltipText: "Menu" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { template: folderEle })))),
                    React.createElement("div", { id: "main-content", className: "dockmaincontent" },
                        React.createElement("div", null,
                            React.createElement("div", { className: "app-hr-management-page", style: { padding: '16px', background: '#ffffff' } }, this.renderDashboard()))),
                    React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "hr-sidebar", ref: function (element) { return (_this.sidebarobj = element); }, className: "dockSidebar", width: "240px", dockSize: "60px", target: ".dockmaincontent", enableDock: true, type: "Push", open: onSidebarOpen, close: onSidebarClose, created: this.onSidebarCreated },
                        this.withTooltip('Overview', React.createElement("div", { className: "nav-item ".concat(activeTab === TABS.OVERVIEW ? 'active' : ''), onClick: function () { return _this.setState({ activeTab: TABS.OVERVIEW }); } },
                            React.createElement("span", { className: "e-icons e-home", "aria-hidden": "true" }),
                            React.createElement("span", { className: "nav-text" }, "Overview"))),
                        this.withTooltip('Finance & Payroll', React.createElement("div", { className: "nav-item ".concat(activeTab === TABS.FINANCE ? 'active' : ''), onClick: function () { return _this.setState({ activeTab: TABS.FINANCE }); } },
                            React.createElement("span", { className: this.icon('payroll'), "aria-hidden": "true" }),
                            React.createElement("span", { className: "nav-text" }, "Finance & Payroll"))),
                        this.withTooltip('Recruitment', React.createElement("div", { className: "nav-item ".concat(activeTab === TABS.RECRUITMENT ? 'active' : ''), onClick: function () { return _this.setState({ activeTab: TABS.RECRUITMENT }); } },
                            React.createElement("span", { className: this.icon('requirement'), "aria-hidden": "true" }),
                            React.createElement("span", { className: "nav-text" }, "Recruitment")))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "The HR Management Dashboard provides a comprehensive view of workforce analytics, payroll insights, and recruitment pipeline performance. It delivers real-time intelligence across employee demographics, compensation trends, departmental productivity, and hiring metrics. With interactive filters and dynamic visualizations, HR teams can monitor KPIs, analyze new joiners, track hiring progress, and optimize payroll accuracy. The dashboard seamlessly integrates employee lifecycle data, financial payroll metrics, and recruitment funnel analytics into one unified platform."))));
    };
    return HRManagementDashboard;
}(sample_base_1.SampleBase));
exports.HRManagementDashboard = HRManagementDashboard;
