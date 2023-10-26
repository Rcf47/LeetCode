export function threeSumClosest(nums: number[], target: number): number {
	let i = 0;
	let j = 1;
	let k = 2;
	let sum;
	let diff;
	let maxDiff = Infinity;
	let result = 0;
	while (k <= nums.length - 1) {
		sum = nums[i] + nums[j] + nums[k];
		if (target < 0) {
			diff = target + sum;
		} else {
			diff = target - sum;
		}
		if (diff === 0) {
			return sum;
		}
		if (diff < maxDiff) {
			maxDiff = diff;
			result = sum;
		}
		i++;
		j++;
		k++;
	}
	return result;
}
