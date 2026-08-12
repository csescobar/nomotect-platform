/**
 * To render and update event markers in Gantt
 */
import { Gantt } from '../base/gantt';
export declare class EventMarker {
    /**
     * Reference to the parent Gantt component instance.
     * @type {Gantt}
     */
    parent: Gantt;
    /**
     * DOM container element for rendering event marker strips.
     * Holds all vertical marker lines positioned on the timeline.
     * @type {HTMLElement}
     */
    eventMarkersContainer: HTMLElement;
    /**
     * Regex pattern for ISO date format detection (YYYY-MM-DD).
     * Cached at class level for performance optimization (avoids recompilation on each call).
     * @type {RegExp}
     * @readonly
     * @private
     */
    private readonly ISO_DATE_PATTERN;
    /**
     * Initializes the EventMarker renderer.
     * @param {Gantt} gantt - The parent Gantt component instance
     */
    constructor(gantt: Gantt);
    /**
     * @returns {void} .
     * @private
     */
    renderEventMarkers(): void;
    /**
     * @returns {void} .
     * @private
     */
    removeContainer(): void;
    /**
     * Method to get event markers as html string
     *
     * @param {HTMLElement} container .
     * @returns {void} .
     */
    private getEventMarkersElements;
    /**
     * Detects whether the user input represents a date-only value (no explicit time component).
     *
     * This method distinguishes between:
     * - **Date-only inputs**: "2025-04-01", new Date("2025-04-01"), new Date(2025, 3, 1)
     * - **Datetime inputs**: "2025-04-01T14:30:00", new Date(2025, 3, 1, 14, 30)
     *
     * For Date objects, it checks both local and UTC midnight to handle timezone offsets:
     * - Local midnight: Detects dates created with constructor (e.g., new Date(2025, 3, 1))
     * - UTC midnight: Detects ISO-parsed dates (e.g., new Date("2025-04-01"))
     *
     * @param {string | Date} input - The original user-provided event marker date
     * @param {Date} dateObj - The parsed Date object for comparison
     * @returns {boolean} true if input is date-only (no explicit time), false if explicit time provided
     *
     * @example
     * // String inputs
     * isDateOnlyInput("2025-04-01", dateObj) → true (date-only)
     * isDateOnlyInput("2025-04-01T14:30:00", dateObj) → false (explicit time)
     *
     * // Date objects (both timezone-aware cases)
     * isDateOnlyInput(new Date(2025, 3, 1), dateObj) → true (local midnight)
     * isDateOnlyInput(new Date("2025-04-01"), dateObj) → true (UTC midnight, ISO detected)
     *
     * @private
     */
    private isDateOnlyInput;
    /**
     * Checks if the input string contains an explicit non-midnight time component.
     *
     * This method validates whether the user explicitly provided a specific time (not just midnight).
     * It only processes string inputs; Date objects are assumed to have implicit times.
     *
     * Time is considered "explicit" if:
     * - String contains a time separator ':' AND
     * - Extracted time is NOT 00:00:00 (midnight)
     *
     * Supports multiple time format separators:
     * - ISO format with 'T': "2025-04-01T14:30:00"
     * - Space separator: "2025-04-01 14:30:00"
     * - Locale formats with colons: "01-04-2025 14:30"
     *
     * @param {string | Date} input - The original user-provided event marker date
     * @returns {boolean} true if string has explicit non-midnight time, false otherwise
     *
     * @example
     * // Date-only strings (no explicit time)
     * hasExplicitTime("2025-04-01") → false (no time)
     * hasExplicitTime("2025-04-01T00:00:00") → false (midnight is implicit)
     *
     * // Datetime strings with explicit times
     * hasExplicitTime("2025-04-01T14:30:00") → true (explicit time)
     * hasExplicitTime("2025-04-01 07:15:30") → true (explicit time)
     *
     * // Date objects (not analyzed for time)
     * hasExplicitTime(new Date(2025, 3, 1, 14, 30)) → false (Date objects ignored)
     *
     * @private
     */
    private hasExplicitTime;
    /**
     * Normalizes a date to local midnight while preserving the intended visual date.
     *
     * This method solves the timezone offset problem where ISO dates like "2025-04-01"
     * are parsed as UTC midnight but render at an offset time in local timezones.
     *
     * **Problem Example (IST timezone, UTC+5:30):**
     * - Input: "2025-04-01" (intended: April 1st)
     * - Parsed as: 2025-04-01 00:00:00 UTC
     * - Browser converts to: 2025-04-01 05:30:00 IST
     * - Without fix: getTaskLeft() uses 05:30 → renders April 1 afternoon ❌
     * - With fix: Normalizes to 00:00 IST → renders April 1 morning ✓
     *
     * **Algorithm:**
     * 1. Detects input origin (ISO string, ISO-parsed Date, or local Date)
     * 2. For ISO dates: Extract Y/M/D from UTC values
     * 3. For local dates: Extract Y/M/D from local values
     * 4. Reconstructs as local midnight: new Date(year, month, day, 0, 0, 0, 0)
     *
     * **Timezone Examples:**
     * - IST (UTC+5:30): April 1 UTC → April 1 00:00 IST
     * - EST (UTC-5): April 1 UTC → April 1 00:00 EST (not March 31)
     * - UTC (±0): April 1 UTC → April 1 00:00 UTC
     *
     * @param {Date} date - The parsed Date object to normalize
     * @param {string | Date} [input] - Optional original user input (helps detect ISO format strings)
     * @returns {Date} Date object representing local midnight of the visual date
     *
     * @example
     * // ISO string case
     * normalizeToTimezone(new Date("2025-04-01"), "2025-04-01")
     * → new Date(2025, 3, 1) (IST: 2025-04-01 00:00:00 IST)
     *
     * // ISO-parsed Date object case
     * normalizeToTimezone(new Date("2025-04-01"))
     * → Detects ISO origin via isISODateObject() → uses UTC values
     * → new Date(2025, 3, 1) (IST: 2025-04-01 00:00:00 IST)
     *
     * // Local Date object case
     * normalizeToTimezone(new Date(2025, 3, 1))
     * → Uses local values → new Date(2025, 3, 1) (unchanged, already correct)
     *
     * @private
     * @see isISODateObject For ISO-origin detection logic
     */
    private normalizeToTimezone;
    /**
     * Detects whether a Date object originated from ISO string parsing.
     *
     * **Detection Pattern:**
     * ISO dates like "2025-04-01" are parsed by JavaScript as UTC midnight (00:00:00 UTC).
     * When a non-UTC timezone is active, the browser applies an offset, creating a distinctive pattern:
     * - UTC time IS midnight (the parsed UTC value)
     * - Local time is NOT midnight (timezone offset applied)
     *
     * This pattern is unique to ISO-parsed dates and doesn't occur with:
     * - Local constructor dates: new Date(2025, 3, 1) → UTC offset is applied backward
     * - Explicit times: getUTCHours() ≠ 0 → not UTC midnight
     *
     * **Examples (IST timezone, UTC+5:30):**
     *
     * ISO-parsed (returns true):
     * ```
     * new Date("2025-04-01")
     * → UTC: 2025-04-01 00:00:00.000 ✓ (midnight)
     * → Local: 2025-04-01 05:30:00 ✓ (NOT midnight, offset applied)
     * ```
     *
     * Local constructor (returns false):
     * ```
     * new Date(2025, 3, 1)
     * → UTC: 2025-03-31 18:30:00.000 ✗ (NOT midnight)
     * → Local: 2025-04-01 00:00:00 (midnight)
     * ```
     *
     * Explicit time (returns false):
     * ```
     * new Date("2025-04-01T14:30:00Z")
     * → UTC: 2025-04-01 14:30:00.000 ✗ (NOT midnight)
     * → Local: 2025-04-01 20:00:00
     * ```
     *
     * @param {Date} date - The Date object to analyze
     * @returns {boolean} true if Date originated from ISO string parsing, false otherwise
     *
     * @private
     */
    private isISODateObject;
    /**
     * @returns {void} .
     * @private
     */
    updateContainerHeight(): void;
}
