export function lastVisitedInteger(words: string): number[] {
  let prevCounter = 0
  let numCounter = 0
  let result = []
  for (let i = 0; i < words.length; i++) {
    const value = words[i]
    if (value === "prev") {
      prevCounter++
      if (!words[i - prevCounter - numCounter]) {
        result.push(-1)
        break
      }
      result.push(words[i - prevCounter - numCounter])
      numCounter++
    }

  }
  return result
}

let case1 = [1, 2, "prev", "prev", "prev"]
let case2 = [1, "prev", 2, "prev", "prev"]
console.log(lastVisitedInteger(case2))

export function lastVisitedInteger2(words: string): number[] {
  let prevBeforeCount = 0
  let nums = []
  let result = []
  for (let i = 0; i < words.length; i++) {
    const value = words[i];
    if (+value) {
      nums.push(value)
      prevBeforeCount = -1
    }
    if (value === "prev") {
      prevBeforeCount++
      if (nums.reverse()[prevBeforeCount]) {
        result.push(nums[prevBeforeCount])
      } else {
        result.push(-1)
      }
    }
  }
  return result
}
