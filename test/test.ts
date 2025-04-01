import { describe, it } from 'mocha';
import { expect } from 'chai';
import Decimal from 'decimal.js';

import { handler } from '../src/index';


describe('Calculator', async () => {
	describe('Invoke handler', async () => {
		it('Should multiply numbers correctly', async () => {
			const testEvent = {
				body: JSON.stringify({ multiplicand: 3, multiplicator: 5 })
			};

			const response = await handler(testEvent);

			expect(response).to.equal('15');
		});

		it('Should multiply Decimals correctly', async () => {
			const multiplicand = new Decimal('12345678901234567890.5566778899');
			const multiplicator = new Decimal('987654.998877665544332211')
			const testEvent = {
				body: `{"multiplicand":${multiplicand.toString()}, "multiplicator":${multiplicator.toString()}}`
			}
			const expectedResult = multiplicand.times(multiplicator).toString();

			const response = await handler(testEvent);

			expect(response).to.equal(expectedResult);
		});
	});
});
