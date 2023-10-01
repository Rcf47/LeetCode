import { beforeAll, describe, expect, test } from "bun:test";
import { plusOne } from "../solutions/66/66-plusOne.ts";

describe("Leetcode test", () => {
	let example1;
	let example2;
	let example3;
	let example4;
	beforeAll(() => {
		example1 = [1, 2, 3];
		example2 = [4, 3, 2, 1];
		example3 = [9];
		example4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
	});
	test("add 123 represent", () => {
		expect(plusOne(example1)).toEqual([1, 2, 4]);
	});
	test("add 4321 represent", () => {
		expect(plusOne(example2)).toEqual([4, 3, 2, 2]);
	});
	test("add 9 represent", () => {
		expect(plusOne(example3)).toEqual([1, 0]);
	});
	test("add hard test represent", () => {
		expect(plusOne(example4)).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
	});
});
