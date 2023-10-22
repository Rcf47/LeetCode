function minimumSum(nums: number[]): number {
	if (nums.length < 2) {
		return -1;
	}
	let minSum = 0;
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			for (let k = 2; k < nums.length; k++) {
				if (i < j && j < k && nums[i] < nums[j] && nums[k] < nums[j]) {
					result = nums[i] + nums[j] + nums[k];
					if (minSum === 0) {
						minSum = result;
					}
					if (minSum > result) {
						minSum = result;
					}
				}
			}
		}
	}
	if (minSum === 0 && result === 0) {
		return -1;
	}
	return minSum;
}
