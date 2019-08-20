import actions from './actions';

const initState = {
	nums: {
		num1: '',
		num2: '',
		num3: '',
		num4: '',
		num5: '',
		num6: '',
		num7: '',
		num8: '',
	},
	errors: {
		num1: '',
		num2: '',
		num3: '',
		num4: '',
		num5: '',
		num6: '',
		num7: '',
		num8: '',
	},
	result: '',
};

export default function reducer(state = initState, { type, payload }) {
	switch (type) {
		case actions.CHANGE_NUM: {
			const { name, value } = payload;
			return {
				...state,
				nums: {
					...state.nums,
					[name]: value,
				}
			}
		}
		case actions.CHANGE_ERR: {
			const { name, value } = payload;
			return {
				...state,
				errors: {
					...state.errors,
					[name]: value,
				}
			}
		}
		case actions.CHANGE_RES: {
			const { value } = payload;
			return {
				...state,
				result: value,
			}
		}
		default: {
			return state;
		}
	}
}
