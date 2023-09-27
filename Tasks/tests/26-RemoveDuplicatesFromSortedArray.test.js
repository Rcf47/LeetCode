import { beforeAll, describe, expect, test } from "bun:test";
import { removeDuplicates } from "../solutions/26/removeDuplicatesFromSoredArray";

describe("Remove duplicates from sorted array", () => {
	let shortArray;
	let longArray;
	beforeAll(() => {
		shortArray = [1, 1, 2];
		longArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
	});
	test("check short array 1, 1, 2", () => {
		expect(removeDuplicates(shortArray)).toBe(2);
	});
	test("check long array 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4", () => {
		expect(removeDuplicates(longArray)).toBe(5);
	});
});
