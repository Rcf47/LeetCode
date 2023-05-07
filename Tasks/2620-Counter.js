"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCounter = void 0;
function createCounter(n) {
    return function () {
        return n++;
    };
}
exports.createCounter = createCounter;
