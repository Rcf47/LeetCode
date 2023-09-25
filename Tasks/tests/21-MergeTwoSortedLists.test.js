import { beforeAll, describe, expect, test } from "bun:test";
import { mergeTwoLists } from "../solutions/21/mergeWithTwoSortedLists";

describe("Two sorted list", () => {
	let list1;
	let list2;
	let list3;
	let list4;
	let list5;
	beforeAll(() => {
		list1 = [1, 2, 4];
		list2 = [1, 3, 4];
		list3 = [];
		list4 = [];
		list5 = [0];
	});
	test("merge with simple arr", () => {
		expect(mergeTwoLists(list1, list2)).toEqual([1, 1, 2, 3, 4, 4]);
	});
	test("merge with empty arr", () => {
		expect(mergeTwoLists(list3, list4)).toEqual([]);
	});
	test("merge with empty + not empty arr", () => {
		expect(mergeTwoLists(list3, list5)).toEqual([0]);
	});
});
