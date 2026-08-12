/**
 * Creates a mutex that prevents concurrent execution
 *
 * @returns {Function} Mutex function that executes callbacks sequentially
 * @hidden
 */
export function createMutex() {
    var locked = false;
    return function (callback) {
        if (locked) {
            return;
        }
        locked = true;
        try {
            return callback();
        }
        finally {
            locked = false;
        }
    };
}
/**
 * Creates a throttled version of a function that executes at most once per interval
 *
 * @param {Function} func - Function to throttle
 * @param {number} limit - Throttle interval in milliseconds
 * @returns {Function} Throttled function
 * @hidden
 */
export function throttle(func, limit) {
    var inThrottle = false;
    var lastArgs = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!inThrottle) {
            func.apply(void 0, args);
            inThrottle = true;
            setTimeout(function () {
                inThrottle = false;
                if (lastArgs !== null) {
                    func.apply(void 0, lastArgs);
                    lastArgs = null;
                }
            }, limit);
        }
        else {
            lastArgs = args;
        }
    };
}
