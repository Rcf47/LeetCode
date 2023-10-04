export function longestPalindromisSubstring(s: string): string {
	if (s.length < 2) {
		return s;
	}
	let longest = "";
	for (let i = 0; i < s.length; i++) {
		const oddPalindrode = expandAroundCenter(s, i, i);
		const evenPalindrome = expandAroundCenter(s, i, i + 1);

		const currentLongest =
			oddPalindrode.length > evenPalindrome.length ? oddPalindrode : evenPalindrome;

		if (currentLongest.length > longest.length) {
			longest = currentLongest;
		}
	}
	return longest;
}

function expandAroundCenter(s: string, left: number, right: number) {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--;
		right++;
	}
	return s.substring(left + 1, right);
}

console.log(longestPalindromisSubstring("abbacdefds"));
