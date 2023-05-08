"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
function average(salary) {
    var max = Math.max.apply(Math, salary);
    var min = Math.min.apply(Math, salary);
    var maxIndex = salary.indexOf(max);
    var minIndex = salary.indexOf(min);
    var newSalary = salary.filter(function (item) { return item !== max; });
    newSalary = newSalary.filter(function (item) { return item !== min; });
    var sumOfNewSalary = newSalary.reduce(function (acc, item) { return acc + item; }, 0);
    return sumOfNewSalary / newSalary.length;
}
exports.average = average;
console.log(average([4000, 2000, 3000, 1000]));
