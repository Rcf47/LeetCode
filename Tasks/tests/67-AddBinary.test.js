import { beforeAll, describe, expect, test } from "bun:test";
import { addBinary } from "../solutions/67/67-addBinary";

describe("Leetcode tests", () => {
	let case1;
	let case2;
	let case3;
	let case4;
	let case5;
	let case6;
	beforeAll(() => {
		case1 = "11";
		case2 = "1";
		case3 = "1010";
		case4 = "1011";
		case5 =
			"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
		case6 =
			"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
	});
	test("add 11 and 1 test", () => {
		expect(addBinary(case1, case2)).toBe("100");
	});
	test("add 1010 1011", () => {
		expect(addBinary(case3, case4)).toBe("10101");
	});
	test("add bigInt test", () => {
		expect(addBinary(case5, case6)).toBe(
			"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
		);
	});
});
