import axios from 'axios';

export const fetchData = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);

		const userIds = response.data.map(user => user.id);
		console.log(userIds);
		return userIds;
	} catch (e) {
		console.log(e.message);
	}
};

fetchData();
