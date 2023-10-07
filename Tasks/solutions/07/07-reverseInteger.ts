export function reverse(x: number): number {
	let result;
	if (x < 0) {
		x = +x.toString().slice(1);
		result = -reverseNum(x);
		if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
			return 0;
		}
		return result;
	}
	const reverseArr = reverseNum(x);
	result = reverseArr;
	if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
		return 0;
	}
	return result;
}

function reverseNum(x: number): number {
	const numString = x.toString().split("").reverse().join("");
	return +numString;
}

let case1 = -120;

console.log(reverse(case1));
