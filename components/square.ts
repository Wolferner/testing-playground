export const square = (a: number) => {
	if (a === 1) {
		return 1;
	}
	const result = Math.pow(a, 2);
	return result;
};
