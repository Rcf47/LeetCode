import { beforeAll, describe, expect, test } from "bun:test";
import { romanToInt } from "../solutions/13/romanInteger";

describe("Roman Integer", () => {
  let caseIII;
  let caseLVIII;
  let caseMCMXCIV;
  beforeAll(() => {
    caseIII = "III";
    caseLVIII = "LVIII";
    caseMCMXCIV = "MCMXCIV";
  });
  test("test case III from leetoce", () => {
    expect(romanToInt(caseIII)).toBe(3);
  });
  test("test case LVIII from leetcode", () => {
    expect(romanToInt(caseLVIII)).toBe(58);
  });
  test("test case MCMXCIV from leetcode", () => {
    expect(romanToInt(caseMCMXCIV)).toBe(1994);
  });
});
