import { beforeAll, describe, expect, test } from "bun:test";
import { mySqrt } from "../solutions/69/69-sqrtExample";

describe("LeetCodeTest", () => {
	let case1;
	let case2;
	beforeAll(() => {
		case1 = 4;
		case2 = 8;
	});
	test("root from 4", () => {
		expect(mySqrt(case1)).toBe(2);
	});
	test("root from 8", () => {
		expect(mySqrt(case2)).toBe(2);
	});
});
