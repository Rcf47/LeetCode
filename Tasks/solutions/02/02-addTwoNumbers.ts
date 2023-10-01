class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

//wrong solution
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const result: ListNode = new ListNode();
	let oneMemory = 0;
	let sum: number;
	while (l1 && l2) {
		if (!oneMemory) {
			sum = l1.val + l2.val;
			if (sum > 9) {
				oneMemory = 1;
				const value: string = String(sum.slice(1));
				result.val = Number(value);
			}
		}
	}
}
