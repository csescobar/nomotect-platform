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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { yVersionHistoryKey } from './keys';
var MAX_SNAPSHOT_INTERVAL_MS = 60000; // 1 minute (fallback safety net)
var MIN_CHANGES_BETWEEN_SNAPSHOTS = 1; // 1 (Prevents empty snapshots)
var VersionHistory = /** @class */ (function () {
    function VersionHistory() {
        var _this = this;
        this.snapshots = [];
        this.changesSinceSnapshot = 0;
        this.isDestroyed = false;
        this.debounceTimer = null;
        this.safetyNetTimer = null;
        /**
         * Resolves when version history initialization completes.
         *
         * @returns {Promise<void>} - The promise
         */
        this.whenReady = function () {
            return _this.initPromise;
        };
        /**
         * Captures the current document state as a named snapshot.
         *
         * @param {SnapshotOptions} options - Options for creating snapshots
         * @returns {Promise<VersionSnapshot>} - The created snapshot.
         */
        this.createSnapshot = function (options) { return __awaiter(_this, void 0, void 0, function () {
            var snapshot, args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        snapshot = {
                            id: this.generateId(),
                            lastModifiedAt: Date.now(),
                            lastModifiedBy: (options ? options.modifiedBy : null) || this.blockManager.currentUserId,
                            label: options ? options.label : '',
                            documentState: this.YRuntime.encodeStateAsUpdate(this.yDoc)
                        };
                        this.snapshots.push(snapshot);
                        this.changesSinceSnapshot = 0;
                        return [4 /*yield*/, this.vhSettings.storage.saveSnapshot(snapshot)];
                    case 1:
                        _a.sent();
                        if (this.vhSettings.snapshotCreated) {
                            args = { snapshot: snapshot };
                            this.vhSettings.snapshotCreated.call(this, args);
                        }
                        return [2 /*return*/, snapshot];
                }
            });
        }); };
        /**
         * Renames an existing snapshot.
         *
         * @param {string} snapshotId - Snapshot ID.
         * @param {string} newLabel - Updated snapshot label.
         * @returns {Promise<VersionSnapshot>} - Updated snapshot.
         */
        this.renameSnapshot = function (snapshotId, newLabel) { return __awaiter(_this, void 0, void 0, function () {
            var normalizedLabel, snapshot, updatedSnapshot, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        normalizedLabel = newLabel.trim();
                        snapshot = this.snapshots.find(function (snap) { return snap.id === snapshotId; });
                        if (!snapshot) {
                            throw new Error("Snapshot with id \"" + snapshotId + "\" not found");
                        }
                        updatedSnapshot = __assign({}, snapshot, { label: normalizedLabel });
                        index = this.snapshots.findIndex(function (snap) { return snap.id === snapshotId; });
                        this.snapshots[index] = updatedSnapshot;
                        return [4 /*yield*/, this.vhSettings.storage.saveSnapshot(updatedSnapshot)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, updatedSnapshot];
                }
            });
        }); };
        /**
         * Restores the document to a previously saved snapshot.
         * A 'restore-point' backup is automatically created before applying the snapshot.
         *
         * @param {string} versionId - ID of the snapshot to restore.
         * @returns {Promise<VersionSnapshot>} - The backup snapshot created before restore.
         */
        this.restoreSnapshot = function (versionId) { return __awaiter(_this, void 0, void 0, function () {
            var target, backup, tempDoc, tempFragment, conversion, blocks, args;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = this.snapshots.find(function (s) { return s.id === versionId; });
                        if (!target) {
                            return [2 /*return*/, Promise.reject(new Error("Snapshot not found: " + versionId))];
                        }
                        return [4 /*yield*/, this.createSnapshot({
                                label: "Before restore to: " + (target.label || target.id),
                                modifiedBy: this.blockManager.currentUserId
                            })];
                    case 1:
                        backup = _a.sent();
                        tempDoc = new this.YRuntime.Doc();
                        this.YRuntime.applyUpdate(tempDoc, target.documentState);
                        tempFragment = tempDoc.getXmlFragment('blockeditor');
                        conversion = this.collabManager.syncBinding.conversion;
                        blocks = conversion.yFragmentToBlocks(tempFragment);
                        this.yDoc.transact(function () {
                            if (_this.yFragment.length > 0) {
                                _this.yFragment.delete(0, _this.yFragment.length);
                            }
                            var yElements = blocks.map(function (block) { return conversion.blockModelToYElement(block); });
                            if (yElements.length > 0) {
                                _this.yFragment.push(yElements);
                            }
                        }, yVersionHistoryKey);
                        tempDoc.destroy();
                        if (this.vhSettings.snapshotRestored) {
                            args = {
                                snapshot: target,
                                backupSnapshot: backup
                            };
                            this.vhSettings.snapshotRestored.call(this, args);
                        }
                        return [2 /*return*/, backup];
                }
            });
        }); };
        /**
         * Returns snapshots ordered from newest to oldest.
         *
         * Supports pagination for large version histories.
         *
         * @param {number} limit - Maximum number of results to return.
         * @param {number} offset - Number of results to skip from the start.
         * @returns {VersionSnapshot[]} - Ordered list of matching snapshots (newest first).
         */
        this.getSnapshots = function (limit, offset) {
            if (limit === void 0) { limit = 50; }
            if (offset === void 0) { offset = 0; }
            var list = _this.snapshots.slice();
            // Most recent first
            list.sort(function (a, b) { return b.lastModifiedAt - a.lastModifiedAt; });
            return list.slice(offset, offset + limit);
        };
        /**
         * Computes a structural diff summary between two snapshots.
         *
         * @param {string} versionIdA - ID of the first (earlier) snapshot.
         * @param {string} versionIdB - ID of the second (later) snapshot.
         * @returns {VersionDiff | null} - Diff summary, or null if either snapshot is not found.
         */
        this.compareVersions = function (versionIdA, versionIdB) {
            var snapA = _this.snapshots.find(function (s) { return s.id === versionIdA; });
            var snapB = _this.snapshots.find(function (s) { return s.id === versionIdB; });
            if (!snapA || !snapB) {
                return null;
            }
            var docA = new _this.YRuntime.Doc();
            var docB = new _this.YRuntime.Doc();
            _this.YRuntime.applyUpdate(docA, snapA.documentState);
            _this.YRuntime.applyUpdate(docB, snapB.documentState);
            var fragA = docA.getXmlFragment('blockeditor');
            var fragB = docB.getXmlFragment('blockeditor');
            var lengthA = _this.computeFragmentLength(fragA);
            var lengthB = _this.computeFragmentLength(fragB);
            var diff = {
                blockCountDelta: fragB.length - fragA.length,
                lengthDelta: lengthB - lengthA,
                timestampDelta: snapB.lastModifiedAt - snapA.lastModifiedAt,
                labelA: snapA.label,
                labelB: snapB.label
            };
            docA.destroy();
            docB.destroy();
            return diff;
        };
        /**
         * Permanently deletes a snapshot from memory and storage.
         *
         * @param {string} versionId - ID of the snapshot to delete.
         * @returns {Promise<void>} The promise
         */
        this.deleteSnapshot = function (versionId) { return __awaiter(_this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = this.snapshots.findIndex(function (s) { return s.id === versionId; });
                        if (index === -1) {
                            return [2 /*return*/];
                        }
                        this.snapshots.splice(index, 1);
                        return [4 /*yield*/, this.vhSettings.storage.deleteSnapshot(versionId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Applies pyramid retention: prunes old snapshots while keeping
         * meaningful milestones (user-labelled or explicitly tagged).
         *
         * Retention tiers (from most recent):
         *   - Last 1 hour  : keep all
         *   - Last 24 hours: keep one per hour
         *   - Last 7 days  : keep one per day
         *   - Last 30 days : keep one per week
         *   - Older        : delete (unless user-labelled)
         *
         * @returns {Promise<number>} - Number of snapshots removed.
         */
        this.pruneVersions = function () { return __awaiter(_this, void 0, void 0, function () {
            var now, HOUR, DAY, WEEK, MONTH, toDelete, hourBucket, dayBucket, weekBucket, sorted, _i, sorted_1, snap, age, bucket, bucket, bucket, isUserLabelled, _a, toDelete_1, snap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        now = Date.now();
                        HOUR = 60 * 60 * 1000;
                        DAY = 24 * HOUR;
                        WEEK = 7 * DAY;
                        MONTH = 30 * DAY;
                        toDelete = [];
                        hourBucket = new Map();
                        dayBucket = new Map();
                        weekBucket = new Map();
                        sorted = this.snapshots.slice().sort(function (a, b) { return b.lastModifiedAt - a.lastModifiedAt; });
                        for (_i = 0, sorted_1 = sorted; _i < sorted_1.length; _i++) {
                            snap = sorted_1[_i];
                            age = now - snap.lastModifiedAt;
                            if (age <= HOUR) {
                                // Tier 1 — keep everything
                                continue;
                            }
                            if (age <= DAY) {
                                bucket = this.toHourBucket(snap.lastModifiedAt);
                                if (hourBucket.has(bucket)) {
                                    toDelete.push(snap);
                                }
                                else {
                                    hourBucket.set(bucket, snap);
                                }
                                continue;
                            }
                            if (age <= WEEK) {
                                bucket = this.toDayBucket(snap.lastModifiedAt);
                                if (dayBucket.has(bucket)) {
                                    toDelete.push(snap);
                                }
                                else {
                                    dayBucket.set(bucket, snap);
                                }
                                continue;
                            }
                            if (age <= MONTH) {
                                bucket = this.toWeekBucket(snap.lastModifiedAt);
                                if (weekBucket.has(bucket)) {
                                    toDelete.push(snap);
                                }
                                else {
                                    weekBucket.set(bucket, snap);
                                }
                                continue;
                            }
                            isUserLabelled = snap.label && snap.label.length > 0;
                            // Older than 30 days — delete (unless user-labelled)
                            if (!isUserLabelled) {
                                toDelete.push(snap);
                            }
                        }
                        this.snapshots = this.snapshots.filter(function (snap) { return toDelete.indexOf(snap) === -1; });
                        _a = 0, toDelete_1 = toDelete;
                        _b.label = 1;
                    case 1:
                        if (!(_a < toDelete_1.length)) return [3 /*break*/, 4];
                        snap = toDelete_1[_a];
                        return [4 /*yield*/, this.vhSettings.storage.deleteSnapshot(snap.id)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _a++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, toDelete.length];
                }
            });
        }); };
        /**
         * Exports a snapshot to a JSON-serialisable object (documentState as base64).
         *
         * @param {string} versionId - ID of the snapshot to export.
         * @returns {ExportedVersion | null} - Exported object, or null when not found.
         */
        this.exportSnapshot = function (versionId) {
            var snap = _this.snapshots.find(function (s) { return s.id === versionId; });
            if (!snap) {
                return null;
            }
            var binaryStr = Array.from(snap.documentState)
                .map(function (byte) { return String.fromCharCode(byte); })
                .join('');
            return {
                snapshot: snap,
                stateUpdateBase64: btoa(binaryStr)
            };
        };
        /**
         * Imports a previously exported snapshot into memory and storage.
         *
         * @param {ExportedVersion} exported - The exported version object.
         * @returns {Promise<VersionSnapshot>} - The imported snapshot.
         */
        this.importSnapshot = function (exported) { return __awaiter(_this, void 0, void 0, function () {
            var binaryStr, documentState, i, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        binaryStr = atob(exported.stateUpdateBase64);
                        documentState = new Uint8Array(binaryStr.length);
                        for (i = 0; i < binaryStr.length; i++) {
                            documentState[i] = binaryStr.charCodeAt(i);
                        }
                        snapshot = {
                            id: exported.snapshot.id,
                            lastModifiedAt: exported.snapshot.lastModifiedAt,
                            lastModifiedBy: exported.snapshot.lastModifiedBy,
                            label: exported.snapshot.label,
                            documentState: documentState
                        };
                        this.snapshots.push(snapshot);
                        return [4 /*yield*/, this.vhSettings.storage.saveSnapshot(snapshot)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, snapshot];
                }
            });
        }); };
        this.loadFromStorage = function () { return __awaiter(_this, void 0, void 0, function () {
            var loaded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vhSettings.storage.loadAllSnapshots()];
                    case 1:
                        loaded = _a.sent();
                        this.snapshots = loaded;
                        return [2 /*return*/];
                }
            });
        }); };
    }
    /**
     * Initializes the version history module
     *
     * @param {BlockManager} blockManager - The manager instance
     * @param {CollaborationSettingsModel} settings - The Collaboration settings
     * @returns {void}
     * @hidden
     */
    VersionHistory.prototype.initialize = function (blockManager, settings) {
        this.blockManager = blockManager;
        this.collabManager = this.blockManager.collaborationModule;
        this.settings = settings;
        this.yDoc = this.settings.adapter.yXmlFragment.doc;
        this.yFragment = this.settings.adapter.yXmlFragment;
        this.vhSettings = this.settings.versionHistory;
        this.YRuntime = this.collabManager.getYRuntime();
        this.observeDeepFn = this.onYjsChange.bind(this);
        this.initPromise = this.loadFromStorage();
        this.setupObserver();
        this.setupSafetyNetTimer();
    };
    /**
     * To get component name.
     *
     * @returns {string} - It returns the module name.
     * @private
     */
    VersionHistory.prototype.getModuleName = function () {
        return 'versionHistory';
    };
    /**
     * Returns the total number of snapshots currently held in memory.
     *
     * @returns {number} - Snapshot count.
     */
    VersionHistory.prototype.getSnapshotCount = function () {
        return this.snapshots.length;
    };
    /**
     * Cleans up all timers and observers.  Call when the editor is destroyed.
     *
     * @returns {void}
     */
    VersionHistory.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this.isDestroyed = true;
        this.yFragment.unobserveDeep(this.observeDeepFn);
        if (this.debounceTimer !== null) {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = null;
        }
        if (this.safetyNetTimer !== null) {
            clearInterval(this.safetyNetTimer);
            this.safetyNetTimer = null;
        }
    };
    VersionHistory.prototype.setupObserver = function () {
        this.yFragment.observeDeep(this.observeDeepFn);
    };
    VersionHistory.prototype.onYjsChange = function (events, tr) {
        // Ignore version-control transactions to avoid recursive snapshots
        if (tr.origin === yVersionHistoryKey) {
            return;
        }
        // Tier 1 — only structural block operations trigger the debounce
        var isStructural = this.hasStructuralChange(events);
        if (isStructural) {
            this.changesSinceSnapshot++;
            this.scheduleDebouncedSnapshot();
        }
    };
    VersionHistory.prototype.hasStructuralChange = function (events) {
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            var isRootLevel = event_1.target === this.collabManager.adapter.yXmlFragment;
            var isNestedLevel = event_1.target instanceof this.YRuntime.XmlElement;
            // XmlEvent on XmlElement or XmlFragment with childList delta => structural
            if (isRootLevel || isNestedLevel) {
                var changes = event_1.changes;
                if (changes && changes.delta && (changes.delta).length > 0) {
                    var delta = changes.delta;
                    var hasInsertOrDelete = delta.some(function (op) { return op.insert !== undefined || op.delete !== undefined; });
                    if (hasInsertOrDelete) {
                        return true;
                    }
                }
                // Attribute change on a block element (type transform, indent, etc.)
                if (changes && changes.keys && changes.keys.size > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    VersionHistory.prototype.scheduleDebouncedSnapshot = function () {
        var _this = this;
        if (this.debounceTimer !== null) {
            clearTimeout(this.debounceTimer);
        }
        this.debounceTimer = setTimeout(function () {
            _this.debounceTimer = null;
            if (!_this.isDestroyed) {
                _this.createSnapshot();
            }
        }, this.vhSettings.snapshotInterval);
    };
    VersionHistory.prototype.setupSafetyNetTimer = function () {
        var _this = this;
        this.safetyNetTimer = setInterval(function () {
            _this.handleSafetyNetCheck();
        }, MAX_SNAPSHOT_INTERVAL_MS);
    };
    VersionHistory.prototype.handleSafetyNetCheck = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.changesSinceSnapshot >= MIN_CHANGES_BETWEEN_SNAPSHOTS) {
            if (this.debounceTimer !== null) {
                clearTimeout(this.debounceTimer);
                this.debounceTimer = null;
            }
            this.createSnapshot();
        }
    };
    VersionHistory.prototype.generateId = function () {
        return 'v-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 11);
    };
    VersionHistory.prototype.computeFragmentLength = function (fragment) {
        var total = 0;
        var children = fragment.toArray();
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child instanceof this.YRuntime.XmlText) {
                total += child.length;
            }
            else if (child instanceof this.YRuntime.XmlElement) {
                total += this.computeElementLength(child);
            }
        }
        return total;
    };
    VersionHistory.prototype.computeElementLength = function (element) {
        var total = 0;
        var children = element.toArray();
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var child = children_2[_i];
            if (child instanceof this.YRuntime.XmlText) {
                total += child.length;
            }
            else if (child instanceof this.YRuntime.XmlElement) {
                total += this.computeElementLength(child);
            }
        }
        return total;
    };
    VersionHistory.prototype.toHourBucket = function (lastModifiedAt) {
        var d = new Date(lastModifiedAt);
        return d.getFullYear() + '-' +
            this.pad(d.getMonth() + 1) + '-' +
            this.pad(d.getDate()) + 'T' +
            this.pad(d.getHours());
    };
    VersionHistory.prototype.toDayBucket = function (lastModifiedAt) {
        var d = new Date(lastModifiedAt);
        return d.getFullYear() + '-' +
            this.pad(d.getMonth() + 1) + '-' +
            this.pad(d.getDate());
    };
    VersionHistory.prototype.toWeekBucket = function (lastModifiedAt) {
        var d = new Date(lastModifiedAt);
        // ISO week: Monday-based, year + week number
        var thursday = new Date(d.getTime());
        thursday.setDate(d.getDate() - ((d.getDay() + 6) % 7) + 3);
        var firstThursday = new Date(thursday.getFullYear(), 0, 4);
        var week = 1 + Math.round(((thursday.getTime() - firstThursday.getTime()) / 86400000 - 3 + ((firstThursday.getDay() + 6) % 7)) / 7);
        return thursday.getFullYear() + '-W' + this.pad(week);
    };
    VersionHistory.prototype.pad = function (n) {
        return n < 10 ? '0' + n : String(n);
    };
    return VersionHistory;
}());
export { VersionHistory };
