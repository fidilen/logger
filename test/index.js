const logger = require('../index.js');

(
    async function () {
        // out
        await logger.out("Passed: log with no callback");

        await logger.out("log with callback", async (message) => {
            console.log("Passed: log:", message);
        });

        // info
        await logger.info("Passed: info with no callback");

        await logger.info("info with callback", async (message) => {
            console.info("Passed: info:", message);
        });

        // warn
        await logger.warn("Passed: warn with no callback");

        await logger.warn("warn with callback", async (message) => {
            console.warn("Passed: warn:", message);
        });

        // error
        try {
            const error = new Error("Error!")
            error.code = "500"

            throw error;
        } catch (e) {
            await logger.error("Passed: error with no callback");
        }

        try {
            const error = new Error("Error!")
            error.code = "500"

            throw error;
        } catch (e) {
            await logger.error(e, async (message, code) => {
                console.log("Passed: error with no callback:", message, code);
            });
        }

        // trycatch
        await logger.trycatch(
            async () => {
                const error = new Error("trycatch with no catchFunc");
                error.code = "500"

                throw error;
            });

        await logger.trycatch(
            async () => {
                const error = new Error("Passed: trycatch with catchFunc");
                error.code = "500"

                throw error;
            },
            async (message, code) => {
                console.log(message, code);
            });
    }
)();