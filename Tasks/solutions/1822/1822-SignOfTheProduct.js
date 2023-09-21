function arraySign(nums) {
    var productOfNum = nums.reduce(function (acc, item) { return acc * item; }, 1);
    if (productOfNum > 0) {
        return 1;
    }
    if (productOfNum < 0) {
        return -1;
    }
    return 0;
}
;
var nums = [-1, -2, -3, -4, 3, 2, 1];
console.log(arraySign(nums));
