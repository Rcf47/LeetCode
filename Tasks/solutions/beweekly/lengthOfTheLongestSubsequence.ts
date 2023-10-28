function lengthOfLongestSubsequence(nums: number[], target: number): number {
	let dp: { [key: number]: number } = { 0: 0 };
	let maxLen = -1;
	for (let num of nums) {
		let temp: { [key: number]: number } = { ...dp };
		for (let sum in temp) {
			let newSum = Number(sum) + num;
			if (newSum <= target) {
				dp[newSum] = Math.max(dp[newSum] || 0, temp[sum] + 1);
				if (newSum === target) {
					maxLen = Math.max(maxLen, dp[newSum]);
				}
			}
		}
	}
	return maxLen;
}
