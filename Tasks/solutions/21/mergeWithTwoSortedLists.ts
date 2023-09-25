//  Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	const result = [];
	let pointer1 = 0;
	let pointer2 = 0;
	while (pointer1 < list1.length && pointer2 < list2.length) {
		if (list1[pointer1] < list2[pointer2]) {
			result.push(list1[pointer1]);
			pointer1++;
		} else {
			result.push(list2[pointer2]);
			pointer2++;
		}
	}
	return result.concat(list1.slice(pointer1)).concat(list2.slice(pointer2));
}
