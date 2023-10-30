export function minIncrementOperation(nums: number[], k: number): number {
	let count = 0;
	const n = nums.length;
	for (let i = 2; i < n; i++) {
		const subarray = nums.slice(i - 2, i + 1);
		const max = Math.max(...subarray);
		if (max < k) {
			count += k - max;
			const index = subarray.lastIndexOf(max);
			nums[index] += k - max;
		}
	}
	return count;
}
