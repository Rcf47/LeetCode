import { beforeAll, describe, expect, test } from "bun:test";
import { addTwoNumbers, ListNode } from "../solutions/02/02-addTwoNumberExample";

describe("Leetcode checker", () => {
	let case1;
	let case2;
	let case3;
	let case4;
	let case5;
	let case6;
	beforeAll(() => {
		case1 = [2, 4, 3];
		case2 = [5, 6, 4];
		case3 = [0];
		case4 = [0];
		case5 = [9, 9, 9, 9, 9, 9, 9];
		case6 = [9, 9, 9, 9];
	});
	test("test case1 with two simple arrays", () => {
		expect(addTwoNumbers(case1, case2)).toEqual([7, 0, 8]);
	});
	test("test with two null array", () => {
		expect(addTwoNumbers(case3, case4)).toEqual([0]);
	});
	test("test with 9999999 and 9999 arrays", () => {
		expect(addTwoNumbers(case5, case6)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
	});
});
