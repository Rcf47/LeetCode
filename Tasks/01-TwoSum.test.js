import { twoSum } from "./01-TwoSum.js"

describe("check two sum", () => {
  let nums
  let nums1
  let nums2
  let target
  let target1
  let target2

  beforeAll(() => {
    nums = [2, 7, 11, 15]
    target = 9
    nums1 = [3, 2, 4]
    target1 = 6
    nums2 = [3, 3]
    target2 = 6
  })

  test('with array [2, 7 , 11, 15]', () => {
    expect(twoSum(nums, target)).toStrictEqual([0, 1])
  })
  test('with array [3, 2, 4]', () => {
    expect(twoSum(nums1, target1)).toStrictEqual([1, 2])
  })
  test('with array [3, 3 , 3]', () => {
    expect(twoSum(nums2, target2)).toStrictEqual([0, 1])
  })
})
