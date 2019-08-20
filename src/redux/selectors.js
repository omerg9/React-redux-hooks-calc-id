import { inputs } from '../config';

const selectNums = (state) => {
	return inputs.reduce((res, i) => {
		const name = `num${i}`;
		res[name] = state.nums[name];
		return res;
	}, {});
};

const selectErrors = (state) => {
	return inputs.reduce((res, i) => {
		const name = `num${i}`;
		res[name] = state.errors[name];
		return res;
	}, {});
};

const selectIsAllFilled = (state) => {
	const nums = selectNums(state);
	return Object.values(nums).every(num => Boolean(num));
};

const selectResult = (state) => {
	return state.result;
}

export {
	selectNums,
	selectErrors,
	selectIsAllFilled,
	selectResult,
};
