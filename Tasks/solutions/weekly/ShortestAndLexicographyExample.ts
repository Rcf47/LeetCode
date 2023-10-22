function shortestBeautifulSubstring(s: string, k: number): string {
	let onesCount = 0;
	let start = 0;
	let minSubstring = "";

	for (let end = 0; end < s.length; end++) {
		if (s[end] === "1") onesCount++;

		while (onesCount === k) {
			const currentSubstring = s.slice(start, end + 1);

			if (
				minSubstring === "" ||
				currentSubstring.length < minSubstring.length ||
				(currentSubstring.length === minSubstring.length && currentSubstring < minSubstring)
			) {
				minSubstring = currentSubstring;
			}

			if (s[start] === "1") onesCount--;
			start++;
		}
	}

	return minSubstring;
}
