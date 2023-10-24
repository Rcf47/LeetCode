import { beforeAll, describe, expect, test, } from "bun:test"
import { climbStairs } from "../solutions/70/70-ClimbingStairs"

describe("test from leetcode", () => {
  let n2
  let n3
  beforeAll(() => {
    n2 = 2
    n3 = 3
  })
  test("add n = 2", () => {
    expect(climbStairs(n2)).toBe(2)
  });
  test("add n = 3", () => {
    expect(climbStairs(n3)).toBe(3)
  });
})
