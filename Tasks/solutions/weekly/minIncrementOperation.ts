export function minIncrementOperation(nums: number[], k: number): number {
	let i = 0;
	let incrementCount = 0;
	while (i <= nums.length - 3) {
		let j = i + 1;
		let n = j + 1;
		const maxNum = Math.max(nums[i], nums[j], nums[n]);

		if (maxNum < k) {
			const diff = k - maxNum;
			incrementCount += diff;
			const index = [nums[i], nums[j], nums[n]].indexOf(maxNum);
			nums[index] = k;
		}
		i++;
	}
	return incrementCount;
}

const nums = [2, 3, 0, 0, 2];
const k = 4;
console.log(minIncrementOperation(nums, k));
