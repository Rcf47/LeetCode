export function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = []
  for (let num of nums) {
    let checkNumber: number = target - num
    if (nums.find(item => item === checkNumber)) {
      let index1 = nums.indexOf(num)
      let index2 = nums.indexOf(checkNumber)
      answer.push(index1)
      answer.push(index2)
      return answer
    }
  }
  return answer
};
