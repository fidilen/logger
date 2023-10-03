/**
 * Console log a message
 * @param message - text to print
 * @param callback - function to call after logging
 */
async function out(message, callback) {
    console.log(message);

    await triggerCallback(callback, message);
}

/**
 * Console info a message
 * @param message - text to print
 * @param callback - function to call after logging
 */
async function info(message, callback) {
    console.info(message);

    await triggerCallback(callback, message);
}

/**
 * Console warn a message
 * @param message - text to print
 * @param callback - function to call after logging
 */
async function warn(message, callback) {
    console.warn(message);

    await triggerCallback(callback, message);
}

/**
 * Console warn a message
 * @param e - entire exception thrown
 * @param callback - function to call after logging
 */
async function error(e, callback) {
    console.error(JSON.stringify(e, null, 2));

    if (callback) {
        await callback(e.message, e.code);
    }
}

/**
 * Console warn a message
 * @param tryFunc - function to call in try block
 * @param catchFunc - function to call in catch block
 */
async function trycatch(tryFunc, catchFunc) {
    try {
        await tryFunc();
    } catch (e) {
        await error(e, catchFunc);
    }
}

async function triggerCallback(callback, message) {
    if (callback) {
        await callback(message);
    }
}

module.exports = { out, info, warn, error, trycatch };