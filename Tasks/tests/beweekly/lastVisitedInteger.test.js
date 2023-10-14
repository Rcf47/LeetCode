import { beforeAll, describe, expect, test, } from "bun:test"
import { lastVisitedInteger } from "../../solutions/beweekly/lastVisitedInteger"

describe("leetcode example", () => {
  let case1
  let case2
  beforeAll(() => {
    case1 = [1, 2, "prev", "prev", "prev"]
    case2 = [1, "prev", 2, "prev", "prev"]
  })
  test("add case 1 2 prev prev prev", () => {
    expect(lastVisitedInteger(case1)).toEqual([2, 1, -1])
  });
  test("add case 1 prev 2 prev prev", () => {
    expect(lastVisitedInteger(case2)).toEqual([1, 2, 1])
  });
})
