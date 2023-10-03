class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const dummyHead = new ListNode(0);
	console.log(dummyHead);
	let p = l1,
		q = l2,
		curr = dummyHead;
	let carry = 0;
	while (p != null || q != null) {
		const x = p != null ? p.val : 0;
		const y = q != null ? q.val : 0;
		const sum = carry + x + y;
		carry = Math.floor(sum / 10);
		curr.next = new ListNode(sum % 10);
		curr = curr.next;
		if (p != null) p = p.next;
		if (q != null) q = q.next;
	}
	if (carry > 0) {
		curr.next = new ListNode(carry);
	}
	return dummyHead.next;
}

const case1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
const case2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
console.log(addTwoNumbers(case1, case2));
