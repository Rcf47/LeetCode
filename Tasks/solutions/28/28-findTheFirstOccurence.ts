//my wrong solution
export function strStr(haystack: string, needle: string): number {
	if (haystack.length < needle.length) {
		return -1;
	}
	let haystackPointer = 0;
	let needlePointer = 0;
	let firstOccurence = -1;
	while (haystackPointer < haystack.length) {
		if (haystack[haystackPointer] === needle[needlePointer]) {
			if (firstOccurence === -1) {
				firstOccurence = haystackPointer;
			}
			needlePointer++;
		} else {
			firstOccurence = -1;
			needlePointer = 0;
		}
		if (needlePointer === needle.length) {
			return firstOccurence;
		}
		haystackPointer++;
	}
	return firstOccurence;
}

const haystack = "sunvadmeherevadim";
const needle = "vadim";
console.log(strStr(haystack, needle));
