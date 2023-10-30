export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxAreaWater = 0;
  let areaWater;
  while (left < right) {
    const width = right - left;
    const lowerHeight = Math.min(height[left], height[right]);
    areaWater = lowerHeight * width;
    if (areaWater > maxAreaWater) {
      maxAreaWater = areaWater;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxAreaWater;
}

const case1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const case2 = [2, 3, 4, 5, 18, 17, 6];
console.log(maxArea(case2));
