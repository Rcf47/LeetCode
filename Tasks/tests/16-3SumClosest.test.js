import { beforeAll, describe, expect, test } from "bun:test";
import { threeSumClosest } from "../solutions/16/16-3SumClosestExample";

describe("leetcode test", () => {
	let case1;
	let case2;
	let target1;
	let target2;
	let case3;
	let target3;
	let case4;
	let target4;
	beforeAll(() => {
		case1 = [-1, 2, 1, -4];
		target1 = 1;
		case2 = [0, 0, 0];
		target2 = 1;
		case3 = [1, 1, 1, 0];
		target3 = -100;
		case4 = [4, 0, 5, -5, 3, 3, 0, -4, -5];
		target4 = -2;
	});
	test("add case1 target1", () => {
		expect(threeSumClosest(case1, target1)).toBe(2);
	});
	test("add case2 target2", () => {
		expect(threeSumClosest(case2, target2)).toBe(0);
	});
	test("add case3 target3", () => {
		expect(threeSumClosest(case3, target3)).toBe(2);
	});
	test("add case4 target4", () => {
		expect(threeSumClosest(case4, target4)).toBe(-2);
	});
});
