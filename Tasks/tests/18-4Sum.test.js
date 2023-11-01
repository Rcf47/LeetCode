import { beforeAll, describe, expect, test } from "bun:test";
import { fourSum } from "../solutions/18/18-4SumExample";

describe("leetcode example", () => {
	let case1;
	let target1;
	let answer1;
	let case2;
	let target2;
	let answer2;
	beforeAll(() => {
		case1 = [1, 0, -1, 0, -2, 2];
		target1 = 0;
		answer1 = [
			[-2, -1, 1, 2],
			[-2, 0, 0, 2],
			[-1, 0, 0, 1],
		];
		case2 = [2, 2, 2, 2, 2];
		target2 = 8;
		answer2 = [[2, 2, 2, 2]];
	});
	test("add case1 with target 0", () => {
		expect(fourSum(case1, target1)).toEqual(answer1);
	});
	test("add case2 with target 8", () => {
		expect(fourSum(case2, target2)).toEqual(answer2);
	});
});
