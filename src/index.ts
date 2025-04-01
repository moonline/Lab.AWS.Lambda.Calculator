import { Handler } from 'aws-lambda';
import { jsonParseWithDecimal } from 'shared-utility/json';


export const handler: Handler = async event => {
	const { multiplicand, multiplicator } = jsonParseWithDecimal(event.body);
	return multiplicand.times(multiplicator).toString();
};