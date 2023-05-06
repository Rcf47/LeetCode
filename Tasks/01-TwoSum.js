"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum1 = exports.twoSum = void 0;
function twoSum(nums, target) {
    var answer = [];
    var _loop_1 = function (num) {
        var checkNumber = target - num;
        if (nums.find(function (item, index) { return item === checkNumber && index !== nums.indexOf(num); })) {
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
function twoSum1(nums, target) {
    var answer = [];
    var _loop_2 = function (i) {
        var checkNumber = target - nums[i];
        if (nums.find(function (item, index) { return item === checkNumber && index !== i; })) {
            var index1 = i;
            var index2 = nums.findIndex(function (item, index) { return item === checkNumber && index !== i; });
            answer.push(index1);
            answer.push(index2);
            return { value: answer };
        }
    };
    for (var i = 0; i <= nums.length; i++) {
        var state_2 = _loop_2(i);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    return answer;
}
exports.twoSum1 = twoSum1;
;
