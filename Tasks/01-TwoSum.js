"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
function twoSum(nums, target) {
    var answer = [];
    var _loop_1 = function (num) {
        var checkNumber = target - num;
        if (nums.find(function (item) { return item === checkNumber; })) {
            var index1 = nums.indexOf(num);
            var index2 = nums.indexOf(checkNumber);
            answer.push(index1);
            answer.push(index2);
            return { value: answer };
        }
    };
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var state_1 = _loop_1(num);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return answer;
}
exports.twoSum = twoSum;
;
twoSum([2, 7, 11, 15], 9);
