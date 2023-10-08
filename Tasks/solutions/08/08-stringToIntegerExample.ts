export function myAtoi(s: string): number {
	const INT_MAX = 2 ** 31 - 1;
	const INT_MIN = (-2) ** 31;

	const match = s.trim().match(/^(\-|\+)?\d+/);
	if (!match) {
		return 0;
	}

	let result = Number(match[0]);

	if (result > INT_MAX) {
		return INT_MAX;
	}

	if (result < INT_MIN) {
		return INT_MIN;
	}

	return result;
}
