export function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1,
			right = nums.length - 1;
		while (left < right && i !== left && i !== right && left !== right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum < 0) {
				left++;
			} else if (sum > 0) {
				right--;
			} else {
				result.push([nums[i], nums[left], nums[right]]);
				break;
			}
		}
	}
	return result;
}
