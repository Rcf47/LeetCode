class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export function inorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];
	function traverse(node: TreeNode | null) {
		if (node) {
			traverse(node.left);
			result.push(node.val);
			traverse(node.right);
		}
	}
	traverse(root);
	return result;
}
