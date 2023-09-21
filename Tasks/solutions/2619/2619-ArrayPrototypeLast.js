"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.last = function () {
    console.log(+this.slice(-1));
};
var arr = [1, 2, 3];
arr.last(); // 3
