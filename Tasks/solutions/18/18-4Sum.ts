export function fourSum(nums: number[], target: number): number[][] {
	nums.sort((a, b) => a - b);
	let answer = [];
	let l = 0;
	let r = nums.length - 1;
	while (l < r) {
		const sum = nums[l] + nums[l + 1] + nums[r] + nums[r - 1];
		if (sum === target) {
			answer.push([nums[l], nums[l + 1], nums[r], nums[r - 1]]);
		}
		if (sum > target) {
			r--;
		} else {
			l++;
		}
	}
	return answer;
}
