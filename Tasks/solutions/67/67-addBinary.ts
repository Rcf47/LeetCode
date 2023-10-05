export function addBinary(a: string, b: string): string {
	const num1 = BigInt("0b" + a);
	const num2 = BigInt("0b" + b);
	const result = num1 + num2;
	return result.toString(2);
}
