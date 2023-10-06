import { beforeAll, describe, expect, test } from "bun:test";
import { convert } from "../solutions/06/06-zigzagConversionsExample";

describe("Leetcode test", () => {
	let s;
	let numRows;
	let numRows2;
	beforeAll(() => {
		s = "PAYPALISHIRING";
		numRows = 3;
		numRows2 = 4;
	});
	test("add PAYPALISHIRING and numrows 3", () => {
		expect(convert(s, numRows)).toBe("PAHNAPLSIIGYIR");
	});
	test("add PAYPALISHIRING nad numrows 4", () => {
		expect(convert(s, numRows2)).toBe("PINALSIGYAHRPI");
	});
});
