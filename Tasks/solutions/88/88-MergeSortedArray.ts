export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	nums1 = nums1.slice(0, m);
	nums2 = nums2.slice(0, n);
	nums1 = nums1.concat(nums2);
	nums1 = nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
