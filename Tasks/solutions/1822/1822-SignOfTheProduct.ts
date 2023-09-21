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

/* function signFunc(x: number): number {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
}

function arraySign(nums: number[]): number {
  let product = 1;
  for (let num of nums) {
    product *= num;
  }
  return signFunc(product);
}
*/
