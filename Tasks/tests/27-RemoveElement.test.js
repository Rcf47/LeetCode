import { beforeAll, describe, expect, test } from "bun:test";
import { removeElements } from "../solutions/27/anotherSolututin.ts";

describe("case from leetcode", () => {
	let case1;
	let val1;
	let case2;
	let val2;
	beforeAll(() => {
		case1 = [3, 2, 2, 3];
		val1 = 3;
		case2 = [0, 1, 2, 2, 3, 0, 4, 2];
		val2 = 2;
	});
	test("test [3, 2, 2, 3 ] with val = 3", () => {
		expect(removeElements(case1, val1)).toBe(2);
	});
	test("test [0, 1, 2, 2, 3, 0, 4, 2] with val = 2", () => {
		expect(removeElements(case2, val2)).toBe(5);
	});
});
