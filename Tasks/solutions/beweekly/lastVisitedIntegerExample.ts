function findLastVisitedIntegers(words: string[]): number[] {
  const result: number[] = [];
  const nums: number[] = [];
  let consecutivePrevCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "prev") {
      const lastVisitedIndex = Math.max(nums.length - consecutivePrevCount - 1, -1);
      result.push(lastVisitedIndex >= 0 ? nums[lastVisitedIndex] : -1);
      consecutivePrevCount++;
    } else {
      const num = parseInt(words[i]);
      nums.push(num);
      result.push(num);
      consecutivePrevCount = 0;
    }
  }

  return result;
}

const words = ["1", "prev", "2", "prev", "prev"];
const lastVisitedIntegers = findLastVisitedIntegers(words);
console.log(lastVisitedIntegers);
