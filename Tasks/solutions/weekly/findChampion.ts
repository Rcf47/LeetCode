function findChampion(grid: number[][]): number {
	const n = grid.length;
	let numberOneCount = 0;
	let maxOne = 0;
	let champion = 0;
	for (let i = 0; i < n; i++) {
		grid[i].forEach((el) => {
			if (el === 1) {
				numberOneCount++;
			}
		});
		if (numberOneCount > maxOne) {
			maxOne = numberOneCount;
			champion = i;
		}
		numberOneCount = 0;
	}
	return champion;
}
