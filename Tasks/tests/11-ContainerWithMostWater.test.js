import { beforeAll, describe, expect, test } from "bun:test";
import { maxArea } from "../solutions/11/11-containerWithMostWater";

describe("leetcode case", () => {
  let case1;
  let case2;
  let case3;
  beforeAll(() => {
    case1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    case2 = [1, 1];
    case3 = [2, 3, 4, 5, 18, 17, 6];
  });
  test("case with 49 output", () => {
    expect(maxArea(case1)).toBe(49);
  });
  test("case with 1 output", () => {
    expect(maxArea(case2)).toBe(1);
  });
  test("wrong answer", () => {
    expect(maxArea(case3)).toBe(17);
  });
});
