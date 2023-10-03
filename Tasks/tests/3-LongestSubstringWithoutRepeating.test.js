import { beforeAll, describe, expect, test } from "bun:test";
import { lengthOfLongestSubstring } from "../solutions/03/03-longestSubstringWithoutRepeatingExample";

describe("Tests from leetcode", () => {
	let case1;
	let case2;
	let case3;
	beforeAll(() => {
		case1 = "abcabcbb";
		case2 = "bbbbb";
		case3 = "pwwkew";
	});
	test("case abc substring", () => {
		expect(lengthOfLongestSubstring(case1)).toBe(3);
	});
	test("case b substring", () => {
		expect(lengthOfLongestSubstring(case2)).toBe(1);
	});
	test("case wke substring and pwke string", () => {
		expect(lengthOfLongestSubstring(case3)).toBe(3);
	});
});
