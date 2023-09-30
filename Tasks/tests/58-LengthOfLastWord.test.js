import { beforeAll, describe, expect, test } from "bun:test";
import { lengthOfLastWord } from "../solutions/58/58-lengthOfLastWord";

describe("Length of last word", () => {
	let case1;
	let case2;
	let case3;
	beforeAll(() => {
		case1 = "Hello world";
		case2 = "   fly me   to   the moon  ";
		case3 = "luffy is still joyboy";
	});
	test("check hello world case should return 5", () => {
		expect(lengthOfLastWord(case1)).toBe(5);
	});
	test("check case with spaces should return 4", () => {
		expect(lengthOfLastWord(case2)).toBe(4);
	});
	test("check case with joyboy last word should return 6", () => {
		expect(lengthOfLastWord(case3)).toBe(6);
	});
});
