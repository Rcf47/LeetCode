import { beforeAll, describe, expect, test } from "bun:test";
import { longestCommonPrefix } from "../solutions/14/14-LongestCommonPrefix";

describe("Longest common prefix", () => {
	let case1;
	let case2;
	let case3;
	beforeAll(() => {
		case1 = ["flower", "flow", "flight"];
		case2 = ["dog", "racecar", "car"];
		case3 = ["Vadim", "Vanish", "Varchar"];
	});
	test("check case 1 with return fl prefix", () => {
		expect(longestCommonPrefix(case1)).toBe("fl");
	});
	test("check case 2 without return prefix", () => {
		expect(longestCommonPrefix(case2)).toBe("");
	});
	test("check case 3 with va prefix my test", () => {
		expect(longestCommonPrefix(case3)).toBe("Va");
	});
});
