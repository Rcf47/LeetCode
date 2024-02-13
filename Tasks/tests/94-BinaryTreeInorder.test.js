import { beforeAll, describe, expect, test } from "bun:test";
import { inorderTraversal } from "../solutions/94/94-BinaryTreeInorder";

describe("leetcode tests", () => {
	let case1;
	let case2;
	beforeAll(() => {
		case1 = [1, null, 3, 2];
		case2 = [];
	});
	test("add case1 with ", () => {
		expect(inorderTraversal(case1)).toEqual([1, 3, 2]);
	});
	test("add case2 with ", () => {
		expect(inorderTraversal(case2)).toEqual([]);
	});
});
