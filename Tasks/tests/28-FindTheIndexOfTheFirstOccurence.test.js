import { beforeAll, describe, expect, test } from "bun:test";
import { strStr } from "../solutions/28/findTheFirsOccurenceExample.ts";

describe("Leetcode test", () => {
	let str1;
	let str2;
	let str3;
	let str4;
	beforeAll(() => {
		str1 = "sadbutsad";
		str2 = "sad";
		str3 = "leetcode";
		str4 = "leeto";
	});
	test("add case1 with 0 return", () => {
		expect(strStr(str1, str2)).toBe(0);
	});
	test("add case2 with -1 return", () => {
		expect(strStr(str3, str4)).toBe(-1);
	});
});
describe("my tests", () => {
	let haystack;
	let needle;
	beforeAll(() => {
		haystack = "sunvadmeherevadim";
		needle = "vadim";
	});
	test("check vadim last part of string", () => {
		expect(strStr(haystack, needle)).toBe(12);
	});
});
