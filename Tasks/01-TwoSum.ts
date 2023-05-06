export function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = []
  for (let num of nums) {
    let checkNumber: number = target - num
    if (nums.find((item, index) => item === checkNumber && index !== nums.indexOf(num))) {
      let index1 = nums.indexOf(num)
      let index2 = nums.indexOf(checkNumber)
      answer.push(index1)
      answer.push(index2)
      return answer
    }
  }
  return answer
};

export function twoSum1(nums: number[], target: number): number[] {
  let answer: number[] = []
  for (let i = 0; i <= nums.length; i++) {
    let checkNumber = target - nums[i]
    if (nums.find((item, index) => item === checkNumber && index !== i)) {
      let index1 = i
      let index2 = nums.findIndex((item, index) => item === checkNumber && index !== i)
      answer.push(index1)
      answer.push(index2)
      return answer
    }
  }


  return answer
};
