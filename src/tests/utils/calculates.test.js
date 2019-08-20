import { multipliers } from '../../config';
import { calcID, isEqual } from '../../utils/calculates';

describe('Utils test', () => {

	it('calcID', () => {

		expect(calcID([8,2,6,9,4,6,3,1], multipliers)).toEqual(1);
		expect(calcID([6,3,4,9,5,7,4,4], multipliers)).toEqual(3);
		expect(calcID([8,8,4,6,1,9,3,3], multipliers)).toEqual(9);
	});

	it('isEqual', () => {

		const a = { id: 2, name: 'One' };
		const b = { id: 2, name: 'One' };
		const c = { id: '2', name: 'One' };

		expect(isEqual(a, b)).toBeTruthy();
		expect(isEqual(a, c)).toBeFalsy();
	})
})
