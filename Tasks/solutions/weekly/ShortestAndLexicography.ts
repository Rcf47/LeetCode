function shortestBeautifulSubstring(s: string, k: number): string {
	if (k === 0) {
		return "";
	}
	let count = 1;
	let beaty = "";
	let st = 0;
	let e = 1;
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (char === "1") {
			if (count === k) {
				beaty = s.substring(st, e + 1);
				count = 1;
				st = i;
				break;
			} else {
				count++;
				e++;
			}
		}
	}
	return beaty;
}
