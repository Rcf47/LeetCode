function minimumSum(nums: number[]): number {
	const n = nums.length;
	const l = new Array(n);
	const r = new Array(n);

	l[0] = nums[0];
	r[n - 1] = nums[n - 1];

	for (let i = 1; i < n; i++) {
		l[i] = Math.min(l[i - 1], nums[i]);
	}

	for (let i = n - 2; i >= 0; i--) {
		r[i] = Math.min(r[i + 1], nums[i]);
	}

	let mn = 2e9;

	for (let i = 1; i < n - 1; i++) {
		if (l[i] < nums[i] && r[i] < nums[i]) {
			const sum = l[i] + nums[i] + r[i];
			mn = Math.min(mn, sum);
		}
	}

	return mn === 2e9 ? -1 : mn;
}

console.log(minimumSum([8, 6, 1, 5, 3]));
