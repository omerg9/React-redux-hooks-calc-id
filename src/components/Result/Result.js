import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { selectResult } from '../../redux/selectors';

import { Wrapper } from './Result.style';

const { Input } = Form;

const Result = () => {

	const result = useSelector(selectResult);

	return (
		<Wrapper>
			<Input
				name="result"
				className="result"
				value={result}
				readOnly
			/>
		</Wrapper>
	);
};

export default Result;
