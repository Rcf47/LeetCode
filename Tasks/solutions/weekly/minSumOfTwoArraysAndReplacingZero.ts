//not working
export function minSum(nums1: number[], nums2: number[]): number {
	let countZero1 = 0;
	let countZero2 = 0;
	let sum1 = 0;
	let sum2 = 0;
	for (const num of nums1) {
		if (num === 0) {
			countZero1++;
		}
		sum1 += num;
	}
	for (const num of nums2) {
		if (num === 0) {
			countZero2++;
		}
		sum2 += num;
	}
	if (countZero1 === 0) {
	}
}
