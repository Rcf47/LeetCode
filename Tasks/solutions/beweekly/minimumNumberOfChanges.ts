function minChanges(s: string): number {
	const n = s.length;
	let count = 0;
	for (let i = 0; i < n - 1; i = i + 2) {
		if (s[i] !== s[i + 1]) {
			count++;
		}
	}
	return count;
}
