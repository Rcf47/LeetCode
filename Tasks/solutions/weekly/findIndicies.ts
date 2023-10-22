function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
	let start = 0;
	let end = nums.length - 1;
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j <= nums.length; j++) {
			if (Math.abs(i - j) >= indexDifference && nums[i] - nums[j] >= valueDifference) {
				result.push(i, j);
				return result;
			}
		}
	}
	if (result.length === 0) {
		return [-1, -1];
	}
	return result;
}
