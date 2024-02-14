import { beforeAll, describe, expect, test } from "bun:test";
import { isSameTree } from "../solutions/100-Sametree";

describe("leetcode tests", () => {
	let case1;
	let case2;
	let case3;
	let case4;
	beforeAll(() => {
		case1 = [1, 2, 3];
		case2 = [1, 2, 3];
		case3 = [1, 2];
		case4 = [1, null, 2];
	});
	test("add case1 with ", () => {
		expect(isSameTree(case1, case2)).toBeTrue();
	});
	test("add case2 with ", () => {
		expect(isSameTree(case3, case4)).toBeFalse();
	});
});
