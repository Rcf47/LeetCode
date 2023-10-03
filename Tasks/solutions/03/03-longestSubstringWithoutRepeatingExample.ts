export function lengthOfLongestSubstring(s: string): number {
	let maxLength = 0;
	let start = 0;
	const charIndexMap: Record<string, number> = {};

	for (let end = 0; end < s.length; end++) {
		const char = s[end];

		if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
			// Если символ уже встречался и его индекс больше или равен началу текущей подстроки
			start = charIndexMap[char] + 1;
		}

		charIndexMap[char] = end; // Обновляем индекс символа
		const currentLength = end - start + 1;
		maxLength = Math.max(maxLength, currentLength);
	}

	return maxLength;
}
