export function isValid(s: string): boolean {
	interface BracketPairs {
		[key: string]: string;
	}
	const stack = [];
	const openBrackets = ["(", "[", "{"];
	const closeBrackets = [")", "]", "}"];
	const bracketPairs: BracketPairs = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let i = 0; i < s.length; i++) {
		const currentChar: string = s[i];
		if (openBrackets.includes(currentChar)) {
			stack.push(currentChar);
		} else if (closeBrackets.includes(currentChar)) {
			if (stack.length === 0 || bracketPairs[currentChar] !== stack.pop()) {
				return false;
			}
		}
	}

	return stack.length === 0;
}
