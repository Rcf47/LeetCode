export function lengthOfLastWord(s: string): number {
	const stringWithoutSpaces = s.trim();
	let length = 0;
	for (let i = stringWithoutSpaces.length - 1; i >= 0; i--) {
		if (stringWithoutSpaces.charCodeAt(i) === 32) {
			return length;
		}
		length++;
	}
	return stringWithoutSpaces.length;
}
