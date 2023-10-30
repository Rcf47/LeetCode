export function findKOr(nums: number[], k: number): number {
	let result = 0;
	for (let bit = 0; bit < 31; bit++) {
		let count = 0;
		for (const num of nums) {
			if ((num & (1 << bit)) !== 0) {
				count++;
			}
		}
		if (count >= k) {
			result |= 1 << bit;
		}
	}
	return result;
}
