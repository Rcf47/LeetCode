export function myAtoi(s: string): number {
	const INT_MAX = 2 ** 31 - 1;
	const INT_MIN = (-2) ** 31;

	const stringWithoutSpaces = s.trim();

	let isNegative = false;
	let result = 0;

	for (let i = 0; i <= stringWithoutSpaces.length - 1; i++) {
		const char = stringWithoutSpaces[i];
		if (char === "-" && Number.isInteger(+stringWithoutSpaces[i + 1])) {
			isNegative = true;
		}
		if (Number.isInteger(+char) && char !== " ") {
			result = result * 10 + +char;
		}
	}
	if (isNegative) {
		result = -result;
	}
	if (result > INT_MAX) {
		return INT_MAX;
	}
	if (result < INT_MIN) {
		return INT_MIN;
	}
	return result;
}

const string1 = "42";
const string2 = "4193 with words";
const string3 = "words and 987";
console.log(myAtoi(string3));
