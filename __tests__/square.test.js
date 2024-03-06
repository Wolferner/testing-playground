// import { expect, test } from '@jest/globals';
import { square } from '@/components/square';
import { afterEach, describe } from 'node:test';

describe('square', () => {
	test('square 1 to equal 1', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
