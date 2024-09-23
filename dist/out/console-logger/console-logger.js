"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
    end() {
        console.log('finished');
    }
}
