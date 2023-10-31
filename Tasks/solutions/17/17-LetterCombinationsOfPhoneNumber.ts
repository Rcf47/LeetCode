export function letterCombinations(digits: string): string[] {
	const letters = {
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"],
	};
	if (digits.length === 0) {
		return [];
	}
	const combinations: string[] = [""];
	for (const digit of digits) {
		const lettersToCombine: string[] = letters[digit];
		const newCombination: string[] = [];
		for (const letter of lettersToCombine) {
			for (const combination of combinations) {
				newCombination.push(combination + letter);
			}
		}
		combinations.length = 0;
		combinations.push(...newCombination);
	}
	return combinations;
}

const digits = "23";
const result = letterCombinations(digits);
console.log(result);
