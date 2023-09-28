export function strStr(haystack: string, needle: string): number {
	let h = 0,
		n = 0;
	while (h < haystack.length && n < needle.length) {
		if (haystack[h] === needle[n]) {
			h++;
			n++;
		} else {
			h = h - n + 1;
			n = 0;
		}
		if (n === needle.length) return h - n;
	}
	return -1;
}
