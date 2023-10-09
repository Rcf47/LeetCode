export function mySqrt(x: number): number {
	if (x <= 3) {
		return 1;
	}
	let result = 1;
	let center: number = 0;
	let start = 0;
	let end = x;
	let iteration = 0;
	while (center ** 2 !== x) {
		center = Math.floor(start + end) / 2;
		result = center ** 2;
		if (result < x) {
			end = center - 1;
		} else if (result > x) {
			start = center + 1;
		} else {
			return Math.floor(center);
		}
		iteration++;
		if (iteration > 20) {
			break;
		}
	}
	return Math.floor(center);
}

console.log(mySqrt(8));
