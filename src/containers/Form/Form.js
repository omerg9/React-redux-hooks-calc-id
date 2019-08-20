import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form as LibForm } from 'semantic-ui-react';

import { inputs } from '../../config';
import actions from '../../redux/actions';
import { selectNums, selectErrors } from '../../redux/selectors';
import { validateNum } from '../../utils/validates';

import { FormInput } from '../../components/FormInput/FormInput';
import { Wrapper } from './Form.style';

const { Group } = LibForm;

const Form = () => {

	const refs = {
		num1: useRef(null),
		num2: useRef(null),
		num3: useRef(null),
		num4: useRef(null),
		num5: useRef(null),
		num6: useRef(null),
		num7: useRef(null),
		num8: useRef(null),
	}

	const dispatch = useDispatch();
	const nums = useSelector(selectNums);
	const errors = useSelector(selectErrors);

	const goNext = (name, value) => {
		const num = Number(name.replace('num', ''));
		const prevNum = (num > 1) ? num - 1 : 1;
		const nextNum = (num < 8) ? num + 1 : 8;

		const nextName = value ? `num${nextNum}` : `num${prevNum}`;
		refs[nextName].current.focus();
	};

	const onChange = ({ target }) => {
		const { name, value } = target;

		const resValue = (value && value.length > 0) ? value.split('').reverse()[0] : '';
		dispatch(actions.changeErr(name, ''));
		dispatch(actions.changeNum(name, resValue));

		if (resValue) {
			const error = validateNum(resValue);
			if (error) {
				dispatch(actions.changeErr(name, error));
				return;
			}
		}

		goNext(name, value);
	};

	const onKeyDown = ( { target, keyCode }) => {
		if (keyCode !== 8) {
			return;
		}

		const { name } = target;
		if (!nums[name]) {
			goNext(name, false);
		}
	}

	const formInputs = inputs.map(i => {
		const name = `num${i}`;
		return (
			<FormInput
				ref={refs[name]}
				key={name}
				name={name}
				value={nums[name]}
				error={errors[name]}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		);
	});

	return (
		<Wrapper>
			<LibForm>
				<Group>
					{formInputs}
				</Group>
		</LibForm>
		</Wrapper>
	);
};

export default Form;
