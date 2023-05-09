function arraySign(nums: number[]): number {
  let productOfNum: number = nums.reduce((acc: number, item: number) => acc * item, 1)
  if (productOfNum > 0) {
    return 1
  }
  if (productOfNum < 0) {
    return -1
  }
  return 0
};
