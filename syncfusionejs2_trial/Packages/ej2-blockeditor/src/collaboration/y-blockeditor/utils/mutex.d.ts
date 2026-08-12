/**
 * Creates a mutex that prevents concurrent execution
 *
 * @returns {Function} Mutex function that executes callbacks sequentially
 * @hidden
 */
export declare function createMutex(): <T>(callback: () => T) => T | void;
/**
 * Creates a throttled version of a function that executes at most once per interval
 *
 * @param {Function} func - Function to throttle
 * @param {number} limit - Throttle interval in milliseconds
 * @returns {Function} Throttled function
 * @hidden
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
