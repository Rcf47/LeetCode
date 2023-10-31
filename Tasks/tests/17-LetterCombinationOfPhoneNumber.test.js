import { beforeAll, describe, expect, test } from "bun:test";
import { letterCombinations } from "../solutions/17/17-LetterCombinationsOfPhoneNumber";

describe("from leetcode case", () => {
	let case1;
	let case2;
	let case3;
	let answer1;
	let answer2;
	let answer3;
	beforeAll(() => {
		case1 = "23";
		case2 = "";
		case3 = "2";
		answer1 = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
		answer2 = [];
		answer3 = ["a", "b", "c"];
	});
	test("add case 1 '23'", () => {
		expect(letterCombinations(case1)).toEqual(answer1);
	});
	test("add case 2 '' ", () => {
		expect(letterCombinations(case2)).toEqual(answer2);
	});
	test("add case3 '2'", () => {
		expect(letterCombinations(case3)).toEqual(answer3);
	});
});
