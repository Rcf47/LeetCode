import { beforeAll, describe, expect, test } from "bun:test";
import { isPalindrome } from "../solutions/09/09-PalindromeNumber";

describe("Palindrome number", () => {
  let case1;
  let case2;
  let case3;
  beforeAll(() => {
    case1 = 121;
    case2 = -121;
    case3 = 10;
  });
  test("test case1 121(true) from leetcode", () => {
    expect(isPalindrome(case1)).toBe(true);
  });
  test("test case2 -121(false) from leetcode", () => {
    expect(isPalindrome(case2)).toBe(false);
  });
  test("test case3 10(false) from leetcode", () => {
    expect(isPalindrome(case3)).toBe(false);
  });
});
