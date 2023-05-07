"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCounter = void 0;
function createCounter(n) {
    var counter = n;
    return function () {
        return counter++;
    };
}
exports.createCounter = createCounter;
