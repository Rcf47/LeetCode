import { beforeAll, describe, expect, test } from "bun:test";
import { reverse } from "../solutions/07/07-reverseInteger";

describe("Leetcode tests", () => {
	let case1;
	let case2;
	let case3;
	beforeAll(() => {
		case1 = 123;
		case2 = -123;
		case3 = 120;
	});
	test("add 123 case", () => {
		expect(reverse(case1)).toBe(321);
	});
	test("add -123 case", () => {
		expect(reverse(case2)).toBe(-321);
	});
	test("add 120 case", () => {
		expect(reverse(case3)).toBe(21);
	});
});
