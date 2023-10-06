//not completed
export function convert(s: string, numRows: number): string[] {
	if (numRows <= 2) {
		return s;
	}
	const zig = numRows - 2;
	let arrColumn = [];
	let arrZag = [];
	let start = 0;
	let end;
	let zagend = 0;
	while (start < s.length) {
		end = start + numRows;
		arrColumn.push(s.slice(start, end));
		start = end;
		if (zagend < s.length) {
			zagend = start + zig;
		}
		arrZag.push(s.slice(start, zagend));
		start = zagend;
	}
	let columnWithZagArr = arrColumn.map(
		(el, index) =>
			(el = el.charAt(0) + el.at(-(zig + 1)) + arrZag.shift(0) + el.substring(el.length - 1))
	);
	return columnWithZagArr;
}

console.log(convert("PAYPALISHIRING", 3));
