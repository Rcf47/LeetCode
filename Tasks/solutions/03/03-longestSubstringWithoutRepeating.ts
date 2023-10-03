//wrong solution we need to use sliding window
export function lengthOfLongestSubstring(s: string): number {
	type hashString = {
		[char: string]: number;
	};
	const hashUniqueString: hashString = {};
	let checkSubstring = true;
	let result = 0;
	for (let i = 0; i <= s.length; i++) {
		if (!(s[i] in hashUniqueString)) {
			hashUniqueString[s[i]] = 1;
			if (checkSubstring) {
				result++;
			}
			checkSubstring = true;
		} else {
			checkSubstring = false;
		}
	}
	return result;
}
