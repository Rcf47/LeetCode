export function removeElements(nums: number[], val: number): number {
	const result = nums.filter((element) => element !== val);
	return result.length;
}
