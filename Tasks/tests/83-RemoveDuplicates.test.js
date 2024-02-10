import { beforeAll, describe, expect, test } from "bun:test";
import { deleteDuplicates } from "../solutions/83/83-RemoveDuplicates";

describe("leetcode tests", () => {
	let case1;
	let case2;
	beforeAll(() => {
		case1 = [1, 1, 2];
		case2 = [1, 1, 2, 3, 3];
	});
	test("add case1 with ", () => {
		expect(deleteDuplicates(case1)).toEqual([1, 2]);
	});
	test("add case2 with ", () => {
		expect(deleteDuplicates(case2)).toEqual([1, 2, 3]);
	});
});
