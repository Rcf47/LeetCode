import { beforeAll, describe, expect, test } from "bun:test";
import { threeSum } from "../solutions/15/15-3SumExample";

describe("leetcode tests", () => {
	let case1;
	let case2;
	let case3;
	let case4;
	beforeAll(() => {
		case1 = [-1, 0, 1, 2, -1, -4];
		case2 = [0, 1, 1];
		case3 = [0, 0, 0];
		case4 = [0, 0, 0, 0];
	});
	test("add case1", () => {
		expect(threeSum(case1)).toEqual([
			[-1, -1, 2],
			[-1, 0, 1],
		]);
	});
	test("add case2", () => {
		expect(threeSum(case2)).toEqual([]);
	});
	test("add case3", () => {
		expect(threeSum(case3)).toEqual([[0, 0, 0]]);
	});
	test("add case4", () => {
		expect(threeSum(case4)).toEqual([[0, 0, 0]]);
	});
});
