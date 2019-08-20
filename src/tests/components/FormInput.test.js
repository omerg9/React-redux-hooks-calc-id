import React, { createRef } from 'react';

import { shallow, mount } from '../enzyme';
import FormInput from '../../components/FormInput';

describe('FormInput tests', () => {

	it('renders FormInput', () => {
		const wrapper = shallow(
			<FormInput
				ref={createRef()}
			/>
		);

		expect(wrapper.find('.field')).toBeDefined();
	});

	it('renders FormInput with props', () => {
		const wrapper = mount(
			<FormInput
				ref={createRef()}
				name="num"
				value={8}
				onChange={() => {}}
			/>
		);

		expect(wrapper.prop('name')).toEqual('num');
		expect(wrapper.prop('value')).toEqual(8);
		expect(wrapper.prop('onChange')).toBeInstanceOf(Function);
	});

	it('renders FormInput with error', () => {
		const wrapper = mount(
			<FormInput
				ref={createRef()}
				name="num"
				value={8}
				onChange={() => {}}
				error="Must be a number"
			/>
		);

		expect(wrapper.find('.error')).toBeDefined();
	});
});
