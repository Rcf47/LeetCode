//not working for bigNumber
export function plusOne(digits: number[]): number[] {
	const number = BigInt(digits.join("")) + BigInt(1);
	const stringResult = String(number).split("");
	const numberResult = stringResult.map(Number);
	return numberResult;
}
