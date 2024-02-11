import { beforeAll, describe, expect, test } from "bun:test";
import { merge } from "../solutions/88/88-MergeSortedArray";

describe("leetcode tests", () => {
	let nums1;
	let nums2;
	let n;
	let m;
	let nums3;
	let nums4;
	let o;
	let p;
	beforeAll(() => {
		nums1 = [1, 2, 3, 0, 0, 0];
		nums2 = [2, 5, 6];
		n = 3;
		m = 3;
		nums3 = [1];
		nums4 = [];
		o = 1;
		p = 0;
	});
	test("add nums1 nums2 n m", () => {
		expect(merge(nums1, m, nums2, n)).toEqual([[1, 2, 2, 3, 5, 6]]);
	});
	test("add nums3 nums4 o p", () => {
		expect(merge(nums3, o, nums4, p)).toEqual([1]);
	});
});
