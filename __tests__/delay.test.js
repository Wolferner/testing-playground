import { delay } from '@/components/delay';

describe('delay', () => {
	test('delay', async () => {
		const sum = await delay(() => 5 + 5, 2000);
		expect(sum).toBe(10);
	});
});
