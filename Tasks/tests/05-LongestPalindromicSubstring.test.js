import { beforeAll, describe, expect, test } from "bun:test";
import { longestPalindromisSubstring } from "../solutions/05/05-longestPalindromisSubstring";

describe("Leetcode tests", () => {
	let case1;
	let case2;
	beforeAll(() => {
		case1 = "babad";
		case2 = "cbbd";
	});
	test("add case babad", () => {
		expect(longestPalindromisSubstring(case1)).toBe("bab");
	});
	test("add case cbbd", () => {
		expect(longestPalindromisSubstring(case2)).toBe("bb");
	});
});

describe("my tests", () => {
	let case1;
	beforeAll(() => {
		case1 = "abbaddsdr";
	});
	test("add case1 abbaddsdr", () => {
		expect(longestPalindromisSubstring(case1)).toBe("abba");
	});
});
