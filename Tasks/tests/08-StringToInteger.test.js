import { beforeAll, describe, expect, test } from "bun:test";
import { myAtoi } from "../solutions/08/08-stringToInteger";

describe("Leetcode tests", () => {
	let string1;
	let string2;
	let string3;
	let string4;
	beforeAll(() => {
		string1 = "42";
		string2 = "   -42";
		string3 = "4193 with words";
		string4 = "words and 987";
	});
	test("add 42 as a string", () => {
		expect(myAtoi(string1)).toBe(42);
	});
	test("add -42 with whitespaces", () => {
		expect(myAtoi(string2)).toBe(-42);
	});
	test("add 4193 with words", () => {
		expect(myAtoi(string3)).toBe(4193);
	});
	test("words and 987", () => {
		expect(myAtoi(string4)).toBe(987);
	});
});
