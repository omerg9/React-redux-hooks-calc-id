import { multipliers } from '../config';
import { calcID, isEqual } from '../utils/calculates';

import actions from './actions';
import { selectNums, selectIsAllFilled } from './selectors';

let cachedNums = {};

const onNumsUpdate = (state, dispatch) => {
	const isAllFilled = selectIsAllFilled(state);
	if (!isAllFilled) {
		if (state.result) {
			dispatch(actions.changeRes(''));
		}
		return;
	};

	const nums = selectNums(state);
	if (isEqual(nums, cachedNums)) {
		return;
	}

	cachedNums = { ...nums };

	const rawNums = Object.values(nums)
		.map(num => Number(num))
		.filter(num => !Number.isNaN(num));

	const result = rawNums.length === 8 ? calcID(rawNums, multipliers) : '';

	dispatch(actions.changeRes(result));
};

export {
	onNumsUpdate,
};
