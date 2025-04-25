import { Handler } from 'aws-lambda';
import Decimal from 'decimal.js';

import { jsonParseWithDecimal } from 'shared-utility/json';


type CalculationEventBody = {
	multiplicand: Decimal;
	multiplicator: Decimal;
};

export const handler: Handler = async event => {
	const { multiplicand, multiplicator } = jsonParseWithDecimal(event.body) as CalculationEventBody;

	return multiplicand.times(multiplicator).toString();
};