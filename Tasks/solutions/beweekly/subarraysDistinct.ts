function sumCounts(nums: number[]): number {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		let distinctvalues = new Set<number>();
		for (let j = i; j < nums.length; j++) {
			distinctvalues.add(nums[j]);
			sum += Math.pow(distinctvalues.size, 2);
		}
	}
	return sum;
}
