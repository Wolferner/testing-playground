export const delay = (callback: () => {}, time: number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(callback());
		}, time);
	});
};

delay(() => 5 + 5, 2000).then(data => console.log(data));
