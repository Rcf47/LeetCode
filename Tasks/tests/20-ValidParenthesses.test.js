import { beforeAll, describe, expect, test } from "bun:test";
import { isValid } from "../solutions/20/validParentheses";

describe("Valid parenthesses", () => {
	let case1;
	let case2;
	let case3;
	beforeAll(() => {
		case1 = "()";
		case2 = "()[]{}";
		case3 = "(]";
	});
	test("test () must be true", () => {
		expect(isValid(case1)).toBe(true);
	});
	test("test ()[]{} must be true", () => {
		expect(isValid(case2)).toBe(true);
	});
	test("test (] must be false", () => {
		expect(isValid(case3)).toBe(false);
	});
});
